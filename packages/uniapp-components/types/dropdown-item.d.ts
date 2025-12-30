import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdDropdownItemProps } from '../dropdown-item/type';

export type DropdownItemProps = ExtractNonOnProps<TdDropdownItemProps>;
export type DropdownItemEmits = TransformEventHandlers<TdDropdownItemProps, true>;
declare const DropdownItemComponent: import('vue').DefineComponent<DropdownItemProps, {}, {}, {}, {}, {}, {}, DropdownItemEmits, any>;
export default DropdownItemComponent;
