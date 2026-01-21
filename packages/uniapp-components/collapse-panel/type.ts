/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdCollapsePanelProps {
  /**
   * 折叠面板内容
   */
  content?: string;
  /**
   * 禁止当前面板展开，优先级大于 Collapse 的同名属性
   */
  disabled?: boolean;
  /**
   * 当前折叠面板展开图标，优先级大于 Collapse 的同名属性
   */
  expandIcon?: boolean;
  /**
   * 面板头内容
   */
  header?: string;
  /**
   * 面板头左侧图标
   */
  headerLeftIcon?: string;
  /**
   * 面板头的右侧区域，一般用于呈现面板操作
   */
  headerRightContent?: string;
  /**
   * 选项卡内容的位置
   * @default bottom
   */
  placement?: 'bottom' | 'top';
  /**
   * 当前面板唯一标识，如果值为空则取当前面下标兜底作为唯一标识
   */
  value?: string | number;
}
