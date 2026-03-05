// package:
// file: query_model.proto

import * as jspb from "google-protobuf";

export class Symbol extends jspb.Message {
  getSymbolId(): number;
  setSymbolId(value: number): void;

  getSymbolCode(): string;
  setSymbolCode(value: string): void;

  getSymbolName(): string;
  setSymbolName(value: string): void;

  getCalculationMode(): CalculationModeMap[keyof CalculationModeMap];
  setCalculationMode(value: CalculationModeMap[keyof CalculationModeMap]): void;

  getContractSize(): number;
  setContractSize(value: number): void;

  getDigits(): number;
  setDigits(value: number): void;

  getExchange(): string;
  setExchange(value: string): void;

  getCurrencyCode(): string;
  setCurrencyCode(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getTickSize(): string;
  setTickSize(value: string): void;

  getLotSize(): string;
  setLotSize(value: string): void;

  getMinLot(): string;
  setMinLot(value: string): void;

  getCeiling(): string;
  setCeiling(value: string): void;

  getFloor(): string;
  setFloor(value: string): void;

  getLimitRate(): string;
  setLimitRate(value: string): void;

  getSpread(): string;
  setSpread(value: string): void;

  getPrevClosePrice(): string;
  setPrevClosePrice(value: string): void;

  getRetailPrevClosePrice(): string;
  setRetailPrevClosePrice(value: string): void;

  getSymbolStatus(): SymbolStatusMap[keyof SymbolStatusMap];
  setSymbolStatus(value: SymbolStatusMap[keyof SymbolStatusMap]): void;

  getSymbolSuffix(): string;
  setSymbolSuffix(value: string): void;

  getGboSecCode(): string;
  setGboSecCode(value: string): void;

  getProductType(): ProductTypeMap[keyof ProductTypeMap];
  setProductType(value: ProductTypeMap[keyof ProductTypeMap]): void;

  getMatchingMethod(): MatchingMethodMap[keyof MatchingMethodMap];
  setMatchingMethod(value: MatchingMethodMap[keyof MatchingMethodMap]): void;

  getCowenFlg(): boolean;
  setCowenFlg(value: boolean): void;

  getMatchingRule(): MatchingRuleMap[keyof MatchingRuleMap];
  setMatchingRule(value: MatchingRuleMap[keyof MatchingRuleMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Symbol.AsObject;
  static toObject(includeInstance: boolean, msg: Symbol): Symbol.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: Symbol, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Symbol;
  static deserializeBinaryFromReader(message: Symbol, reader: jspb.BinaryReader): Symbol;
}

export namespace Symbol {
  export type AsObject = {
    symbolId: number;
    symbolCode: string;
    symbolName: string;
    calculationMode: CalculationModeMap[keyof CalculationModeMap];
    contractSize: number;
    digits: number;
    exchange: string;
    currencyCode: string;
    description: string;
    tickSize: string;
    lotSize: string;
    minLot: string;
    ceiling: string;
    floor: string;
    limitRate: string;
    spread: string;
    prevClosePrice: string;
    retailPrevClosePrice: string;
    symbolStatus: SymbolStatusMap[keyof SymbolStatusMap];
    symbolSuffix: string;
    gboSecCode: string;
    productType: ProductTypeMap[keyof ProductTypeMap];
    matchingMethod: MatchingMethodMap[keyof MatchingMethodMap];
    cowenFlg: boolean;
    matchingRule: MatchingRuleMap[keyof MatchingRuleMap];
  };
}

export interface CalculationModeMap {
  CAL_NONE: 0;
  CAL_CFD: 4;
  CAL_SPAN: 90;
  CAL_FOREX: 100;
}

export const CalculationMode: CalculationModeMap;

export interface SymbolStatusMap {
  SYMBOL_NONE: 0;
  SYMBOL_ACTIVE: 1;
  SYMBOL_DEACTIVE: 2;
}

export const SymbolStatus: SymbolStatusMap;

export interface ProductTypeMap {
  PRODUCT_TYPE_NONE: 0;
  PRODUCT_TYPE_EQ: 1;
  PRODUCT_TYPE_ETF: 2;
}

export const ProductType: ProductTypeMap;

export interface MatchingMethodMap {
  MATCHING_METHOD_NONE: 0;
  MATCHING_METHOD_EQ: 1;
  MATCHING_METHOD_ETF: 2;
}

export const MatchingMethod: MatchingMethodMap;

export interface MatchingRuleMap {
  MATCHING_RULE_NONE: 0;
  MATCHING_RULE_USAH: 1;
  MATCHING_RULE_BO: 2;
  MATCHING_RULE_USAH_BO: 3;
}

export const MatchingRule: MatchingRuleMap;
