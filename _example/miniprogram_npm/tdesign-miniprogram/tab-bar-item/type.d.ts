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
    linkType?: {
        type: StringConstructor;
        value?: 'redirectTo' | 'switchTab' | 'reLaunch' | 'navigateTo';
    };
    subTabBar?: {
        type: ArrayConstructor;
        value?: SubTabBarItem[];
    };
    url?: {
        type: StringConstructor;
        value?: string;
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
