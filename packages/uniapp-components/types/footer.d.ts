import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdFooterProps } from '../footer/type';

export type FooterProps = ExtractNonOnProps<TdFooterProps>;
export type FooterEmits = TransformEventHandlers<TdFooterProps, true>;
declare const FooterComponent: import('vue').DefineComponent<FooterProps, {}, {}, {}, {}, {}, {}, FooterEmits, any>;
export default FooterComponent;
