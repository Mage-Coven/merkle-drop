/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "MerkleDrop",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MerkleDrop__factory>;
    getContractFactory(
      name: "MerkleDropTranches",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MerkleDropTranches__factory>;
    getContractFactory(
      name: "TToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TToken__factory>;

    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "MerkleDrop",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MerkleDrop>;
    getContractAt(
      name: "MerkleDropTranches",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MerkleDropTranches>;
    getContractAt(
      name: "TToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TToken>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
