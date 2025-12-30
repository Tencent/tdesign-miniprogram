import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdLinkProps } from '../link/type';

export type LinkProps = ExtractNonOnProps<TdLinkProps>;
export type LinkEmits = TransformEventHandlers<TdLinkProps, true>;
declare const LinkComponent: import('vue').DefineComponent<LinkProps, {}, {}, {}, {}, {}, {}, LinkEmits, any>;
export default LinkComponent;
