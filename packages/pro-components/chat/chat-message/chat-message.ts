import { SuperComponent, wxComponent, ComponentsOptionsType } from '../../../components/common/src/index';
import props from './props';

@wxComponent()
export default class ChatMessage extends SuperComponent {
  options: ComponentsOptionsType = {
    multipleSlots: true,
    addGlobalClass: true,
    styleIsolation: 'shared',
  };

  properties = props;

  data = {
    COMPONENT_NAME: 't-chat',
    // COMPONENT_NAME: 't-chat',
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
    COMPONENT_NAME() {
      this.setContentClasses();
    },
    'COMPONENT_NAME, variant, placement, showDateTime'() {
      this.setChatItemClass();
    },
  };

  methods = {
    handleLongPress(e) {
      this.triggerEvent('longpress', {
        e,
        id: this.data.chatId,
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
        contentClasses: [`${this.data.COMPONENT_NAME}__content`],
      });
    },
    setChatItemClass() {
      const baseClass = [
        `${this.data.COMPONENT_NAME}__inner`,
        `${this.data.COMPONENT_NAME}__text--variant--${this.properties.variant}`,
        this.properties.role,
        this.properties.placement,
      ];
      if (this.data.showDateTime) {
        baseClass.push(`${this.data.COMPONENT_NAME}__inner--hasheader`);
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
