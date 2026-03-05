// package:
// file: system_service.proto

import * as jspb from "google-protobuf";
import * as system_model_pb from "./system_model_pb";
import * as whitelist_model_pb from "./whitelist_model_pb";

export class LoginRequest extends jspb.Message {
  getLogin(): string;
  setLogin(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getMacAddress(): string;
  setMacAddress(value: string): void;

  getLocalIp(): string;
  setLocalIp(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginRequest): LoginRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: LoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginRequest;
  static deserializeBinaryFromReader(message: LoginRequest, reader: jspb.BinaryReader): LoginRequest;
}

export namespace LoginRequest {
  export type AsObject = {
    login: string;
    password: string;
    macAddress: string;
    localIp: string;
  };
}

export class LoginResponse extends jspb.Message {
  getReturncode(): whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
  setReturncode(value: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap]): void;

  getReturnmsg(): string;
  setReturnmsg(value: string): void;

  getPartnerId(): number;
  setPartnerId(value: number): void;

  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LoginResponse): LoginResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: LoginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginResponse;
  static deserializeBinaryFromReader(message: LoginResponse, reader: jspb.BinaryReader): LoginResponse;
}

export namespace LoginResponse {
  export type AsObject = {
    returncode: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
    returnmsg: string;
    partnerId: number;
    token: string;
  };
}

export class HeartbeatRequest extends jspb.Message {
  getSendingTime(): number;
  setSendingTime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HeartbeatRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HeartbeatRequest): HeartbeatRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: HeartbeatRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HeartbeatRequest;
  static deserializeBinaryFromReader(message: HeartbeatRequest, reader: jspb.BinaryReader): HeartbeatRequest;
}

export namespace HeartbeatRequest {
  export type AsObject = {
    sendingTime: number;
  };
}

export class HeartbeatResponse extends jspb.Message {
  getSendingTime(): number;
  setSendingTime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HeartbeatResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HeartbeatResponse): HeartbeatResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: HeartbeatResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HeartbeatResponse;
  static deserializeBinaryFromReader(message: HeartbeatResponse, reader: jspb.BinaryReader): HeartbeatResponse;
}

export namespace HeartbeatResponse {
  export type AsObject = {
    sendingTime: number;
  };
}

export class CheckSessionResponse extends jspb.Message {
  getAccountId(): number;
  setAccountId(value: number): void;

  getResCode(): system_model_pb.SessionStatusCodeMap[keyof system_model_pb.SessionStatusCodeMap];
  setResCode(value: system_model_pb.SessionStatusCodeMap[keyof system_model_pb.SessionStatusCodeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckSessionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CheckSessionResponse): CheckSessionResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: CheckSessionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckSessionResponse;
  static deserializeBinaryFromReader(message: CheckSessionResponse, reader: jspb.BinaryReader): CheckSessionResponse;
}

export namespace CheckSessionResponse {
  export type AsObject = {
    accountId: number;
    resCode: system_model_pb.SessionStatusCodeMap[keyof system_model_pb.SessionStatusCodeMap];
  };
}

export class BalanceUpdateRequest extends jspb.Message {
  getAccountId(): number;
  setAccountId(value: number): void;

  getType(): system_model_pb.DealActionMap[keyof system_model_pb.DealActionMap];
  setType(value: system_model_pb.DealActionMap[keyof system_model_pb.DealActionMap]): void;

  getAmount(): string;
  setAmount(value: string): void;

  getComment(): string;
  setComment(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BalanceUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BalanceUpdateRequest): BalanceUpdateRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: BalanceUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BalanceUpdateRequest;
  static deserializeBinaryFromReader(message: BalanceUpdateRequest, reader: jspb.BinaryReader): BalanceUpdateRequest;
}

export namespace BalanceUpdateRequest {
  export type AsObject = {
    accountId: number;
    type: system_model_pb.DealActionMap[keyof system_model_pb.DealActionMap];
    amount: string;
    comment: string;
  };
}

export class BalanceUpdateResponse extends jspb.Message {
  getMsgCode(): whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
  setMsgCode(value: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap]): void;

  getMsgText(): string;
  setMsgText(value: string): void;

  getTicket(): number;
  setTicket(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BalanceUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BalanceUpdateResponse): BalanceUpdateResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: BalanceUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BalanceUpdateResponse;
  static deserializeBinaryFromReader(message: BalanceUpdateResponse, reader: jspb.BinaryReader): BalanceUpdateResponse;
}

export namespace BalanceUpdateResponse {
  export type AsObject = {
    msgCode: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
    msgText: string;
    ticket: number;
  };
}

export class AccountCreateRequest extends jspb.Message {
  hasAccount(): boolean;
  clearAccount(): void;
  getAccount(): system_model_pb.Account | undefined;
  setAccount(value?: system_model_pb.Account): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AccountCreateRequest): AccountCreateRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: AccountCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountCreateRequest;
  static deserializeBinaryFromReader(message: AccountCreateRequest, reader: jspb.BinaryReader): AccountCreateRequest;
}

export namespace AccountCreateRequest {
  export type AsObject = {
    account?: system_model_pb.Account.AsObject;
  };
}

export class AccountCreateResponse extends jspb.Message {
  getMsgCode(): whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
  setMsgCode(value: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap]): void;

  getMsgText(): string;
  setMsgText(value: string): void;

  hasAccount(): boolean;
  clearAccount(): void;
  getAccount(): system_model_pb.Account | undefined;
  setAccount(value?: system_model_pb.Account): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountCreateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AccountCreateResponse): AccountCreateResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: AccountCreateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountCreateResponse;
  static deserializeBinaryFromReader(message: AccountCreateResponse, reader: jspb.BinaryReader): AccountCreateResponse;
}

export namespace AccountCreateResponse {
  export type AsObject = {
    msgCode: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
    msgText: string;
    account?: system_model_pb.Account.AsObject;
  };
}

export class AccountUpdateRequest extends jspb.Message {
  getAccountId(): number;
  setAccountId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getGroupId(): number;
  setGroupId(value: number): void;

  getEnableFlg(): boolean;
  setEnableFlg(value: boolean): void;

  getTradingRights(): AccountUpdateRequest.TradingRightsMap[keyof AccountUpdateRequest.TradingRightsMap];
  setTradingRights(value: AccountUpdateRequest.TradingRightsMap[keyof AccountUpdateRequest.TradingRightsMap]): void;

  getApiFlg(): boolean;
  setApiFlg(value: boolean): void;

  getPassword(): string;
  setPassword(value: string): void;

  getComment(): string;
  setComment(value: string): void;

  getApiKey(): string;
  setApiKey(value: string): void;

  getSecretKey(): string;
  setSecretKey(value: string): void;

  getNewPassword(): string;
  setNewPassword(value: string): void;

  getNewSecretKey(): string;
  setNewSecretKey(value: string): void;

  getRecvAdminNewsFlg(): AccountUpdateRequest.BoolFlagMap[keyof AccountUpdateRequest.BoolFlagMap];
  setRecvAdminNewsFlg(value: AccountUpdateRequest.BoolFlagMap[keyof AccountUpdateRequest.BoolFlagMap]): void;

  getRecvMatchNotiFlg(): AccountUpdateRequest.BoolFlagMap[keyof AccountUpdateRequest.BoolFlagMap];
  setRecvMatchNotiFlg(value: AccountUpdateRequest.BoolFlagMap[keyof AccountUpdateRequest.BoolFlagMap]): void;

  getEnableSecretKeyFlg(): AccountUpdateRequest.BoolFlagMap[keyof AccountUpdateRequest.BoolFlagMap];
  setEnableSecretKeyFlg(value: AccountUpdateRequest.BoolFlagMap[keyof AccountUpdateRequest.BoolFlagMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AccountUpdateRequest): AccountUpdateRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: AccountUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountUpdateRequest;
  static deserializeBinaryFromReader(message: AccountUpdateRequest, reader: jspb.BinaryReader): AccountUpdateRequest;
}

export namespace AccountUpdateRequest {
  export type AsObject = {
    accountId: number;
    name: string;
    groupId: number;
    enableFlg: boolean;
    tradingRights: AccountUpdateRequest.TradingRightsMap[keyof AccountUpdateRequest.TradingRightsMap];
    apiFlg: boolean;
    password: string;
    comment: string;
    apiKey: string;
    secretKey: string;
    newPassword: string;
    newSecretKey: string;
    recvAdminNewsFlg: AccountUpdateRequest.BoolFlagMap[keyof AccountUpdateRequest.BoolFlagMap];
    recvMatchNotiFlg: AccountUpdateRequest.BoolFlagMap[keyof AccountUpdateRequest.BoolFlagMap];
    enableSecretKeyFlg: AccountUpdateRequest.BoolFlagMap[keyof AccountUpdateRequest.BoolFlagMap];
  };

  export interface BoolFlagMap {
    BOOL_FLAG_NONE: 0;
    BOOL_FLAG_ON: 1;
    BOOL_FLAG_OFF: 2;
  }

  export const BoolFlag: BoolFlagMap;

  export interface TradingRightsMap {
    TRADING_RIGHTS_NONE: 0;
    TRADING_OPEN_ONLY: 1;
    TRADING_CLOSE_ONLY: 2;
    TRADING_NORMAL: 10;
  }

  export const TradingRights: TradingRightsMap;
}

export class AccountUpdateResponse extends jspb.Message {
  getMsgCode(): whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
  setMsgCode(value: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap]): void;

  getMsgText(): string;
  setMsgText(value: string): void;

  hasAccount(): boolean;
  clearAccount(): void;
  getAccount(): system_model_pb.Account | undefined;
  setAccount(value?: system_model_pb.Account): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AccountUpdateResponse): AccountUpdateResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: AccountUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountUpdateResponse;
  static deserializeBinaryFromReader(message: AccountUpdateResponse, reader: jspb.BinaryReader): AccountUpdateResponse;
}

export namespace AccountUpdateResponse {
  export type AsObject = {
    msgCode: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
    msgText: string;
    account?: system_model_pb.Account.AsObject;
  };
}

export class AccountCreateMultiRequest extends jspb.Message {
  clearAccountList(): void;
  getAccountList(): Array<system_model_pb.Account>;
  setAccountList(value: Array<system_model_pb.Account>): void;
  addAccount(value?: system_model_pb.Account, index?: number): system_model_pb.Account;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountCreateMultiRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AccountCreateMultiRequest): AccountCreateMultiRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: AccountCreateMultiRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountCreateMultiRequest;
  static deserializeBinaryFromReader(
    message: AccountCreateMultiRequest,
    reader: jspb.BinaryReader,
  ): AccountCreateMultiRequest;
}

export namespace AccountCreateMultiRequest {
  export type AsObject = {
    accountList: Array<system_model_pb.Account.AsObject>;
  };
}

export class AccountCreateMultiResponse extends jspb.Message {
  getMsgCode(): whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
  setMsgCode(value: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap]): void;

  getMsgText(): string;
  setMsgText(value: string): void;

  clearAccountList(): void;
  getAccountList(): Array<system_model_pb.Account>;
  setAccountList(value: Array<system_model_pb.Account>): void;
  addAccount(value?: system_model_pb.Account, index?: number): system_model_pb.Account;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountCreateMultiResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AccountCreateMultiResponse): AccountCreateMultiResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: AccountCreateMultiResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountCreateMultiResponse;
  static deserializeBinaryFromReader(
    message: AccountCreateMultiResponse,
    reader: jspb.BinaryReader,
  ): AccountCreateMultiResponse;
}

export namespace AccountCreateMultiResponse {
  export type AsObject = {
    msgCode: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
    msgText: string;
    accountList: Array<system_model_pb.Account.AsObject>;
  };
}

export class AccountDetailRequest extends jspb.Message {
  getAccountId(): number;
  setAccountId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountDetailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AccountDetailRequest): AccountDetailRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: AccountDetailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountDetailRequest;
  static deserializeBinaryFromReader(message: AccountDetailRequest, reader: jspb.BinaryReader): AccountDetailRequest;
}

export namespace AccountDetailRequest {
  export type AsObject = {
    accountId: number;
  };
}

export class AccountDetailResponse extends jspb.Message {
  getMsgCode(): whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
  setMsgCode(value: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap]): void;

  getMsgText(): string;
  setMsgText(value: string): void;

  hasAccount(): boolean;
  clearAccount(): void;
  getAccount(): system_model_pb.Account | undefined;
  setAccount(value?: system_model_pb.Account): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountDetailResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AccountDetailResponse): AccountDetailResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: AccountDetailResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountDetailResponse;
  static deserializeBinaryFromReader(message: AccountDetailResponse, reader: jspb.BinaryReader): AccountDetailResponse;
}

export namespace AccountDetailResponse {
  export type AsObject = {
    msgCode: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
    msgText: string;
    account?: system_model_pb.Account.AsObject;
  };
}

export class AccountBalanceRequest extends jspb.Message {
  getAccountId(): number;
  setAccountId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountBalanceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AccountBalanceRequest): AccountBalanceRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: AccountBalanceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountBalanceRequest;
  static deserializeBinaryFromReader(message: AccountBalanceRequest, reader: jspb.BinaryReader): AccountBalanceRequest;
}

export namespace AccountBalanceRequest {
  export type AsObject = {
    accountId: number;
  };
}

export class AccountBalanceResponse extends jspb.Message {
  getMsgCode(): whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
  setMsgCode(value: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap]): void;

  getMsgText(): string;
  setMsgText(value: string): void;

  hasAccountBalance(): boolean;
  clearAccountBalance(): void;
  getAccountBalance(): system_model_pb.AccountBalance | undefined;
  setAccountBalance(value?: system_model_pb.AccountBalance): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountBalanceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AccountBalanceResponse): AccountBalanceResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: AccountBalanceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountBalanceResponse;
  static deserializeBinaryFromReader(
    message: AccountBalanceResponse,
    reader: jspb.BinaryReader,
  ): AccountBalanceResponse;
}

export namespace AccountBalanceResponse {
  export type AsObject = {
    msgCode: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
    msgText: string;
    accountBalance?: system_model_pb.AccountBalance.AsObject;
  };
}

export class AccountPortfolioRequest extends jspb.Message {
  clearAccountIdList(): void;
  getAccountIdList(): Array<number>;
  setAccountIdList(value: Array<number>): void;
  addAccountId(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountPortfolioRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AccountPortfolioRequest): AccountPortfolioRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: AccountPortfolioRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountPortfolioRequest;
  static deserializeBinaryFromReader(
    message: AccountPortfolioRequest,
    reader: jspb.BinaryReader,
  ): AccountPortfolioRequest;
}

export namespace AccountPortfolioRequest {
  export type AsObject = {
    accountIdList: Array<number>;
  };
}

export class AccountPortfolioResponse extends jspb.Message {
  getMsgCode(): whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
  setMsgCode(value: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap]): void;

  getMsgText(): string;
  setMsgText(value: string): void;

  clearAccountIdList(): void;
  getAccountIdList(): Array<number>;
  setAccountIdList(value: Array<number>): void;
  addAccountId(value: number, index?: number): number;

  getCurrencyCode(): string;
  setCurrencyCode(value: string): void;

  clearAccountPortfolioList(): void;
  getAccountPortfolioList(): Array<system_model_pb.AccountPortfolio>;
  setAccountPortfolioList(value: Array<system_model_pb.AccountPortfolio>): void;
  addAccountPortfolio(value?: system_model_pb.AccountPortfolio, index?: number): system_model_pb.AccountPortfolio;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountPortfolioResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AccountPortfolioResponse): AccountPortfolioResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: AccountPortfolioResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountPortfolioResponse;
  static deserializeBinaryFromReader(
    message: AccountPortfolioResponse,
    reader: jspb.BinaryReader,
  ): AccountPortfolioResponse;
}

export namespace AccountPortfolioResponse {
  export type AsObject = {
    msgCode: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
    msgText: string;
    accountIdList: Array<number>;
    currencyCode: string;
    accountPortfolioList: Array<system_model_pb.AccountPortfolio.AsObject>;
  };
}

export class UpdateAdminSettingsRequest extends jspb.Message {
  hasAdminSettings(): boolean;
  clearAdminSettings(): void;
  getAdminSettings(): system_model_pb.AdminSettings | undefined;
  setAdminSettings(value?: system_model_pb.AdminSettings): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAdminSettingsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAdminSettingsRequest): UpdateAdminSettingsRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: UpdateAdminSettingsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAdminSettingsRequest;
  static deserializeBinaryFromReader(
    message: UpdateAdminSettingsRequest,
    reader: jspb.BinaryReader,
  ): UpdateAdminSettingsRequest;
}

export namespace UpdateAdminSettingsRequest {
  export type AsObject = {
    adminSettings?: system_model_pb.AdminSettings.AsObject;
  };
}

export class UpdateAdminSettingsResponse extends jspb.Message {
  getMsgCode(): whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
  setMsgCode(value: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap]): void;

  getMsgText(): string;
  setMsgText(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAdminSettingsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAdminSettingsResponse): UpdateAdminSettingsResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: UpdateAdminSettingsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAdminSettingsResponse;
  static deserializeBinaryFromReader(
    message: UpdateAdminSettingsResponse,
    reader: jspb.BinaryReader,
  ): UpdateAdminSettingsResponse;
}

export namespace UpdateAdminSettingsResponse {
  export type AsObject = {
    msgCode: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
    msgText: string;
  };
}

export class GroupCreateRequest extends jspb.Message {
  clearGroupAccountList(): void;
  getGroupAccountList(): Array<system_model_pb.GroupAccount>;
  setGroupAccountList(value: Array<system_model_pb.GroupAccount>): void;
  addGroupAccount(value?: system_model_pb.GroupAccount, index?: number): system_model_pb.GroupAccount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GroupCreateRequest): GroupCreateRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: GroupCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupCreateRequest;
  static deserializeBinaryFromReader(message: GroupCreateRequest, reader: jspb.BinaryReader): GroupCreateRequest;
}

export namespace GroupCreateRequest {
  export type AsObject = {
    groupAccountList: Array<system_model_pb.GroupAccount.AsObject>;
  };
}

export class GroupCreateResponse extends jspb.Message {
  getMsgCode(): whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
  setMsgCode(value: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap]): void;

  getMsgText(): string;
  setMsgText(value: string): void;

  clearGroupAccountList(): void;
  getGroupAccountList(): Array<system_model_pb.GroupAccount>;
  setGroupAccountList(value: Array<system_model_pb.GroupAccount>): void;
  addGroupAccount(value?: system_model_pb.GroupAccount, index?: number): system_model_pb.GroupAccount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupCreateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GroupCreateResponse): GroupCreateResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: GroupCreateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupCreateResponse;
  static deserializeBinaryFromReader(message: GroupCreateResponse, reader: jspb.BinaryReader): GroupCreateResponse;
}

export namespace GroupCreateResponse {
  export type AsObject = {
    msgCode: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
    msgText: string;
    groupAccountList: Array<system_model_pb.GroupAccount.AsObject>;
  };
}

export class GroupUpdateRequest extends jspb.Message {
  clearGroupAccountList(): void;
  getGroupAccountList(): Array<system_model_pb.GroupAccount>;
  setGroupAccountList(value: Array<system_model_pb.GroupAccount>): void;
  addGroupAccount(value?: system_model_pb.GroupAccount, index?: number): system_model_pb.GroupAccount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GroupUpdateRequest): GroupUpdateRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: GroupUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupUpdateRequest;
  static deserializeBinaryFromReader(message: GroupUpdateRequest, reader: jspb.BinaryReader): GroupUpdateRequest;
}

export namespace GroupUpdateRequest {
  export type AsObject = {
    groupAccountList: Array<system_model_pb.GroupAccount.AsObject>;
  };
}

export class GroupUpdateResponse extends jspb.Message {
  getMsgCode(): whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
  setMsgCode(value: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap]): void;

  getMsgText(): string;
  setMsgText(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GroupUpdateResponse): GroupUpdateResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: GroupUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupUpdateResponse;
  static deserializeBinaryFromReader(message: GroupUpdateResponse, reader: jspb.BinaryReader): GroupUpdateResponse;
}

export namespace GroupUpdateResponse {
  export type AsObject = {
    msgCode: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
    msgText: string;
  };
}

export class OpenTradingSessionRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenTradingSessionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OpenTradingSessionRequest): OpenTradingSessionRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: OpenTradingSessionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenTradingSessionRequest;
  static deserializeBinaryFromReader(
    message: OpenTradingSessionRequest,
    reader: jspb.BinaryReader,
  ): OpenTradingSessionRequest;
}

export namespace OpenTradingSessionRequest {
  export type AsObject = {};
}

export class OpenTradingSessionResponse extends jspb.Message {
  getMsgCode(): whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
  setMsgCode(value: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap]): void;

  getMsgText(): string;
  setMsgText(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenTradingSessionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OpenTradingSessionResponse): OpenTradingSessionResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: OpenTradingSessionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenTradingSessionResponse;
  static deserializeBinaryFromReader(
    message: OpenTradingSessionResponse,
    reader: jspb.BinaryReader,
  ): OpenTradingSessionResponse;
}

export namespace OpenTradingSessionResponse {
  export type AsObject = {
    msgCode: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
    msgText: string;
  };
}

export class CloseTradingSessionRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloseTradingSessionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CloseTradingSessionRequest): CloseTradingSessionRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: CloseTradingSessionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloseTradingSessionRequest;
  static deserializeBinaryFromReader(
    message: CloseTradingSessionRequest,
    reader: jspb.BinaryReader,
  ): CloseTradingSessionRequest;
}

export namespace CloseTradingSessionRequest {
  export type AsObject = {};
}

export class CloseTradingSessionResponse extends jspb.Message {
  getMsgCode(): whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
  setMsgCode(value: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap]): void;

  getMsgText(): string;
  setMsgText(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloseTradingSessionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CloseTradingSessionResponse): CloseTradingSessionResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: CloseTradingSessionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloseTradingSessionResponse;
  static deserializeBinaryFromReader(
    message: CloseTradingSessionResponse,
    reader: jspb.BinaryReader,
  ): CloseTradingSessionResponse;
}

export namespace CloseTradingSessionResponse {
  export type AsObject = {
    msgCode: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
    msgText: string;
  };
}

export class PreTradingSessionRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PreTradingSessionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PreTradingSessionRequest): PreTradingSessionRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: PreTradingSessionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PreTradingSessionRequest;
  static deserializeBinaryFromReader(
    message: PreTradingSessionRequest,
    reader: jspb.BinaryReader,
  ): PreTradingSessionRequest;
}

export namespace PreTradingSessionRequest {
  export type AsObject = {};
}

export class PreTradingSessionResponse extends jspb.Message {
  getMsgCode(): whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
  setMsgCode(value: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap]): void;

  getMsgText(): string;
  setMsgText(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PreTradingSessionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PreTradingSessionResponse): PreTradingSessionResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: PreTradingSessionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PreTradingSessionResponse;
  static deserializeBinaryFromReader(
    message: PreTradingSessionResponse,
    reader: jspb.BinaryReader,
  ): PreTradingSessionResponse;
}

export namespace PreTradingSessionResponse {
  export type AsObject = {
    msgCode: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
    msgText: string;
  };
}

export class CloseExternalTradingSessionRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloseExternalTradingSessionRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: CloseExternalTradingSessionRequest,
  ): CloseExternalTradingSessionRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: CloseExternalTradingSessionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloseExternalTradingSessionRequest;
  static deserializeBinaryFromReader(
    message: CloseExternalTradingSessionRequest,
    reader: jspb.BinaryReader,
  ): CloseExternalTradingSessionRequest;
}

export namespace CloseExternalTradingSessionRequest {
  export type AsObject = {};
}

export class CloseExternalTradingSessionResponse extends jspb.Message {
  getMsgCode(): whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
  setMsgCode(value: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap]): void;

  getMsgText(): string;
  setMsgText(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloseExternalTradingSessionResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: CloseExternalTradingSessionResponse,
  ): CloseExternalTradingSessionResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: CloseExternalTradingSessionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloseExternalTradingSessionResponse;
  static deserializeBinaryFromReader(
    message: CloseExternalTradingSessionResponse,
    reader: jspb.BinaryReader,
  ): CloseExternalTradingSessionResponse;
}

export namespace CloseExternalTradingSessionResponse {
  export type AsObject = {
    msgCode: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
    msgText: string;
  };
}

export class UnlockAfterCloseExternalTradingRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnlockAfterCloseExternalTradingRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: UnlockAfterCloseExternalTradingRequest,
  ): UnlockAfterCloseExternalTradingRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: UnlockAfterCloseExternalTradingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnlockAfterCloseExternalTradingRequest;
  static deserializeBinaryFromReader(
    message: UnlockAfterCloseExternalTradingRequest,
    reader: jspb.BinaryReader,
  ): UnlockAfterCloseExternalTradingRequest;
}

export namespace UnlockAfterCloseExternalTradingRequest {
  export type AsObject = {};
}

export class UnlockAfterCloseExternalTradingResponse extends jspb.Message {
  getMsgCode(): whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
  setMsgCode(value: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap]): void;

  getMsgText(): string;
  setMsgText(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnlockAfterCloseExternalTradingResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: UnlockAfterCloseExternalTradingResponse,
  ): UnlockAfterCloseExternalTradingResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: UnlockAfterCloseExternalTradingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnlockAfterCloseExternalTradingResponse;
  static deserializeBinaryFromReader(
    message: UnlockAfterCloseExternalTradingResponse,
    reader: jspb.BinaryReader,
  ): UnlockAfterCloseExternalTradingResponse;
}

export namespace UnlockAfterCloseExternalTradingResponse {
  export type AsObject = {
    msgCode: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
    msgText: string;
  };
}

export class ResetOHLCRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetOHLCRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResetOHLCRequest): ResetOHLCRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: ResetOHLCRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetOHLCRequest;
  static deserializeBinaryFromReader(message: ResetOHLCRequest, reader: jspb.BinaryReader): ResetOHLCRequest;
}

export namespace ResetOHLCRequest {
  export type AsObject = {};
}

export class ResetOHLCResponse extends jspb.Message {
  getMsgCode(): whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
  setMsgCode(value: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap]): void;

  getMsgText(): string;
  setMsgText(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetOHLCResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResetOHLCResponse): ResetOHLCResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: ResetOHLCResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetOHLCResponse;
  static deserializeBinaryFromReader(message: ResetOHLCResponse, reader: jspb.BinaryReader): ResetOHLCResponse;
}

export namespace ResetOHLCResponse {
  export type AsObject = {
    msgCode: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
    msgText: string;
  };
}

export class MarketDataConfigRequest extends jspb.Message {
  clearMdSourceList(): void;
  getMdSourceList(): Array<system_model_pb.MarketDataSource>;
  setMdSourceList(value: Array<system_model_pb.MarketDataSource>): void;
  addMdSource(value?: system_model_pb.MarketDataSource, index?: number): system_model_pb.MarketDataSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketDataConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MarketDataConfigRequest): MarketDataConfigRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: MarketDataConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketDataConfigRequest;
  static deserializeBinaryFromReader(
    message: MarketDataConfigRequest,
    reader: jspb.BinaryReader,
  ): MarketDataConfigRequest;
}

export namespace MarketDataConfigRequest {
  export type AsObject = {
    mdSourceList: Array<system_model_pb.MarketDataSource.AsObject>;
  };
}

export class MarketDataConfigResponse extends jspb.Message {
  getMsgCode(): whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
  setMsgCode(value: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap]): void;

  getMsgText(): string;
  setMsgText(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketDataConfigResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MarketDataConfigResponse): MarketDataConfigResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: MarketDataConfigResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketDataConfigResponse;
  static deserializeBinaryFromReader(
    message: MarketDataConfigResponse,
    reader: jspb.BinaryReader,
  ): MarketDataConfigResponse;
}

export namespace MarketDataConfigResponse {
  export type AsObject = {
    msgCode: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
    msgText: string;
  };
}

export class WarningMessageRequest extends jspb.Message {
  getContent(): string;
  setContent(value: string): void;

  getEnableFlg(): boolean;
  setEnableFlg(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WarningMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WarningMessageRequest): WarningMessageRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: WarningMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WarningMessageRequest;
  static deserializeBinaryFromReader(message: WarningMessageRequest, reader: jspb.BinaryReader): WarningMessageRequest;
}

export namespace WarningMessageRequest {
  export type AsObject = {
    content: string;
    enableFlg: boolean;
  };
}

export class WarningMessageResponse extends jspb.Message {
  getMsgCode(): whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
  setMsgCode(value: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap]): void;

  getMsgText(): string;
  setMsgText(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WarningMessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WarningMessageResponse): WarningMessageResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: WarningMessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WarningMessageResponse;
  static deserializeBinaryFromReader(
    message: WarningMessageResponse,
    reader: jspb.BinaryReader,
  ): WarningMessageResponse;
}

export namespace WarningMessageResponse {
  export type AsObject = {
    msgCode: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
    msgText: string;
  };
}

export class CloseLastMarketRequest extends jspb.Message {
  getMarketCode(): string;
  setMarketCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloseLastMarketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CloseLastMarketRequest): CloseLastMarketRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: CloseLastMarketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloseLastMarketRequest;
  static deserializeBinaryFromReader(
    message: CloseLastMarketRequest,
    reader: jspb.BinaryReader,
  ): CloseLastMarketRequest;
}

export namespace CloseLastMarketRequest {
  export type AsObject = {
    marketCode: string;
  };
}

export class CloseLastMarketResponse extends jspb.Message {
  getMsgCode(): whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
  setMsgCode(value: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap]): void;

  getMsgText(): string;
  setMsgText(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloseLastMarketResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CloseLastMarketResponse): CloseLastMarketResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: CloseLastMarketResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloseLastMarketResponse;
  static deserializeBinaryFromReader(
    message: CloseLastMarketResponse,
    reader: jspb.BinaryReader,
  ): CloseLastMarketResponse;
}

export namespace CloseLastMarketResponse {
  export type AsObject = {
    msgCode: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
    msgText: string;
  };
}

export class OpenNextTradingSessionRequest extends jspb.Message {
  getMarketCode(): string;
  setMarketCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenNextTradingSessionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OpenNextTradingSessionRequest): OpenNextTradingSessionRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: OpenNextTradingSessionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenNextTradingSessionRequest;
  static deserializeBinaryFromReader(
    message: OpenNextTradingSessionRequest,
    reader: jspb.BinaryReader,
  ): OpenNextTradingSessionRequest;
}

export namespace OpenNextTradingSessionRequest {
  export type AsObject = {
    marketCode: string;
  };
}

export class OpenNextTradingSessionResponse extends jspb.Message {
  getMsgCode(): whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
  setMsgCode(value: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap]): void;

  getMsgText(): string;
  setMsgText(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenNextTradingSessionResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: OpenNextTradingSessionResponse,
  ): OpenNextTradingSessionResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: OpenNextTradingSessionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenNextTradingSessionResponse;
  static deserializeBinaryFromReader(
    message: OpenNextTradingSessionResponse,
    reader: jspb.BinaryReader,
  ): OpenNextTradingSessionResponse;
}

export namespace OpenNextTradingSessionResponse {
  export type AsObject = {
    msgCode: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
    msgText: string;
  };
}

export class MarketSettingsRequest extends jspb.Message {
  clearMarketSettingsList(): void;
  getMarketSettingsList(): Array<system_model_pb.MarketSettings>;
  setMarketSettingsList(value: Array<system_model_pb.MarketSettings>): void;
  addMarketSettings(value?: system_model_pb.MarketSettings, index?: number): system_model_pb.MarketSettings;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketSettingsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MarketSettingsRequest): MarketSettingsRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: MarketSettingsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketSettingsRequest;
  static deserializeBinaryFromReader(message: MarketSettingsRequest, reader: jspb.BinaryReader): MarketSettingsRequest;
}

export namespace MarketSettingsRequest {
  export type AsObject = {
    marketSettingsList: Array<system_model_pb.MarketSettings.AsObject>;
  };
}

export class MarketSettingsResponse extends jspb.Message {
  getMsgCode(): whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
  setMsgCode(value: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap]): void;

  getMsgText(): string;
  setMsgText(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketSettingsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MarketSettingsResponse): MarketSettingsResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: MarketSettingsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketSettingsResponse;
  static deserializeBinaryFromReader(
    message: MarketSettingsResponse,
    reader: jspb.BinaryReader,
  ): MarketSettingsResponse;
}

export namespace MarketSettingsResponse {
  export type AsObject = {
    msgCode: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
    msgText: string;
  };
}

export class ResetMarketDataRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetMarketDataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResetMarketDataRequest): ResetMarketDataRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: ResetMarketDataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetMarketDataRequest;
  static deserializeBinaryFromReader(
    message: ResetMarketDataRequest,
    reader: jspb.BinaryReader,
  ): ResetMarketDataRequest;
}

export namespace ResetMarketDataRequest {
  export type AsObject = {};
}

export class ResetMarketDataResponse extends jspb.Message {
  getMsgCode(): whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
  setMsgCode(value: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap]): void;

  getMsgText(): string;
  setMsgText(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetMarketDataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResetMarketDataResponse): ResetMarketDataResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: ResetMarketDataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetMarketDataResponse;
  static deserializeBinaryFromReader(
    message: ResetMarketDataResponse,
    reader: jspb.BinaryReader,
  ): ResetMarketDataResponse;
}

export namespace ResetMarketDataResponse {
  export type AsObject = {
    msgCode: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
    msgText: string;
  };
}
