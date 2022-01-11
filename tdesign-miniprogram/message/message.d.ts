/// <reference types="miniprogram-api-typings" />
import { SuperComponent } from '../common/src/index';
import { MessageProps } from './message.interface';
export default class Message extends SuperComponent {
    externalClasses: string[];
    options: {
        styleIsolation: "apply-shared";
        multipleSlots: boolean;
    };
    properties: MessageProps;
    data: {
        prefix: string;
        classPrefix: string;
        visible: boolean;
        loop: number;
        animation: any[];
        showAnimation: any[];
        iconName: string;
        wrapTop: number;
    };
    observers: {
        marquee(val: any): void;
    };
    /** 延时关闭句柄 */
    closeTimeoutContext: number;
    /** 动画句柄 */
    nextAnimationContext: number;
    resetAnimation: WechatMiniprogram.Animation;
    showAnimation: WechatMiniprogram.AnimationExportResult;
    hideAnimation: WechatMiniprogram.AnimationExportResult;
    ready(): void;
    /** 记录组件设置的项目 */
    memoInitalData(): void;
    resetData(cb: () => void): void;
    detached(): void;
    /** icon 值设置 */
    setIcon(icon?: string | boolean): void;
    /** 检查是否需要开启一个新的动画循环 */
    checkAnimation(): void;
    /** 获取元素宽度 */
    queryWidth(queryName: string): Promise<number>;
    /** 获取元素长度 */
    queryHeight(queryName: string): Promise<number>;
    /** 清理动画循环 */
    clearMessageAnimation(): void;
    show(): void;
    hide(): void;
    reset(): void;
    handleClose(): void;
    handleBtnClick(): void;
}
