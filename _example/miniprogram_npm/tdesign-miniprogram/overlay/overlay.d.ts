import { SuperComponent } from '../common/src/index';
import { TdOverlayProps } from './type';
export interface OverlayProps extends TdOverlayProps {
}
export default class Overlay extends SuperComponent {
    properties: TdOverlayProps;
    behaviors: string[];
    data: {
        prefix: string;
        classPrefix: string;
        computedStyle: string;
        _zIndex: number;
    };
    observers: {
        backgroundColor(v: any): void;
        zIndex(v: any): void;
    };
    methods: {
        handleClick(): void;
        noop(): void;
    };
}
