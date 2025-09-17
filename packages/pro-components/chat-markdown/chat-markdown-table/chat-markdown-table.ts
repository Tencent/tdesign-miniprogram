import { SuperComponent, wxComponent, ComponentsOptionsType } from '../../../components/common/src/index';
import config from '../../../components/common/config';

const { prefix } = config;
const name = `${prefix}-chat`;

@wxComponent()
export default class ChatMarkdownTable extends SuperComponent {
  options: ComponentsOptionsType = {
    multipleSlots: true,
    addGlobalClass: true,
    styleIsolation: 'shared',
  };

  properties = {
    node: {
      type: Object,
      value: {},
    },
  };

  data = {
    COMPONENT_NAME: name,
  };

  methods = {};
}
