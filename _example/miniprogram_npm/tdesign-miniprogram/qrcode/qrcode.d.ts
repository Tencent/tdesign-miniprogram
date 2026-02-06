import { SuperComponent } from '../common/src/index';
export default class QRCode extends SuperComponent {
    externalClasses: string[];
    options: {
        multipleSlots: boolean;
        virtualHost: boolean;
    };
    properties: {
        statusRender: {
            type: BooleanConstructor;
            value: boolean;
        };
        style: {
            type: StringConstructor;
            value: string;
        };
        customStyle: {
            type: StringConstructor;
            value: string;
        };
        bgColor?: {
            type: StringConstructor;
            value?: string;
        };
        borderless?: {
            type: BooleanConstructor;
            value?: boolean;
        };
        color?: {
            type: StringConstructor;
            value?: string;
        };
        icon?: {
            type: StringConstructor;
            value?: string;
        };
        iconSize?: {
            type: null;
            value?: number | {
                width: number;
                height: number;
            };
        };
        level?: {
            type: StringConstructor;
            value?: "M" | "L" | "Q" | "H";
        };
        size?: {
            type: NumberConstructor;
            value?: number;
        };
        status?: {
            type: StringConstructor;
            value?: import("./type").QRStatus;
        };
        value?: {
            type: StringConstructor;
            value?: string;
        };
    };
    data: {
        prefix: string;
        showMask: boolean;
        classPrefix: string;
        canvasReady: boolean;
    };
    lifetimes: {
        ready(): Promise<void>;
        attached(): void;
    };
    observers: {
        status: (newVal: string) => void;
    };
    methods: {
        init(): void;
        handleDrawCompleted(): void;
        handleDrawError(err: any): void;
        handleRefresh(): void;
        handleDownload(): Promise<void>;
    };
}
