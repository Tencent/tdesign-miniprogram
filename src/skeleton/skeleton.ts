import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import { isNumber } from '../common/utils';

const { prefix } = config;
const name = `${prefix}-skeleton`;

@wxComponent()
export default class Skeleton extends SuperComponent {
  externalClasses = ['t-class', 't-class-avatar', 't-class-text'];

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
            isNumList.push(false);
          }
        });
      }
      this.setData({ rowStyles, isNumList });
    },
  };

  data = {
    classPrefix: name,
    isNumList: [],
    rowStyles: [],
  };
}
