/// <reference types="miniprogram-api-typings" />
import { SuperComponent, ComponentsOptionsType } from '../common/src/index';
import { MessageProps } from '../message/message.interface';
export default class Message extends SuperComponent {
    externalClasses: string[];
    options: ComponentsOptionsType;
    properties: MessageProps;
    data: {
        prefix: string;
        classPrefix: string;
        loop: number;
        animation: any[];
        showAnimation: any[];
        wrapTop: number;
        fadeClass: string;
    };
    closeTimeoutContext: number;
    nextAnimationContext: number;
    resetAnimation: WechatMiniprogram.Animation;
    observers: {
        marquee(val: any): void;
        'icon, theme'(icon: any, theme: any): void;
        link(v: any): void;
        closeBtn(v: any): void;
    };
    lifetimes: {
        ready(): void;
        detached(): void;
    };
    memoInitialData(): void;
    resetData(cb: () => void): void;
    checkAnimation(): void;
    clearMessageAnimation(): void;
    show(offsetHeight?: number): void;
    hide(): void;
    reset(): void;
    handleClose(): void;
    handleLinkClick(): void;
}
