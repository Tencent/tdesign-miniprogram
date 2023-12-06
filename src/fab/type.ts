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
  movable?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 可拖动配置
   */
  movableViewProps?: {
    type: ObjectConstructor;
    value?: movableViewProps;
  };
}

export interface movableViewProps {
  /** 移动方向 */
  direction?: 'all' | 'vertical' | 'horizontal' | 'none';
  /** 是否带有惯性 */
  inertia?: boolean;
  /** 定义x轴方向的偏移，单位支持px（默认）、rpx */
  x?: number | string;
  /** 定义y轴方向的偏移，单位支持px（默认）、rpx */
  y?: number | string;
  /** 是否禁用 */
  disabled?: boolean;
}
