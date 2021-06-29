import TComponent from '../common/component';
import config from '../common/config';
const { prefix } = config;
const name = `${prefix}-tag`;

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
  data: {
    classPrefix: name,
    classBasePrefix: prefix,
  },
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
      value: false,
    },
  },
  methods: {
    onClickClose(e: WechatMiniprogram.BaseEvent) {
      this.triggerEvent('close', e);
    },
  },
});
