import { QrCode } from '../../common/shared/qrcode/qrcodegen';
import type { ErrorCorrectionLevel, Excavation, ImageSettings } from '../../common/shared/qrcode/types';
interface Options {
    value: string;
    level: ErrorCorrectionLevel;
    minVersion: number;
    includeMargin: boolean;
    marginSize?: number;
    imageSettings?: ImageSettings;
    size: number;
}
interface QRCodeResult {
    cells: boolean[][];
    margin: number;
    numCells: number;
    calculatedImageSettings: {
        x: number;
        y: number;
        h: number;
        w: number;
        excavation: Excavation | null;
        opacity: number;
    } | null;
    qrcode: QrCode;
}
declare const useQRCode: (opt: Options) => QRCodeResult;
export default useQRCode;
