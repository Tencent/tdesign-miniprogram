import { SuperComponent } from '../../common/src/index';
import type { TdDraggableProps } from './type';
export interface DraggableProps extends TdDraggableProps {
}
export default class Draggable extends SuperComponent {
    properties: TdDraggableProps;
    externalClasses: string[];
    data: {
        prefix: string;
        classPrefix: string;
    };
    lifetimes: {
        ready(): void;
    };
    methods: {
        onTouchStart(e: any): void;
        onTouchMove(e: any): void;
        onTouchEnd(e: any): Promise<void>;
        computedRect(): Promise<void>;
    };
}
