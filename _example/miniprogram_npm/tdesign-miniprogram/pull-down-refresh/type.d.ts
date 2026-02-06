import { LoadingProps } from '../loading/index';
export interface TdPullDownRefreshProps {
    disabled?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    enableBackToTop?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    enablePassive?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    loadingBarHeight?: {
        type: null;
        value?: string | number;
    };
    loadingProps?: {
        type: ObjectConstructor;
        value?: LoadingProps;
    };
    loadingTexts?: {
        type: ArrayConstructor;
        value?: string[];
    };
    lowerThreshold?: {
        type: null;
        value?: string | number;
    };
    maxBarHeight?: {
        type: null;
        value?: string | number;
    };
    refreshTimeout?: {
        type: NumberConstructor;
        value?: number;
    };
    scrollIntoView?: {
        type: StringConstructor;
        value?: string;
    };
    showScrollbar?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    successDuration?: {
        type: null;
        value?: string | number;
    };
    upperThreshold?: {
        type: null;
        value?: string | number;
    };
    usingCustomNavbar?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    value?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    defaultValue?: {
        type: BooleanConstructor;
        value?: boolean;
    };
}
