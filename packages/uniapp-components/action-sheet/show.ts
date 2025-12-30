import { getInstance } from '../common/utils';
import { type ActionSheetItem } from './type';

export { type ActionSheetItem };

type Context = WechatMiniprogram.Page.TrivialInstance | WechatMiniprogram.Component.TrivialInstance;

export enum ActionSheetTheme {
  List = 'list',
  Grid = 'grid',
}

export const actionSheetTheme = {
  List: ActionSheetTheme.List,
  Grid: ActionSheetTheme.Grid,
} as const;

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

export const show = function (options: ActionSheetShowOption) {
  const { context, selector = '#t-action-sheet', ...otherOptions } = { ...options };
  const instance = getInstance(context, selector);
  if (instance) {
    instance.show({
      ...otherOptions,
    });
    return instance;
  }
  console.error('未找到组件,请确认 selector && context 是否正确');
};

export const close = function (options: ActionSheetShowOption) {
  const { context, selector = '#t-action-sheet' } = { ...options };
  const instance = getInstance(context, selector);
  if (instance) {
    instance.close();
  }
};
