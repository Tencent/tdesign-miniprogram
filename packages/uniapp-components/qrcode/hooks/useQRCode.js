import { QrCode, QrSegment } from '../../common/shared/qrcode/qrcodegen';
import { ERROR_LEVEL_MAP, getImageSettings, getMarginSize } from '../../common/shared/qrcode/utils';

const useQRCode = (opt) => {
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
