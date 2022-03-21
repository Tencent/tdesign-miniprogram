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

  externalClasses = [
    `${prefix}-class`,
    `${prefix}-class-content`,
    `${prefix}-class-title`,
    `${prefix}-class-description`,
    `${prefix}-class-extra`,
  ];

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
    layout: 'vertical',
    type: 'default',
    isLastChild: false,
    isLarge: false,
    readonly: false,
    computedIcon: '',
  };

  observers = {
    icon(val) {
      this.setData({
        computedIcon: val,
      });
    },
    curStatus(val) {
      if (this.data.readonly) {
        if (val === 'finish') {
          this.setData({
            computedIcon: 'check',
          });
        } else if (val === 'error') {
          this.setData({
            computedIcon: 'close',
          });
        }
      }
    },
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
    updateStatus(current, index, theme, layout, steps, readonly) {
      const { status, childStepData } = this.data;
      let newStatus = status;

      // 默认开启
      if (newStatus === 'default') {
        if (index < current) {
          // 1. 本步骤序号小于当前步骤并且没有设定任何步骤序号，设定状态为 finish
          newStatus = 'finish';

          //  1.1 一级步骤条finish，其子步骤条默认全部finish
          childStepData.forEach((item) => {
            item.status = 'finish';
          });
          this.setData({
            childStepData: childStepData,
          });

          // eslint-disable-next-line
        } else if (index == current) {
          // 2. 本步骤序号等于当前步骤. 默认为process
          newStatus = 'process';

          // 2.1  当前一级步骤所属子步骤若存在error子步骤，则一级步骤error
          // 2.2  当前一级步骤所属子步骤若存全部finish，则一级步骤finish
          if (childStepData.some((item) => item.status === 'error')) {
            newStatus = 'error';
          } else if (childStepData.length && childStepData.every((item) => item.status === 'finish')) {
            newStatus = 'finish';
          }
        } else if (readonly) {
          // 3. 本步骤序号大于当前步骤，默认为wait
          newStatus = 'wait';
          // 3.1 本步骤条大于当前步骤，所有子步骤statue全部变default
          childStepData.forEach((item) => {
            item.status = 'default';
          });
          this.setData({
            childStepData: childStepData,
          });
        }
      }

      this.setData({
        curStatus: newStatus,
        index,
        isDot: theme === 'dot' && layout === 'vertical',
        layout,
        theme,
        isLastChild: steps.length - 1 === index,
      });
    },
    click() {
      this.data.parent.handleClick(this.data.index);
    },
  };
}
