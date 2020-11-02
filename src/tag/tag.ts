import TComponent from '../common/component';

export enum TagTheme {
  Default = 'default',
  Primary = 'primary',
  Info = 'info',
  Warning = 'warning',
  Danger = 'danger',
  Success = 'success',
}

export enum TagEffect {
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
  properties: {
    theme: {
      type: String,
      value: TagTheme.Default,
    },
    effect: {
      type: String,
      value: TagEffect.Dark,
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
      optionalTypes: [Number, String],
      value: '',
    },
  },
  methods: {
    onClickClose(e: WechatMiniprogram.Event) {
      this.triggerEvent('close', e);
    },
  },
});
