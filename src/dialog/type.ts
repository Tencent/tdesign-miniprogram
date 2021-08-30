/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-08-03 16:25:55
 * */

// import { ButtonProps } from '../button/button';

export interface TdDialogProps {
  /**
   * 操作栏
   */
  action?: {
    type: StringConstructor;
    value?: string;
    required?: boolean;
  };
  /**
   * 多按钮排列方式
   * @default horizontal
   */
  buttonLayout?: {
    type: StringConstructor;
    value?: 'horizontal' | 'vertical';
    required?: boolean;
  };
  /**
   * 取消按钮，可自定义。值为 undefined 或 null 则不显示取消按钮。值类型为 Object 则表示透传 Button 组件属性
   * @default ''
   */
  cancelBtn?: {
    optionalTypes: Array<StringConstructor | ObjectConstructor>;
    value?: string; // | ButtonProps;
    required?: boolean;
  };
  /**
   * 点击蒙层时是否触发关闭事件
   * @default true
   */
  closeOnOverlayClick?: {
    type: BooleanConstructor;
    value?: boolean;
    required?: boolean;
  };
  /**
   * 确认按钮，可自定义。值为 undefined 或 null 则不显示确认按钮
   * @default ''
   */
  confirmBtn?: {
    optionalTypes: Array<StringConstructor | ObjectConstructor>;
    value?: string; // | ButtonProps;
    required?: boolean;
  };
  /**
   * 内容
   */
  content?: {
    type: StringConstructor;
    value?: string;
    required?: boolean;
  };
  /**
   * 组件类名，分别用于设置 组件外层元素、确认按钮、取消按钮 等元素类名
   */
  externalClasses?: {
    type: ArrayConstructor;
    value?: ['t-class', 't-class-confirm', 't-class-cancel'];
    required?: boolean;
  };
  /**
   * 防止滚动穿透
   * @default true
   */
  preventScrollThrough?: {
    type: BooleanConstructor;
    value?: boolean;
    required?: boolean;
  };
  /**
   * 是否显示遮罩层
   * @default true
   */
  showOverlay?: {
    type: BooleanConstructor;
    value?: boolean;
    required?: boolean;
  };
  /**
   * 标题
   */
  title?: {
    type: StringConstructor;
    value?: string;
    required?: boolean;
  };
  /**
   * 控制对话框是否显示
   * @default true
   */
  visible?: {
    type: BooleanConstructor;
    value?: boolean;
    required?: boolean;
  };
  /**
   * 对话框层级（Web 侧样式默认为 2500，移动端和小程序默认为 1500）
   */
  zIndex?: {
    type: NumberConstructor;
    value?: number;
    required?: boolean;
  };
}

export type Context =
  | WechatMiniprogram.Page.TrivialInstance
  | WechatMiniprogram.Component.TrivialInstance;

export interface DialogAlertOptionsType {
  context?: Context;
  selector?: string;
  title?: string;
  content: string;
  zIndex?: number;
  asyncClose?: boolean;
  confirmButtonText?: string;
  textAlign?: string;
}

export interface DialogComfirmOptionsType extends DialogAlertOptionsType {
  cancelButtonText?: string;
}

export interface Action {
  name: string;
  primary?: boolean;
  style?: string;
}

export interface DialogActionOptionsType {
  context?: Context;
  selector?: string;
  title?: string;
  content: string;
  zIndex?: number;
  asyncClose?: boolean;
  actions?: Action[]; // 自定义多选项，优先级高于默认的确定、取消按钮，触发后返回按钮的index
  buttonLayout?: 'vertical' | 'horizontal'; // 多按钮排列方式，可选值：horizontal/vertical。
}
