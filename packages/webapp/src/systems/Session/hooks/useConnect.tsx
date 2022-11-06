import { useEffect } from "react";
import {
  useAccount,
  useConnect as useConnectWagmi,
  useDisconnect,
} from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import {
  gqlOperations,
  useSignInMutation,
  useSignOutMutation,
} from "~/generated/graphql";
import { sortKeys } from "~/graphql/utils";

import { useSession } from "./useSession";

const REFETCH_QUERIES = [
  gqlOperations.Query.Session,
  gqlOperations.Query.Links,
];

export function useConnect() {
  const { session } = useSession();
  const [signIn, { loading: signInLoading }] = useSignInMutation({
    refetchQueries: REFETCH_QUERIES,
  });
  const [signOut, { loading: signOutLoading }] = useSignOutMutation({
    refetchQueries: REFETCH_QUERIES,
  });
  const { address, isConnected } = useAccount();

  const { connect } = useConnectWagmi({
    connector: new InjectedConnector(),
    onSuccess: async (data) => {
      const payload = { address: data.account, date: new Date() };
      const message = JSON.stringify(sortKeys(payload));
      const signer = await data.connector?.getSigner();
      const signature = await signer.signMessage(message);
      await signIn({
        variables: {
          input: {
            data: payload,
            signature,
          },
        },
      });
    },
  });

  const { disconnect } = useDisconnect({
    async onSuccess() {
      await signOut();
    },
  });

  useEffect(() => {
    if (!session?.token) {
      disconnect();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    connect,
    disconnect,
    isConnected,
    ensName: "",
    address,
    loading: signInLoading || signOutLoading,
  };
}
