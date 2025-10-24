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
      type: Number,
      value: 0,
    },
    animation: {
      type: String,
      value: 'circle',
    },
    collapsed: {
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
    setContentStyle() {
      if (this.data.maxHeight) {
        this.setData({
          contentStyle: `max-height: ${this.data.maxHeight}px;`,
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
