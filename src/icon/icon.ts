import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import { styles, addUnit } from '../common/utils';

const { prefix } = config;
const name = `${prefix}-icon`;

@wxComponent()
export default class Icon extends SuperComponent {
  behaviors: ['wx://form-field-icon'];

  externalClasses = [`${prefix}-class`];

  properties = props;

  data = {
    componentPrefix: prefix,
    classPrefix: name,
    isImage: false,
    iconStyle: '',
  };

  observers = {
    'name, color, size, customStyle'() {
      this.setIconStyle();
    },
  };

  methods = {
    onTap(event: any) {
      this.triggerEvent('click', event.detail);
    },

    judgeImage(val) {
      return val.indexOf('/') !== -1;
    },

    setIconStyle() {
      const { name, color, size, customStyle } = this.properties;
      const isImage = this.judgeImage(name);
      const sizeValue = addUnit(size);
      this.setData({
        isImage,
        iconStyle: isImage
          ? styles({
              color,
              'font-size': sizeValue,
              width: sizeValue,
              height: sizeValue,
              ...customStyle,
            })
          : styles({
              color,
              'font-size': sizeValue,
              ...customStyle,
            }),
      });
    },
  };
}
