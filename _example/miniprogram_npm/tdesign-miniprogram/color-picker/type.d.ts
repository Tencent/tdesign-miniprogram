import { PopupProps } from '../popup/index';
export interface TdColorPickerProps {
    autoClose?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    colorModes?: {
        type: null;
        value?: colorModesEnum | colorModesEnum[];
    };
    enableAlpha?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    enableMultipleGradient?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    fixed?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    format?: {
        type: StringConstructor;
        value?: 'HEX' | 'HEX8' | 'RGB' | 'RGBA' | 'HSL' | 'HSLA' | 'HSV' | 'HSVA' | 'CMYK' | 'CSS';
    };
    popupProps?: {
        type: ObjectConstructor;
        value?: PopupProps;
    };
    swatchColors?: {
        type: ArrayConstructor;
        value?: Array<string> | null | undefined;
    };
    type?: {
        type: StringConstructor;
        value?: TypeEnum;
    };
    usePopup?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    value?: {
        type: StringConstructor;
        value?: string;
    };
    defaultValue?: {
        type: StringConstructor;
        value?: string;
    };
    visible?: {
        type: BooleanConstructor;
        value?: boolean;
    };
}
export declare type colorModesEnum = 'monochrome' | 'linear-gradient';
export declare type TypeEnum = 'base' | 'multiple';
