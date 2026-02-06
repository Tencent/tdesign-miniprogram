/// <reference types="miniprogram-api-typings" />
/// <reference types="miniprogram-api-typings" />
/// <reference types="miniprogram-api-typings" />
import { MessageProps } from './message.interface';
declare type Context = WechatMiniprogram.Page.TrivialInstance | WechatMiniprogram.Component.TrivialInstance;
interface MessageActionOptionsType extends Optional<MessageProps> {
    context?: Context;
    selector?: string;
}
declare const _default: {
    info(options: MessageActionOptionsType): WechatMiniprogram.Component.TrivialInstance;
    success(options: MessageActionOptionsType): WechatMiniprogram.Component.TrivialInstance;
    warning(options: MessageActionOptionsType): WechatMiniprogram.Component.TrivialInstance;
    error(options: MessageActionOptionsType): WechatMiniprogram.Component.TrivialInstance;
    hide(options: MessageActionOptionsType): void;
};
export default _default;
