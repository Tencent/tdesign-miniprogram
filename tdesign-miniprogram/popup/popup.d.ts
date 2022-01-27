import { TdPopupProps } from './type';
import { SuperComponent } from '../common/src/index';
export declare type PopupProps = TdPopupProps;
export default class Popup extends SuperComponent {
    externalClasses: string[];
    options: {
        multipleSlots: boolean;
        styleIsolation: "shared";
    };
    properties: TdPopupProps;
    data: {
        prefix: string;
        classPrefix: string;
        className: string;
        dataTransitionProps: {
            name: string;
            durations: number[];
            appear: boolean;
        };
    };
    lifetimes: {
        attached(): void;
    };
    setClass(): void;
    setTransitionProps(): void;
    onOverlayClick(): void;
    onCloseClick(): void;
    preventEvent(): void;
}
