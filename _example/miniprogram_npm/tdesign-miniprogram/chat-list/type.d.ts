export interface TdChatListProps {
    animation?: {
        type: StringConstructor;
        value?: 'skeleton' | 'moving' | 'gradient' | 'dot';
    };
    data?: {
        type: ArrayConstructor;
        value?: Array<TdChatItemMeta>;
    };
    layout?: {
        type: StringConstructor;
        value?: 'both' | 'single';
    };
    reverse?: {
        type: BooleanConstructor;
        value?: boolean;
    };
}
export interface TdChatItemMeta {
    avatar?: string;
    name?: string;
    role?: string;
    datetime?: string;
    content?: string;
    status?: string;
}
