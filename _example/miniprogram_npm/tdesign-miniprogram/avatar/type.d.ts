import { BadgeProps } from '../badge/index';
import { ImageProps } from '../image/index';
import { ShapeEnum } from '../common/common';
export interface TdAvatarProps {
    alt?: {
        type: StringConstructor;
        value?: string;
    };
    badgeProps?: {
        type: ObjectConstructor;
        value?: BadgeProps;
    };
    bordered?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    hideOnLoadFailed?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    icon?: {
        type: null;
        value?: string | object;
    };
    image?: {
        type: StringConstructor;
        value?: string;
    };
    imageProps?: {
        type: ObjectConstructor;
        value?: ImageProps;
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
