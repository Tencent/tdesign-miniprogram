export interface TdWatermarkProps {
    alpha?: {
        type: NumberConstructor;
        value?: number;
    };
    content?: {
        type: StringConstructor;
        value?: string;
    };
    height?: {
        type: NumberConstructor;
        value?: number;
    };
    isRepeat?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    layout?: {
        type: StringConstructor;
        value?: 'rectangular' | 'hexagonal';
    };
    lineSpace?: {
        type: NumberConstructor;
        value?: number;
    };
    movable?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    moveInterval?: {
        type: NumberConstructor;
        value?: number;
    };
    offset?: {
        type: ArrayConstructor;
        value?: Array<number>;
    };
    removable?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    rotate?: {
        type: NumberConstructor;
        value?: number;
    };
    watermarkContent?: {
        type: null;
        value?: WatermarkText | WatermarkImage | Array<WatermarkText | WatermarkImage>;
    };
    width?: {
        type: NumberConstructor;
        value?: number;
    };
    x?: {
        type: NumberConstructor;
        value?: number;
    };
    y?: {
        type: NumberConstructor;
        value?: number;
    };
    zIndex?: {
        type: NumberConstructor;
        value?: number;
    };
}
export interface WatermarkText {
    fontColor?: string;
    fontFamily?: string;
    fontSize?: number;
    fontWeight?: 'normal' | 'lighter' | 'bold' | 'bolder';
    text?: string;
}
export interface WatermarkImage {
    isGrayscale?: boolean;
    url?: string;
}
