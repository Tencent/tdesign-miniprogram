export type MessageType = 'info' | 'success' | 'warning' | 'error';

export type MessageAlignType = 'left' | 'center';

export interface IMessageOffset {
  top?: number | string;
  right?: number | string;
  left?: number | string;
}

export interface IMessageProps {
  visible?: boolean;
  content: string;
  theme?: MessageType;
  align?: MessageAlignType;
  offset?: IMessageOffset;
  duration?: number;
  icon?: string;
  zIndex?: number;
}
