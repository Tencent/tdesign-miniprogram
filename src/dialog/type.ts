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
