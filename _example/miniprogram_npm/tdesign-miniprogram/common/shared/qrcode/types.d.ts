import type { Ecc, QrCode } from './qrcodegen';
export declare type Modules = ReturnType<QrCode['getModules']>;
export declare type Excavation = {
    x: number;
    y: number;
    w: number;
    h: number;
};
export declare type ErrorCorrectionLevel = 'L' | 'M' | 'Q' | 'H';
export declare type CrossOrigin = 'anonymous' | 'use-credentials' | '' | undefined;
export declare type ERROR_LEVEL_MAPPED_TYPE = {
    [index in ErrorCorrectionLevel]: Ecc;
};
export declare type ImageSettings = {
    src: string;
    height: number;
    width: number;
    excavate: boolean;
    x?: number;
    y?: number;
    opacity?: number;
    crossOrigin?: CrossOrigin;
};
