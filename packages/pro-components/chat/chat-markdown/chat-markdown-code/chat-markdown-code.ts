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
    scrollViewHeight: 0, // 新增：scroll-view的高度
  };

  methods = {
    // 新增：获取text节点高度
    getTextNodeHeight() {
      const query = this.createSelectorQuery();
      query.select('.t-chat-markdown-code__text').boundingClientRect();
      query.exec((res) => {
        if (res[0]) {
          const textHeight = res[0].height;
          this.setData({
            scrollViewHeight: textHeight,
          });
        }
      });
    },
  };

  // 新增：监听node属性变化，重新计算高度
  observers = {
    'node.text': function () {
      wx.nextTick(() => {
        this.getTextNodeHeight();
      });
    },
  };

  lifetimes = {
    attached() {
      this.getTextNodeHeight();
    },
  };
}
