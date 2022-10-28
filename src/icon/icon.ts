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
    iconStyle: undefined,
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

    setIconStyle() {
      const { name, color, size, customStyle } = this.properties;
      const isImage = name.indexOf('/') !== -1;
      const sizeValue = addUnit(size);
      const sizeStyle = isImage ? { width: sizeValue, height: sizeValue } : {};
      const colorStyle = color ? { color: color } : {};
      const fontStyle = size ? { 'font-size': sizeValue } : {};
      this.setData({
        isImage,
        iconStyle: `${styles({
          ...colorStyle,
          ...fontStyle,
          ...sizeStyle,
        })}${customStyle ? `;${customStyle}` : ''}`,
      });
    },
  };
}
