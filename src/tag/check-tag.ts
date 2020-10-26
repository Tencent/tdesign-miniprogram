import TComponent from '../common/component';

export enum TagSize {
  Large = 'large',
  Medium = 'medium',
  Small = 'small',
}

export enum TagShape {
  Square = 'square',
  Round = 'round',
  Circle = 'circle',
}
TComponent({
  properties: {
    size: {
      type: String,
      value: TagSize.Medium,
    },
    icon: {
      type: String,
      value: '',
    },
    shape: {
      type: String,
      value: TagShape.Square,
    },
    disabled: {
      type: Boolean,
      value: false,
    },
    closable: {
      type: Boolean,
      value: false,
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onClickClose(e: WechatMiniprogram.Event) {
      this.triggerEvent('close', e);
    },
  },
});
