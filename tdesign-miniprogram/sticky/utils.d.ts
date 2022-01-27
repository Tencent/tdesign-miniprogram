/// <reference types="miniprogram-api-typings" />
declare type IPageScrollOption = WechatMiniprogram.Page.IPageScrollOption;
declare type Scroller = (this: WechatMiniprogram.Component.TrivialInstance, event?: IPageScrollOption) => void;
export declare const pageScrollMixin: (scroller: Scroller) => string;
export declare const getRect: (context: any, selector: string) => Promise<WechatMiniprogram.BoundingClientRectCallbackResult>;
export {};
