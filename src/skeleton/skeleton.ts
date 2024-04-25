import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import { SkeletonRowColObj } from './type';
import { ClassName, Styles } from '../common/common';
import { isNumber, classNames } from '../common/utils';

const { prefix } = config;
const name = `${prefix}-skeleton`;

const ThemeMap = {
  avatar: [{ type: 'circle', size: '96rpx' }],
  image: [{ type: 'rect', size: '144rpx' }],
  text: [
    [
      { width: '24%', height: '32rpx', marginRight: '32rpx' },
      { width: '76%', height: '32rpx' },
    ],
    1,
  ],
  paragraph: [1, 1, 1, { width: '55%' }],
};

@wxComponent()
export default class Skeleton extends SuperComponent {
  externalClasses = [`${prefix}-class`, `${prefix}-class-col`, `${prefix}-class-row`];

  properties = props;

  data = {
    prefix,
    classPrefix: name,
    parsedRowcols: [],
  };

  observers = {
    rowCol() {
      this.init();
    },
    'loading, delay'() {
      this.isShowSkeleton();
    },
  };

  lifetimes = {
    attached() {
      this.init();
      this.isShowSkeleton();
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
      return classNames([
        `${name}__col`,
        `${name}--type-${obj.type || 'text'}`,
        `${name}--animation-${this.properties.animation}`,
      ]);
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

    isShowSkeleton() {
      const { loading, delay } = this.properties;
      if (!loading || delay === 0) {
        this.setData({
          isShow: loading,
        });
        return;
      }
      setTimeout(() => {
        this.setData({
          isShow: loading,
        });
      }, delay);
    },
  };
}
