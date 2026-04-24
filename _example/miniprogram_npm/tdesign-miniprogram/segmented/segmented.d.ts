import { SuperComponent } from '../common/src/index';
import { SegmentedItem } from './type';
export default class Segmented extends SuperComponent {
    options: {
        multipleSlots: boolean;
    };
    externalClasses: string[];
    properties: import("./type").TdSegmentedProps;
    controlledProps: {
        key: string;
        event: string;
    }[];
    data: {
        prefix: string;
        classPrefix: string;
        segmentItems: SegmentedItem[];
        activeIndex: number;
        thumbStyle: string;
    };
    lifetimes: {
        ready(): void;
    };
    observers: {
        options(newOptions: any): void;
        'value, segmentItems'(): void;
    };
    methods: {
        updateOptions(options: (string | number | SegmentedItem)[]): void;
        updateActiveIndex(): void;
        updateThumb(): void;
        handleSelect(e: WechatMiniprogram.BaseEvent): void;
    };
}
