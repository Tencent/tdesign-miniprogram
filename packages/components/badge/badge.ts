import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import type { TdBadgeProps } from './type';
import { uniqueFactory, getRect } from '../common/utils';

const { prefix } = config;
const name = `${prefix}-badge`;
const getUniqueID = uniqueFactory('badge');

export interface BadgeProps extends TdBadgeProps {}

@wxComponent()
export default class Badge extends SuperComponent {
  options = {
    multipleSlots: true,
  };

  externalClasses = [`${prefix}-class`, `${prefix}-class-count`, `${prefix}-class-content`];

  properties = props;

  data = {
    prefix,
    classPrefix: name,
    value: '',
    labelID: '',
    descriptionID: '',
    useOuterClass: false,
  };

  lifetimes = {
    ready() {
      const uniqueID = getUniqueID();

      this.setData({
        labelID: `${uniqueID}_label`,
        descriptionID: `${uniqueID}_description`,
      });

      this.checkForActualContent();
    },
  };

  methods = {
    checkForActualContent() {
      const target = ['ribbon', 'ribbon-right', 'ribbon-left', 'triangle-right', 'triangle-left'];
      if (this.properties.content || !target.includes(this.properties.shape)) {
        this.setData({ useOuterClass: false });
        return;
      }

      return getRect(this, `.${name}__content`).then((rect) => {
        const hasSlotContent = rect.width > 0 || rect.height > 0;
        this.setData({ useOuterClass: !hasSlotContent });
      });
    },
  };
}
