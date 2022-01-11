/**
 * 轮播组件
 * 因原生swiper受限，基于wxs重新实现，后期可以扩展更多丰富的功能
 * todo：无限循环，3D动效等
 */
import { SuperComponent, ControlInstance } from '../common/src/index';
interface SwitchOpt {
    cycle?: boolean;
    source: 'autoplay' | 'touch' | 'nav';
}
export default class Swiper extends SuperComponent {
    externalClasses: string[];
    options: {
        multipleSlots: boolean;
    };
    properties: import("./type").TdSwiperProps;
    observers: {
        navigation(val: any): void;
        current(val: any): void;
        autoplay(val: any): void;
        interval(val: any): void;
        direction(val: any): void;
    };
    children: any;
    $nav: any;
    timer: any;
    control: ControlInstance;
    relations: {
        './swiper-item': {
            type: "child";
        };
        './swiper-nav': {
            type: "child";
        };
    };
    data: {
        _current: number;
        _navigation: any;
        _width: number;
        _height: number;
        offsetX: number;
        offsetY: number;
        total: number;
        easings: {
            linear: string;
            easeInCubic: string;
            easeOutCubic: string;
            easeInOutCubic: string;
        };
        inited: boolean;
        currentInited: boolean;
        prefix: string;
        classPrefix: string;
    };
    attached(): void;
    detached(): void;
    ready(): void;
    /**
     * 初始化 swiper-item
     */
    initItem(): void;
    /**
     * 初始化 swiper-nav
     */
    initNav(): void;
    /**
     * 初始化也需要等待wxs完成，由wxs触发inited
     */
    inited(): void;
    /**
     * 初始化current
     * 需要通过wxs更新位置，存在短暂延迟
     */
    initCurrent(): void;
    play(): void;
    replay(): void;
    pause(): void;
    /**
     * 跳转目标页
     * @param index 目标页索引
     * @param source 来源标记
     * @returns
     */
    goto(index: number, source: string): void;
    /**
     * 更新目标页
     * @param index 目标页索引（一页可能有多个item）
     * @returns
     */
    update(index: number, finish?: any): void;
    /**
     * 更新导航器
     * @param index
     */
    updateNav(index: any): void;
    calcOffset(index: number): {
        offsetX: number;
        offsetY?: undefined;
    } | {
        offsetY: number;
        offsetX?: undefined;
    };
    /**
     * 下一页
     * @param opt
     */
    next(opt: SwitchOpt): void;
    /**
     * 上一页
     * @param opt
     */
    prev(opt: SwitchOpt): void;
    /**
     * 内置导航组件，监听按钮点击
     * @param e
     */
    onSwiperNavBtnChange(e: any): void;
}
export {};
