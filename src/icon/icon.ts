import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';

const { prefix } = config;
const name = `${prefix}-icon`;

const sizeKeywordMap = {
  xs: '24rpx',
  small: '28rpx',
  middle: '32rpx',
  large: '36rpx',
  xl: '40rpx',
};

@wxComponent()
export default class Icon extends SuperComponent {
  behaviors: ['wx://form-field-icon'];

  externalClasses = ['t-class'];

  properties = props;

  data = {
    classPrefix: name,
    fontSize: '',
  };

  observers = {
    size(val) {
      let fontSize = val;
      if (Object.prototype.hasOwnProperty.call(sizeKeywordMap, val)) {
        fontSize = sizeKeywordMap[val];
      }
      this.setData({ fontSize });
    },
  };
}
