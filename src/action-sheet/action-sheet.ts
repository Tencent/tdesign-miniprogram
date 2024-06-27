import { chunk } from '../common/utils';
import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import { ActionSheetTheme, show } from './show';
import props from './props';
import useCustomNavbar from '../mixins/using-custom-navbar';

const { prefix } = config;
const name = `${prefix}-action-sheet`;

@wxComponent()
export default class ActionSheet extends SuperComponent {
  static show = show;

  behaviors = [useCustomNavbar];

  externalClasses = [`${prefix}-class`, `${prefix}-class-content`, `${prefix}-class-cancel`];

  properties = {
    ...props,
  };

  data = {
    prefix,
    classPrefix: name,
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

  ready() {
    this.memoInitialData();
    this.splitGridThemeActions();
  }

  methods = {
    onSwiperChange(e: WechatMiniprogram.TouchEvent) {
      const {
        detail: { current },
      } = e;
      this.setData({
        currentSwiperIndex: current,
      });
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

    memoInitialData() {
      this.initialData = {
        ...this.properties,
        ...this.data,
      };
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
