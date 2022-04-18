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

const getInstance = function (context?: Context, selector = '#t-action-sheet') {
  if (!context) {
    const pages = getCurrentPages();
    const page = pages[pages.length - 1];
    context = page.$$basePage || page;
  }

  const instance = context?.selectComponent(selector);
  if (!instance) {
    return null;
  }
  return instance;
};

export const show = function (options: ActionSheetShowOption) {
  const { context, selector } = options;
  const instance = getInstance(context, selector);
  if (!instance) {
    return Promise.reject(new Error('未找到ActionSheet组件, 请检查selector是否正确'));
  }
  instance.resetData(() => {
    instance.setData({ ...options }, instance.show);
  });
  return instance;
};
