export enum MessageType {
  info = 'info',
  success = 'success',
  warning = 'warning',
  error = 'error',
}

export interface MessageOffset {
  top?: number | string;
  right?: number | string;
  left?: number | string;
}

export interface MessageMarquee {
  speed?: number;
  loop?: number;
  delay?: number;
}

export interface MessageProps {
  visible?: boolean;
  content: string;
  theme?: MessageType;
  icon?: boolean | string;
  closeBtn?: boolean;
  action?: string;
  marquee?: MessageMarquee;
  offset?: MessageOffset;
  duration?: number;
  zIndex?: number;
}
