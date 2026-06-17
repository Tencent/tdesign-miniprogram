/**
 * Collapse 组件类型契约
 */

export type CollapseTheme = 'default' | 'card';

export type CollapseValue = (string | number)[];

export interface CollapseProps {
  /** 默认是否展开全部 */
  defaultExpandAll?: boolean;
  /** 是否禁用面板展开/收起操作 */
  disabled?: boolean;
  /** 展开图标 */
  expandIcon?: boolean;
  /** 互斥展开 */
  expandMutex?: boolean;
  /** 折叠面板风格 */
  theme?: CollapseTheme;
  /** 展开的面板集合 */
  value?: CollapseValue;
  /** 展开的面板集合，非受控属性 */
  defaultValue?: CollapseValue;
  /** 透传额外类名 */
  customClass?: string;
}

export interface CollapseEmits {
  (e: 'change', value: CollapseValue): void;
  (e: 'update:value', value: CollapseValue): void;
}
