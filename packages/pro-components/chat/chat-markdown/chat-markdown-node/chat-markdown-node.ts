import { SuperComponent, wxComponent, ComponentsOptionsType } from '../../../../components/common/src/index';
import config from '../../../../components/common/config';
import { handleEvent } from '../../tools/_handle-event.js';

const { prefix } = config;
const name = `${prefix}-chat-markdown`;
const ROOT_COMPONENT_NAME = 'CareMarkdown';

@wxComponent()
export default class ChatMarkdownNode extends SuperComponent {
  options: ComponentsOptionsType = {
    multipleSlots: true,
    addGlobalClass: true,
    styleIsolation: 'shared',
  };

  properties = {
    nodes: {
      type: Array,
      value: () => [],
    },
  };

  data = {
    COMPONENT_NAME: name,
  };

  methods = {
    linkClick(e) {
      handleEvent.call(this, e);
    },

    getCareMarkdown() {
      if (this.data.careMarkdown) {
        return this.data.careMarkdown;
      }
      for (
        this.setData({
          careMarkdown: this.data.$parent,
        });
        this.data.careMarkdown.$options.name !== ROOT_COMPONENT_NAME;
        this.setData({
          careMarkdown: this.data.careMarkdown.$parent,
        })
      );
      return this.data.careMarkdown;
    },

    handleClick(event, type, token) {
      this.data.getCareMarkdown().$emit(type, {
        event,
        node: token,
      });
    },
  };

  lifetimes = {
    created() {
      this.data.getCareMarkdown = this.getCareMarkdown.bind(this);
      this.data.handleClick = this.handleClick.bind(this);
    },
    attached() {},
    detached() {},
  };
}
