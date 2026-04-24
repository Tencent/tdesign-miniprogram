/// <reference types="miniprogram-api-typings" />
import { SuperComponent, RelationsOptions } from '../common/src/index';
import type { TdAvatarProps } from './type';
export interface AvatarProps extends TdAvatarProps {
}
export default class Avatar extends SuperComponent {
    options: WechatMiniprogram.Component.ComponentOptions;
    externalClasses: string[];
    properties: TdAvatarProps;
    data: {
        prefix: string;
        classPrefix: string;
        isShow: boolean;
        isImgExist: boolean;
        zIndex: number;
        windowWidth: number;
    };
    relations: RelationsOptions;
    observers: {
        icon(icon: any): void;
        image(image: any): void;
    };
    methods: {
        hide(): void;
        onLoadError(e: WechatMiniprogram.CustomEvent): void;
    };
}
