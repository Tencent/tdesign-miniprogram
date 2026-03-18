import { TreeOptionData, TreeKeysType } from '../common/common';
export interface TdCascaderProps<CascaderOption extends TreeOptionData = TreeOptionData> {
    checkStrictly?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    closeBtn?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    keys?: {
        type: ObjectConstructor;
        value?: CascaderKeysType;
    };
    options?: {
        type: ArrayConstructor;
        value?: Array<CascaderOption>;
    };
    placeholder?: {
        type: StringConstructor;
        value?: string;
    };
    subTitles?: {
        type: ArrayConstructor;
        value?: Array<string>;
    };
    theme?: {
        type: StringConstructor;
        value?: 'step' | 'tab';
    };
    title?: {
        type: StringConstructor;
        value?: string;
    };
    value?: {
        type: null;
        value?: string | number;
    };
    defaultValue?: {
        type: null;
        value?: string | number;
    };
    visible?: {
        type: BooleanConstructor;
        value?: boolean;
    };
}
export declare type CascaderKeysType = TreeKeysType;
