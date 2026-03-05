// package:
// file: trading_service.proto

import * as jspb from "google-protobuf";
import * as trading_model_pb from "./trading_model_pb";
import * as system_model_pb from "./system_model_pb";
import * as whitelist_model_pb from "./whitelist_model_pb";

export class NewOrderSingleRequest extends jspb.Message {
  hasOrder(): boolean;
  clearOrder(): void;
  getOrder(): trading_model_pb.Order | undefined;
  setOrder(value?: trading_model_pb.Order): void;

  getSecretKey(): string;
  setSecretKey(value: string): void;

  getSessionId(): string;
  setSessionId(value: string): void;

  getRandomNumber(): string;
  setRandomNumber(value: string): void;

  getHashPassword(): string;
  setHashPassword(value: string): void;

  getHashPasswordOnly8(): string;
  setHashPasswordOnly8(value: string): void;

  getHiddenConfirmFlg(): boolean;
  setHiddenConfirmFlg(value: boolean): void;

  getPsplAccountNo(): string;
  setPsplAccountNo(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewOrderSingleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NewOrderSingleRequest): NewOrderSingleRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: NewOrderSingleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewOrderSingleRequest;
  static deserializeBinaryFromReader(message: NewOrderSingleRequest, reader: jspb.BinaryReader): NewOrderSingleRequest;
}

export namespace NewOrderSingleRequest {
  export type AsObject = {
    order?: trading_model_pb.Order.AsObject;
    secretKey: string;
    sessionId: string;
    randomNumber: string;
    hashPassword: string;
    hashPasswordOnly8: string;
    hiddenConfirmFlg: boolean;
    psplAccountNo: string;
  };
}

export class NewOrderSingleResponse extends jspb.Message {
  getMsgCode(): whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
  setMsgCode(value: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap]): void;

  getMsgText(): string;
  setMsgText(value: string): void;

  hasOrder(): boolean;
  clearOrder(): void;
  getOrder(): trading_model_pb.Order | undefined;
  setOrder(value?: trading_model_pb.Order): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewOrderSingleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: NewOrderSingleResponse): NewOrderSingleResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: NewOrderSingleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewOrderSingleResponse;
  static deserializeBinaryFromReader(
    message: NewOrderSingleResponse,
    reader: jspb.BinaryReader,
  ): NewOrderSingleResponse;
}

export namespace NewOrderSingleResponse {
  export type AsObject = {
    msgCode: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
    msgText: string;
    order?: trading_model_pb.Order.AsObject;
  };
}

export class NewOrderMultiRequest extends jspb.Message {
  clearOrderList(): void;
  getOrderList(): Array<trading_model_pb.Order>;
  setOrderList(value: Array<trading_model_pb.Order>): void;
  addOrder(value?: trading_model_pb.Order, index?: number): trading_model_pb.Order;

  getSecretKey(): string;
  setSecretKey(value: string): void;

  getSessionId(): string;
  setSessionId(value: string): void;

  getRandomNumber(): string;
  setRandomNumber(value: string): void;

  getHashPassword(): string;
  setHashPassword(value: string): void;

  getHashPasswordOnly8(): string;
  setHashPasswordOnly8(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewOrderMultiRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NewOrderMultiRequest): NewOrderMultiRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: NewOrderMultiRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewOrderMultiRequest;
  static deserializeBinaryFromReader(message: NewOrderMultiRequest, reader: jspb.BinaryReader): NewOrderMultiRequest;
}

export namespace NewOrderMultiRequest {
  export type AsObject = {
    orderList: Array<trading_model_pb.Order.AsObject>;
    secretKey: string;
    sessionId: string;
    randomNumber: string;
    hashPassword: string;
    hashPasswordOnly8: string;
  };
}

export class NewOrderMultiResponse extends jspb.Message {
  getMsgCode(): whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
  setMsgCode(value: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap]): void;

  getMsgText(): string;
  setMsgText(value: string): void;

  clearOrderList(): void;
  getOrderList(): Array<trading_model_pb.Order>;
  setOrderList(value: Array<trading_model_pb.Order>): void;
  addOrder(value?: trading_model_pb.Order, index?: number): trading_model_pb.Order;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewOrderMultiResponse.AsObject;
  static toObject(includeInstance: boolean, msg: NewOrderMultiResponse): NewOrderMultiResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: NewOrderMultiResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewOrderMultiResponse;
  static deserializeBinaryFromReader(message: NewOrderMultiResponse, reader: jspb.BinaryReader): NewOrderMultiResponse;
}

export namespace NewOrderMultiResponse {
  export type AsObject = {
    msgCode: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
    msgText: string;
    orderList: Array<trading_model_pb.Order.AsObject>;
  };
}

export class CloseOrderRequest extends jspb.Message {
  clearOrderList(): void;
  getOrderList(): Array<trading_model_pb.Order>;
  setOrderList(value: Array<trading_model_pb.Order>): void;
  addOrder(value?: trading_model_pb.Order, index?: number): trading_model_pb.Order;

  getSecretKey(): string;
  setSecretKey(value: string): void;

  getSessionId(): string;
  setSessionId(value: string): void;

  getRandomNumber(): string;
  setRandomNumber(value: string): void;

  getHashPassword(): string;
  setHashPassword(value: string): void;

  getHashPasswordOnly8(): string;
  setHashPasswordOnly8(value: string): void;

  getHiddenConfirmFlg(): boolean;
  setHiddenConfirmFlg(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloseOrderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CloseOrderRequest): CloseOrderRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: CloseOrderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloseOrderRequest;
  static deserializeBinaryFromReader(message: CloseOrderRequest, reader: jspb.BinaryReader): CloseOrderRequest;
}

export namespace CloseOrderRequest {
  export type AsObject = {
    orderList: Array<trading_model_pb.Order.AsObject>;
    secretKey: string;
    sessionId: string;
    randomNumber: string;
    hashPassword: string;
    hashPasswordOnly8: string;
    hiddenConfirmFlg: boolean;
  };
}

export class CloseOrderResponse extends jspb.Message {
  getMsgCode(): whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
  setMsgCode(value: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap]): void;

  getMsgText(): string;
  setMsgText(value: string): void;

  clearOrderList(): void;
  getOrderList(): Array<trading_model_pb.Order>;
  setOrderList(value: Array<trading_model_pb.Order>): void;
  addOrder(value?: trading_model_pb.Order, index?: number): trading_model_pb.Order;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloseOrderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CloseOrderResponse): CloseOrderResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: CloseOrderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloseOrderResponse;
  static deserializeBinaryFromReader(message: CloseOrderResponse, reader: jspb.BinaryReader): CloseOrderResponse;
}

export namespace CloseOrderResponse {
  export type AsObject = {
    msgCode: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
    msgText: string;
    orderList: Array<trading_model_pb.Order.AsObject>;
  };
}

export class ModifyOrderRequest extends jspb.Message {
  clearOrderList(): void;
  getOrderList(): Array<trading_model_pb.Order>;
  setOrderList(value: Array<trading_model_pb.Order>): void;
  addOrder(value?: trading_model_pb.Order, index?: number): trading_model_pb.Order;

  getSecretKey(): string;
  setSecretKey(value: string): void;

  getSessionId(): string;
  setSessionId(value: string): void;

  getRandomNumber(): string;
  setRandomNumber(value: string): void;

  getHashPassword(): string;
  setHashPassword(value: string): void;

  getHashPasswordOnly8(): string;
  setHashPasswordOnly8(value: string): void;

  getHiddenConfirmFlg(): boolean;
  setHiddenConfirmFlg(value: boolean): void;

  getTeamCode(): string;
  setTeamCode(value: string): void;

  getTeamPassword(): string;
  setTeamPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModifyOrderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ModifyOrderRequest): ModifyOrderRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: ModifyOrderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModifyOrderRequest;
  static deserializeBinaryFromReader(message: ModifyOrderRequest, reader: jspb.BinaryReader): ModifyOrderRequest;
}

export namespace ModifyOrderRequest {
  export type AsObject = {
    orderList: Array<trading_model_pb.Order.AsObject>;
    secretKey: string;
    sessionId: string;
    randomNumber: string;
    hashPassword: string;
    hashPasswordOnly8: string;
    hiddenConfirmFlg: boolean;
    teamCode: string;
    teamPassword: string;
  };
}

export class ModifyOrderResponse extends jspb.Message {
  getMsgCode(): whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
  setMsgCode(value: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap]): void;

  getMsgText(): string;
  setMsgText(value: string): void;

  clearOrderList(): void;
  getOrderList(): Array<trading_model_pb.Order>;
  setOrderList(value: Array<trading_model_pb.Order>): void;
  addOrder(value?: trading_model_pb.Order, index?: number): trading_model_pb.Order;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModifyOrderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ModifyOrderResponse): ModifyOrderResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: ModifyOrderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModifyOrderResponse;
  static deserializeBinaryFromReader(message: ModifyOrderResponse, reader: jspb.BinaryReader): ModifyOrderResponse;
}

export namespace ModifyOrderResponse {
  export type AsObject = {
    msgCode: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
    msgText: string;
    orderList: Array<trading_model_pb.Order.AsObject>;
  };
}

export class CancelOrderRequest extends jspb.Message {
  clearOrderList(): void;
  getOrderList(): Array<trading_model_pb.Order>;
  setOrderList(value: Array<trading_model_pb.Order>): void;
  addOrder(value?: trading_model_pb.Order, index?: number): trading_model_pb.Order;

  getSecretKey(): string;
  setSecretKey(value: string): void;

  getSessionId(): string;
  setSessionId(value: string): void;

  getRandomNumber(): string;
  setRandomNumber(value: string): void;

  getHashPassword(): string;
  setHashPassword(value: string): void;

  getHashPasswordOnly8(): string;
  setHashPasswordOnly8(value: string): void;

  getHiddenConfirmFlg(): boolean;
  setHiddenConfirmFlg(value: boolean): void;

  getTeamCode(): string;
  setTeamCode(value: string): void;

  getTeamPassword(): string;
  setTeamPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelOrderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelOrderRequest): CancelOrderRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: CancelOrderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelOrderRequest;
  static deserializeBinaryFromReader(message: CancelOrderRequest, reader: jspb.BinaryReader): CancelOrderRequest;
}

export namespace CancelOrderRequest {
  export type AsObject = {
    orderList: Array<trading_model_pb.Order.AsObject>;
    secretKey: string;
    sessionId: string;
    randomNumber: string;
    hashPassword: string;
    hashPasswordOnly8: string;
    hiddenConfirmFlg: boolean;
    teamCode: string;
    teamPassword: string;
  };
}

export class CancelOrderResponse extends jspb.Message {
  getMsgCode(): whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
  setMsgCode(value: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap]): void;

  getMsgText(): string;
  setMsgText(value: string): void;

  clearOrderList(): void;
  getOrderList(): Array<trading_model_pb.Order>;
  setOrderList(value: Array<trading_model_pb.Order>): void;
  addOrder(value?: trading_model_pb.Order, index?: number): trading_model_pb.Order;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelOrderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CancelOrderResponse): CancelOrderResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: CancelOrderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelOrderResponse;
  static deserializeBinaryFromReader(message: CancelOrderResponse, reader: jspb.BinaryReader): CancelOrderResponse;
}

export namespace CancelOrderResponse {
  export type AsObject = {
    msgCode: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
    msgText: string;
    orderList: Array<trading_model_pb.Order.AsObject>;
  };
}

export class OrderEvent extends jspb.Message {
  clearOrderList(): void;
  getOrderList(): Array<trading_model_pb.Order>;
  setOrderList(value: Array<trading_model_pb.Order>): void;
  addOrder(value?: trading_model_pb.Order, index?: number): trading_model_pb.Order;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderEvent.AsObject;
  static toObject(includeInstance: boolean, msg: OrderEvent): OrderEvent.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: OrderEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderEvent;
  static deserializeBinaryFromReader(message: OrderEvent, reader: jspb.BinaryReader): OrderEvent;
}

export namespace OrderEvent {
  export type AsObject = {
    orderList: Array<trading_model_pb.Order.AsObject>;
  };
}

export class TradeEvent extends jspb.Message {
  clearTradeList(): void;
  getTradeList(): Array<trading_model_pb.Trade>;
  setTradeList(value: Array<trading_model_pb.Trade>): void;
  addTrade(value?: trading_model_pb.Trade, index?: number): trading_model_pb.Trade;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradeEvent.AsObject;
  static toObject(includeInstance: boolean, msg: TradeEvent): TradeEvent.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: TradeEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradeEvent;
  static deserializeBinaryFromReader(message: TradeEvent, reader: jspb.BinaryReader): TradeEvent;
}

export namespace TradeEvent {
  export type AsObject = {
    tradeList: Array<trading_model_pb.Trade.AsObject>;
  };
}

export class SubscribeTradeEventRequest extends jspb.Message {
  clearSymbolCodeList(): void;
  getSymbolCodeList(): Array<string>;
  setSymbolCodeList(value: Array<string>): void;
  addSymbolCode(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeTradeEventRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeTradeEventRequest): SubscribeTradeEventRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: SubscribeTradeEventRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeTradeEventRequest;
  static deserializeBinaryFromReader(
    message: SubscribeTradeEventRequest,
    reader: jspb.BinaryReader,
  ): SubscribeTradeEventRequest;
}

export namespace SubscribeTradeEventRequest {
  export type AsObject = {
    symbolCodeList: Array<string>;
  };
}

export class SubscribeTradeEventResponse extends jspb.Message {
  getMsgCode(): whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
  setMsgCode(value: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap]): void;

  getMsgText(): string;
  setMsgText(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeTradeEventResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeTradeEventResponse): SubscribeTradeEventResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: SubscribeTradeEventResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeTradeEventResponse;
  static deserializeBinaryFromReader(
    message: SubscribeTradeEventResponse,
    reader: jspb.BinaryReader,
  ): SubscribeTradeEventResponse;
}

export namespace SubscribeTradeEventResponse {
  export type AsObject = {
    msgCode: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
    msgText: string;
  };
}

export class UnsubscribeTradeEventRequest extends jspb.Message {
  clearSymbolCodeList(): void;
  getSymbolCodeList(): Array<string>;
  setSymbolCodeList(value: Array<string>): void;
  addSymbolCode(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnsubscribeTradeEventRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UnsubscribeTradeEventRequest): UnsubscribeTradeEventRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: UnsubscribeTradeEventRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnsubscribeTradeEventRequest;
  static deserializeBinaryFromReader(
    message: UnsubscribeTradeEventRequest,
    reader: jspb.BinaryReader,
  ): UnsubscribeTradeEventRequest;
}

export namespace UnsubscribeTradeEventRequest {
  export type AsObject = {
    symbolCodeList: Array<string>;
  };
}

export class UnsubscribeTradeEventResponse extends jspb.Message {
  getMsgCode(): whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
  setMsgCode(value: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap]): void;

  getMsgText(): string;
  setMsgText(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnsubscribeTradeEventResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UnsubscribeTradeEventResponse): UnsubscribeTradeEventResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: UnsubscribeTradeEventResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnsubscribeTradeEventResponse;
  static deserializeBinaryFromReader(
    message: UnsubscribeTradeEventResponse,
    reader: jspb.BinaryReader,
  ): UnsubscribeTradeEventResponse;
}

export namespace UnsubscribeTradeEventResponse {
  export type AsObject = {
    msgCode: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
    msgText: string;
  };
}

export class UpdateOrderStatusRequest extends jspb.Message {
  hasOrder(): boolean;
  clearOrder(): void;
  getOrder(): trading_model_pb.Order | undefined;
  setOrder(value?: trading_model_pb.Order): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateOrderStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateOrderStatusRequest): UpdateOrderStatusRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: UpdateOrderStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateOrderStatusRequest;
  static deserializeBinaryFromReader(
    message: UpdateOrderStatusRequest,
    reader: jspb.BinaryReader,
  ): UpdateOrderStatusRequest;
}

export namespace UpdateOrderStatusRequest {
  export type AsObject = {
    order?: trading_model_pb.Order.AsObject;
  };
}

export class UpdateOrderStatusResponse extends jspb.Message {
  getMsgCode(): whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
  setMsgCode(value: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap]): void;

  getMsgText(): string;
  setMsgText(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateOrderStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateOrderStatusResponse): UpdateOrderStatusResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: UpdateOrderStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateOrderStatusResponse;
  static deserializeBinaryFromReader(
    message: UpdateOrderStatusResponse,
    reader: jspb.BinaryReader,
  ): UpdateOrderStatusResponse;
}

export namespace UpdateOrderStatusResponse {
  export type AsObject = {
    msgCode: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
    msgText: string;
  };
}
