/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { cssObj } from "@fuel-ui/css";
import { Box, Button, Heading } from "@fuel-ui/react";
import { factories } from "@verify/contract";
import type { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAccount, useContractRead } from "wagmi";
import { Layout } from "~/systems/Core";
import { useCreateLink } from "~/systems/CreateLink/hooks";
import { LinkList, SelectedLink } from "~/systems/Links";
import { withSessionProps } from "~/systems/Session";
import { LinkInput } from "~/systems/UI";

const Links = () => {
  const router = useRouter();
  const [selected, setSelected] = useState("");
  const { address } = useAccount();
  const { data, refetch } = useContractRead({
    addressOrName: process.env.NEXT_PUBLIC_CONTRACT_ID!,
    contractInterface: factories.Verify__factory.abi,
    functionName: "getContentList",
    args: [address],
  });
  const [url, setURL] = useState((router.query.url as string) || "");
  const { createLink, loading } = useCreateLink({
    async onCompleted(newContent) {
      setURL("");
      await refetch();
      setSelected(newContent.id);
    },
  });
  const contentList: any[] = (data as any) || [];

  useEffect(() => {
    if (!selected && Boolean(contentList.length)) {
      setSelected(contentList[0].id);
    }
  }, [contentList, selected]);

  function handleCreate() {
    createLink(url);
  }

  return (
    <Layout.Content>
      <Box css={styles.create}>
        <Heading as="h1" css={styles.heading}>
          Create Link
        </Heading>
        <LinkInput css={styles.input} value={url} onChange={setURL}>
          <Button
            color="blue"
            leftIcon="Plus"
            css={{ mr: "-8px" }}
            onPress={handleCreate}
            isLoading={loading}
            isDisabled={!url.length}
          >
            Create Link
          </Button>
        </LinkInput>
      </Box>
      <Box css={styles.content}>
        <LinkList
          links={contentList}
          onSelect={(short) => setSelected(short)}
        />
        {selected && (
          <SelectedLink
            link={contentList.find((item) => item.id === selected)}
          />
        )}
      </Box>
    </Layout.Content>
  );
};

Links.getPageLayout = Layout.getLayout({
  title: "Link",
});

const styles = {
  content: cssObj({
    display: "grid",
    gridTemplateColumns: "400px 1fr",
    gridGap: "$10",
  }),
  create: cssObj({
    margin: "0 auto",
    maxW: "$xl",
    marginTop: "$2",
    marginBottom: "$10",
  }),
  heading: cssObj({
    fontSize: "$3xl",
    color: "$gray12",
    textAlign: "center",
  }),
  input: cssObj({
    width: "100%",
  }),
};

Links.getPageLayout = Layout.getLayout({
  title: "Links",
});

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return withSessionProps(ctx);
}

export default Links;
