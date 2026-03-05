// package:
// file: query_service.proto

import * as jspb from "google-protobuf";
import * as trading_model_pb from "./trading_model_pb";
import * as system_model_pb from "./system_model_pb";
import * as query_model_pb from "./query_model_pb";
import * as whitelist_model_pb from "./whitelist_model_pb";

export class GetOrderRequest extends jspb.Message {
  getSymbolCode(): string;
  setSymbolCode(value: string): void;

  getAccountId(): number;
  setAccountId(value: number): void;

  getSide(): trading_model_pb.SideMap[keyof trading_model_pb.SideMap];
  setSide(value: trading_model_pb.SideMap[keyof trading_model_pb.SideMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrderRequest): GetOrderRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: GetOrderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrderRequest;
  static deserializeBinaryFromReader(message: GetOrderRequest, reader: jspb.BinaryReader): GetOrderRequest;
}

export namespace GetOrderRequest {
  export type AsObject = {
    symbolCode: string;
    accountId: number;
    side: trading_model_pb.SideMap[keyof trading_model_pb.SideMap];
  };
}

export class GetOrderResponse extends jspb.Message {
  getMsgCode(): whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
  setMsgCode(value: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap]): void;

  getMsgText(): string;
  setMsgText(value: string): void;

  clearOrderList(): void;
  getOrderList(): Array<trading_model_pb.Order>;
  setOrderList(value: Array<trading_model_pb.Order>): void;
  addOrder(value?: trading_model_pb.Order, index?: number): trading_model_pb.Order;

  getAccountId(): number;
  setAccountId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrderResponse): GetOrderResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: GetOrderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrderResponse;
  static deserializeBinaryFromReader(message: GetOrderResponse, reader: jspb.BinaryReader): GetOrderResponse;
}

export namespace GetOrderResponse {
  export type AsObject = {
    msgCode: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
    msgText: string;
    orderList: Array<trading_model_pb.Order.AsObject>;
    accountId: number;
  };
}

export class GetContractRequest extends jspb.Message {
  getSymbolCode(): string;
  setSymbolCode(value: string): void;

  getAccountId(): number;
  setAccountId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetContractRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetContractRequest): GetContractRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: GetContractRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetContractRequest;
  static deserializeBinaryFromReader(message: GetContractRequest, reader: jspb.BinaryReader): GetContractRequest;
}

export namespace GetContractRequest {
  export type AsObject = {
    symbolCode: string;
    accountId: number;
  };
}

export class GetContractResponse extends jspb.Message {
  getMsgCode(): whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
  setMsgCode(value: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap]): void;

  getMsgText(): string;
  setMsgText(value: string): void;

  clearContractList(): void;
  getContractList(): Array<trading_model_pb.Contract>;
  setContractList(value: Array<trading_model_pb.Contract>): void;
  addContract(value?: trading_model_pb.Contract, index?: number): trading_model_pb.Contract;

  getAccountId(): number;
  setAccountId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetContractResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetContractResponse): GetContractResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: GetContractResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetContractResponse;
  static deserializeBinaryFromReader(message: GetContractResponse, reader: jspb.BinaryReader): GetContractResponse;
}

export namespace GetContractResponse {
  export type AsObject = {
    msgCode: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
    msgText: string;
    contractList: Array<trading_model_pb.Contract.AsObject>;
    accountId: number;
  };
}

export class GetPositionRequest extends jspb.Message {
  getAccountId(): number;
  setAccountId(value: number): void;

  getSymbolCode(): string;
  setSymbolCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPositionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPositionRequest): GetPositionRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: GetPositionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPositionRequest;
  static deserializeBinaryFromReader(message: GetPositionRequest, reader: jspb.BinaryReader): GetPositionRequest;
}

export namespace GetPositionRequest {
  export type AsObject = {
    accountId: number;
    symbolCode: string;
  };
}

export class GetPositionResponse extends jspb.Message {
  getMsgCode(): whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
  setMsgCode(value: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap]): void;

  getMsgText(): string;
  setMsgText(value: string): void;

  clearContractList(): void;
  getContractList(): Array<trading_model_pb.Position>;
  setContractList(value: Array<trading_model_pb.Position>): void;
  addContract(value?: trading_model_pb.Position, index?: number): trading_model_pb.Position;

  getSymbolCode(): string;
  setSymbolCode(value: string): void;

  getAccountId(): number;
  setAccountId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPositionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPositionResponse): GetPositionResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: GetPositionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPositionResponse;
  static deserializeBinaryFromReader(message: GetPositionResponse, reader: jspb.BinaryReader): GetPositionResponse;
}

export namespace GetPositionResponse {
  export type AsObject = {
    msgCode: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
    msgText: string;
    contractList: Array<trading_model_pb.Position.AsObject>;
    symbolCode: string;
    accountId: number;
  };
}

export class SymbolListRequest extends jspb.Message {
  getAccountId(): number;
  setAccountId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SymbolListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SymbolListRequest): SymbolListRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: SymbolListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SymbolListRequest;
  static deserializeBinaryFromReader(message: SymbolListRequest, reader: jspb.BinaryReader): SymbolListRequest;
}

export namespace SymbolListRequest {
  export type AsObject = {
    accountId: number;
  };
}

export class SymbolListResponse extends jspb.Message {
  getMsgCode(): whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
  setMsgCode(value: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap]): void;

  getMsgText(): string;
  setMsgText(value: string): void;

  clearSymbolList(): void;
  getSymbolList(): Array<query_model_pb.Symbol>;
  setSymbolList(value: Array<query_model_pb.Symbol>): void;
  addSymbol(value?: query_model_pb.Symbol, index?: number): query_model_pb.Symbol;

  getAccountId(): number;
  setAccountId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SymbolListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SymbolListResponse): SymbolListResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: SymbolListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SymbolListResponse;
  static deserializeBinaryFromReader(message: SymbolListResponse, reader: jspb.BinaryReader): SymbolListResponse;
}

export namespace SymbolListResponse {
  export type AsObject = {
    msgCode: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
    msgText: string;
    symbolList: Array<query_model_pb.Symbol.AsObject>;
    accountId: number;
  };
}

export class GetTradeHistoryRequest extends jspb.Message {
  getSymbolCode(): string;
  setSymbolCode(value: string): void;

  getOrderType(): trading_model_pb.OrderTypeMap[keyof trading_model_pb.OrderTypeMap];
  setOrderType(value: trading_model_pb.OrderTypeMap[keyof trading_model_pb.OrderTypeMap]): void;

  getFromDatetime(): number;
  setFromDatetime(value: number): void;

  getToDatetime(): number;
  setToDatetime(value: number): void;

  getAccountId(): number;
  setAccountId(value: number): void;

  getSide(): trading_model_pb.SideMap[keyof trading_model_pb.SideMap];
  setSide(value: trading_model_pb.SideMap[keyof trading_model_pb.SideMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTradeHistoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTradeHistoryRequest): GetTradeHistoryRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: GetTradeHistoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTradeHistoryRequest;
  static deserializeBinaryFromReader(
    message: GetTradeHistoryRequest,
    reader: jspb.BinaryReader,
  ): GetTradeHistoryRequest;
}

export namespace GetTradeHistoryRequest {
  export type AsObject = {
    symbolCode: string;
    orderType: trading_model_pb.OrderTypeMap[keyof trading_model_pb.OrderTypeMap];
    fromDatetime: number;
    toDatetime: number;
    accountId: number;
    side: trading_model_pb.SideMap[keyof trading_model_pb.SideMap];
  };
}

export class GetTradeHistoryResponse extends jspb.Message {
  getMsgCode(): whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
  setMsgCode(value: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap]): void;

  getMsgText(): string;
  setMsgText(value: string): void;

  clearTradeList(): void;
  getTradeList(): Array<trading_model_pb.Trade>;
  setTradeList(value: Array<trading_model_pb.Trade>): void;
  addTrade(value?: trading_model_pb.Trade, index?: number): trading_model_pb.Trade;

  getAccountId(): number;
  setAccountId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTradeHistoryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTradeHistoryResponse): GetTradeHistoryResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: GetTradeHistoryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTradeHistoryResponse;
  static deserializeBinaryFromReader(
    message: GetTradeHistoryResponse,
    reader: jspb.BinaryReader,
  ): GetTradeHistoryResponse;
}

export namespace GetTradeHistoryResponse {
  export type AsObject = {
    msgCode: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
    msgText: string;
    tradeList: Array<trading_model_pb.Trade.AsObject>;
    accountId: number;
  };
}

export class GetOrderHistoryRequest extends jspb.Message {
  getSymbolCode(): string;
  setSymbolCode(value: string): void;

  getOrderType(): trading_model_pb.OrderTypeMap[keyof trading_model_pb.OrderTypeMap];
  setOrderType(value: trading_model_pb.OrderTypeMap[keyof trading_model_pb.OrderTypeMap]): void;

  getFromDatetime(): number;
  setFromDatetime(value: number): void;

  getToDatetime(): number;
  setToDatetime(value: number): void;

  getOrderState(): trading_model_pb.OrderStateMap[keyof trading_model_pb.OrderStateMap];
  setOrderState(value: trading_model_pb.OrderStateMap[keyof trading_model_pb.OrderStateMap]): void;

  getAccountId(): number;
  setAccountId(value: number): void;

  getSide(): trading_model_pb.SideMap[keyof trading_model_pb.SideMap];
  setSide(value: trading_model_pb.SideMap[keyof trading_model_pb.SideMap]): void;

  getPsplAccountNo(): string;
  setPsplAccountNo(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrderHistoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrderHistoryRequest): GetOrderHistoryRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: GetOrderHistoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrderHistoryRequest;
  static deserializeBinaryFromReader(
    message: GetOrderHistoryRequest,
    reader: jspb.BinaryReader,
  ): GetOrderHistoryRequest;
}

export namespace GetOrderHistoryRequest {
  export type AsObject = {
    symbolCode: string;
    orderType: trading_model_pb.OrderTypeMap[keyof trading_model_pb.OrderTypeMap];
    fromDatetime: number;
    toDatetime: number;
    orderState: trading_model_pb.OrderStateMap[keyof trading_model_pb.OrderStateMap];
    accountId: number;
    side: trading_model_pb.SideMap[keyof trading_model_pb.SideMap];
    psplAccountNo: string;
  };
}

export class GetOrderHistoryResponse extends jspb.Message {
  getMsgCode(): whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
  setMsgCode(value: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap]): void;

  getMsgText(): string;
  setMsgText(value: string): void;

  clearOrderList(): void;
  getOrderList(): Array<trading_model_pb.Order>;
  setOrderList(value: Array<trading_model_pb.Order>): void;
  addOrder(value?: trading_model_pb.Order, index?: number): trading_model_pb.Order;

  getAccountId(): number;
  setAccountId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrderHistoryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrderHistoryResponse): GetOrderHistoryResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: GetOrderHistoryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrderHistoryResponse;
  static deserializeBinaryFromReader(
    message: GetOrderHistoryResponse,
    reader: jspb.BinaryReader,
  ): GetOrderHistoryResponse;
}

export namespace GetOrderHistoryResponse {
  export type AsObject = {
    msgCode: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
    msgText: string;
    orderList: Array<trading_model_pb.Order.AsObject>;
    accountId: number;
  };
}

export class SymbolUpdateRequest extends jspb.Message {
  clearSymbolsList(): void;
  getSymbolsList(): Array<query_model_pb.Symbol>;
  setSymbolsList(value: Array<query_model_pb.Symbol>): void;
  addSymbols(value?: query_model_pb.Symbol, index?: number): query_model_pb.Symbol;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SymbolUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SymbolUpdateRequest): SymbolUpdateRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: SymbolUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SymbolUpdateRequest;
  static deserializeBinaryFromReader(message: SymbolUpdateRequest, reader: jspb.BinaryReader): SymbolUpdateRequest;
}

export namespace SymbolUpdateRequest {
  export type AsObject = {
    symbolsList: Array<query_model_pb.Symbol.AsObject>;
  };
}

export class SymbolUpdateResponse extends jspb.Message {
  getMsgCode(): whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
  setMsgCode(value: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap]): void;

  getMsgText(): string;
  setMsgText(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SymbolUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SymbolUpdateResponse): SymbolUpdateResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: SymbolUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SymbolUpdateResponse;
  static deserializeBinaryFromReader(message: SymbolUpdateResponse, reader: jspb.BinaryReader): SymbolUpdateResponse;
}

export namespace SymbolUpdateResponse {
  export type AsObject = {
    msgCode: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
    msgText: string;
  };
}

export class GetOrderStatusRequest extends jspb.Message {
  getAccountId(): number;
  setAccountId(value: number): void;

  getSymbolCode(): string;
  setSymbolCode(value: string): void;

  getOrderId(): string;
  setOrderId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrderStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrderStatusRequest): GetOrderStatusRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: GetOrderStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrderStatusRequest;
  static deserializeBinaryFromReader(message: GetOrderStatusRequest, reader: jspb.BinaryReader): GetOrderStatusRequest;
}

export namespace GetOrderStatusRequest {
  export type AsObject = {
    accountId: number;
    symbolCode: string;
    orderId: string;
  };
}

export class GetOrderStatusResponse extends jspb.Message {
  getMsgCode(): whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
  setMsgCode(value: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap]): void;

  getMsgText(): string;
  setMsgText(value: string): void;

  hasOrder(): boolean;
  clearOrder(): void;
  getOrder(): trading_model_pb.Order | undefined;
  setOrder(value?: trading_model_pb.Order): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrderStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrderStatusResponse): GetOrderStatusResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: GetOrderStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrderStatusResponse;
  static deserializeBinaryFromReader(
    message: GetOrderStatusResponse,
    reader: jspb.BinaryReader,
  ): GetOrderStatusResponse;
}

export namespace GetOrderStatusResponse {
  export type AsObject = {
    msgCode: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
    msgText: string;
    order?: trading_model_pb.Order.AsObject;
  };
}
