import type { ActionSheetItem, ActionSheetTheme, ActionSheetShowOption } from './show.d.ts';

export { ActionSheetItem, ActionSheetTheme, ActionSheetShowOption };

declare type Instance = any;

declare const Handler: {
  show(options: ActionSheetShowOption): Instance;
  close(options: ActionSheetShowOption): void;
};
export default Handler;
