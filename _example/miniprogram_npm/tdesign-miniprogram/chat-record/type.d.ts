export interface TdChatRecordProps {
    autoSend?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    bottomHeight?: {
        type: NumberConstructor;
        value?: number;
    };
    duration?: {
        type: NumberConstructor;
        value?: number;
    };
    lang?: {
        type: StringConstructor;
        value?: string;
    };
}
