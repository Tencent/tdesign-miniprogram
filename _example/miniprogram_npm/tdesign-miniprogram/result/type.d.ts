export interface TdResultProps {
    description?: {
        type: StringConstructor;
        value?: string;
    };
    icon?: {
        type: null;
        value?: string | boolean | object;
    };
    image?: {
        type: StringConstructor;
        value?: string;
    };
    theme?: {
        type: StringConstructor;
        value?: 'default' | 'success' | 'warning' | 'error';
    };
    title?: {
        type: StringConstructor;
        value?: string;
    };
}
