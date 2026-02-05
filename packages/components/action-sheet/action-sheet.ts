import { chunk } from '../common/utils';
import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import { ActionSheetTheme, show } from './show';
import props from './props';
import useCustomNavbar from '../mixins/using-custom-navbar';
import usingConfig from '../mixins/using-config';

const { prefix } = config;
const componentName = 'action-sheet';

@wxComponent()
export default class ActionSheet extends SuperComponent {
  static show = show;

  behaviors = [useCustomNavbar, usingConfig({ componentName })];

  externalClasses = [`${prefix}-class`, `${prefix}-class-content`, `${prefix}-class-cancel`];

  properties = {
    ...props,
  };

  data = {
    prefix,
    classPrefix: `${prefix}-${componentName}`,
    gridThemeItems: [],
    currentSwiperIndex: 0,
    defaultPopUpProps: {},
    defaultPopUpzIndex: 11500,
  };

  controlledProps = [
    {
      key: 'visible',
      event: 'visible-change',
    },
  ];

  observers = {
    items() {
      this.splitGridThemeActions();
    },
    globalConfig() {
      this.updateInitialData();
    },
  };

  lifetimes = {
    ready() {
      this.init();
    },
  };

  methods = {
    init() {
      this.memoInitialData();
      this.splitGridThemeActions();
    },

    memoInitialData() {
      this.updateInitialData();
    },

    updateInitialData() {
      this.initialData = {
        ...this.properties,
        ...this.data,
      };
    },

    splitGridThemeActions() {
      if (this.data.theme !== ActionSheetTheme.Grid) return;
      this.setData({
        gridThemeItems: chunk(this.data.items, this.data.count),
      });
    },

    /** 指令调用显示 */
    show(options) {
      this.setData({
        ...this.initialData,
        ...options,
        visible: true,
      });
      this.splitGridThemeActions();
      this.autoClose = true;
      this._trigger('visible-change', { visible: true });
    },

    /** 指令调用隐藏 */
    close() {
      this.triggerEvent('close', { trigger: 'command' });
      this._trigger('visible-change', { visible: false });
    },

    /** 默认点击遮罩关闭 */
    onPopupVisibleChange({ detail }) {
      if (!detail.visible) {
        this.triggerEvent('close', { trigger: 'overlay' });
        this._trigger('visible-change', { visible: false });
      }
      if (this.autoClose) {
        this.setData({ visible: false });
        this.autoClose = false;
      }
    },

    onSwiperChange(e: WechatMiniprogram.TouchEvent) {
      const { current } = e.detail;
      this.setData({
        currentSwiperIndex: current,
      });
    },

    onSelect(event: WechatMiniprogram.TouchEvent) {
      const { currentSwiperIndex, items, gridThemeItems, count, theme } = this.data;
      const { index } = event.currentTarget.dataset;
      const isSwiperMode = theme === ActionSheetTheme.Grid;
      const item = isSwiperMode ? gridThemeItems[currentSwiperIndex][index] : items[index];
      const realIndex = isSwiperMode ? index + currentSwiperIndex * count : index;

      if (item) {
        this.triggerEvent('selected', { selected: item, index: realIndex });

        if (!item.disabled) {
          this.triggerEvent('close', { trigger: 'select' });
          this._trigger('visible-change', { visible: false });
        }
      }
    },

    onCancel() {
      this.triggerEvent('cancel');
      if (this.autoClose) {
        this.setData({ visible: false });
        this.autoClose = false;
      }
    },
  };
}
