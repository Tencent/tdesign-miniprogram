export interface TdSkeletonProps {
    animation?: {
        type: StringConstructor;
        value?: 'gradient' | 'flashed' | 'none';
    };
    delay?: {
        type: NumberConstructor;
        value?: number;
    };
    loading?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    rowCol?: {
        type: ArrayConstructor;
        value?: SkeletonRowCol;
    };
    theme?: {
        type: StringConstructor;
        value?: 'avatar' | 'image' | 'text' | 'paragraph';
    };
}
export declare type SkeletonRowCol = Array<Number | SkeletonRowColObj | Array<SkeletonRowColObj>>;
export interface SkeletonRowColObj {
    width?: string;
    size?: string;
    height?: string;
    marginRight?: string;
    marginLeft?: string;
    margin?: string;
    type?: 'rect' | 'circle' | 'text';
}
