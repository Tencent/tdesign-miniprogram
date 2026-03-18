import { ErrorCorrectionLevel } from '../../../common/shared/qrcode/types';
export interface TdQRCodeProps {
    value?: string;
    icon?: string;
    size?: number;
    iconSize?: null;
    level?: ErrorCorrectionLevel;
    bgColor?: string;
    color?: string;
    includeMargin?: boolean;
    marginSize?: number;
}
