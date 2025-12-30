import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdDropdownMenuProps } from '../dropdown-menu/type';

export type DropdownMenuProps = ExtractNonOnProps<TdDropdownMenuProps>;
export type DropdownMenuEmits = TransformEventHandlers<TdDropdownMenuProps, true>;
declare const DropdownMenuComponent: import('vue').DefineComponent<DropdownMenuProps, {}, {}, {}, {}, {}, {}, DropdownMenuEmits, any>;
export default DropdownMenuComponent;
