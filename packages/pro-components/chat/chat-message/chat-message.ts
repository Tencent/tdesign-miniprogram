import { SuperComponent, wxComponent, ComponentsOptionsType } from '../../../components/common/src/index';
import props from './props';
import config from '../../../components/common/config';

const { prefix } = config;
const name = `${prefix}-chat-message`;

@wxComponent()
export default class ChatMessage extends SuperComponent {
  options: ComponentsOptionsType = {
    multipleSlots: true,
  };

  properties = props;

  data = {
    classPrefix: name,
    article: '',
    showAvatar: null,
    showName: null,
    showDateTime: null,
    contentClasses: [],
    chatItemClass: [],
  };

  observers = {
    avatar() {
      this.setShowAvatar();
    },
    name() {
      this.setShowName();
    },
    datetime() {
      this.setShowDateTime();
    },
    classPrefix() {
      this.setContentClasses();
    },
    'classPrefix, variant, placement, showDateTime'() {
      this.setChatItemClass();
    },
  };

  methods = {
    handleLongPress(e) {
      this.triggerEvent('message-longpress', {
        e,
        id: this.data.chatId,
        longPressPosition: {
          x: e.detail.x,
          y: e.detail.y,
        },
      });
    },
    setShowAvatar() {
      this.setData({
        showAvatar: this.properties?.avatar || '',
      });
    },
    setShowName() {
      this.setData({
        showName: this.properties?.name || '',
      });
    },
    setShowDateTime() {
      this.setData({
        showDateTime: this.properties?.datetime || '',
      });
    },
    setContentClasses() {
      this.setData({
        contentClasses: [`${this.data.classPrefix}__content`],
      });
    },
    setChatItemClass() {
      const { classPrefix, showDateTime } = this.data;
      const { variant, role, placement } = this.properties;
      const baseClass = [`${classPrefix}`, `${classPrefix}--${variant}`, role, placement];
      if (showDateTime) {
        baseClass.push(`${classPrefix}__header`);
      }
      this.setData({
        chatItemClass: baseClass,
      });
    },
  };

  lifetimes = {
    created() {
      this.data.handleLongPress = this.handleLongPress.bind(this);
    },
    attached() {
      this.setShowAvatar();
      this.setShowName();
      this.setShowDateTime();
      this.setContentClasses();
      this.setChatItemClass();
    },
    detached() {},
  };
}
