import { wxComponent, SuperComponent, RelationsOptions } from '../common/src/index';
import config from '../common/config';
import props from './step-item-props';

const { prefix } = config;

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

  properties = props;

  // 组件的内部数据
  data = {
    classPrefix: `${prefix}-steps-item`,
    prefix,
    rootClassName: '',
    parent: null,
    index: 0,
    isDot: false,
    curStatus: '',
    direction: 'vertical',
    type: 'default',
    isLastChild: false,
  };

  lifetimes = {
    ready() {
      const [parent] = this.getRelationNodes('./steps') || [];

      if (parent) {
        this.setData({
          parent,
        });
      }
    },
  };

  methods = {
    updateStatus(current, index, type, direction, steps) {
      const { status } = this.data;
      let newStatus = status;

      if (index < current) {
        // 1. 本步骤序号小于当前步骤并且没有设定任何步骤序号，设定状态为 finish
        newStatus = 'finish';
        // eslint-disable-next-line
      } else if (index == current) {
        // 2. 本步骤序号等于当前步骤. 默认为process
        newStatus = 'process';
      } else {
        // 3. 本步骤序号大于当前步骤，默认为wait
        newStatus = 'default';
      }

      this.setData({
        curStatus: newStatus,
        index,
        isDot: type === 'dot' && direction === 'vertical',
        direction,
        type,
        isLastChild: steps.length - 1 === index,
      });
    },
    click() {
      this.data.parent.handleClick(this.data.index);
    },
  };
}
