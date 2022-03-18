/// <reference types="miniprogram-api-typings" />
declare type Context = WechatMiniprogram.Page.TrivialInstance | WechatMiniprogram.Component.TrivialInstance;
declare type ToastType = 'loading' | 'success' | 'fail';
declare type ToastPositionType = 'top' | 'middle' | 'bottom';
declare type ToastDirectionType = 'row' | 'column';
export declare type ToastOptionsType = {
    context?: Context;
    selector?: string;
    icon?: string;
    message?: string;
    duration?: number;
    theme?: ToastType;
    placement?: ToastPositionType;
    preventScrollThrough?: boolean;
    direction?: ToastDirectionType;
};
export default function (options: ToastOptionsType): void;
export {};
