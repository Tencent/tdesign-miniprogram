import { SuperComponent } from '../common/src/index';
declare type dataType = {
    sliderStyles: string;
    classPrefix: string;
    initialLeft: number | null;
    initialRight: number | null;
    activeLeft: number;
    activeRight: number;
    maxRange: number;
    lineLeft: number;
    lineRight: number;
    dotTopValue: number[];
    blockSize: number;
    isScale: boolean;
    scaleArray: any[];
    scaleTextArray: any[];
    _value: number | number[];
    prefix: string;
};
export default class Slider extends SuperComponent {
    externalClasses: string[];
    properties: import("./type").TdSliderProps;
    controlledProps: {
        key: string;
        event: string;
    }[];
    data: dataType;
    observers: {
        'value, min, max'(this: Slider, newValue: number | number[]): void;
        _value(this: Slider, newValue: number | number[]): void;
    };
    attached(): void;
    /**
     * 通知父组件，触发change事件
     * touchMove过程中，_value变化，但不trigger，其他改变_value的场景需要调用该函数
     * @param {number | number[]} value
     * @memberof Slider
     */
    triggerValue(value?: number | number[]): void;
    /**
     * 监控props传参，计算组件value值
     * @param newValue
     */
    handlePropsChange(newValue: number | number[]): void;
    handleMask(marks: any): void;
    getSingleBarWidth(value: number): void;
    getSelectorQuery(id: string): Promise<{
        left: number;
        right: number;
    }>;
    getInitialStyle(): Promise<void>;
    setDotStyle(left: number, right: number): void;
    stepValue(value: number): number;
    onSingleLineTap(e: any): void;
    getSingleChangeValue(e: any): number;
    /**
     * 将位置转换为值
     *
     * @param {number} posValue 位置数据
     * @param {(0 | 1)} dir 方向： 0-left， 1-right
     * @return  {number}
     * @memberof Slider
     */
    convertPosToValue(posValue: number, dir: 0 | 1): number;
    onLineTap(e: any): void;
    onTouchMoveLeft(e: any): void;
    onTouchMoveRight(e: any): void;
    setLineStyle(): void;
}
export {};
