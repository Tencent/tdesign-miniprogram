import { SuperComponent } from '../common/src/index';
import type { Coordinate } from './interfaces';
import { Color } from './utils';
export default class ColorPicker extends SuperComponent {
    options: {
        multipleSlots: boolean;
    };
    properties: import("./type").TdColorPickerProps;
    observers: {
        format(): void;
        swatchColors(value: any): void;
        type(value: any): void;
        'usePopup, visible'(usePopup: boolean, visible: boolean): void;
        value(v: string): void;
    };
    color: Color;
    data: {
        prefix: string;
        classPrefix: string;
        panelRect: {
            width: number;
            height: number;
        };
        sliderRect: {
            width: number;
            left: number;
        };
        saturationInfo: {
            saturation: number;
            value: number;
        };
        saturationThumbStyle: {
            left: number;
            top: number;
        };
        sliderInfo: {
            value: number;
        };
        hueSliderStyle: {
            left: number;
        };
        alphaSliderStyle: {
            left: number;
        };
        innerValue: string;
        showPrimaryColorPreview: boolean;
        previewColor: string;
        formatList: any[];
        innerSwatchList: any;
        isMultiple: boolean;
        defaultOverlayProps: {};
    };
    lifetimes: {
        ready(): void;
        attached(): void;
        detached(): void;
    };
    methods: {
        init(): void;
        updateEleRect(e: WechatMiniprogram.TouchEvent): void;
        getEleReact(): void;
        clickSwatch(e: any): void;
        setCoreStyle(): void;
        emitColorChange(trigger: any): void;
        defaultEmptyColor(): string;
        updateColor(): void;
        getSaturationAndValueByCoordinate(coordinate: Coordinate): {
            saturation: number;
            value: number;
        };
        getSaturationThumbStyle({ saturation, value }: {
            saturation: any;
            value: any;
        }): {
            color: any;
            left: string;
            top: string;
        };
        getSliderThumbStyle({ value, maxValue }: {
            value: any;
            maxValue: any;
        }): {
            left: string;
            color: any;
        };
        onChangeSaturation({ saturation, value }: {
            saturation: any;
            value: any;
        }): void;
        formatValue(): any;
        onChangeSlider({ value, isAlpha }: {
            value: any;
            isAlpha: any;
        }): void;
        handleSaturationDrag(e: any): void;
        handleSliderDrag(e: any, isAlpha?: boolean): void;
        handleDiffDrag(e: any): void;
        onTouchStart(e: any): void;
        onTouchMove(e: any): void;
        onTouchEnd(e: any): void;
        close(trigger: string): void;
        onVisibleChange(): void;
    };
}
