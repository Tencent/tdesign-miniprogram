import { wxComponent, SuperComponent, RelationsOptions } from '../common/src/index';
import config from '../common/config';
import props from './step-item-props';

const { prefix } = config;
const name = `${prefix}-steps-item`;
@wxComponent()
export default class StepItem extends SuperComponent {
  options = {
    multipleSlots: true,
  };

  relations: RelationsOptions = {
    './steps': {
      type: 'ancestor',
    },
  };

  externalClasses = [
    `${prefix}-class`,
    `${prefix}-class-content`,
    `${prefix}-class-title`,
    `${prefix}-class-description`,
    `${prefix}-class-extra`,
  ];

  properties = props;

  parent = null;

  // 组件的内部数据
  data = {
    classPrefix: name,
    prefix,
    index: 0,
    isDot: false,
    curStatus: '',
    layout: 'vertical',
    isLastChild: false,
  };

  lifetimes = {
    ready() {
      const [parent] = this.getRelationNodes('./steps') || [];

      if (parent) {
        this.parent = parent;
      }
    },
  };

  methods = {
    updateStatus(current, currentStatus, index, theme, layout, steps) {
      let curStatus = this.data.status;

      if (curStatus === 'default') {
        if (index < Number(current)) {
          curStatus = 'finish';
        } else if (index === Number(current)) {
          curStatus = currentStatus;
        }
      }

      this.setData({
        curStatus,
        index,
        isDot: theme === 'dot',
        layout,
        theme,
        isLastChild: steps.length - 1 === index,
      });
    },

    onTap() {
      this.parent.handleClick(this.data.index);
    },
  };
}
