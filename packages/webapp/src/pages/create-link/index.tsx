import { cssObj } from "@fuel-ui/css";
import { Box, Heading } from "@fuel-ui/react";
import { factories } from "@verify/contract";
import type { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useContractRead } from "wagmi";
import type { LinksQuery } from "~/generated/graphql";
import { LinksDocument } from "~/generated/graphql";
import { initApollo, Layout } from "~/systems/Core";
import { useCreateLink } from "~/systems/CreateLink/hooks";
import { withSessionProps } from "~/systems/Session";
import { Button, LinkInput } from "~/systems/UI";

const CreateLink = () => {
  // const { data } = useLinksQuery({ variables: { address: address as any } });
  // const [links, setLinks] = useState([]);
  const contract = useContractRead({
    addressOrName: "0x90c84237fDdf091b1E63f369AF122EB46000bc70",
    contractInterface: factories.Verify__factory.abi,
    functionName: "getContentList",
  });

  const router = useRouter();
  const [url, setURL] = useState((router.query.url as string) || "");
  const { createLink, loading } = useCreateLink({
    onCompleted() {
      setURL("");
    },
  });

  function handleCreate() {
    createLink(url);
  }

  useEffect(() => {
    // console.log("address", address);
    // contract.callStatic.getContentList(address).then((res: any) => {
    //   console.log("res", res);
    // });
  }, []);

  return (
    <Layout.Content css={styles.wrapper}>
      <Box css={styles.content}>
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
        {/* <LinkList links={data?.links} /> */}
      </Box>
    </Layout.Content>
  );
};

CreateLink.getPageLayout = Layout.getLayout({
  title: "Create Link",
});

const styles = {
  wrapper: cssObj({
    background: `url(/hero-bg.png)`,
    backgroundSize: "cover",
  }),
  content: cssObj({
    margin: "0 auto",
    maxW: "$xl",
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

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const client = initApollo(null, ctx);
  await client.query<LinksQuery>({ query: LinksDocument });
  return withSessionProps(ctx);
}

export default CreateLink;
