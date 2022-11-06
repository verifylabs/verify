/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export declare namespace Verify {
  export type ContentStruct = {
    data: PromiseOrValue<string>;
    id: PromiseOrValue<string>;
    owner: PromiseOrValue<string>;
    timestamp: PromiseOrValue<BigNumberish>;
  };

  export type ContentStructOutput = [string, string, string, BigNumber] & {
    data: string;
    id: string;
    owner: string;
    timestamp: BigNumber;
  };
}

export interface VerifyInterface extends utils.Interface {
  functions: {
    "OWNER()": FunctionFragment;
    "contents(string)": FunctionFragment;
    "contentsByAddress(address,uint256)": FunctionFragment;
    "createContent(string,string,address)": FunctionFragment;
    "createReport(string,address)": FunctionFragment;
    "getContent(string)": FunctionFragment;
    "getContentList(address)": FunctionFragment;
    "getReports(string)": FunctionFragment;
    "reports(string,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "OWNER"
      | "contents"
      | "contentsByAddress"
      | "createContent"
      | "createReport"
      | "getContent"
      | "getContentList"
      | "getReports"
      | "reports"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "OWNER", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "contents",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "contentsByAddress",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "createContent",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "createReport",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getContent",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getContentList",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getReports",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "reports",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "OWNER", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "contents", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "contentsByAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createContent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createReport",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getContent", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getContentList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getReports", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "reports", data: BytesLike): Result;

  events: {};
}

export interface Verify extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VerifyInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    OWNER(overrides?: CallOverrides): Promise<[string]>;

    contents(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, BigNumber] & {
        data: string;
        id: string;
        owner: string;
        timestamp: BigNumber;
      }
    >;

    contentsByAddress(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, BigNumber] & {
        data: string;
        id: string;
        owner: string;
        timestamp: BigNumber;
      }
    >;

    createContent(
      data: PromiseOrValue<string>,
      id: PromiseOrValue<string>,
      owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createReport(
      id: PromiseOrValue<string>,
      owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getContent(
      id: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[Verify.ContentStructOutput]>;

    getContentList(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[Verify.ContentStructOutput[]]>;

    getReports(
      id: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    reports(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  OWNER(overrides?: CallOverrides): Promise<string>;

  contents(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, BigNumber] & {
      data: string;
      id: string;
      owner: string;
      timestamp: BigNumber;
    }
  >;

  contentsByAddress(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, BigNumber] & {
      data: string;
      id: string;
      owner: string;
      timestamp: BigNumber;
    }
  >;

  createContent(
    data: PromiseOrValue<string>,
    id: PromiseOrValue<string>,
    owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createReport(
    id: PromiseOrValue<string>,
    owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getContent(
    id: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<Verify.ContentStructOutput>;

  getContentList(
    addr: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<Verify.ContentStructOutput[]>;

  getReports(
    id: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  reports(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    OWNER(overrides?: CallOverrides): Promise<string>;

    contents(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, BigNumber] & {
        data: string;
        id: string;
        owner: string;
        timestamp: BigNumber;
      }
    >;

    contentsByAddress(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, BigNumber] & {
        data: string;
        id: string;
        owner: string;
        timestamp: BigNumber;
      }
    >;

    createContent(
      data: PromiseOrValue<string>,
      id: PromiseOrValue<string>,
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<Verify.ContentStructOutput>;

    createReport(
      id: PromiseOrValue<string>,
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getContent(
      id: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<Verify.ContentStructOutput>;

    getContentList(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<Verify.ContentStructOutput[]>;

    getReports(
      id: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    reports(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    OWNER(overrides?: CallOverrides): Promise<BigNumber>;

    contents(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    contentsByAddress(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createContent(
      data: PromiseOrValue<string>,
      id: PromiseOrValue<string>,
      owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createReport(
      id: PromiseOrValue<string>,
      owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getContent(
      id: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getContentList(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReports(
      id: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    reports(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    OWNER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    contents(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    contentsByAddress(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createContent(
      data: PromiseOrValue<string>,
      id: PromiseOrValue<string>,
      owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createReport(
      id: PromiseOrValue<string>,
      owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getContent(
      id: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getContentList(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getReports(
      id: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    reports(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
