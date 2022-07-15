import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import { isNumber } from '../common/utils';

const { prefix } = config;
const name = `${prefix}-skeleton`;

const ThemeMap = {
  avatar: [{ type: 'circle', height: '64px', width: '64px' }],
  image: [{ type: 'react', height: '64px', width: '64px' }],
  text: [
    1,
    [
      { width: '24%', height: '32rpx', marginRight: '32rpx' },
      { width: '76%', height: '32rpx' },
    ],
  ],
  paragraph: [1, 1, 1, { width: '55%' }],
  grid: [
    [
      { width: '48px', height: '48px' },
      { width: '48px', height: '48px' },
      { width: '48px', height: '48px' },
      { width: '48px', height: '48px' },
      { width: '48px', height: '48px' },
    ],
    [
      { width: '48px', height: '32rpx' },
      { width: '48px', height: '32rpx' },
      { width: '48px', height: '32rpx' },
      { width: '48px', height: '32rpx' },
      { width: '48px', height: '32rpx' },
    ],
  ],
};

@wxComponent()
export default class Skeleton extends SuperComponent {
  externalClasses = ['t-class', 't-class-col'];

  properties = props;

  observers = {
    rowCol(this, val) {
      const rowStyles = [];
      const isNumList = [];
      if (Array.isArray(val)) {
        val.forEach((v) => {
          if (isNumber(v)) {
            const curArr = [];
            const defaultWidth = `${(686 - 32 * (v - 1)) / v}rpx`;
            // eslint-disable-next-line no-plusplus
            for (let i = 0; i < v; i++) {
              curArr.push({ width: defaultWidth, height: '32rpx' });
            }
            rowStyles.push(curArr);
            isNumList.push(true);
          } else {
            rowStyles.push(Array.isArray(v) ? v : [v]);
            if (this.data.theme === 'grid') {
              isNumList.push(true);
            } else {
              isNumList.push(false);
            }
          }
        });
      }
      this.setData({ rowStyles, isNumList });
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
      if (!rowCol.length) {
        this.setData({
          rowCol: ThemeMap[theme],
        });
      }
    },
  };

  data = {
    prefix,
    classPrefix: name,
    isNumList: [],
    rowStyles: [],
  };
}
