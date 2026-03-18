export interface TdSwiperNavProps {
    current?: {
        type: NumberConstructor;
        value?: number;
    };
    direction?: {
        type: StringConstructor;
        value?: 'horizontal' | 'vertical';
    };
    minShowNum?: {
        type: NumberConstructor;
        value?: number;
    };
    paginationPosition?: {
        type: StringConstructor;
        value?: 'top-left' | 'top' | 'top-right' | 'bottom-left' | 'bottom' | 'bottom-right';
    };
    showControls?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    total?: {
        type: NumberConstructor;
        value?: number;
    };
    type?: {
        type: StringConstructor;
        value?: SwiperNavigationType;
    };
}
export declare type SwiperNavigationType = 'dots' | 'dots-bar' | 'fraction';
