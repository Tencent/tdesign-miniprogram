import { SuperComponent, wxComponent } from '../../../components/common/src/index';
import config from '../../../components/common/config';
import props from './props';
import usingConfig from '../../../components/mixins/using-config';

const { prefix } = config;
const componentName = 'chat-thinking';

@wxComponent()
export default class ChatThinking extends SuperComponent {
  behaviors = [usingConfig({ componentName })];

  options = {
    multipleSlots: true,
  };

  properties = props;

  data = {
    localCollapsed: false,
    contentStyle: '',
    classPrefix: `${prefix}-${componentName}`,
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
      this.triggerEvent('collapsedChange', this.data.localCollapsed);
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
