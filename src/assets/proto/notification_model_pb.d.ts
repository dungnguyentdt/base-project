// package:
// file: notification_model.proto

import * as jspb from "google-protobuf";

export class Notification extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): void;

  getType(): NotificationTypeMap[keyof NotificationTypeMap];
  setType(value: NotificationTypeMap[keyof NotificationTypeMap]): void;

  getTitle(): string;
  setTitle(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  getPublishDate(): number;
  setPublishDate(value: number): void;

  getId(): number;
  setId(value: number): void;

  getStatus(): NotificationStatusMap[keyof NotificationStatusMap];
  setStatus(value: NotificationStatusMap[keyof NotificationStatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Notification.AsObject;
  static toObject(includeInstance: boolean, msg: Notification): Notification.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: Notification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Notification;
  static deserializeBinaryFromReader(message: Notification, reader: jspb.BinaryReader): Notification;
}

export namespace Notification {
  export type AsObject = {
    accountId: string;
    type: NotificationTypeMap[keyof NotificationTypeMap];
    title: string;
    content: string;
    publishDate: number;
    id: number;
    status: NotificationStatusMap[keyof NotificationStatusMap];
  };
}

export interface NotificationTypeMap {
  NOTIFICATION_TYPE_NONE: 0;
  NOTIFICATION_TYPE_DEPOSIT: 1;
  NOTIFICATION_TYPE_WITHDRAWAL: 2;
  NOTIFICATION_TYPE_WHITELIST: 3;
}

export const NotificationType: NotificationTypeMap;

export interface NotificationStatusMap {
  NOTIFICATION_STATUS_READ: 0;
  NOTIFICATION_STATUS_UN_READ: 1;
}

export const NotificationStatus: NotificationStatusMap;
