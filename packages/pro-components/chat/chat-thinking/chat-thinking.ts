import { SuperComponent, wxComponent } from '../../../components/common/src/index';
import config from '../../../components/common/config';

const { prefix } = config;
const name = `${prefix}-chat-thinking`;

@wxComponent()
export default class ChatThinking extends SuperComponent {
  options = {
    multipleSlots: true,
    addGlobalClass: true,
  };

  properties = {
    content: {
      type: Object,
      value: undefined,
    },
    layout: {
      type: String,
      value: 'block',
    },
    status: {
      type: String,
      value: 'pending',
    },
    maxHeight: {
      type: String,
      value: '',
    },
    animation: {
      type: String,
      value: 'circle',
    },
    collapsed: {
      type: Boolean,
      value: false,
    },
    copyRichText: {
      type: Boolean,
      value: false,
    },
  };

  data = {
    localCollapsed: false,
    contentStyle: '',
    COMPONENT_NAME: name,
  };

  observers = {
    maxHeight() {
      this.setContentStyle();
    },
  };

  methods = {
    handleCollapse() {
      // 切换内部折叠状态
      this.setData({
        localCollapsed: !this.data.localCollapsed,
      });
      // 通知父组件状态变化
      this.triggerEvent('expandChange', this.data.localCollapsed);
    },

    handleCopy() {
      let copyContent = '';
      if (this.data.copyRichText) {
        // 复制富文本（如 content.html 或 innerHTML）
        copyContent = this.data.content.html || '';
      } else {
        // 复制纯文本
        copyContent = this.data.content.text || '';
      }
      wx.setClipboardData({
        data: copyContent,
        success: () => {
          wx.showToast({
            title: '复制成功',
            icon: 'none',
          });
        },
      });
    },

    setContentStyle() {
      if (this.data.maxHeight) {
        this.setData({
          contentStyle: `max-height: ${this.data.maxHeight};`,
        });
      } else {
        this.setData({
          contentStyle: '',
        });
      }
    },
  };

  lifetimes = {
    created() {
      this.data.handleCollapse = this.handleCollapse.bind(this);
      this.data.handleCopy = this.handleCopy.bind(this);
    },
    attached() {
      const createdFn = function __anonymous() {
        // 初始化折叠状态
        this.setData({
          localCollapsed: this.properties.collapsed || false,
        });
      };
      createdFn.call(this);

      // 调用新增的函数
      this.setContentStyle();
    },
    detached() {},
  };
}
