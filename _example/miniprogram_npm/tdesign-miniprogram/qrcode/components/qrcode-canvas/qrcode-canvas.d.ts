import { SuperComponent } from '../../../common/src/index';
export default class QRCode extends SuperComponent {
    properties: {
        value: {
            type: StringConstructor;
            value: string;
        };
        icon: {
            type: StringConstructor;
            value: string;
        };
        size: {
            type: NumberConstructor;
            value: number;
        };
        iconSize: {
            type: any;
            value: null;
        };
        level: {
            type: StringConstructor;
            value: import("../../../common/shared/qrcode/types").ErrorCorrectionLevel;
        };
        bgColor: {
            type: StringConstructor;
            value: string;
        };
        color: {
            type: StringConstructor;
            value: string;
        };
        includeMargin: {
            type: BooleanConstructor;
            value: boolean;
        };
        marginSize: {
            type: NumberConstructor;
            value: number;
        };
    };
    lifetimes: {
        ready(): void;
    };
    observers: {
        '**': () => void;
    };
    methods: {
        initCanvas(): Promise<void>;
        drawQrcode(canvas: WechatMiniprogram.Canvas, ctx: WechatMiniprogram.CanvasContext): Promise<void>;
        getSizeProp(iconSize: number | {
            width: number;
            height: number;
        } | null | undefined): {
            width: number;
            height: number;
        };
        checkDefaultValue(): void;
        getCanvasNode(): Promise<unknown>;
    };
}
