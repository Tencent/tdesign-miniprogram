import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import type { TdBadgeProps } from './type';
import { getRect, uniqueFactory } from '../common/utils';

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
    // ribbon
    ribbonStyle: '',
    ribbonOuterStyle: '',
  };

  lifetimes = {
    ready() {
      const uniqueID = getUniqueID();
      if (this.properties.shape === 'ribbon') {
        getRect(this, `.${prefix}-badge--ribbon`).then((rect) => {
          const outerBoundingRect = rect.width / Math.SQRT2 + rect.height * Math.SQRT2; // 外接矩形的宽度：height * cos45deg + width / cos45deg
          const translateX = rect.width - rect.width / Math.SQRT2 + outerBoundingRect - rect.width; // 旋转后的位移：原宽度 - 旋转后的宽度 + 外接矩形的宽度 - 原宽度
          const ribbonHeightHypotenuse = rect.height * Math.SQRT2; // 斜边的长度：height * sin45deg
          const ribbonWidthCatheti = rect.width / Math.SQRT2; // 直角边的长度：width / sin45deg
          this.setData({
            ribbonStyle: `transform: translateX(${translateX}px) rotate(45deg);`,
            ribbonOuterStyle: `width: ${outerBoundingRect}px; height: ${outerBoundingRect}px;
              clip-path: polygon(0 0, ${ribbonHeightHypotenuse}px 0,
              ${outerBoundingRect}px ${ribbonWidthCatheti}px,
              ${outerBoundingRect}px ${ribbonWidthCatheti + ribbonHeightHypotenuse}px);`,
          });
        });
      }

      this.setData({
        labelID: `${uniqueID}_label`,
        descriptionID: `${uniqueID}_description`,
      });
    },
  };
}
