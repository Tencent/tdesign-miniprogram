export interface TdQRCodeProps {
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
        value?: 'L' | 'M' | 'Q' | 'H';
    };
    size?: {
        type: NumberConstructor;
        value?: number;
    };
    status?: {
        type: StringConstructor;
        value?: QRStatus;
    };
    value?: {
        type: StringConstructor;
        value?: string;
    };
}
export declare type QRStatus = 'active' | 'expired' | 'loading' | 'scanned';
export declare type StatusRenderInfo = {
    status: QRStatus;
    onRefresh?: () => void;
};
