import type { TreeOptionData, TreeKeysType } from '../common/common';
export interface TdCascaderProps<CascaderOption extends TreeOptionData = TreeOptionData> {
    checkStrictly?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    closeBtn?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    filter?: {
        type: undefined;
        value?: CascaderFilterFunction;
    };
    filterPlaceholder?: {
        type: StringConstructor;
        value?: string;
    };
    filterable?: {
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
export declare type CascaderFilterFunction<CascaderOption extends TreeOptionData = TreeOptionData> = (keyword: string, option: CascaderOption, path: CascaderOption[]) => boolean;
export declare type CascaderKeysType = TreeKeysType;
