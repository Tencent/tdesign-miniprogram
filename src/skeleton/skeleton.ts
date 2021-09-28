import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';

const { prefix } = config;
const name = `${prefix}-skeleton`;

@wxComponent()
export default class Skeleton extends SuperComponent {
  externalClasses = ['t-class', 't-class-avatar', 't-class-text'];

  properties = props;

  observers = {
    rowWidth(this, val) {
      if (Array.isArray(val)) {
        this.setData({ rowWidthArray: val });
      }
    },
  };

  data = {
    classPrefix: name,
    rowWidthArray: [],
  };
}
