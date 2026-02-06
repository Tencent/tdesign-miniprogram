import { SuperComponent } from '../../../common/src/index';
export default class QRCode extends SuperComponent {
    options: {
        multipleSlots: boolean;
    };
    properties: {
        statusRender: {
            type: BooleanConstructor;
            value: boolean;
        };
        status: {
            type: StringConstructor;
            value: "loading" | "active" | "expired" | "scanned";
        };
        locale: {
            type: ObjectConstructor;
            value: {
                expiredText?: string;
                refreshText?: string;
                scannedText?: string;
            };
        };
    };
    data: {
        prefix: string;
        classPrefix: string;
        isSkyline: boolean;
    };
    lifetimes: {
        attached(): void;
    };
    methods: {
        handleRefresh(): void;
    };
}
