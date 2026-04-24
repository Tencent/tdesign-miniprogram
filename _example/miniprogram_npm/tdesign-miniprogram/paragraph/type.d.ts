import { TypographyEllipsis } from '../text/index';
export interface TdParagraphProps {
    content?: {
        type: StringConstructor;
        value?: string;
    };
    ellipsis?: {
        type: null;
        value?: boolean | TypographyEllipsis;
    };
}
