import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import { styles, addUnit, getRect } from '../common/utils';

const { prefix } = config;
const name = `${prefix}-icon`;

@wxComponent()
export default class Icon extends SuperComponent {
  externalClasses = [`${prefix}-class`];

  properties = props;

  data = {
    componentPrefix: prefix,
    classPrefix: name,
    isImage: false,
    iconStyle: undefined,
  };

  observers = {
    'name, color, size, style'() {
      this.setIconStyle();
    },
  };

  methods = {
    onTap(event: any) {
      this.triggerEvent('click', event.detail);
    },

    async setIconStyle() {
      const { name, color, size, classPrefix } = this.data;
      const isImage = name.indexOf('/') !== -1;

      const sizeValue = addUnit(size);
      const colorStyle = color ? { color: color } : {};
      const fontStyle = size ? { 'font-size': sizeValue } : {};
      const iconStyle: Record<string, any> = { ...colorStyle, ...fontStyle };

      if (isImage) {
        const { height } = await getRect(this, `.${classPrefix}`);
        const iconSize = sizeValue || addUnit(height);

        iconStyle.width = iconSize;
        iconStyle.height = iconSize;
      }

      this.setData({
        isImage,
        iconStyle: `${styles(iconStyle)}`,
      });
    },
  };
}
