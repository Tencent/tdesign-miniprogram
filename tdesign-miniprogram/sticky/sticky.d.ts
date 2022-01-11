/// <reference types="miniprogram-api-typings" />
import { SuperComponent } from '../common/src/index';
declare type ContainerRef = () => WechatMiniprogram.NodesRef;
interface StickyProps {
    zIndex: number;
    disabled: boolean;
    container: ContainerRef;
    offsetTop: number;
}
export default class Sticky extends SuperComponent {
    externalClasses: string[];
    properties: StickyProps;
    behaviors: string[];
    observers: {
        'offsetTop, disabled, container': (event?: {
            scrollTop: number;
        }) => void;
    };
    data: {
        containerStyle: string;
        contentStyle: string;
        classPrefix: string;
    };
    mounted(): void;
    onScroll(event?: {
        scrollTop: number;
    }): void;
    setDataAfterDiff(data: {
        isFixed: boolean;
        height?: number;
        transform?: number;
    }): void;
    getContainerRect(): Promise<WechatMiniprogram.BoundingClientRectCallbackResult>;
}
export {};
