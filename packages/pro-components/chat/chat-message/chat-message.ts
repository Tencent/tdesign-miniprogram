import { SuperComponent, wxComponent, ComponentsOptionsType } from '../../../components/common/src/index';

@wxComponent()
export default class ChatMessage extends SuperComponent {
  options: ComponentsOptionsType = {
    multipleSlots: true,
    addGlobalClass: true,
    styleIsolation: 'shared',
  };

  properties = {
    chatId: {
      type: String,
      value: '',
    },
    avatar: {
      type: null,
      value: '',
    },
    name: {
      type: String,
      value: '',
    },
    datetime: {
      type: String,
      value: '',
    },
    textLoading: {
      type: Boolean,
      value: false,
    },
    variant: {
      type: String,
      value: 'base',
    },
    message: {
      type: Object,
      value: {},
    },
    placement: {
      type: String,
      value: '',
    },
    animation: {
      type: String,
      value: 'skeleton',
    },
  };

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
    'COMPONENT_NAME, variant, message, placement, showDateTime'() {
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
        showAvatar: this.properties?.avatar || null,
      });
    },
    setShowName() {
      this.setData({
        showName: this.properties?.name || null,
      });
    },
    setShowDateTime() {
      this.setData({
        showDateTime: this.properties?.datetime || null,
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
        this.properties.message.role,
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
