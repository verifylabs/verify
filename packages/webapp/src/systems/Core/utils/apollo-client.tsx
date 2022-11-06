import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { getCookie } from "cookies-next";
import type { GetServerSidePropsContext } from "next";

const getToken = (ctx?: GetServerSidePropsContext) => {
  return getCookie("session", ctx);
};
export const createApolloClient = (ctx?: GetServerSidePropsContext) => {
  const token = getToken(ctx);
  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
    credentials: "same-origin",
    headers: {
      ...(token ? { "X-SESSION-TOKEN": token } : {}),
    },
  });

  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: httpLink,
    cache: new InMemoryCache(),
  });
};
