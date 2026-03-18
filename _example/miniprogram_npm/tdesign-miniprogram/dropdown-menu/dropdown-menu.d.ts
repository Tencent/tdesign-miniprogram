import { RelationsOptions, SuperComponent } from '../common/src/index';
import type { TdDropdownMenuProps } from './type';
export interface DropdownMenuProps extends TdDropdownMenuProps {
}
export default class DropdownMenu extends SuperComponent {
    externalClasses: string[];
    properties: TdDropdownMenuProps;
    nodes: any;
    data: {
        prefix: string;
        classPrefix: string;
        menus: any;
        activeIdx: number;
        bottom: number;
        _arrowIcon: {
            name: string | object;
        };
    };
    relations: RelationsOptions;
    lifetimes: {
        ready(): void;
    };
    observers: {
        arrowIcon(v: any): void;
        activeIdx(v: number): void;
    };
    methods: {
        toggle(index: number): void;
        getAllItems(): void;
        handleToggle(e: WechatMiniprogram.BaseEvent): void;
        noop(): void;
    };
}
