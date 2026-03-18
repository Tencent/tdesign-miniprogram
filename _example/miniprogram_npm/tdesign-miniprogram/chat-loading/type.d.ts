export interface TdChatLoadingProps {
    animation?: {
        type: StringConstructor;
        value?: 'skeleton' | 'moving' | 'gradient' | 'dot';
    };
    text?: {
        type: StringConstructor;
        value?: string;
    };
}
