import { show, close, ActionSheetItem, ActionSheetTheme, ActionSheetShowOption } from './show';

export { ActionSheetItem, ActionSheetTheme, ActionSheetShowOption };

export default {
  show(options: ActionSheetShowOption) {
    return show(options);
  },

  close(options: ActionSheetShowOption) {
    return close(options);
  },
};
