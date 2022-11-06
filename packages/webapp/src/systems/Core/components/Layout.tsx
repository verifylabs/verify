import type { ThemeUtilsCSS } from "@fuel-ui/css";
import { cssObj } from "@fuel-ui/css";
import { Box, Flex } from "@fuel-ui/react";
import Head from "next/head";
import type { FC, ReactElement, ReactNode } from "react";
import { SessionProvider } from "~/systems/Session";

import { TopNav } from "./TopNav";

type ContentProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  as?: any;
  children: ReactNode;
  css?: ThemeUtilsCSS;
};

function Content({ as, children, css }: ContentProps) {
  return (
    <Box as={as} css={{ ...styles.content, ...css }}>
      {children}
    </Box>
  );
}

type LayoutProps = {
  title?: string;
  children: ReactNode;
};

type LayoutComponent = FC<LayoutProps> & {
  Content: FC<ContentProps>;
  TopNav: FC;
  getLayout: typeof getMainLayout;
};

export const Layout: LayoutComponent = ({ title, children }: LayoutProps) => {
  const titleText = title ? `${title} | Verify` : "Verify";
  return (
    <>
      <Head>
        <title>{titleText}</title>
      </Head>
      <Flex as="main" css={styles.root}>
        {children}
      </Flex>
    </>
  );
};

Layout.Content = Content;
Layout.TopNav = TopNav;
Layout.getLayout = getMainLayout;

const styles = {
  root: cssObj({
    minH: "$screenH",
    flexDirection: "column",
  }),
  content: cssObj({
    py: "$20",
    px: "$24",
    flex: 1,
  }),
};

type GetMainLayoutParams = {
  title: string;
};

function getMainLayout(params: GetMainLayoutParams) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (props: any, page: ReactElement) => (
    <SessionProvider session={props.session} profile={props.profile}>
      <Layout title={params.title}>
        <Layout.TopNav />
        {page}
      </Layout>
    </SessionProvider>
  );
}
