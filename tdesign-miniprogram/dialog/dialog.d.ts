import { SuperComponent } from '../common/src/index';
export default class Dialog extends SuperComponent {
    options: {
        multipleSlots: boolean;
        addGlobalClass: boolean;
    };
    externalClasses: string[];
    properties: import("./type").TdDialogProps;
    data: {
        prefix: string;
        classPrefix: string;
    };
    methods: {
        onTplButtonTap(e: any): void;
        onConfirm(): void;
        onCancel(): void;
        close(): void;
        overlayClick(): void;
        onActionTap(e: any): void;
        openValueCBHandle(e: any): void;
        openValueErrCBHandle(e: any): void;
    };
}
