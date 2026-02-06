import { SuperComponent } from '../common/src/index';
export default class Rate extends SuperComponent {
    externalClasses: string[];
    properties: import("./type").TdRateProps;
    controlledProps: {
        key: string;
        event: string;
    }[];
    data: {
        prefix: string;
        classPrefix: string;
        defaultTexts: string[];
        tipsVisible: boolean;
        tipsLeft: number;
        actionType: string;
        scaleIndex: number;
        isVisibleToScreenReader: boolean;
    };
    methods: {
        onTouch(e: WechatMiniprogram.TouchEvent, eventType: 'tap' | 'move'): void;
        onTap(e: WechatMiniprogram.TouchEvent): void;
        onTouchStart(): void;
        onTouchMove(e: WechatMiniprogram.TouchEvent): void;
        onTouchEnd(): void;
        hideTips(): void;
        onSelect(e: WechatMiniprogram.TouchEvent): void;
        showAlertText(): void;
    };
}
