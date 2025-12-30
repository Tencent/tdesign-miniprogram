import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdDrawerProps } from '../drawer/type';

export type DrawerProps = ExtractNonOnProps<TdDrawerProps>;
export type DrawerEmits = TransformEventHandlers<TdDrawerProps, true>;
declare const DrawerComponent: import('vue').DefineComponent<DrawerProps, {}, {}, {}, {}, {}, {}, DrawerEmits, any>;
export default DrawerComponent;
