/* eslint-disable consistent-return */
import { useSigner } from "wagmi";
import { gqlOperations, useUpsertProfileMutation } from "~/generated/graphql";
import { sortKeys } from "~/graphql/utils";

type UpsertData = {
  address?: string | null;
  username?: string | null;
};

export function useUpsertProfile() {
  const [upsert, { loading }] = useUpsertProfileMutation({
    refetchQueries: [gqlOperations.Query.Profile],
  });
  const { data: signer } = useSigner();

  async function handleUpsert(data: UpsertData) {
    if (!data.address && !data.username) return;
    const message = JSON.stringify(sortKeys(data));
    const signature = await signer?.signMessage(message);

    if (signature) {
      return upsert({ variables: { input: { signature, data } } });
    }
  }

  return {
    loading,
    upsert: handleUpsert,
  };
}
