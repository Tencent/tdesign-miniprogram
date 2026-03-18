export interface TdCellGroupProps {
    bordered?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    theme?: {
        type: StringConstructor;
        value?: 'default' | 'card';
    };
    title?: {
        type: StringConstructor;
        value?: string;
    };
}
