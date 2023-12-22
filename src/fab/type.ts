/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdFabProps {
  /**
   * 透传至 Button 组件
   */
  buttonProps?: {
    type: ObjectConstructor;
    value?: object;
  };
  /**
   * 自定义组件样式
   * @default right: 16px; bottom: 32px;
   */
  style?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 图标
   * @default ''
   */
  icon?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 文本内容
   * @default ''
   */
  text?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 是否可移动
   * @default false
   */
  draggable?: {
    type: BooleanConstructor;
    optionalTypes: Array<StringConstructor>;
    value?: boolean | 'all' | 'vertical' | 'horizontal';
  };
}
