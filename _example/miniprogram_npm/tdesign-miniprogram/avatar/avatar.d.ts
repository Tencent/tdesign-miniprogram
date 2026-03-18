/// <reference types="miniprogram-api-typings" />
import { SuperComponent, RelationsOptions } from '../common/src/index';
export default class Avatar extends SuperComponent {
    options: WechatMiniprogram.Component.ComponentOptions;
    externalClasses: string[];
    properties: import("./type").TdAvatarProps;
    data: {
        prefix: string;
        classPrefix: string;
        isShow: boolean;
        zIndex: number;
        windowWidth: number;
    };
    relations: RelationsOptions;
    observers: {
        icon(icon: any): void;
    };
    methods: {
        hide(): void;
        onLoadError(e: WechatMiniprogram.CustomEvent): void;
    };
}
