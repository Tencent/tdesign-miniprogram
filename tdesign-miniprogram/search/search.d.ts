import { SuperComponent } from '../common/src/index';
export default class Search extends SuperComponent {
    externalClasses: string[];
    options: {
        multipleSlots: boolean;
    };
    properties: import("./type").TdSearchProps;
    observers: {
        keyword(this: Search, nextValue: string): void;
        focus(this: Search, nextValue: boolean): void;
        center(this: Search, nextValue: boolean): void;
    };
    data: {
        classPrefix: string;
        prefix: string;
        localValue: {
            keyword: string;
            focus: boolean;
        };
    };
    /**
     * 场景：
     * 1. center模式启用
     * 2. 在点击激活input focus之后快速点击别的地方blur掉input
     * 3. 如果没有这个变量拦截，onFocus会被短时间后被调用，猜测是input的onFocus触发是非同步的
     */
    ignoreFocusEvtAfterBlurInCenterMode: boolean;
    attached(): void;
    onInput(e: any): void;
    onFocus(): void;
    onBlur(): void;
    onClear(): void;
    onConfirm(e: any): void;
    onCancel(): void;
    tapWhenCenterActiveHandle(): void;
}
