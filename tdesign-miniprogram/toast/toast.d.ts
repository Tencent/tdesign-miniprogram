/// <reference types="node" />
import { SuperComponent } from '../common/src/index';
import { ToastOptionsType } from './index';
declare type Timer = NodeJS.Timeout | null;
export default class Toast extends SuperComponent {
    externalClasses: string[];
    options: {
        multipleSlots: boolean;
    };
    hideTimer: Timer;
    removeTimer: Timer;
    data: {
        inserted: boolean;
        show: boolean;
        classPrefix: string;
        typeMapIcon: string;
    };
    properties: import("./type").TdToastProps;
    detached(): void;
    methods: {
        show(options: ToastOptionsType): void;
        clear(): void;
        destroyed(): void;
    };
}
export {};
