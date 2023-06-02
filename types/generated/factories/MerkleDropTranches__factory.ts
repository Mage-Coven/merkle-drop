/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MerkleDropTranches,
  MerkleDropTranchesInterface,
} from "../MerkleDropTranches";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "merkleDrop",
        type: "address",
      },
    ],
    name: "Register",
    type: "event",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_merkleDrop",
        type: "address",
      },
    ],
    name: "register",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600080546001600160a01b031916339081178255604051909182917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35061030b806100616000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80634420e48614610051578063715018a6146100665780638da5cb5b1461006e578063f2fde38b1461008d575b600080fd5b61006461005f366004610270565b6100a0565b005b610064610112565b600054604080516001600160a01b039092168252519081900360200190f35b61006461009b366004610270565b610186565b6000546001600160a01b031633146100d35760405162461bcd60e51b81526004016100ca906102a0565b60405180910390fd5b6040516001600160a01b03821681527feeda149c76076b34d4b9d8896c2f7efc0d33d1c7b53ea3c5db490d64613f603a9060200160405180910390a150565b6000546001600160a01b0316331461013c5760405162461bcd60e51b81526004016100ca906102a0565b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000546001600160a01b031633146101b05760405162461bcd60e51b81526004016100ca906102a0565b6001600160a01b0381166102155760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016100ca565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b60006020828403121561028257600080fd5b81356001600160a01b038116811461029957600080fd5b9392505050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260408201526060019056fea2646970667358221220e604ff02759133d3538235f88e854e45e3016861200b235b732962d290821b8664736f6c63430008070033";

export class MerkleDropTranches__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MerkleDropTranches> {
    return super.deploy(overrides || {}) as Promise<MerkleDropTranches>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MerkleDropTranches {
    return super.attach(address) as MerkleDropTranches;
  }
  connect(signer: Signer): MerkleDropTranches__factory {
    return super.connect(signer) as MerkleDropTranches__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MerkleDropTranchesInterface {
    return new utils.Interface(_abi) as MerkleDropTranchesInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MerkleDropTranches {
    return new Contract(address, _abi, signerOrProvider) as MerkleDropTranches;
  }
}
