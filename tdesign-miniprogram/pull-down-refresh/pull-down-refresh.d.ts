/// <reference types="miniprogram-api-typings" />
import { SuperComponent } from '../common/src/index';
export default class PullDownRefresh extends SuperComponent {
    isScrollToTop: boolean;
    pixelRatio: number;
    startPoint: {
        pageX: number;
        pageY: number;
    } | null;
    isPulling: boolean;
    defaultBarHeight: number;
    maxBarHeight: number;
    loadingBarHeight: number;
    refreshTimeout: number;
    /** 开始刷新 - 刷新成功/失败 最小间隔时间setTimeout句柄 */
    minRefreshTimeFlag: number;
    /** 刷新成功/失败 - 关闭刷新动画 最小间隔时间setTimeout句柄 */
    minRefreshStatusShowTimeFlag: number;
    /** 开始刷新 - 刷新成功/失败 最大间隔时间setTimeout句柄 */
    maxRefreshAnimateTimeFlag: number;
    /** 关闭动画耗时setTimeout句柄 */
    closingAnimateTimeFlag: number;
    externalClasses: string[];
    options: {
        multipleSlots: boolean;
    };
    properties: import("./type").TdPullDownRefreshProps;
    data: {
        classPrefix: string;
        barHeight: number;
        refreshStatus: number;
        refreshTypes: string[];
        rotate: number;
    };
    attached(): void;
    detached(): void;
    onPageScroll(e: WechatMiniprogram.Component.TrivialInstance): void;
    /** 清理timeout */
    cleanTimeFlag(): void;
    onTouchStart(e: WechatMiniprogram.Component.TrivialInstance): void;
    onTouchMove(e: WechatMiniprogram.Component.TrivialInstance): void;
    onTouchEnd(e: WechatMiniprogram.Component.TrivialInstance): void;
    toRpx(v: number): number;
    toPx(v: number): number;
    setRefreshBarHeight(barHeight: number): Promise<number>;
    close(): void;
}
