/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdCollapseProps {
  /**
   * 默认是否展开全部
   * @default false
   */
  defaultExpandAll?: boolean;
  /**
   * 是否禁用面板展开/收起操作
   */
  disabled?: boolean;
  /**
   * 展开图标
   * @default true
   */
  expandIcon?: boolean;
  /**
   * 每个面板互斥展开，每次只展开一个面板
   * @default false
   */
  expandMutex?: boolean;
  /**
   * 折叠面板风格
   * @default default
   */
  theme?: 'default' | 'card';
  /**
   * 展开的面板集合
   */
  value?: CollapseValue;
  /**
   * 展开的面板集合，非受控属性
   */
  defaultValue?: CollapseValue;
  /**
   * 切换面板时触发，返回变化的值
   */
  onChange?: (context: { value: CollapseValue; context: { e: MouseEvent } }) => void;
}

export type CollapseValue = Array<string | number>;
