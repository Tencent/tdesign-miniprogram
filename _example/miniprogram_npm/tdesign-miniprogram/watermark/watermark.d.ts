import { SuperComponent } from '../common/src/index';
export default class Watermark extends SuperComponent {
    externalClasses: string[];
    properties: import("./type").TdWatermarkProps;
    data: {
        classPrefix: string;
        watermarkStyle: {};
    };
    lifetimes: {
        attached(): void;
    };
    observers: {
        'watermarkContent, movable, rotate, x, y, width, height, alpha, lineSpace, moveInterval, zIndex, rotate, offset, removable, isRepeat, layout'(): void;
    };
    methods: {
        watermarkColor(): "rgba(238, 238, 238, 0.1)" | "rgba(0, 0, 0, 0.1)";
        renderWatermark(): void;
    };
}
