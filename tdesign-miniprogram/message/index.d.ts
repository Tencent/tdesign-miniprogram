/// <reference types="miniprogram-api-typings" />
import { MessageProps } from './message.interface';
declare type Context = WechatMiniprogram.Page.TrivialInstance | WechatMiniprogram.Component.TrivialInstance;
interface MessageActionOptionsType extends Optional<MessageProps> {
    context?: Context;
    selector?: string;
}
declare const _default: {
    info(options: MessageActionOptionsType): WechatMiniprogram.Component.TrivialInstance | Promise<never>;
    success(options: MessageActionOptionsType): WechatMiniprogram.Component.TrivialInstance | Promise<never>;
    warning(options: MessageActionOptionsType): WechatMiniprogram.Component.TrivialInstance | Promise<never>;
    error(options: MessageActionOptionsType): WechatMiniprogram.Component.TrivialInstance | Promise<never>;
    hide(): void;
};
export default _default;
