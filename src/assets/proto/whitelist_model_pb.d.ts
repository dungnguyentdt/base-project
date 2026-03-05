// package:
// file: whitelist_model.proto

import * as jspb from "google-protobuf";

export class WhitelistRequest extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  getLabel(): string;
  setLabel(value: string): void;

  getAddressType(): string;
  setAddressType(value: string): void;

  getChain(): string;
  setChain(value: string): void;

  getPurpose(): string;
  setPurpose(value: string): void;

  getAccountId(): string;
  setAccountId(value: string): void;

  getCryptoExchange(): string;
  setCryptoExchange(value: string): void;

  getExchangeAccountName(): string;
  setExchangeAccountName(value: string): void;

  getExchangeAccountId(): string;
  setExchangeAccountId(value: string): void;

  getOrganisationId(): string;
  setOrganisationId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WhitelistRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WhitelistRequest): WhitelistRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: WhitelistRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WhitelistRequest;
  static deserializeBinaryFromReader(message: WhitelistRequest, reader: jspb.BinaryReader): WhitelistRequest;
}

export namespace WhitelistRequest {
  export type AsObject = {
    address: string;
    label: string;
    addressType: string;
    chain: string;
    purpose: string;
    accountId: string;
    cryptoExchange: string;
    exchangeAccountName: string;
    exchangeAccountId: string;
    organisationId: string;
  };
}

export class WhitelistResponse extends jspb.Message {
  getStatus(): StatusMap[keyof StatusMap];
  setStatus(value: StatusMap[keyof StatusMap]): void;

  getAvailableTime(): number;
  setAvailableTime(value: number): void;

  getMsgCode(): MsgCodeMap[keyof MsgCodeMap];
  setMsgCode(value: MsgCodeMap[keyof MsgCodeMap]): void;

  getAccountId(): string;
  setAccountId(value: string): void;

  getAddress(): string;
  setAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WhitelistResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WhitelistResponse): WhitelistResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: WhitelistResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WhitelistResponse;
  static deserializeBinaryFromReader(message: WhitelistResponse, reader: jspb.BinaryReader): WhitelistResponse;
}

export namespace WhitelistResponse {
  export type AsObject = {
    status: StatusMap[keyof StatusMap];
    availableTime: number;
    msgCode: MsgCodeMap[keyof MsgCodeMap];
    accountId: string;
    address: string;
  };
}

export class DeleteWhitelistRequest extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): void;

  getAddress(): string;
  setAddress(value: string): void;

  getOrganisationId(): string;
  setOrganisationId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteWhitelistRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteWhitelistRequest): DeleteWhitelistRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: DeleteWhitelistRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteWhitelistRequest;
  static deserializeBinaryFromReader(
    message: DeleteWhitelistRequest,
    reader: jspb.BinaryReader,
  ): DeleteWhitelistRequest;
}

export namespace DeleteWhitelistRequest {
  export type AsObject = {
    accountId: string;
    address: string;
    organisationId: string;
  };
}

export class DeleteWhitelistResponse extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): void;

  getAddress(): string;
  setAddress(value: string): void;

  getMsgCode(): MsgCodeMap[keyof MsgCodeMap];
  setMsgCode(value: MsgCodeMap[keyof MsgCodeMap]): void;

  getStatus(): StatusMap[keyof StatusMap];
  setStatus(value: StatusMap[keyof StatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteWhitelistResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteWhitelistResponse): DeleteWhitelistResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: DeleteWhitelistResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteWhitelistResponse;
  static deserializeBinaryFromReader(
    message: DeleteWhitelistResponse,
    reader: jspb.BinaryReader,
  ): DeleteWhitelistResponse;
}

export namespace DeleteWhitelistResponse {
  export type AsObject = {
    accountId: string;
    address: string;
    msgCode: MsgCodeMap[keyof MsgCodeMap];
    status: StatusMap[keyof StatusMap];
  };
}

export class RenameWhitelistRequest extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): void;

  getAddress(): string;
  setAddress(value: string): void;

  getLabel(): string;
  setLabel(value: string): void;

  getOrganisationId(): string;
  setOrganisationId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RenameWhitelistRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RenameWhitelistRequest): RenameWhitelistRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: RenameWhitelistRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RenameWhitelistRequest;
  static deserializeBinaryFromReader(
    message: RenameWhitelistRequest,
    reader: jspb.BinaryReader,
  ): RenameWhitelistRequest;
}

export namespace RenameWhitelistRequest {
  export type AsObject = {
    accountId: string;
    address: string;
    label: string;
    organisationId: string;
  };
}

export class RenameWhitelistResponse extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): void;

  getAddress(): string;
  setAddress(value: string): void;

  getMsgCode(): MsgCodeMap[keyof MsgCodeMap];
  setMsgCode(value: MsgCodeMap[keyof MsgCodeMap]): void;

  getStatus(): StatusMap[keyof StatusMap];
  setStatus(value: StatusMap[keyof StatusMap]): void;

  getLabel(): string;
  setLabel(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RenameWhitelistResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RenameWhitelistResponse): RenameWhitelistResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: RenameWhitelistResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RenameWhitelistResponse;
  static deserializeBinaryFromReader(
    message: RenameWhitelistResponse,
    reader: jspb.BinaryReader,
  ): RenameWhitelistResponse;
}

export namespace RenameWhitelistResponse {
  export type AsObject = {
    accountId: string;
    address: string;
    msgCode: MsgCodeMap[keyof MsgCodeMap];
    status: StatusMap[keyof StatusMap];
    label: string;
  };
}

export interface MsgCodeMap {
  CODE_RET_NONE: 0;
  CODE_RET_OK: 1;
  CODE_RET_ERROR: 2;
  CODE_RET_TIMEOUT: 3;
  MT_RET_MARKET_CLOSED: 4;
  MT_RET_EXCEED_MAX_ORDER_QUANTITY: 5;
  MT_RET_EXCEED_MIN_ORDER_QUANTITY: 6;
  MT_RET_REQUEST_INVALID_SYMBOL: 7;
  MT_RET_UNKNOWN_ORDER_ID: 8;
  MT_RET_REQUEST_INVALID_TRIGGER_PRICE: 9;
  MT_RET_REQUEST_INVALID_VOLUME: 10;
}

export const MsgCode: MsgCodeMap;

export interface StatusMap {
  STATUS_NONE: 0;
  STATUS_PENDING: 1;
  STATUS_IN_PROGRESS: 2;
  STATUS_COMPLETED: 3;
  STATUS_CANCELLED: 4;
  STATUS_REJECTED: 5;
  STATUS_VERIFIED: 6;
}

export const Status: StatusMap;
