// package:
// file: system_model.proto

import * as jspb from "google-protobuf";

export class LoginInfo extends jspb.Message {
  getLogin(): string;
  setLogin(value: string): void;

  getMacAddress(): string;
  setMacAddress(value: string): void;

  getLocalIp(): string;
  setLocalIp(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginInfo.AsObject;
  static toObject(includeInstance: boolean, msg: LoginInfo): LoginInfo.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: LoginInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginInfo;
  static deserializeBinaryFromReader(message: LoginInfo, reader: jspb.BinaryReader): LoginInfo;
}

export namespace LoginInfo {
  export type AsObject = {
    login: string;
    macAddress: string;
    localIp: string;
  };
}

export class Account extends jspb.Message {
  getAccountId(): number;
  setAccountId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getGroupId(): number;
  setGroupId(value: number): void;

  getEnableFlg(): boolean;
  setEnableFlg(value: boolean): void;

  getTradingRights(): Account.TradingRightsMap[keyof Account.TradingRightsMap];
  setTradingRights(value: Account.TradingRightsMap[keyof Account.TradingRightsMap]): void;

  getApiFlg(): boolean;
  setApiFlg(value: boolean): void;

  getRegisteredDate(): number;
  setRegisteredDate(value: number): void;

  getComment(): string;
  setComment(value: string): void;

  getApiKey(): string;
  setApiKey(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getSecretKey(): string;
  setSecretKey(value: string): void;

  getRecvAdminNewsFlg(): Account.BoolFlagMap[keyof Account.BoolFlagMap];
  setRecvAdminNewsFlg(value: Account.BoolFlagMap[keyof Account.BoolFlagMap]): void;

  getRecvMatchNotiFlg(): Account.BoolFlagMap[keyof Account.BoolFlagMap];
  setRecvMatchNotiFlg(value: Account.BoolFlagMap[keyof Account.BoolFlagMap]): void;

  getEmail(): string;
  setEmail(value: string): void;

  getPhone(): string;
  setPhone(value: string): void;

  getEnableSecretKeyFlg(): Account.BoolFlagMap[keyof Account.BoolFlagMap];
  setEnableSecretKeyFlg(value: Account.BoolFlagMap[keyof Account.BoolFlagMap]): void;

  getNumTrades(): number;
  setNumTrades(value: number): void;

  getNumPendingOrders(): number;
  setNumPendingOrders(value: number): void;

  clearAllowedMarketsList(): void;
  getAllowedMarketsList(): Array<string>;
  setAllowedMarketsList(value: Array<string>): void;
  addAllowedMarkets(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Account.AsObject;
  static toObject(includeInstance: boolean, msg: Account): Account.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: Account, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Account;
  static deserializeBinaryFromReader(message: Account, reader: jspb.BinaryReader): Account;
}

export namespace Account {
  export type AsObject = {
    accountId: number;
    name: string;
    groupId: number;
    enableFlg: boolean;
    tradingRights: Account.TradingRightsMap[keyof Account.TradingRightsMap];
    apiFlg: boolean;
    registeredDate: number;
    comment: string;
    apiKey: string;
    password: string;
    secretKey: string;
    recvAdminNewsFlg: Account.BoolFlagMap[keyof Account.BoolFlagMap];
    recvMatchNotiFlg: Account.BoolFlagMap[keyof Account.BoolFlagMap];
    email: string;
    phone: string;
    enableSecretKeyFlg: Account.BoolFlagMap[keyof Account.BoolFlagMap];
    numTrades: number;
    numPendingOrders: number;
    allowedMarketsList: Array<string>;
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
    TRADING_NORMAL: 3;
  }

  export const TradingRights: TradingRightsMap;
}

export class AdminSettings extends jspb.Message {
  getGrossBuyLimit(): number;
  setGrossBuyLimit(value: number): void;

  getGrossSellLimit(): number;
  setGrossSellLimit(value: number): void;

  clearSessionSettingsList(): void;
  getSessionSettingsList(): Array<SessionSettings>;
  setSessionSettingsList(value: Array<SessionSettings>): void;
  addSessionSettings(value?: SessionSettings, index?: number): SessionSettings;

  clearHolidaySettingsList(): void;
  getHolidaySettingsList(): Array<Holiday>;
  setHolidaySettingsList(value: Array<Holiday>): void;
  addHolidaySettings(value?: Holiday, index?: number): Holiday;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminSettings.AsObject;
  static toObject(includeInstance: boolean, msg: AdminSettings): AdminSettings.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: AdminSettings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminSettings;
  static deserializeBinaryFromReader(message: AdminSettings, reader: jspb.BinaryReader): AdminSettings;
}

export namespace AdminSettings {
  export type AsObject = {
    grossBuyLimit: number;
    grossSellLimit: number;
    sessionSettingsList: Array<SessionSettings.AsObject>;
    holidaySettingsList: Array<Holiday.AsObject>;
  };
}

export class GroupAccount extends jspb.Message {
  getGroupId(): number;
  setGroupId(value: number): void;

  getGroupName(): string;
  setGroupName(value: string): void;

  getGroupType(): GroupTypeMap[keyof GroupTypeMap];
  setGroupType(value: GroupTypeMap[keyof GroupTypeMap]): void;

  getMaxOrderVolume(): number;
  setMaxOrderVolume(value: number): void;

  getMinOrderValue(): string;
  setMinOrderValue(value: string): void;

  getMaxOrderValue(): string;
  setMaxOrderValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupAccount.AsObject;
  static toObject(includeInstance: boolean, msg: GroupAccount): GroupAccount.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: GroupAccount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupAccount;
  static deserializeBinaryFromReader(message: GroupAccount, reader: jspb.BinaryReader): GroupAccount;
}

export namespace GroupAccount {
  export type AsObject = {
    groupId: number;
    groupName: string;
    groupType: GroupTypeMap[keyof GroupTypeMap];
    maxOrderVolume: number;
    minOrderValue: string;
    maxOrderValue: string;
  };
}

export class SessionSettings extends jspb.Message {
  getDayOfWeek(): number;
  setDayOfWeek(value: number): void;

  getOpenTime(): number;
  setOpenTime(value: number): void;

  getCloseTime(): number;
  setCloseTime(value: number): void;

  getPreOrderTime(): number;
  setPreOrderTime(value: number): void;

  getExternalOpenTime(): number;
  setExternalOpenTime(value: number): void;

  getExternalPrecloseTime(): number;
  setExternalPrecloseTime(value: number): void;

  getExternalCloseTime(): number;
  setExternalCloseTime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SessionSettings.AsObject;
  static toObject(includeInstance: boolean, msg: SessionSettings): SessionSettings.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: SessionSettings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SessionSettings;
  static deserializeBinaryFromReader(message: SessionSettings, reader: jspb.BinaryReader): SessionSettings;
}

export namespace SessionSettings {
  export type AsObject = {
    dayOfWeek: number;
    openTime: number;
    closeTime: number;
    preOrderTime: number;
    externalOpenTime: number;
    externalPrecloseTime: number;
    externalCloseTime: number;
  };
}

export class Holiday extends jspb.Message {
  getHolidayId(): number;
  setHolidayId(value: number): void;

  getHolidayStatus(): HolidayStatusMap[keyof HolidayStatusMap];
  setHolidayStatus(value: HolidayStatusMap[keyof HolidayStatusMap]): void;

  getTimestampFrom(): number;
  setTimestampFrom(value: number): void;

  getTimestampTo(): number;
  setTimestampTo(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Holiday.AsObject;
  static toObject(includeInstance: boolean, msg: Holiday): Holiday.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: Holiday, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Holiday;
  static deserializeBinaryFromReader(message: Holiday, reader: jspb.BinaryReader): Holiday;
}

export namespace Holiday {
  export type AsObject = {
    holidayId: number;
    holidayStatus: HolidayStatusMap[keyof HolidayStatusMap];
    timestampFrom: number;
    timestampTo: number;
  };
}

export class AccountBalance extends jspb.Message {
  getAccountId(): number;
  setAccountId(value: number): void;

  getBalance(): string;
  setBalance(value: string): void;

  getCollateral(): string;
  setCollateral(value: string): void;

  getRealizedPl(): string;
  setRealizedPl(value: string): void;

  getMarginRequired(): string;
  setMarginRequired(value: string): void;

  getMarginMaintain(): string;
  setMarginMaintain(value: string): void;

  getMarginDeficit(): string;
  setMarginDeficit(value: string): void;

  getUnrealizedPl(): string;
  setUnrealizedPl(value: string): void;

  getBuyingPower(): string;
  setBuyingPower(value: string): void;

  getEquity(): string;
  setEquity(value: string): void;

  getWithdrawableAmount(): string;
  setWithdrawableAmount(value: string): void;

  getCurrencyCode(): string;
  setCurrencyCode(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountBalance.AsObject;
  static toObject(includeInstance: boolean, msg: AccountBalance): AccountBalance.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: AccountBalance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountBalance;
  static deserializeBinaryFromReader(message: AccountBalance, reader: jspb.BinaryReader): AccountBalance;
}

export namespace AccountBalance {
  export type AsObject = {
    accountId: number;
    balance: string;
    collateral: string;
    realizedPl: string;
    marginRequired: string;
    marginMaintain: string;
    marginDeficit: string;
    unrealizedPl: string;
    buyingPower: string;
    equity: string;
    withdrawableAmount: string;
    currencyCode: string;
    password: string;
  };
}

export class AccountPortfolio extends jspb.Message {
  getAccountId(): number;
  setAccountId(value: number): void;

  getSymbolCode(): string;
  setSymbolCode(value: string): void;

  getTotalBuyVolume(): number;
  setTotalBuyVolume(value: number): void;

  getTotalBuyAmount(): string;
  setTotalBuyAmount(value: string): void;

  getTotalSellVolume(): number;
  setTotalSellVolume(value: number): void;

  getTotalSellAmount(): string;
  setTotalSellAmount(value: string): void;

  getMarketPrice(): string;
  setMarketPrice(value: string): void;

  getInvestedValue(): string;
  setInvestedValue(value: string): void;

  getCurrentValue(): string;
  setCurrentValue(value: string): void;

  getRealizedPl(): string;
  setRealizedPl(value: string): void;

  getUnrealizedPl(): string;
  setUnrealizedPl(value: string): void;

  getCurrencyCode(): string;
  setCurrencyCode(value: string): void;

  getOwnedVolume(): number;
  setOwnedVolume(value: number): void;

  getOwnedAmount(): string;
  setOwnedAmount(value: string): void;

  getTotalVolume(): number;
  setTotalVolume(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountPortfolio.AsObject;
  static toObject(includeInstance: boolean, msg: AccountPortfolio): AccountPortfolio.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: AccountPortfolio, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountPortfolio;
  static deserializeBinaryFromReader(message: AccountPortfolio, reader: jspb.BinaryReader): AccountPortfolio;
}

export namespace AccountPortfolio {
  export type AsObject = {
    accountId: number;
    symbolCode: string;
    totalBuyVolume: number;
    totalBuyAmount: string;
    totalSellVolume: number;
    totalSellAmount: string;
    marketPrice: string;
    investedValue: string;
    currentValue: string;
    realizedPl: string;
    unrealizedPl: string;
    currencyCode: string;
    ownedVolume: number;
    ownedAmount: string;
    totalVolume: number;
  };
}

export class MarketDataSource extends jspb.Message {
  getExchangeName(): string;
  setExchangeName(value: string): void;

  getEnableFlg(): boolean;
  setEnableFlg(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketDataSource.AsObject;
  static toObject(includeInstance: boolean, msg: MarketDataSource): MarketDataSource.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: MarketDataSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketDataSource;
  static deserializeBinaryFromReader(message: MarketDataSource, reader: jspb.BinaryReader): MarketDataSource;
}

export namespace MarketDataSource {
  export type AsObject = {
    exchangeName: string;
    enableFlg: boolean;
  };
}

export class MarketSettings extends jspb.Message {
  getMarketCode(): string;
  setMarketCode(value: string): void;

  getMdStatus(): MarketStatusMap[keyof MarketStatusMap];
  setMdStatus(value: MarketStatusMap[keyof MarketStatusMap]): void;

  getTradingStatus(): MarketStatusMap[keyof MarketStatusMap];
  setTradingStatus(value: MarketStatusMap[keyof MarketStatusMap]): void;

  clearMdTimeList(): void;
  getMdTimeList(): Array<SessionSettings>;
  setMdTimeList(value: Array<SessionSettings>): void;
  addMdTime(value?: SessionSettings, index?: number): SessionSettings;

  clearTradingTimeList(): void;
  getTradingTimeList(): Array<SessionSettings>;
  setTradingTimeList(value: Array<SessionSettings>): void;
  addTradingTime(value?: SessionSettings, index?: number): SessionSettings;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketSettings.AsObject;
  static toObject(includeInstance: boolean, msg: MarketSettings): MarketSettings.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: MarketSettings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketSettings;
  static deserializeBinaryFromReader(message: MarketSettings, reader: jspb.BinaryReader): MarketSettings;
}

export namespace MarketSettings {
  export type AsObject = {
    marketCode: string;
    mdStatus: MarketStatusMap[keyof MarketStatusMap];
    tradingStatus: MarketStatusMap[keyof MarketStatusMap];
    mdTimeList: Array<SessionSettings.AsObject>;
    tradingTimeList: Array<SessionSettings.AsObject>;
  };
}

export interface GroupTypeMap {
  GT_NONE: 0;
  GT_LP: 1;
  GT_RETAIL: 2;
}

export const GroupType: GroupTypeMap;

export interface HolidayStatusMap {
  HS_NONE: 0;
  HS_ACTIVE: 1;
  HS_DEACTIVE: 2;
}

export const HolidayStatus: HolidayStatusMap;

export interface DealActionMap {
  DEAL_NONE: 0;
  DEAL_BALANCE: 2;
  DEAL_CREDIT: 3;
  DEAL_CHARGE: 4;
  DEAL_BUY: 5;
  DEAL_SELL: 6;
  DEAL_COLLATERAL: 7;
}

export const DealAction: DealActionMap;

export interface SessionStatusCodeMap {
  SESSION_NONE: 0;
  SESSION_CLOSE: 1;
  SESSION_OPEN: 2;
  SESSION_REMOVE: 3;
  SESSION_NOTFOUND: 4;
}

export const SessionStatusCode: SessionStatusCodeMap;

export interface MarketStatusMap {
  MS_NONE: 0;
  MS_ACTIVE: 1;
  MS_DEACTIVE: 2;
}

export const MarketStatus: MarketStatusMap;
