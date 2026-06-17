/**
 * ActionSheet - uni-app x 类型定义
 *
 * 行为契约对齐 @tdesign/uniapp 的 action-sheet：
 *  - theme: list（列表）/ grid（宫格）
 *  - align: center / left 文本对齐
 *  - items: 菜单项数组
 *  - showCancel + cancelText: 底部取消按钮
 *  - description: 顶部描述文字
 */

export type ActionSheetTheme = 'list' | 'grid';
export type ActionSheetAlign = 'center' | 'left';

/** 单个菜单项 */
export type ActionSheetItem = {
  /** 显示文字 */
  label: string;
  /** 颜色（可选） */
  color?: string;
  /** 是否禁用 */
  disabled?: boolean;
  /** grid 模式下的图标名 */
  icon?: string;
};

export type ActionSheetSelectedContext = {
  index: number;
  item: ActionSheetItem;
};

export type ActionSheetProps = {
  align?: ActionSheetAlign;
  cancelText?: string;
  /** grid 模式下的每行数量 */
  count?: number;
  description?: string;
  items?: ActionSheetItem[];
  preventScrollThrough?: boolean;
  showCancel?: boolean;
  showOverlay?: boolean;
  theme?: ActionSheetTheme;
  visible?: boolean;
  defaultVisible?: boolean;
  customClass?: string;
  customStyle?: string;
};

export type ActionSheetEmits = {
  (e: 'cancel'): void;
  (e: 'close'): void;
  (e: 'selected', ctx: ActionSheetSelectedContext): void;
  (e: 'update:visible', visible: boolean): void;
};
