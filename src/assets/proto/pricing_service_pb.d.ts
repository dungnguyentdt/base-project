// package:
// file: pricing_service.proto

import * as jspb from "google-protobuf";
import * as pricing_model_pb from "./pricing_model_pb";
import * as system_model_pb from "./system_model_pb";
import * as whitelist_model_pb from "./whitelist_model_pb";

export class GetLastQuotesRequest extends jspb.Message {
  clearSymbolCodeList(): void;
  getSymbolCodeList(): Array<string>;
  setSymbolCodeList(value: Array<string>): void;
  addSymbolCode(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLastQuotesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLastQuotesRequest): GetLastQuotesRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: GetLastQuotesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLastQuotesRequest;
  static deserializeBinaryFromReader(message: GetLastQuotesRequest, reader: jspb.BinaryReader): GetLastQuotesRequest;
}

export namespace GetLastQuotesRequest {
  export type AsObject = {
    symbolCodeList: Array<string>;
  };
}

export class GetLastQuotesResponse extends jspb.Message {
  clearQuotesList(): void;
  getQuotesList(): Array<pricing_model_pb.Quote>;
  setQuotesList(value: Array<pricing_model_pb.Quote>): void;
  addQuotes(value?: pricing_model_pb.Quote, index?: number): pricing_model_pb.Quote;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLastQuotesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetLastQuotesResponse): GetLastQuotesResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: GetLastQuotesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLastQuotesResponse;
  static deserializeBinaryFromReader(message: GetLastQuotesResponse, reader: jspb.BinaryReader): GetLastQuotesResponse;
}

export namespace GetLastQuotesResponse {
  export type AsObject = {
    quotesList: Array<pricing_model_pb.Quote.AsObject>;
  };
}

export class QuoteEvent extends jspb.Message {
  clearQuoteList(): void;
  getQuoteList(): Array<pricing_model_pb.Quote>;
  setQuoteList(value: Array<pricing_model_pb.Quote>): void;
  addQuote(value?: pricing_model_pb.Quote, index?: number): pricing_model_pb.Quote;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuoteEvent.AsObject;
  static toObject(includeInstance: boolean, msg: QuoteEvent): QuoteEvent.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: QuoteEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuoteEvent;
  static deserializeBinaryFromReader(message: QuoteEvent, reader: jspb.BinaryReader): QuoteEvent;
}

export namespace QuoteEvent {
  export type AsObject = {
    quoteList: Array<pricing_model_pb.Quote.AsObject>;
  };
}

export class SubscribeQuoteEventRequest extends jspb.Message {
  clearSymbolCodeList(): void;
  getSymbolCodeList(): Array<string>;
  setSymbolCodeList(value: Array<string>): void;
  addSymbolCode(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeQuoteEventRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeQuoteEventRequest): SubscribeQuoteEventRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: SubscribeQuoteEventRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeQuoteEventRequest;
  static deserializeBinaryFromReader(
    message: SubscribeQuoteEventRequest,
    reader: jspb.BinaryReader,
  ): SubscribeQuoteEventRequest;
}

export namespace SubscribeQuoteEventRequest {
  export type AsObject = {
    symbolCodeList: Array<string>;
  };
}

export class SubscribeQuoteEventResponse extends jspb.Message {
  getMsgCode(): whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
  setMsgCode(value: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap]): void;

  getMsgText(): string;
  setMsgText(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeQuoteEventResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeQuoteEventResponse): SubscribeQuoteEventResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: SubscribeQuoteEventResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeQuoteEventResponse;
  static deserializeBinaryFromReader(
    message: SubscribeQuoteEventResponse,
    reader: jspb.BinaryReader,
  ): SubscribeQuoteEventResponse;
}

export namespace SubscribeQuoteEventResponse {
  export type AsObject = {
    msgCode: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
    msgText: string;
  };
}

export class UnsubscribeQuoteEventRequest extends jspb.Message {
  clearSymbolCodeList(): void;
  getSymbolCodeList(): Array<string>;
  setSymbolCodeList(value: Array<string>): void;
  addSymbolCode(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnsubscribeQuoteEventRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UnsubscribeQuoteEventRequest): UnsubscribeQuoteEventRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: UnsubscribeQuoteEventRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnsubscribeQuoteEventRequest;
  static deserializeBinaryFromReader(
    message: UnsubscribeQuoteEventRequest,
    reader: jspb.BinaryReader,
  ): UnsubscribeQuoteEventRequest;
}

export namespace UnsubscribeQuoteEventRequest {
  export type AsObject = {
    symbolCodeList: Array<string>;
  };
}

export class UnsubscribeQuoteEventResponse extends jspb.Message {
  getMsgCode(): whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
  setMsgCode(value: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap]): void;

  getMsgText(): string;
  setMsgText(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnsubscribeQuoteEventResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UnsubscribeQuoteEventResponse): UnsubscribeQuoteEventResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: UnsubscribeQuoteEventResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnsubscribeQuoteEventResponse;
  static deserializeBinaryFromReader(
    message: UnsubscribeQuoteEventResponse,
    reader: jspb.BinaryReader,
  ): UnsubscribeQuoteEventResponse;
}

export namespace UnsubscribeQuoteEventResponse {
  export type AsObject = {
    msgCode: whitelist_model_pb.MsgCodeMap[keyof whitelist_model_pb.MsgCodeMap];
    msgText: string;
  };
}

export class ChartRequest extends jspb.Message {
  getSymbolCode(): string;
  setSymbolCode(value: string): void;

  hasChartData(): boolean;
  clearChartData(): void;
  getChartData(): pricing_model_pb.Chart | undefined;
  setChartData(value?: pricing_model_pb.Chart): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChartRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChartRequest): ChartRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: ChartRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChartRequest;
  static deserializeBinaryFromReader(message: ChartRequest, reader: jspb.BinaryReader): ChartRequest;
}

export namespace ChartRequest {
  export type AsObject = {
    symbolCode: string;
    chartData?: pricing_model_pb.Chart.AsObject;
  };
}
