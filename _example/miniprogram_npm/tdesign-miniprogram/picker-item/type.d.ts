export interface TdPickerItemProps {
    format?: {
        type: undefined;
        value?: (option: PickerItemOption, columnIndex: number) => PickerItemOption;
    };
    options?: {
        type: ArrayConstructor;
        value?: PickerItemOption[];
    };
}
export interface PickerItemOption {
    label: string;
    value: string | number;
    icon?: string;
}
