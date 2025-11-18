import { SuperComponent, wxComponent, ComponentsOptionsType } from '../../../../components/common/src/index';
import config from '../../../../components/common/config';

const { prefix } = config;
const name = `${prefix}-chat-markdown-code`;

@wxComponent()
export default class ChatMarkdownCode extends SuperComponent {
  options: ComponentsOptionsType = {
    multipleSlots: true,
  };

  properties = {
    node: {
      type: Object,
      value: () => ({}),
    },
  };

  data = {
    classPrefix: name,
  };
}
