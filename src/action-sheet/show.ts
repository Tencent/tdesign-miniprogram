import { getInstance } from '../common/utils';

export interface ActionSheetItem {
  label: string;
  color?: string;
  disabled?: boolean;
  /** 图标名称或图片链接 */
  icon?: string;
}

type Context = WechatMiniprogram.Page.TrivialInstance | WechatMiniprogram.Component.TrivialInstance;

export enum ActionSheetTheme {
  List = 'list',
  Grid = 'grid',
}

interface ActionSheetProps {
  visible: boolean;
  items: Array<string | ActionSheetItem>;
  defaultVisible?: boolean;
  cancelText?: string;
  count?: number;
  showCancel?: boolean;
  theme?: ActionSheetTheme;
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
