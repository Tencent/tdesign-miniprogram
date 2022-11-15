/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdRateProps {
  /**
   * 是否允许半选
   * @default false
   */
  allowHalf?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 评分的数量
   * @default 5
   */
  count?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 自定义组件样式
   * @default ''
   */
  style?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 是否禁用评分
   * @default false
   */
  disabled?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 组件类名，分别用于设置 组件外层类名、评分图标类名、辅助文字类名。
   */
  externalClasses?: {
    type: ArrayConstructor;
    value?: ['t-class', 't-class-icon', 't-class-text'];
  };
  /**
   * 评分图标的间距，默认单位为 `px`, 示例：`8`
   * @default 8
   */
  gap?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 是否显示对应的辅助文字
   * @default false
   */
  showText?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 评分图标的大小，默认单位为 `px`，示例：`20`
   * @default 20
   */
  size?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 评分等级对应的辅助文字。组件内置默认值为：['极差', '失望', '一般', '满意', '惊喜']。自定义值示例：['1分', '2分', '3分', '4分', '5分']
   * @default []
   */
  texts?: {
    type: ArrayConstructor;
    value?: Array<string>;
  };
  /**
   * 选择评分的值
   * @default 0
   */
  value?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 选择评分的值，非受控属性
   * @default 0
   */
  defaultValue?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 形状类型，有描边类型和填充类型两种
   * @default outline
   */
  variant?: {
    type: StringConstructor;
    value?: 'outline' | 'filled';
  };
}
