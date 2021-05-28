import TComponent from '../common/component';
import config from '../common/config';
const { prefix } = config;
const name = `${prefix}-tag`;

export enum TagTheme {
  Default = 'default',
  Primary = 'primary',
  Info = 'info',
  Warning = 'warning',
  Danger = 'danger',
  Success = 'success',
}

export enum TagVariant {
  Dark = 'dark',
  Light = 'light',
  Plain = 'plain',
}

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
    theme: {
      type: String,
      value: TagTheme.Default,
    },
    variant: {
      type: String,
      value: TagVariant.Dark,
    },
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
    maxWidth: {
      type: String,
      optionalTypes: [Number],
      value: '',
    },
  },
  methods: {
    onClickClose(e: WechatMiniprogram.Event) {
      this.triggerEvent('close', e);
    },
  },
});
