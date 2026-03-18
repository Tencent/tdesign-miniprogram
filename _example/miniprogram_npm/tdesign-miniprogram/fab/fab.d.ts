import { SuperComponent } from '../common/src/index';
export default class Fab extends SuperComponent {
    behaviors: string[];
    properties: import("./type").TdFabProps;
    externalClasses: string[];
    data: {
        prefix: string;
        classPrefix: string;
        buttonData: {
            size: string;
            shape: string;
            theme: string;
            tClass: string;
        };
        moveStyle: any;
    };
    observers: {
        'buttonProps.**, icon, text, ariaLabel, yBounds'(): void;
    };
    methods: {
        onTplButtonTap(e: any): void;
        onStart(e: any): void;
        onMove(e: any): void;
        onEnd(e: any): void;
        computedSize(): void;
    };
}
