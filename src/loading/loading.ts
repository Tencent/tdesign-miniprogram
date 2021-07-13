import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
const { prefix } = config;
const name = `${prefix}-loading`;

@wxComponent()
export default class extends SuperComponent {
  externalClasses = ['t-class', 't-class-error'];
  data = {
    classPrefix: name,
  };
  properties = {
    theme: {
      type: String,
      value: 'circular',
    },
    delay: {
      type: Number,
      value: 0,
    },
    layout: {
      type: String,
      value: 'horizontal', // 水平的horizontal；垂直的vertical
    },
    size: {
      type: String,
      value: '40rpx',
    },
    reverse: {
      type: Boolean,
      value: false,
    },
    duration: {
      type: Number,
      value: 300,
    },
    pause: {
      type: Boolean,
      value: false,
    },
    progress: {
      type: Number,
      value: -1,
    },
    loading: {
      type: Boolean,
      value: true,
    },
    indicator: {
      type: Boolean,
      value: true,
    },
    text: {
      type: String,
      value: '',
    },
  };
}
