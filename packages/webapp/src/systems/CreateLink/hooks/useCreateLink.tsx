import { toast } from "@fuel-ui/react";
import { useRouter } from "next/router";
import { useCreateLinkMutation, gqlOperations } from "~/generated/graphql";
import { useSign } from "~/systems/Core";

type UseCreateLinkParams = {
  onCompleted?: () => void;
};

export function useCreateLink(params: UseCreateLinkParams) {
  const router = useRouter();
  const [createLink, { loading }] = useCreateLinkMutation({
    refetchQueries: [gqlOperations.Query.Links],
    onCompleted: () => {
      params.onCompleted?.();
      router.push("/create-link");
      toast.success("Link created successfully!", {
        position: "bottom-right",
      });
    },
  });

  const { sign } = useSign({
    onSuccess: async (data) => {
      if (data) {
        await createLink({
          variables: {
            input: {
              data: JSON.parse(data.message),
              signature: data.signature,
            },
          },
        });
      }
    },
  });

  return {
    loading,
    createLink: sign,
  };
}
