/// <reference types="miniprogram-api-typings" />
/// <reference types="miniprogram-api-typings" />
import { ActionSheetItem } from './type';
export { ActionSheetItem };
declare type Context = WechatMiniprogram.Page.TrivialInstance | WechatMiniprogram.Component.TrivialInstance;
export declare enum ActionSheetTheme {
    List = "list",
    Grid = "grid"
}
interface ActionSheetProps {
    align: 'center' | 'left';
    cancelText?: string;
    count?: number;
    description: string;
    items: Array<string | ActionSheetItem>;
    showCancel?: boolean;
    theme?: ActionSheetTheme;
    visible: boolean;
    defaultVisible?: boolean;
}
export interface ActionSheetShowOption extends Omit<ActionSheetProps, 'visible'> {
    context?: Context;
    selector?: string;
}
export declare const show: (options: ActionSheetShowOption) => WechatMiniprogram.Component.TrivialInstance;
export declare const close: (options: ActionSheetShowOption) => void;
