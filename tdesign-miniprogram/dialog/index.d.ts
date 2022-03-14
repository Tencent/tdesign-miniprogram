/// <reference types="miniprogram-api-typings" />
declare type Context = WechatMiniprogram.Page.TrivialInstance | WechatMiniprogram.Component.TrivialInstance;
interface DialogAlertOptionsType {
    context?: Context;
    selector?: string;
    title?: string;
    content: string;
    zIndex?: number;
    asyncClose?: boolean;
    confirmButtonText?: string;
    textAlign?: string;
    cancelBtn?: string | object;
    confirmBtn?: string | object;
}
interface DialogComfirmOptionsType extends DialogAlertOptionsType {
    cancelButtonText?: string;
}
interface Action {
    name: string;
    primary?: boolean;
    style?: string;
}
interface DialogActionOptionsType {
    context?: Context;
    selector?: string;
    title?: string;
    content: string;
    zIndex?: number;
    asyncClose?: boolean;
    actions?: Action[];
    buttonLayout?: 'vertical' | 'horizontal';
}
declare const _default: {
    alert(options: DialogAlertOptionsType): Promise<unknown>;
    confirm(options: DialogComfirmOptionsType): Promise<unknown>;
    close(): Promise<void>;
    action(options: DialogActionOptionsType): Promise<{
        index: number;
    }>;
};
export default _default;
