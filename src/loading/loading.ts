import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
const { prefix } = config;
const name = `${prefix}-loading`;

@wxComponent()
export default class extends SuperComponent {
  externalClasses = ['t-class', 't-class-spinner', 't-class-circular-mask', 't-class-bar'];
  data = {
    classPrefix: name,
  };
  properties = {
    type: {
      type: String,
      value: 'circular',
    },
    vertical: Boolean,
    size: {
      type: String,
      value: '40rpx',
    },
    textSize: {
      type: String,
      value: '24rpx',
    },
    color: {
      type: String,
      value: '#000000',
    },
    textColor: {
      type: String,
      value: '#000000',
    },
    backgroundColor: {
      type: String,
      value: '',
    },
    reverse: Boolean,
    duration: {
      type: Number,
      value: '0.8',
    },
    paused: Boolean,
    error: {
      type: Boolean,
      value: false,
    },
    progress: {
      type: Number,
      value: -1,
    },
    loading: Boolean,
  };

  reloadClick() {
    this.triggerEvent('reload');
  }
}
