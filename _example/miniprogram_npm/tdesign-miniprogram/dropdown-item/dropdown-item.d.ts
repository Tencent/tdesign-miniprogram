import { RelationsOptions, SuperComponent } from '../common/src/index';
import type { TdDropdownItemProps } from './type';
export interface DropdownItemProps extends TdDropdownItemProps {
}
export default class DropdownMenuItem extends SuperComponent {
    options: {
        multipleSlots: boolean;
    };
    externalClasses: string[];
    properties: TdDropdownItemProps;
    data: {
        prefix: string;
        classPrefix: string;
        show: boolean;
        top: number;
        maskHeight: number;
        initValue: any;
        hasChanged: boolean;
        duration: string | number;
        zIndex: number;
        overlay: boolean;
        labelAlias: string;
        valueAlias: string;
        computedLabel: string;
        firstCheckedValue: string;
    };
    relations: RelationsOptions;
    controlledProps: {
        key: string;
        event: string;
    }[];
    observers: {
        keys(obj: any): void;
        value(v: any): void;
        'label, computedLabel, disabled'(): void;
        show(visible: any): void;
    };
    methods: {
        closeDropdown(): void;
        getParentBottom(cb: any): void;
        handleTreeClick(e: any): void;
        handleRadioChange(e: any): void;
        handleMaskClick(): void;
        handleReset(): void;
        handleConfirm(): void;
        onLeaved(): void;
    };
}
