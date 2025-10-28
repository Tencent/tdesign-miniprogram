import { SuperComponent, wxComponent, ComponentsOptionsType } from '../../../../components/common/src/index';

@wxComponent()
export default class ChatMarkdownCode extends SuperComponent {
  options: ComponentsOptionsType = {
    multipleSlots: true,
    addGlobalClass: true,
    styleIsolation: 'shared',
  };

  properties = {
    node: {
      type: Object,
      value: () => ({}),
    },
  };

  data = {};

  lifetimes = {
    created() {},
    attached() {},
    detached() {},
  };
}
