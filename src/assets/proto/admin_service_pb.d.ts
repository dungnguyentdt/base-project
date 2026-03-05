// package:
// file: admin_service.proto

import * as jspb from "google-protobuf";
import * as trading_model_pb from "./trading_model_pb";
import * as system_model_pb from "./system_model_pb";
import * as query_model_pb from "./query_model_pb";
import * as pricing_model_pb from "./pricing_model_pb";
import * as admin_model_pb from "./admin_model_pb";
import * as whitelist_model_pb from "./whitelist_model_pb";

export class AdminGetPendingOrderListRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminGetPendingOrderListRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: AdminGetPendingOrderListRequest,
  ): AdminGetPendingOrderListRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: AdminGetPendingOrderListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminGetPendingOrderListRequest;
  static deserializeBinaryFromReader(
    message: AdminGetPendingOrderListRequest,
    reader: jspb.BinaryReader,
  ): AdminGetPendingOrderListRequest;
}

export namespace AdminGetPendingOrderListRequest {
  export type AsObject = {};
}

export class AdminGetPendingOrderListResponse extends jspb.Message {
  getMsgCode(): whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
  setMsgCode(value: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap]): void;

  getMsgText(): string;
  setMsgText(value: string): void;

  clearOrderList(): void;
  getOrderList(): Array<trading_model_pb.Order>;
  setOrderList(value: Array<trading_model_pb.Order>): void;
  addOrder(value?: trading_model_pb.Order, index?: number): trading_model_pb.Order;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminGetPendingOrderListResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: AdminGetPendingOrderListResponse,
  ): AdminGetPendingOrderListResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: AdminGetPendingOrderListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminGetPendingOrderListResponse;
  static deserializeBinaryFromReader(
    message: AdminGetPendingOrderListResponse,
    reader: jspb.BinaryReader,
  ): AdminGetPendingOrderListResponse;
}

export namespace AdminGetPendingOrderListResponse {
  export type AsObject = {
    msgCode: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
    msgText: string;
    orderList: Array<trading_model_pb.Order.AsObject>;
  };
}

export class AdminOrderUpdateStatusRequest extends jspb.Message {
  hasOrder(): boolean;
  clearOrder(): void;
  getOrder(): trading_model_pb.Order | undefined;
  setOrder(value?: trading_model_pb.Order): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminOrderUpdateStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AdminOrderUpdateStatusRequest): AdminOrderUpdateStatusRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: AdminOrderUpdateStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminOrderUpdateStatusRequest;
  static deserializeBinaryFromReader(
    message: AdminOrderUpdateStatusRequest,
    reader: jspb.BinaryReader,
  ): AdminOrderUpdateStatusRequest;
}

export namespace AdminOrderUpdateStatusRequest {
  export type AsObject = {
    order?: trading_model_pb.Order.AsObject;
  };
}

export class AdminOrderUpdateStatusResponse extends jspb.Message {
  getMsgCode(): whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
  setMsgCode(value: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap]): void;

  getMsgText(): string;
  setMsgText(value: string): void;

  hasOrder(): boolean;
  clearOrder(): void;
  getOrder(): trading_model_pb.Order | undefined;
  setOrder(value?: trading_model_pb.Order): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminOrderUpdateStatusResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: AdminOrderUpdateStatusResponse,
  ): AdminOrderUpdateStatusResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: AdminOrderUpdateStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminOrderUpdateStatusResponse;
  static deserializeBinaryFromReader(
    message: AdminOrderUpdateStatusResponse,
    reader: jspb.BinaryReader,
  ): AdminOrderUpdateStatusResponse;
}

export namespace AdminOrderUpdateStatusResponse {
  export type AsObject = {
    msgCode: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
    msgText: string;
    order?: trading_model_pb.Order.AsObject;
  };
}

export class AdminOrderManualRequest extends jspb.Message {
  hasOrder(): boolean;
  clearOrder(): void;
  getOrder(): trading_model_pb.Order | undefined;
  setOrder(value?: trading_model_pb.Order): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminOrderManualRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AdminOrderManualRequest): AdminOrderManualRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: AdminOrderManualRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminOrderManualRequest;
  static deserializeBinaryFromReader(
    message: AdminOrderManualRequest,
    reader: jspb.BinaryReader,
  ): AdminOrderManualRequest;
}

export namespace AdminOrderManualRequest {
  export type AsObject = {
    order?: trading_model_pb.Order.AsObject;
  };
}

export class AdminOrderManualResponse extends jspb.Message {
  getMsgCode(): whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
  setMsgCode(value: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap]): void;

  getMsgText(): string;
  setMsgText(value: string): void;

  hasOrder(): boolean;
  clearOrder(): void;
  getOrder(): trading_model_pb.Order | undefined;
  setOrder(value?: trading_model_pb.Order): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminOrderManualResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AdminOrderManualResponse): AdminOrderManualResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: AdminOrderManualResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminOrderManualResponse;
  static deserializeBinaryFromReader(
    message: AdminOrderManualResponse,
    reader: jspb.BinaryReader,
  ): AdminOrderManualResponse;
}

export namespace AdminOrderManualResponse {
  export type AsObject = {
    msgCode: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
    msgText: string;
    order?: trading_model_pb.Order.AsObject;
  };
}
