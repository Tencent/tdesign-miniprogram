import { SuperComponent, wxComponent, ComponentsOptionsType } from '../../components/common/src/index';
import { handleEvent } from '../tools/_handle-event.js';

@wxComponent()
export default class Chat extends SuperComponent {
  options: ComponentsOptionsType = {
    multipleSlots: true,
    addGlobalClass: true,
  };

  externalClasses = ['slot-class'];

  properties = {
    data: {
      type: Array,
      value: [],
    },
    layout: {
      type: String,
      value: 'both',
    },
    clearHistory: {
      type: Boolean,
      value: false,
    },
    reverse: {
      type: Boolean,
      value: true,
    },
    isStreamLoad: {
      type: Boolean,
      value: false,
    },
    textLoading: {
      type: String,
      value: '加载中...',
    },
  };

  data = {
    // 前缀
    COMPONENT_NAME: 't-chat',
    scrollViewTop: 0,
    classes: [],
    listClasses: [],
  };

  observers = {
    'layout, COMPONENT_NAME'() {
      this.setClasses();
    },
    'reverse, COMPONENT_NAME'() {
      this.setListClasses();
    },
  };

  methods = {
    handleScroll(e) {
      handleEvent.call(this, e);
    },
    setScrollTop(scrollTop = 0) {
      if (scrollTop === this.data.scrollViewTop) {
        // eslint-disable-next-line no-param-reassign
        scrollTop -= 1;
      }
      this.setData({
        scrollViewTop: scrollTop,
      });
    },
    scrollToBottom() {
      this.data.setScrollTop();
    },
    onScroll(e) {
      this.triggerEvent('scroll', e);
    },
    setClasses() {
      if (this.properties.layout === 'both') {
        this.setData({
          classes: ['class', `${this.data.COMPONENT_NAME}`, `${this.data.COMPONENT_NAME}-is-normal`],
        });
      } else {
        this.setData({
          classes: ['class', `${this.data.COMPONENT_NAME}`],
        });
      }
    },
    setListClasses() {
      if (this.properties.reverse) {
        this.setData({
          listClasses: [`${this.data.COMPONENT_NAME}__list`, `${this.data.COMPONENT_NAME}__list--reverse`],
        });
      } else {
        this.setData({
          listClasses: [`${this.data.COMPONENT_NAME}__list`],
        });
      }
    },
  };

  lifetimes = {
    created() {
      this.data.setScrollTop = this.setScrollTop.bind(this);
      this.data.scrollToBottom = this.scrollToBottom.bind(this);
      this.data.onScroll = this.onScroll.bind(this);
    },
    attached() {
      this.setClasses();
      this.setListClasses();
      const createdFn = function __anonymous() {};
      createdFn.call(this);
    },
    detached() {},
  };
}
