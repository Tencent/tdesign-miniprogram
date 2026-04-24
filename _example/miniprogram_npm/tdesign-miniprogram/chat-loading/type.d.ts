export interface TdChatLoadingProps {
    animation?: {
        type: StringConstructor;
        value?: 'skeleton' | 'moving' | 'gradient' | 'dots';
    };
    text?: {
        type: StringConstructor;
        value?: string;
    };
}
