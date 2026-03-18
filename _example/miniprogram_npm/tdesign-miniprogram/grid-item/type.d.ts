import { BadgeProps } from '../badge/index';
import { ImageProps } from '../image/index';
export interface TdGridItemProps {
    badgeProps?: {
        type: ObjectConstructor;
        value?: BadgeProps;
    };
    description?: {
        type: StringConstructor;
        value?: string;
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
    jumpType?: {
        type: StringConstructor;
        value?: 'redirect-to' | 'switch-tab' | 'relaunch' | 'navigate-to';
    };
    layout?: {
        type: StringConstructor;
        value?: 'vertical' | 'horizontal';
    };
    text?: {
        type: StringConstructor;
        value?: string;
    };
    url?: {
        type: StringConstructor;
        value?: string;
    };
}
