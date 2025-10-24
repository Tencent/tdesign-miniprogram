import { SuperComponent, wxComponent, ComponentsOptionsType } from '../../common/src/index';
import config from '../../common/config';


const { prefix } = config;
const name = `${prefix}-chat-markdown`;
const ROOT_COMPONENT_NAME = name;

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
        this.data.careMarkdown.__data__.name !== ROOT_COMPONENT_NAME;
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
