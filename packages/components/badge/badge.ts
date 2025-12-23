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
    hasActualContent: false,
  };

  lifetimes = {
    ready() {
      const uniqueID = getUniqueID();
      const target = ['ribbon', 'ribbon-right', 'ribbon-left', 'triangle-right', 'triangle-left'];
      this.setData({
        labelID: `${uniqueID}_label`,
        descriptionID: `${uniqueID}_description`,
      });

      if (target.includes(this.properties.shape)) {
        this.checkForActualContent();
      }
    },
  };

  methods = {
    checkForActualContent() {
      if (this.properties.content) {
        this.setData({ hasActualContent: true });
        return;
      }

      return getRect(this, `.${name}__content`).then((rect) => {
        const hasSlotContent = rect.width > 0 || rect.height > 0;
        this.setData({ hasActualContent: hasSlotContent });
      });
    },
  };
}
