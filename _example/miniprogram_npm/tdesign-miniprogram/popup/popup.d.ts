import { TdPopupProps } from './type';
import { SuperComponent } from '../common/src/index';
export declare type PopupProps = TdPopupProps;
export default class Popup extends SuperComponent {
    externalClasses: string[];
    behaviors: string[];
    options: {
        multipleSlots: boolean;
    };
    properties: TdPopupProps;
    data: {
        prefix: string;
        classPrefix: string;
    };
    methods: {
        handleOverlayClick(): void;
        handleClose(): void;
    };
}
