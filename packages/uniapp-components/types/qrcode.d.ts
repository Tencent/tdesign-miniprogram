import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdQrcodeProps } from '../qrcode/type';

export type QrcodeProps = ExtractNonOnProps<TdQrcodeProps>;
export type QrcodeEmits = TransformEventHandlers<TdQrcodeProps, true>;
declare const QrcodeComponent: import('vue').DefineComponent<QrcodeProps, {}, {}, {}, {}, {}, {}, QrcodeEmits, any>;
export default QrcodeComponent;
