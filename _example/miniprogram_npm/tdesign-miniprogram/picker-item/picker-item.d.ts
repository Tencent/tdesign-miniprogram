import { SuperComponent, RelationsOptions, ComponentsOptionsType } from '../common/src/index';
import { PickerItemOption } from './type';
export default class PickerItem extends SuperComponent {
    relations: RelationsOptions;
    options: ComponentsOptionsType;
    externalClasses: string[];
    properties: {
        useSlots: {
            type: BooleanConstructor;
            value: boolean;
        };
        format?: {
            type: undefined;
            value?: (option: PickerItemOption, columnIndex: number) => PickerItemOption;
        };
        options?: {
            type: ArrayConstructor;
            value?: PickerItemOption[];
        };
    };
    observers: {
        'options, keys'(): void;
    };
    data: {
        prefix: string;
        classPrefix: string;
        offset: number;
        duration: number;
        value: string;
        curIndex: number;
        columnIndex: number;
        keys: {};
        formatOptions: PickerItemOption[];
        enableVirtualScroll: boolean;
        visibleOptions: any[];
        virtualStartIndex: number;
        virtualOffsetY: number;
        totalHeight: number;
        itemHeight: number;
        visibleItemCount: number;
        wrapperPaddingY: number;
    };
    lifetimes: {
        created(): void;
        detached(): void;
    };
    methods: {
        onClickItem(event: WechatMiniprogram.TouchEvent): void;
        onTouchStart(event: any): void;
        onTouchMove(event: any): void;
        onTouchEnd(event: any): void;
        formatOption(options: PickerItemOption[], columnIndex: number, format: any): any[];
        updateSelected(index: number, trigger: boolean): void;
        update(): void;
        computeVirtualRange(offset: number, totalCount: number, itemHeight: number, isFastScroll?: boolean): {
            startIndex: number;
            endIndex: number;
        };
        updateVisibleOptions(offset?: number, isFastScroll?: boolean): void;
        getCount(): any;
        getCurrentSelected(): {
            index: number;
            value: any;
            label: any;
        };
    };
}
