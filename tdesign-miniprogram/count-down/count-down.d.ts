import { SuperComponent } from '../common/src/index';
export default class CountDown extends SuperComponent {
    externalClasses: string[];
    properties: import("./type").TdCountDownProps;
    observers: {
        time(): void;
    };
    data: {
        classPrefix: string;
        timeData: import("./utils").TimeData;
        formattedTime: string;
    };
    tid: null | number;
    detached(): void;
    destroyed(): void;
    start(): void;
    pause(): void;
    reset(): void;
    tick(): void;
    microTick(): void;
    macroTick(): void;
    getRemain(): number;
    setRemain(remain: number): void;
}
