/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { factories } from "@verify/contract";
import { ethers } from "ethers";
import { hexDataSlice } from "ethers/lib/utils";
import { useState } from "react";
import ShortUniqueId from "short-unique-id";
import { useAccount, useContract, useSigner } from "wagmi";

const uuid = new ShortUniqueId();

type UseCreateLinkParams = {
  onCompleted?: (data: any) => void;
};

export function useCreateLink(params?: UseCreateLinkParams) {
  const [loading, setLoading] = useState(false);
  const { address } = useAccount();
  const { data: signer } = useSigner();
  const contract = useContract({
    addressOrName: process.env.NEXT_PUBLIC_CONTRACT_ID!,
    contractInterface: factories.Verify__factory.abi,
    signerOrProvider: signer,
  });

  async function createLink(data: string) {
    setLoading(true);
    try {
      const tx = await contract.createContent(data, uuid(), address);
      await tx.wait();
      const decodedData = ethers.utils.defaultAbiCoder.decode(
        ["string", "string", "address", "uint256"],
        hexDataSlice(tx.data, 4)
      );
      console.log("createLink", decodedData);
      params?.onCompleted?.({
        id: decodedData[1],
      });
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    createLink,
  };
}

export function useReportLink(params?: UseCreateLinkParams) {
  const { address } = useAccount();
  const [loading, setLoading] = useState(false);
  const { data: signer } = useSigner();
  const contract = useContract({
    addressOrName: process.env.NEXT_PUBLIC_CONTRACT_ID!,
    contractInterface: factories.Verify__factory.abi,
    signerOrProvider: signer,
  });

  async function reportLink(short: string) {
    setLoading(true);
    try {
      const tx = await contract.createReport(short, address);
      await tx.wait();
      const decodedData = ethers.utils.defaultAbiCoder.decode(
        ["uint256"],
        hexDataSlice(tx.data, 4)
      );
      console.log("reportLink", decodedData);
      params?.onCompleted?.(decodedData);
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    reportLink,
  };
}
