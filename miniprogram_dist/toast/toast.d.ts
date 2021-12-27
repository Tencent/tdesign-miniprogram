import { SuperComponent } from '../common/src/index';
import { TdToastProps } from './type';
export default class Toast extends SuperComponent {
    externalClasses: string[];
    options: {
        multipleSlots: boolean;
    };
    hideTimer: number | null;
    removeTimer: number | null;
    typeMapIcon: Record<string, string>;
    data: {
        inserted: boolean;
        show: boolean;
        classPrefix: string;
        typeMapIcon: string;
    };
    properties: TdToastProps;
    show(options: TdToastProps): void;
    clear(): void;
    detached(): void;
    destroyed(): void;
}
