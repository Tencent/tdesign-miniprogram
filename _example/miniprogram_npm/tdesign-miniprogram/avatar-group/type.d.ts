import { ShapeEnum } from '../common/common';
export interface TdAvatarGroupProps {
    cascading?: {
        type: StringConstructor;
        value?: CascadingValue;
    };
    collapseAvatar?: {
        type: StringConstructor;
        value?: string;
    };
    max?: {
        type: NumberConstructor;
        value?: number;
    };
    shape?: {
        type: StringConstructor;
        value?: ShapeEnum;
    };
    size?: {
        type: StringConstructor;
        value?: string;
    };
}
export declare type CascadingValue = 'left-up' | 'right-up';
