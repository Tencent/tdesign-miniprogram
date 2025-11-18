import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdNavbarProps } from '../navbar/type';

export type NavbarProps = ExtractNonOnProps<TdNavbarProps>;
export type NavbarEmits = TransformEventHandlers<TdNavbarProps, true>;
declare const NavbarComponent: import('vue').DefineComponent<NavbarProps, {}, {}, {}, {}, {}, {}, NavbarEmits, any>;
export default NavbarComponent;
