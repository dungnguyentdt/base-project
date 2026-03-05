// package:
// file: account_model.proto

import * as jspb from "google-protobuf";
import * as whitelist_model_pb from "./whitelist_model_pb";

export class CreateVaultRequest extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): void;

  getOrganisationId(): string;
  setOrganisationId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateVaultRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateVaultRequest): CreateVaultRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: CreateVaultRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateVaultRequest;
  static deserializeBinaryFromReader(message: CreateVaultRequest, reader: jspb.BinaryReader): CreateVaultRequest;
}

export namespace CreateVaultRequest {
  export type AsObject = {
    accountId: string;
    organisationId: string;
  };
}

export class AccountWallet extends jspb.Message {
  getWalletAddress(): string;
  setWalletAddress(value: string): void;

  getChain(): string;
  setChain(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountWallet.AsObject;
  static toObject(includeInstance: boolean, msg: AccountWallet): AccountWallet.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: AccountWallet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountWallet;
  static deserializeBinaryFromReader(message: AccountWallet, reader: jspb.BinaryReader): AccountWallet;
}

export namespace AccountWallet {
  export type AsObject = {
    walletAddress: string;
    chain: string;
  };
}

export class CreateVaultResponse extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): void;

  getOrganisationId(): string;
  setOrganisationId(value: string): void;

  clearWalletList(): void;
  getWalletList(): Array<AccountWallet>;
  setWalletList(value: Array<AccountWallet>): void;
  addWallet(value?: AccountWallet, index?: number): AccountWallet;

  getVaultId(): string;
  setVaultId(value: string): void;

  getMsgCode(): whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
  setMsgCode(value: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateVaultResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateVaultResponse): CreateVaultResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: CreateVaultResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateVaultResponse;
  static deserializeBinaryFromReader(message: CreateVaultResponse, reader: jspb.BinaryReader): CreateVaultResponse;
}

export namespace CreateVaultResponse {
  export type AsObject = {
    accountId: string;
    organisationId: string;
    walletList: Array<AccountWallet.AsObject>;
    vaultId: string;
    msgCode: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
  };
}

export class CreateAccountRequest extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): void;

  getOrganisationId(): string;
  setOrganisationId(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getFullName(): string;
  setFullName(value: string): void;

  getNric(): string;
  setNric(value: string): void;

  getNationality(): string;
  setNationality(value: string): void;

  getCountryOfBirth(): string;
  setCountryOfBirth(value: string): void;

  getDateOfBirth(): string;
  setDateOfBirth(value: string): void;

  getAddress(): string;
  setAddress(value: string): void;

  getMobileNumber(): string;
  setMobileNumber(value: string): void;

  getOccupation(): string;
  setOccupation(value: string): void;

  getEmployerName(): string;
  setEmployerName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAccountRequest): CreateAccountRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: CreateAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAccountRequest;
  static deserializeBinaryFromReader(message: CreateAccountRequest, reader: jspb.BinaryReader): CreateAccountRequest;
}

export namespace CreateAccountRequest {
  export type AsObject = {
    accountId: string;
    organisationId: string;
    email: string;
    fullName: string;
    nric: string;
    nationality: string;
    countryOfBirth: string;
    dateOfBirth: string;
    address: string;
    mobileNumber: string;
    occupation: string;
    employerName: string;
  };
}
