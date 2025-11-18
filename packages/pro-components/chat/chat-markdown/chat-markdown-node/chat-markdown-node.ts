import { SuperComponent, wxComponent, ComponentsOptionsType } from '../../../../components/common/src/index';
import config from '../../../../components/common/config';

const { prefix } = config;
const name = `${prefix}-chat-markdown`;

@wxComponent()
export default class ChatMarkdownNode extends SuperComponent {
  options: ComponentsOptionsType = {
    multipleSlots: true,
  };

  properties = {
    nodes: {
      type: Array,
      value: () => [],
    },
  };

  data = {
    classPrefix: name,
  };

  methods = {
    linkClick(e) {
      const { index } = e.currentTarget.dataset || {};
      const token = this.data.nodes?.[index];
      this.handleClick(e, 'link-tap', token);
    },

    getCareMarkdown() {
      if (this.data.careMarkdown) {
        return this.data.careMarkdown;
      }
      for (
        this.setData({
          careMarkdown: this.selectOwnerComponent(),
        });
        this.data.careMarkdown.__data__.name !== name;
        this.setData({
          careMarkdown: this.data.careMarkdown.selectOwnerComponent(),
        })
      );
      return this.data.careMarkdown;
    },

    handleClick(event, type, token) {
      // 通用点击事件
      this.data.getCareMarkdown().triggerEvent('click', {
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
