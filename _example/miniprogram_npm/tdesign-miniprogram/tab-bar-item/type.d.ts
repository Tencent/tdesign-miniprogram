import { BadgeProps } from '../badge/index';
export interface TdTabBarItemProps {
    badgeProps?: {
        type: ObjectConstructor;
        value?: BadgeProps;
    };
    icon?: {
        type: null;
        value?: string | object;
    };
    subTabBar?: {
        type: ArrayConstructor;
        value?: SubTabBarItem[];
    };
    value?: {
        type: null;
        value?: string | number;
    };
}
export interface SubTabBarItem {
    value: string;
    label: string;
}
