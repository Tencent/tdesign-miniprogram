export interface TdDraggableProps {
    direction?: {
        type: StringConstructor;
        value?: 'all' | 'vertical' | 'horizontal' | 'none';
    };
}
