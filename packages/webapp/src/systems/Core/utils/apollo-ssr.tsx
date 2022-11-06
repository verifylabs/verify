/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import merge from "deepmerge";
import { isEqual } from "lodash";
import type { GetServerSidePropsContext } from "next";
import { useMemo } from "react";

import { createApolloClient } from "./apollo-client";

interface PageProps {
  props?: Record<string, any>;
}

export const APOLLO_STATE_PROPERTY_NAME = "__APOLLO_STATE__";

let apolloClient: ApolloClient<NormalizedCacheObject>;

export function initApollo(initialState: any, ctx?: GetServerSidePropsContext) {
  const client = apolloClient ?? createApolloClient(ctx as any);

  // If your page has Next.js data fetching methods that use Apollo Client,
  // the initial state gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = client.extract();

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data = merge(initialState, existingCache, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray: any[], sourceArray: any[]) => [
        ...sourceArray,
        ...destinationArray.filter((d) =>
          sourceArray.every((s) => !isEqual(d, s))
        ),
      ],
    });

    // Restore the cache with the merged data
    client.cache.restore(data);
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") {
    return client;
  }

  // Create the Apollo Client once in the client
  if (!apolloClient) {
    apolloClient = client;
  }

  return client;
}

export function addApolloState(
  client: ApolloClient<NormalizedCacheObject>,
  pageProps: PageProps
) {
  if (pageProps?.props) {
    // eslint-disable-next-line no-param-reassign
    pageProps.props[APOLLO_STATE_PROPERTY_NAME] = client.cache.extract();
  }
  return pageProps;
}

export function useApollo(pageProps: PageProps) {
  const state = pageProps[APOLLO_STATE_PROPERTY_NAME];
  return useMemo(() => initApollo(state), [state]);
}
