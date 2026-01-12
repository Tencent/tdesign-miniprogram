import { MessageProps } from './message.interface';
declare type Context = any;
declare type Instance = any;
interface MessageActionOptionsType extends Optional<MessageProps> {
  context?: Context;
  selector?: string;
}
declare const Handler: {
  info(options: MessageActionOptionsType): Instance;
  success(options: MessageActionOptionsType): Instance;
  warning(options: MessageActionOptionsType): Instance;
  error(options: MessageActionOptionsType): Instance;
  hide(options: MessageActionOptionsType): void;
};

export default Handler;

