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
   * 展开图标。值为 undefined 或 false 则不显示展开图标；值为 true 显示默认图标；值类型为函数，则表示完全自定义展开图标
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
   * 展开的面板集合
   */
  value?: {
    type: ArrayConstructor;
    value?: CollapseValue;
  };
  /**
   * 展开的面板集合，非受控属性
   */
  defaultValue?: {
    type: ArrayConstructor;
    value?: CollapseValue;
  };
}

export interface TdCollapsePanelProps {
  /**
   * 折叠面板内容
   */
  content?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 禁止当前面板展开，优先级大于 Collapse 的同名属性
   */
  disabled?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 当前折叠面板展开图标，优先级大于 Collapse 的同名属性
   */
  expandIcon?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 组件类名，用于组件外层元素、标题、内容
   */
  externalClasses?: {
    type: ArrayConstructor;
    value?: ['t-class', 't-class-header', 't-class-content'];
  };
  /**
   * 面板头内容
   */
  header?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 面板头的右侧区域，一般用于呈现面板操作
   */
  headerRightContent?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 当前面板唯一标识，如果值为空则取当前面下标兜底作为唯一标识
   */
  value?: {
    type: StringConstructor;
    optionalTypes: Array<NumberConstructor>;
    value?: string | number;
  };
}

export type CollapseValue = Array<string | number>;
