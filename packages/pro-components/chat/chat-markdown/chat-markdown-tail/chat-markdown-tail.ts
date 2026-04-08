import { SuperComponent, wxComponent, ComponentsOptionsType } from '../../../../components/common/src/index';
import config from '../../../../components/common/config';

const { prefix } = config;
const name = `${prefix}-chat-markdown`;

@wxComponent()
export default class ChatMarkdownTail extends SuperComponent {
  options: ComponentsOptionsType = {};

  properties = {
    /** 光标字符内容，由 chat-markdown 内部注入，默认 ▋ */
    content: {
      type: String,
      value: '▋',
    },
  };

  data = {
    classPrefix: name,
  };
}
