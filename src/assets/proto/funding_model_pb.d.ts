// package:
// file: funding_model.proto

import * as jspb from "google-protobuf";
import * as whitelist_model_pb from "./whitelist_model_pb";

export class FundingRequest extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): void;

  getFundingType(): FundingTypeMap[keyof FundingTypeMap];
  setFundingType(value: FundingTypeMap[keyof FundingTypeMap]): void;

  getCurrencyType(): CurrencyTypeMap[keyof CurrencyTypeMap];
  setCurrencyType(value: CurrencyTypeMap[keyof CurrencyTypeMap]): void;

  getFromAddress(): string;
  setFromAddress(value: string): void;

  getToAddress(): string;
  setToAddress(value: string): void;

  getAmount(): string;
  setAmount(value: string): void;

  getTransactionTime(): string;
  setTransactionTime(value: string): void;

  getSymbolCode(): string;
  setSymbolCode(value: string): void;

  getWalletType(): WalletMap[keyof WalletMap];
  setWalletType(value: WalletMap[keyof WalletMap]): void;

  getWithdrawalFee(): string;
  setWithdrawalFee(value: string): void;

  getVaultId(): string;
  setVaultId(value: string): void;

  getOrganisationId(): string;
  setOrganisationId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FundingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FundingRequest): FundingRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: FundingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FundingRequest;
  static deserializeBinaryFromReader(message: FundingRequest, reader: jspb.BinaryReader): FundingRequest;
}

export namespace FundingRequest {
  export type AsObject = {
    accountId: string;
    fundingType: FundingTypeMap[keyof FundingTypeMap];
    currencyType: CurrencyTypeMap[keyof CurrencyTypeMap];
    fromAddress: string;
    toAddress: string;
    amount: string;
    transactionTime: string;
    symbolCode: string;
    walletType: WalletMap[keyof WalletMap];
    withdrawalFee: string;
    vaultId: string;
    organisationId: string;
  };
}

export class FundingResponse extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): void;

  getFundingType(): FundingTypeMap[keyof FundingTypeMap];
  setFundingType(value: FundingTypeMap[keyof FundingTypeMap]): void;

  getCurrencyType(): CurrencyTypeMap[keyof CurrencyTypeMap];
  setCurrencyType(value: CurrencyTypeMap[keyof CurrencyTypeMap]): void;

  getFromAddress(): string;
  setFromAddress(value: string): void;

  getToAddress(): string;
  setToAddress(value: string): void;

  getAmount(): string;
  setAmount(value: string): void;

  getTransactionTime(): string;
  setTransactionTime(value: string): void;

  getSymbolCode(): string;
  setSymbolCode(value: string): void;

  getWalletType(): WalletMap[keyof WalletMap];
  setWalletType(value: WalletMap[keyof WalletMap]): void;

  getStatus(): whitelist_model_pb.StatusMap[keyof whitelist_model_pb.StatusMap];
  setStatus(value: whitelist_model_pb.StatusMap[keyof whitelist_model_pb.StatusMap]): void;

  getWithdrawalFee(): string;
  setWithdrawalFee(value: string): void;

  getMsgCode(): whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
  setMsgCode(value: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap]): void;

  getTransactionId(): string;
  setTransactionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FundingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FundingResponse): FundingResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: FundingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FundingResponse;
  static deserializeBinaryFromReader(message: FundingResponse, reader: jspb.BinaryReader): FundingResponse;
}

export namespace FundingResponse {
  export type AsObject = {
    accountId: string;
    fundingType: FundingTypeMap[keyof FundingTypeMap];
    currencyType: CurrencyTypeMap[keyof CurrencyTypeMap];
    fromAddress: string;
    toAddress: string;
    amount: string;
    transactionTime: string;
    symbolCode: string;
    walletType: WalletMap[keyof WalletMap];
    status: whitelist_model_pb.StatusMap[keyof whitelist_model_pb.StatusMap];
    withdrawalFee: string;
    msgCode: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
    transactionId: string;
  };
}

export interface FundingTypeMap {
  DEPOSIT: FundingType;
  FUNDING_TYPE_NONE: 0;
  FUNDING_TYPE_DEPOSIT: 1;
  FUNDING_TYPE_WITHDRAWAL: 2;
  FUNDING_TYPE_BUY: 3;
  FUNDING_TYPE_SELL: 4;
}

export const FundingType: FundingTypeMap;

export interface CurrencyTypeMap {
  CURRENCY_TYPE_NONE: 0;
  CURRENCY_TYPE_CRYPTO: 1;
  CURRENCY_TYPE_FIAT: 2;
}

export const CurrencyType: CurrencyTypeMap;

export interface WalletMap {
  WALLET_NONE: 0;
  WALLET_SPOT: 1;
  WALLET_FIAT: 2;
}

export const Wallet: WalletMap;
