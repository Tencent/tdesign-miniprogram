import { SuperComponent, wxComponent, ComponentsOptionsType } from '../../../components/common/src/index';
import config from '../../../components/common/config';
import props from './props';

const { prefix } = config;
const name = `${prefix}-chat-group`;

@wxComponent()
export default class ChatGroup extends SuperComponent {
  options: ComponentsOptionsType = {
    multipleSlots: true,
  };

  properties = props;

  data = {
    classPrefix: name,
  };

  methods = {};
}
