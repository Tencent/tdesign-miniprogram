import { ButtonProps } from '../button/index';
export interface TdFabProps {
    buttonProps?: {
        type: ObjectConstructor;
        value?: ButtonProps;
    };
    draggable?: {
        type: null;
        value?: boolean | FabDirectionEnum;
    };
    icon?: {
        type: StringConstructor;
        value?: string;
    };
    style?: {
        type: StringConstructor;
        value?: string;
    };
    text?: {
        type: StringConstructor;
        value?: string;
    };
    usingCustomNavbar?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    yBounds?: {
        type: ArrayConstructor;
        value?: Array<string | number>;
    };
}
export declare type FabDirectionEnum = 'all' | 'vertical' | 'horizontal';
