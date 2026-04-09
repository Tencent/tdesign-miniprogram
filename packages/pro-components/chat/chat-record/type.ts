/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 */
export interface TdChatRecordProps {
  /**
   * 是否使用自定义语音输入插槽
   * @default false
   */
  useSpeechInputSlot?: {
    type: BooleanConstructor;
    value: boolean;
  };
  /**
   * 是否使用自定义无权限插槽
   * @default false
   */
  useSpeechNoAuthSlot?: {
    type: BooleanConstructor;
    value: boolean;
  };
  /**
   * 是否自动抬升发送按钮高度
   * @default true
   */
  autoSendHeight?: {
    type: BooleanConstructor;
    value: boolean;
  };
}

/** 触摸状态类型 */
export type TouchStatus = 'top' | 'bottom' | '';

/** 录音状态类型 */
export type RecordStatus = 'recording' | 'thinking' | 'stop' | 'error' | '';

/** 组件状态类型 */
export type ComponentStatus = 'normal' | 'cancel' | 'recording' | 'thinking' | 'unknow' | 'complete' | 'error';

/** 触摸事件 */
export interface CustomTouchEvent {
  changedTouches?: Array<{
    clientY: number;
  }>;
  preventDefault?: () => void;
}

/** 焦点事件 */
export interface CustomFocusEvent {
  detail?: {
    height?: number;
  };
}
