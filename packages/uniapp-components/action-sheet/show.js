import { getInstance } from '../common/utils';


export const ActionSheetTheme = {
  List: 'list',
  Grid: 'grid',
};


export const actionSheetTheme = {
  List: ActionSheetTheme.List,
  Grid: ActionSheetTheme.Grid,
} ;

export const show = function (options) {
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

export const close = function (options) {
  const { context, selector = '#t-action-sheet' } = { ...options };
  const instance = getInstance(context, selector);
  if (instance) {
    instance.close();
  }
};
