/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

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
   * 面板头左侧图标
   */
  headerLeftIcon?: {
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
   * 选项卡内容的位置
   * @default bottom
   */
  placement?: {
    type: StringConstructor;
    value?: 'bottom' | 'top';
  };
  /**
   * 当前面板唯一标识，如果值为空则取当前面下标兜底作为唯一标识
   */
  value?: {
    type: null;
    value?: string | number;
  };
}
