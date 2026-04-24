import { TypographyEllipsis } from '../text/index';
export interface TdTitleProps {
    content?: {
        type: StringConstructor;
        value?: string;
    };
    ellipsis?: {
        type: null;
        value?: boolean | TypographyEllipsis;
    };
    level?: {
        type: StringConstructor;
        value?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    };
}
