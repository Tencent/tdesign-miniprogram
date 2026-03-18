import { SuperComponent, RelationsOptions } from '../common/src/index';
export default class Swiper extends SuperComponent {
    externalClasses: string[];
    options: {
        multipleSlots: boolean;
        pureDataPattern: RegExp;
    };
    properties: import("./type").TdSwiperProps;
    observers: {
        navCurrent(v: any): void;
    };
    $nav: any;
    relations: RelationsOptions;
    data: {
        prefix: string;
        classPrefix: string;
        _source: string;
    };
    lifetimes: {
        ready(): void;
    };
    methods: {
        updateNav(currentValue: any): void;
        onTap(e: any): void;
        onChange(e: any): void;
        onAnimationFinish(e: WechatMiniprogram.SwiperAnimationFinish): void;
        onNavBtnChange(e: any): void;
        doNavBtnChange(dir: any, source: any): void;
        onImageLoad(e: any): void;
    };
}
