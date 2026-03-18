import { SuperComponent, RelationsOptions } from '../common/src/index';
import { TdSwiperNavProps } from './type';
export interface SwiperNavProps extends TdSwiperNavProps {
}
export default class SwiperNav extends SuperComponent {
    externalClasses: string[];
    properties: {
        current: {
            type: NumberConstructor;
            value: number;
        };
        total: {
            type: NumberConstructor;
            value: number;
        };
        type: {
            type: StringConstructor;
            value: string;
        };
        minShowNum: {
            type: NumberConstructor;
            value: number;
        };
        showControls: {
            type: BooleanConstructor;
            value: boolean;
        };
        direction: {
            type: StringConstructor;
            value: string;
        };
        paginationPosition: {
            type: StringConstructor;
            value: string;
        };
    };
    relations: RelationsOptions;
    data: {
        prefix: string;
        classPrefix: string;
    };
    methods: {
        nav(e: any): void;
    };
}
