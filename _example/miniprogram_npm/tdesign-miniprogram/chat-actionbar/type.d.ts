export interface TdChatActionbarProps {
    actionBar?: {
        type: ArrayConstructor;
        value?: Array<'replay' | 'copy' | 'good' | 'bad' | 'share' | 'quote'>;
    };
    chatId?: {
        type: StringConstructor;
        value?: string;
    };
    comment?: {
        type: StringConstructor;
        value?: 'good' | 'bad';
    };
    content?: {
        type: StringConstructor;
        value?: string;
    };
    copyMode?: {
        type: StringConstructor;
        value?: 'markdown' | 'text';
    };
    disabled?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    longPressPosition?: {
        type: ObjectConstructor;
        value?: ChatActionbarLongPressPosition;
    };
    placement?: {
        type: StringConstructor;
        value?: 'start' | 'end' | 'space-around' | 'space-between' | 'longpress';
    };
}
export interface ChatActionbarLongPressPosition {
    type?: object;
    value?: LongPressPositionValue;
}
export interface LongPressPositionValue {
    pageX?: number;
    pageY?: number;
    clientX?: number;
    clientY?: number;
    x?: number;
    y?: number;
}
