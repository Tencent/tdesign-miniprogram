import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import { SkeletonRowColObj } from './type';
import { ClassName, Styles } from '../common/common';
import { isNumber } from '../common/utils';

const { prefix } = config;
const name = `${prefix}-skeleton`;

const ThemeMap = {
  avatar: [{ type: 'circle', height: '64px', width: '64px' }],
  image: [{ type: 'rect', height: '64px', width: '64px' }],
  text: [
    1,
    [
      { width: '24%', height: '16px', marginRight: '16px' },
      { width: '76%', height: '16px' },
    ],
  ],
  paragraph: [1, 1, 1, { width: '55%' }],
};

@wxComponent()
export default class Skeleton extends SuperComponent {
  externalClasses = ['t-class', 't-class-col'];

  properties = props;

  observers = {
    rowCol() {
      this.init();
    },
  };

  lifetimes = {
    attached() {
      this.init();
    },
  };

  methods = {
    init() {
      const { theme, rowCol } = this.properties;
      const rowCols = [];
      if (rowCol.length) {
        rowCols.push(...rowCol);
      } else {
        rowCols.push(...ThemeMap[theme || 'text']);
      }

      const parsedRowcols = rowCols.map((item) => {
        if (isNumber(item)) {
          return [
            {
              class: this.getColItemClass({ type: 'text' }),
              style: {},
            },
          ];
        }
        if (Array.isArray(item)) {
          return item.map((col) => {
            return {
              ...col,
              class: this.getColItemClass(col),
              style: this.getColItemStyle(col),
            };
          });
        }

        const nItem = item as SkeletonRowColObj;
        return [
          {
            ...nItem,
            class: this.getColItemClass(nItem),
            style: this.getColItemStyle(nItem),
          },
        ];
      });

      this.setData({
        parsedRowcols,
      });
    },
    getColItemClass(obj: SkeletonRowColObj): ClassName {
      return [`${name}__col`, `${name}--type-${obj.type || 'text'}`, `${name}--animation-${this.properties.animation}`];
    },

    getColItemStyle(obj: SkeletonRowColObj): Styles {
      const styleName = [
        'width',
        'height',
        'marginRight',
        'marginLeft',
        'margin',
        'size',
        'background',
        'backgroundColor',
        'borderRadius',
      ];
      const style: Styles = {};
      styleName.forEach((name) => {
        if (name in obj) {
          const px = isNumber(obj[name]) ? `${obj[name]}px` : obj[name];
          if (name === 'size') {
            [style.width, style.height] = [px, px];
          } else {
            style[name] = px;
          }
        }
      });
      return style;
    },
  };

  data = {
    prefix,
    classPrefix: name,
    parsedRowcols: [],
  };
}
