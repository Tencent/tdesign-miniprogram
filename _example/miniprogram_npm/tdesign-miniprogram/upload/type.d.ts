import { ImageProps } from '../image/index';
export interface TdUploadProps {
    addBtn?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    addContent?: {
        type: StringConstructor;
        value?: string;
    };
    allowUploadDuplicateFile?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    config?: {
        type: ObjectConstructor;
        value?: UploadMpConfig;
    };
    disabled?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    draggable?: {
        type: null;
        value?: boolean | {
            vibrate?: boolean;
            collisionVibrate?: boolean;
        };
    };
    files?: {
        type: ArrayConstructor;
        value?: Array<UploadFile>;
    };
    defaultFiles?: {
        type: ArrayConstructor;
        value?: Array<UploadFile>;
    };
    gridConfig?: {
        type: ObjectConstructor;
        value?: {
            column?: number;
            width?: number;
            height?: number;
        };
    };
    gutter?: {
        type: NumberConstructor;
        value?: number;
    };
    imageProps?: {
        type: ObjectConstructor;
        value?: ImageProps;
    };
    max?: {
        type: NumberConstructor;
        value?: number;
    };
    mediaType?: {
        type: ArrayConstructor;
        value?: Array<MediaType>;
    };
    preview?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    removeBtn?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    requestMethod?: {
        type: undefined;
        value?: null;
    };
    sizeLimit?: {
        type: null;
        value?: number | SizeLimitObj;
    };
    source?: {
        type: StringConstructor;
        value?: 'media' | 'messageFile';
    };
    transition?: {
        type: ObjectConstructor;
        value?: Transition;
    };
}
export declare type UploadMpConfig = ImageConfig | VideoConfig;
export interface ImageConfig {
    count?: number;
    sizeType?: Array<SizeTypeValues>;
    sourceType?: Array<SourceTypeValues>;
}
export declare type SizeTypeValues = 'original' | 'compressed';
export declare type SourceTypeValues = 'album' | 'camera';
export interface VideoConfig {
    sourceType?: Array<SourceTypeValues>;
    compressed?: boolean;
    maxDuration?: number;
    camera?: 'back' | 'front';
}
export interface UploadFile {
    url: string;
    name?: string;
    size?: number;
    type?: 'image' | 'video';
    percent?: number;
    status: 'loading' | 'reload' | 'failed' | 'done';
}
export declare type MediaType = 'image' | 'video';
export interface SizeLimitObj {
    size: number;
    unit: SizeUnit;
    message?: string;
}
export declare type SizeUnitArray = ['B', 'KB', 'MB', 'GB'];
export declare type SizeUnit = SizeUnitArray[number];
export interface Transition {
    backTransition?: boolean;
    duration?: number;
    timingFunction?: string;
}
