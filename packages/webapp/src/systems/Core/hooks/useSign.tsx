import { useAccount, useSignMessage } from "wagmi";

import { createData } from "../../Links/utils/createData";

type Data = {
  signature: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  message: any;
};

type UseSignProps = {
  onSuccess: (data: Data) => void;
};

export function useSign({ onSuccess }: UseSignProps) {
  const { address } = useAccount();
  const { signMessage } = useSignMessage({
    message: address,
    onSuccess(signature, variables) {
      onSuccess({ signature, message: variables.message });
    },
  });

  function sign(url: string) {
    if (!url || !address) return;
    const msg = JSON.stringify(createData(address, url));
    signMessage({ message: msg });
  }

  return {
    sign,
  };
}
