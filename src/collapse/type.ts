/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdCollapseProps {
  /**
   * 默认是否展开全部
   * @default false
   */
  defaultExpandAll?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 是否禁用面板展开/收起操作
   */
  disabled?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 展开图标
   * @default true
   */
  expandIcon?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 每个面板互斥展开，每次只展开一个面板
   * @default false
   */
  expandMutex?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 折叠面板风格
   * @default default
   */
  theme?: {
    type: StringConstructor;
    value?: 'default' | 'card';
  };
  /**
   * 展开的面板集合
   * @default []
   */
  value?: {
    type: ArrayConstructor;
    value?: CollapseValue;
  };
  /**
   * 展开的面板集合，非受控属性
   * @default []
   */
  defaultValue?: {
    type: ArrayConstructor;
    value?: CollapseValue;
  };
}

export type CollapseValue = Array<string | number>;
