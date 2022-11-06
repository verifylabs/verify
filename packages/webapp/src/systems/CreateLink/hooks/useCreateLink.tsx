import { factories } from "@verify/contract";
import { useRouter } from "next/router";
import ShortUniqueId from "short-unique-id";
import { useContract, useSigner } from "wagmi";

const uuid = new ShortUniqueId();

type UseCreateLinkParams = {
  onCompleted?: () => void;
};

export function useCreateLink(params: UseCreateLinkParams) {
  const router = useRouter();
  const { data: signer } = useSigner();
  const contract = useContract({
    addressOrName: "0xF5aA8e3C6BA1EdF766E197a0bCD5844Fd1ed8A27",
    contractInterface: factories.Verify__factory.abi,
    signerOrProvider: signer,
  });

  async function createLink(data: string) {
    const tx = await contract.createContent(data, uuid());
    const res = await tx.wait();
    console.log("res", res);
  }

  return {
    loading: false,
    createLink,
  };
}
