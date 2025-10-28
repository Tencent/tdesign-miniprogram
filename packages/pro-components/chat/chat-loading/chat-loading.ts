import { SuperComponent, wxComponent, ComponentsOptionsType } from '../../../components/common/src/index';
import config from '../../../components/common/config';

const { prefix } = config;
const name = `${prefix}-chat-loading`;

@wxComponent()
export default class ChatLoading extends SuperComponent {
  options: ComponentsOptionsType = {
    multipleSlots: true,
  };

  properties = {
    animation: {
      type: String,
      value: 'moving',
    },
    text: {
      type: String,
      value: '',
    },
  };

  data = {
    classPrefix: name,
  };
}
