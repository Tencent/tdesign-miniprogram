import { SuperComponent, wxComponent, ComponentsOptionsType } from '../../../../components/common/src/index';
import config from '../../../../components/common/config';

const { prefix } = config;
const name = `${prefix}-chat-markdown-table`;
const markdownName = `${prefix}-chat-markdown`;

@wxComponent()
export default class ChatMarkdownTable extends SuperComponent {
  options: ComponentsOptionsType = {
    multipleSlots: true,
  };

  properties = {
    node: {
      type: Object,
      value: {},
    },
  };

  data = {
    classPrefix: name,
  };

  methods = {
    nodeClick(e) {
      this.getCareMarkdown().triggerEvent('click', {
        event: e,
        node: this.data.node,
      });
    },

    getCareMarkdown() {
      if (this.data.careMarkdown) {
        return this.data.careMarkdown;
      }
      for (
        this.setData({ careMarkdown: this.selectOwnerComponent() });
        this.data.careMarkdown.__data__.name !== markdownName;
        this.setData({ careMarkdown: this.data.careMarkdown.selectOwnerComponent() })
      );
      return this.data.careMarkdown;
    },
  };
}
