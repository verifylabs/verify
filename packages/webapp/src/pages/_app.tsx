/* eslint-disable @typescript-eslint/no-explicit-any */
import "~/styles/index.css";

import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "@fuel-ui/react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import { WagmiConfig } from "wagmi";
import { theme } from "~/styles/theme";
import { useApollo, wagmiClient } from "~/systems/Core";

export type NextPageWithLayout = NextPage & {
  getPageLayout?: (props: any, page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const client = useApollo(pageProps);
  const getPageLayout = Component.getPageLayout || ((_props, page) => page);
  const content = getPageLayout(pageProps, <Component {...pageProps} />);
  return (
    <ApolloProvider client={client}>
      <WagmiConfig client={wagmiClient}>
        <ThemeProvider theme={theme as any} withFonts={false}>
          {content}
        </ThemeProvider>
      </WagmiConfig>
    </ApolloProvider>
  );
};

export default App;
