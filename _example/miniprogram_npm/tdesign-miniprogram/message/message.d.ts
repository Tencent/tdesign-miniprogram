/// <reference types="miniprogram-api-typings" />
import { SuperComponent, ComponentsOptionsType } from '../common/src/index';
import { MessageType, MessageProps } from './message.interface';
export default class Message extends SuperComponent {
    options: ComponentsOptionsType;
    properties: MessageProps;
    data: {
        prefix: string;
        classPrefix: string;
        messageList: any[];
    };
    index: number;
    instances: any[];
    gap: number;
    observers: {
        visible(value: any): void;
    };
    pageLifetimes: {
        show(): void;
    };
    lifetimes: {
        ready(): void;
    };
    memoInitialData(): void;
    setMessage(msg: MessageProps, theme?: MessageType): void;
    addMessage(msgObj: MessageProps): void;
    getOffsetHeight(index?: number): number;
    showMessageItem(options: MessageProps, id: string, offsetHeight: number): WechatMiniprogram.Component.TrivialInstance;
    close(id: any): void;
    hide(id?: string): void;
    hideAll(): void;
    removeInstance(id: any): void;
    removeMsg(id: any): void;
    handleClose(): void;
    handleLinkClick(): void;
    handleDurationEnd(): void;
}
