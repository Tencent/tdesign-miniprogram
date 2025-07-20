import { QrCode, QrSegment } from '../utils/qrcodegen';
import type { ErrorCorrectionLevel, Excavation, ImageSettings } from '../utils/type';
import { ERROR_LEVEL_MAP, getImageSettings, getMarginSize } from '../utils/utils';

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

const useQRCode = (opt: Options): QRCodeResult => {
  const { value, level, minVersion, includeMargin, marginSize, imageSettings, size } = opt;

  const qrcode = (() => {
    const segments = QrSegment.makeSegments(value);
    return QrCode.encodeSegments(segments, ERROR_LEVEL_MAP[level], minVersion);
  })();

  const cells = qrcode.getModules();
  const margin = getMarginSize(includeMargin, marginSize);
  const calculatedImageSettings = getImageSettings(cells, size, margin, imageSettings);

  return {
    cells,
    margin,
    numCells: cells.length + margin * 2,
    calculatedImageSettings,
    qrcode,
  };
};

export default useQRCode;
