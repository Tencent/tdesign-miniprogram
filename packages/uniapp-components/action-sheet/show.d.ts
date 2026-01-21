import { ActionSheetItem } from './type';

export { ActionSheetItem };
declare type Instance = any;
declare type Context = any;

export declare enum ActionSheetTheme {
  List = 'list',
  Grid = 'grid'
}

interface ActionSheetProps {
  align: 'center' | 'left';
  cancelText?: string;
  count?: number;
  description: string;
  items: Array<string | ActionSheetItem>;
  showCancel?: boolean;
  theme?: ActionSheetTheme;
  visible: boolean;
  defaultVisible?: boolean;
}
export interface ActionSheetShowOption extends Omit<ActionSheetProps, 'visible'> {
  context?: Context;
  selector?: string;
}
export declare const show: (options: ActionSheetShowOption) => Instance;
export declare const close: (options: ActionSheetShowOption) => void;
