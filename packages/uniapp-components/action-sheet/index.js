import { show, close, ActionSheetTheme, actionSheetTheme } from './show';

export { ActionSheetTheme, actionSheetTheme };

export default {
  show(options) {
    return show(options);
  },

  close(options) {
    return close(options);
  },
};
