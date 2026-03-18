export interface TdFooterProps {
    links?: {
        type: ArrayConstructor;
        value?: Array<LinkObj>;
    };
    logo?: {
        type: ObjectConstructor;
        value?: FooterLogo;
    };
    text?: {
        type: StringConstructor;
        value?: string;
    };
}
export interface LinkObj {
    name: string;
    url?: string;
    openType?: 'navigate' | 'redirect' | 'relaunch' | 'switchTab' | 'navigateBack';
}
export interface FooterLogo {
    icon: string;
    title?: string;
    url?: string;
}
