/* eslint-disable @typescript-eslint/no-explicit-any */
import { cssObj } from "@fuel-ui/css";
import type { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAccount } from "wagmi";
import type { LinksQuery } from "~/generated/graphql";
import { LinksDocument, useLinksQuery } from "~/generated/graphql";
import { initApollo, Layout } from "~/systems/Core";
import { LinkList, SelectedLink } from "~/systems/Links";
import { withSessionProps } from "~/systems/Session";

const Links = () => {
  const router = useRouter();
  const { address } = useAccount();
  const { data } = useLinksQuery({ variables: { address: address as any } });
  const selected = router.query.selected;

  useEffect(() => {
    if (!selected && Boolean(data?.links.length)) {
      router.replace(`/links?selected=${data?.links[0].id}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, selected]);

  return (
    <Layout.Content css={styles.content}>
      <LinkList links={data?.links} />
      {selected && (
        <SelectedLink link={data?.links.find((item) => item.id === selected)} />
      )}
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
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const client = initApollo(null, ctx);
  await client.query<LinksQuery>({ query: LinksDocument });
  return withSessionProps(ctx);
}

export default Links;
