import { SuperComponent, wxComponent, ComponentsOptionsType } from '../common/src/index';
import config from '../common/config';

const { prefix } = config;
const name = `${prefix}-chat-loading`;

@wxComponent()
export default class ChatLoading extends SuperComponent {
  options: ComponentsOptionsType = {
    multipleSlots: true,
    addGlobalClass: true,
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
    COMPONENT_NAME: name,
  };
}
