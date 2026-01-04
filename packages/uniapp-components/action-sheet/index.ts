import { show, close, type ActionSheetItem, ActionSheetTheme, type ActionSheetShowOption } from './show';

export { type ActionSheetItem, ActionSheetTheme, type ActionSheetShowOption };

export default {
  show(options: ActionSheetShowOption) {
    return show(options);
  },

  close(options: ActionSheetShowOption) {
    return close(options);
  },
};
