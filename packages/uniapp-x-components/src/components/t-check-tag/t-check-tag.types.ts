/**
 * CheckTag 组件类型契约
 *
 * 行为契约对齐 uniapp-components/check-tag：受控/非受控双模式 checked，可关闭。
 * uts 端 icon 仅支持 string（图片 URL）；content 仅支持 string 与 [选中, 未选中] 数组。
 */

export type CheckTagShape = 'square' | 'round' | 'mark';

export type CheckTagSize = 'small' | 'medium' | 'large';

export type CheckTagVariant = 'dark' | 'light' | 'outline' | 'light-outline';

export interface CheckTagProps {
  /** 受控 - 标签选中态 */
  checked?: boolean | null;
  /** 非受控 - 标签默认选中态 */
  defaultChecked?: boolean;
  /** 是否可关闭 */
  closable?: boolean;
  /** 内容：单字符串/数字/[选中内容,未选中内容] */
  content?: string | number | (string | number)[];
  /** 是否禁用 */
  disabled?: boolean;
  /** 标签图标（图片 URL） */
  icon?: string;
  /** 形状 */
  shape?: CheckTagShape;
  /** 尺寸 */
  size?: CheckTagSize;
  /** 风格变体 */
  variant?: CheckTagVariant;
  /** 透传额外类名 */
  customClass?: string;
}

export interface CheckTagEmits {
  (e: 'change', checked: boolean): void;
  (e: 'click', event: UniMouseEvent): void;
  (e: 'close', event: UniMouseEvent): void;
  (e: 'update:checked', checked: boolean): void;
}
