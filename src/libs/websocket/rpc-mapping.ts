import { FundingRequest, FundingResponse } from "@/assets/proto/funding_model_pb";
import { RpcMessage } from "@/assets/proto/rpc_pb";
import { PayLoadClass } from "./libs/interface";
import { Notification } from "@/assets/proto/notification_model_pb";
import {
  DeleteWhitelistRequest,
  DeleteWhitelistResponse,
  RenameWhitelistRequest,
  RenameWhitelistResponse,
  WhitelistRequest,
  WhitelistResponse,
} from "@/assets/proto/whitelist_model_pb";
import { GetLastQuotesRequest, GetLastQuotesResponse, QuoteEvent } from "@/assets/proto/pricing_service_pb";
import {
  CancelOrderRequest,
  CancelOrderResponse,
  ModifyOrderRequest,
  ModifyOrderResponse,
  NewOrderSingleRequest,
  NewOrderSingleResponse,
  OrderEvent,
} from "@/assets/proto/trading_service_pb";
import { SymbolListRequest, SymbolListResponse } from "@/assets/proto/query_service_pb";

//need to mapping RPC Class for logging send, receive data object;
export type IRpcMapping = {
  [k in PayLoadClass]?: any;
};
export const RPC_MAPPING: IRpcMapping = {
  [RpcMessage.Payload.FUNDING_REQ]: FundingRequest,
  [RpcMessage.Payload.FUNDING_RES]: FundingResponse,
  [RpcMessage.Payload.NOTIFICATION]: Notification,
  [RpcMessage.Payload.WHITELIST_DEL_REQ]: DeleteWhitelistRequest,
  [RpcMessage.Payload.WHITELIST_DEL_RES]: DeleteWhitelistResponse,
  [RpcMessage.Payload.WHITELIST_RENAME_REQ]: RenameWhitelistRequest,
  [RpcMessage.Payload.WHITELIST_RENAME_RES]: RenameWhitelistResponse,
  [RpcMessage.Payload.WHITELIST_REQ]: WhitelistRequest,
  [RpcMessage.Payload.WHITELIST_RES]: WhitelistResponse,
  [RpcMessage.Payload.LAST_QUOTE_REQ]: GetLastQuotesRequest,
  [RpcMessage.Payload.LAST_QUOTE_RES]: GetLastQuotesResponse,
  [RpcMessage.Payload.QUOTE_EVENT]: QuoteEvent,
  [RpcMessage.Payload.NEW_ORDER_SINGLE_REQ]: NewOrderSingleRequest,
  [RpcMessage.Payload.NEW_ORDER_SINGLE_RES]: NewOrderSingleResponse,
  [RpcMessage.Payload.SYMBOL_LIST_REQ]: SymbolListRequest,
  [RpcMessage.Payload.SYMBOL_LIST_RES]: SymbolListResponse,
  [RpcMessage.Payload.ORDER_EVENT]: OrderEvent,
  [RpcMessage.Payload.CANCEL_ORDER_REQ]: CancelOrderRequest,
  [RpcMessage.Payload.CANCEL_ORDER_RES]: CancelOrderResponse,
  [RpcMessage.Payload.MODIFY_ORDER_REQ]: ModifyOrderRequest,
  [RpcMessage.Payload.MODIFY_ORDER_RES]: ModifyOrderResponse,
};
