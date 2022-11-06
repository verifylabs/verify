import { factories } from "@verify/contract";
import { ethers } from "ethers";
import { hexDataSlice } from "ethers/lib/utils";
import ShortUniqueId from "short-unique-id";
import { useAccount, useContract, useSigner } from "wagmi";

const uuid = new ShortUniqueId();

type UseCreateLinkParams = {
  onCompleted?: () => void;
};

export function useCreateLink(params: UseCreateLinkParams) {
  const { address } = useAccount();
  const { data: signer } = useSigner();
  const contract = useContract({
    addressOrName: "0x90c84237fDdf091b1E63f369AF122EB46000bc70",
    contractInterface: factories.Verify__factory.abi,
    signerOrProvider: signer,
  });

  async function createLink(data: string) {
    const tx = await contract.createContent(data, uuid(), address);
    await tx.wait();
    const decodedData = ethers.utils.defaultAbiCoder.decode(
      ["string", "string", "address", "uint256"],
      hexDataSlice(tx.data, 4)
    );
    console.log("decodedData", decodedData);
    params.onCompleted?.();
  }

  return {
    loading: false,
    createLink,
  };
}
