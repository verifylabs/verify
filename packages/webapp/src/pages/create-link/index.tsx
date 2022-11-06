/* eslint-disable @typescript-eslint/no-explicit-any */
import { cssObj } from "@fuel-ui/css";
import { Box, Heading } from "@fuel-ui/react";
import type { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { useAccount } from "wagmi";
import type { LinksQuery } from "~/generated/graphql";
import { useLinksQuery, LinksDocument } from "~/generated/graphql";
import { initApollo, Layout } from "~/systems/Core";
import { LinkList } from "~/systems/CreateLink";
import { useCreateLink } from "~/systems/CreateLink/hooks";
import { withSessionProps } from "~/systems/Session";
import { Button, LinkInput } from "~/systems/UI";

const CreateLink = () => {
  const { address } = useAccount();
  const { data } = useLinksQuery({ variables: { address: address as any } });

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
        <LinkList links={data?.links} />
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
