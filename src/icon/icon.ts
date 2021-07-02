import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
const { prefix } = config;

const sizeKeywordMap = {
  xs: '12px',
  small: '14px',
  middle: '16px',
  large: '18px',
  xl: '20px',
};
@wxComponent()
export default class Icon extends SuperComponent {
  behaviors: ['wx://form-field-icon'];
  externalClasses = ['t-class'];
  properties = {
    name: {
      type: String,
      value: '',
    },
    size: {
      type: String,
      value: 'middle',
      observer(val: string) {
        let fontSize = val;
        if (Object.prototype.hasOwnProperty.call(sizeKeywordMap, val)) {
          fontSize = sizeKeywordMap[val];
        }
        this.setData({ fontSize });
      },
    },
    customStyle: String,
    color: {
      type: String,
      value: '',
    },
  };
  data = {
    classPrefix: `${prefix}-icon`,
    fontSize: '',
  };
  methods = {
    onTap(event: any) {
      this.triggerEvent('click', event.detail);
    },
  };
}
