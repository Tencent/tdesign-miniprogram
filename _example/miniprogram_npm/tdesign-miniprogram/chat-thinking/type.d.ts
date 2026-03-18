export interface TdChatThinkingProps {
    animation?: {
        type: StringConstructor;
        value?: 'skeleton' | 'moving' | 'gradient' | 'dot';
    };
    collapsed?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    content: {
        type: ObjectConstructor;
        value?: {
            text?: string;
            title?: string;
        };
        required?: boolean;
    };
    layout?: {
        type: StringConstructor;
        value?: 'block' | 'border';
    };
    maxHeight?: {
        type: NumberConstructor;
        value?: number;
    };
    status: {
        type: StringConstructor;
        value?: 'complete' | 'stop' | 'error' | 'pending';
        required?: boolean;
    };
}
