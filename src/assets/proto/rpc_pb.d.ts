// package:
// file: rpc.proto

import * as jspb from "google-protobuf";

export class RpcMessage extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getContextId(): number;
  setContextId(value: number): void;

  getPayloadData(): Uint8Array | string;
  getPayloadData_asU8(): Uint8Array;
  getPayloadData_asB64(): string;
  setPayloadData(value: Uint8Array | string): void;

  getPayloadClass(): RpcMessage.PayloadMap[keyof RpcMessage.PayloadMap];
  setPayloadClass(value: RpcMessage.PayloadMap[keyof RpcMessage.PayloadMap]): void;

  getResult(): RpcMessage.ResultMap[keyof RpcMessage.ResultMap];
  setResult(value: RpcMessage.ResultMap[keyof RpcMessage.ResultMap]): void;

  getVersion(): string;
  setVersion(value: string): void;

  getService(): string;
  setService(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RpcMessage.AsObject;
  static toObject(includeInstance: boolean, msg: RpcMessage): RpcMessage.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: RpcMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RpcMessage;
  static deserializeBinaryFromReader(message: RpcMessage, reader: jspb.BinaryReader): RpcMessage;
}

export namespace RpcMessage {
  export type AsObject = {
    id: number;
    contextId: number;
    payloadData: Uint8Array | string;
    payloadClass: RpcMessage.PayloadMap[keyof RpcMessage.PayloadMap];
    result: RpcMessage.ResultMap[keyof RpcMessage.ResultMap];
    version: string;
    service: string;
  };

  export interface PayloadMap {
    PAYLOAD_NONE: 0;
    WHITELIST_REQ: 1;
    WHITELIST_RES: 2;
    FUNDING_REQ: 3;
    FUNDING_RES: 4;
    WHITELIST_DEL_REQ: 5;
    WHITELIST_DEL_RES: 6;
    WHITELIST_RENAME_REQ: 7;
    WHITELIST_RENAME_RES: 8;
    NOTIFICATION: 9;
    QUOTE_EVENT: 10;
    TRADE_EVENT: 11;
    LAST_QUOTE_REQ: 12;
    LAST_QUOTE_RES: 13;
    SYMBOL_LIST_REQ: 14;
    SYMBOL_LIST_RES: 15;
    SYMBOL_UPDATE_REQ: 16;
    SYMBOL_UPDATE_RES: 17;
    NEW_ORDER_SINGLE_REQ: 18;
    MODIFY_ORDER_REQ: 19;
    CANCEL_ORDER_REQ: 20;
    NEW_ORDER_SINGLE_RES: 21;
    MODIFY_ORDER_RES: 22;
    CANCEL_ORDER_RES: 23;
    ORDER_EVENT: 24;
    UPDATE_ORDER_STATUS_REQ: 25;
    CREATE_VAULT_REQ: 26;
    CREATE_VAULT_RES: 27;
    CREATE_ACCOUNT_REQ: 28;
  }

  export const Payload: PayloadMap;

  export interface ResultMap {
    RESULT_NONE: 0;
    INVALID_VERSION: 2;
    INVALID_SERVICE: 3;
    INVALID_PAYLOAD: 4;
    NOT_AUTHENTICATED: 5;
    SERVICE_TIMEOUT: 6;
    SERVICE_REJECTED: 7;
    SERVICE_UNAVAILABLE: 8;
    MAINTAINANCE: 9;
    INTERNAL_ERROR: 99;
    SUCCESS: 100;
  }

  export const Result: ResultMap;
}
