/// <reference types="miniprogram-api-typings" />
import { SuperComponent } from '../common/src/index';
import { TdCascaderProps } from './type';
export interface CascaderProps extends TdCascaderProps {
}
declare type FlatPath = {
    key: string;
    path: any[];
    indexes: number[];
    labels: string[];
    text: string;
    disabled: boolean;
};
declare type ResultFragment = {
    id: number;
    text: string;
    highlight: boolean;
};
declare type FilterResult = {
    key: string;
    indexes: number[];
    disabled: boolean;
    fragments: ResultFragment[];
};
export default class Cascader extends SuperComponent {
    behaviors: string[];
    externalClasses: string[];
    options: WechatMiniprogram.Component.ComponentOptions;
    properties: TdCascaderProps<import("../common/common").TreeOptionData<string | number>>;
    filterDebounced: ((value: string) => void) | null;
    controlledProps: {
        key: string;
        event: string;
    }[];
    state: {
        contentHeight: number;
        stepHeight: number;
        tabsHeight: number;
        subTitlesHeight: number;
        stepsInitHeight: number;
        filterHeight: number;
        flatPaths: FlatPath[];
    };
    data: {
        prefix: string;
        classPrefix: string;
        stepIndex: number;
        selectedIndexes: any[];
        selectedValue: any[];
        scrollTopList: any[];
        steps: any[];
        _optionsHeight: number;
        filterKeyword: string;
        filterResults: FilterResult[];
        isSearching: boolean;
    };
    observers: {
        visible(v: any): void;
        value(): void;
        options(): void;
        keys(): void;
        filterable(v: boolean): void;
        selectedIndexes(): void;
        stepIndex(): Promise<void>;
    };
    methods: {
        updateOptionsHeight(steps: number): void;
        initOptionsHeight(steps: number): Promise<void>;
        initWithValue(): void;
        getIndexesByValue(options: import("../common/common").TreeOptionData<string | number>[], value: any): any[];
        updateScrollTop(): void;
        hide(trigger: any): void;
        onVisibleChange(): void;
        onClose(): void;
        invalidateFlatPaths(): void;
        ensureFlatPaths(): any;
        resetFilter(): void;
        onFilterChange(e: {
            detail?: {
                value?: string;
            };
        }): void;
        onFilterClear(): void;
        applyFilter(rawKeyword: string): void;
        onFilterResultTap(e: {
            currentTarget: {
                dataset: {
                    key: string;
                };
            };
        }): void;
        regenItemsByIndexes(selectedIndexes: number[]): {
            selectedValue: any[];
            steps: string[];
            items: any[];
        };
        onStepClick(e: any): void;
        onTabChange(e: any): void;
        genItems(): {
            selectedValue: any[];
            steps: any[];
            items: {
                [x: string]: any;
            }[][];
        };
        handleSelect(e: any): void;
        triggerChange(): void;
    };
}
export {};
