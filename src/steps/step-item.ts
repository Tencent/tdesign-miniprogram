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
    curSubStepItems: [],
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
    updateStatus(current, currentStatus, index, theme, layout, steps, readonly) {
      const { status } = this.data;
      const _current = String(current);
      const firstStep = Number(_current.split('-')[0]);
      const secondStep = _current.split('-')[1] ? Number(_current.split('-')[1]) : undefined;

      // 判断对象的attr属性存在 && attr数组长度不为0
      const judgeObjAttr = (data, attr: string) => {
        return data[attr] && data[attr].length;
      };

      const judgeStepStatus = (itemIndex: number, current: number, status: string) => {
        if (itemIndex < current) return 'finish';
        if (itemIndex === current) return status;
        return 'default';
      };

      const changeStatus = (
        data,
        attr: string,
        itemAttr: string,
        status: string,
        value: number = data[attr].length,
      ) => {
        data[attr].forEach((item, index) => {
          item[itemAttr] = judgeStepStatus(index, value, status);
        });
      };

      const isLastChild = (data, index) => index === data.length - 1;

      // 1. 拷贝一份 substep
      if (judgeObjAttr(this.data, 'subStepItems')) {
        const _subStepItems = JSON.parse(JSON.stringify(this.data.subStepItems));
        this.data._subStepItems = _subStepItems;
      }

      // 2. 优先step的statue && 判断step及subStep状态
      if (status !== 'default') {
        this.data._status = status;
      } else if (status === 'default') {
        if (index < firstStep) {
          this.data._status = 'finish';
          judgeObjAttr(this.data, '_subStepItems') && changeStatus(this.data, '_subStepItems', '_status', 'finish');
        } else if (index === firstStep) {
          this.data._status = currentStatus;
          if (secondStep !== undefined && judgeObjAttr(this.data, '_subStepItems')) {
            changeStatus(this.data, '_subStepItems', '_status', currentStatus, secondStep);
          }

          // secondStep存在，子步骤条为default时，其stepItem状态应为process
          if (
            secondStep !== undefined &&
            currentStatus === 'finish' &&
            judgeObjAttr(this.data, '_subStepItems') &&
            !isLastChild(this.data._subStepItems, secondStep)
          ) {
            this.data._status = 'process';
          }

          // secondStep存在，子步骤条为finish且不为最后一个子步骤时，其stepItem状态应为proces
          if (secondStep !== undefined && currentStatus === 'default') {
            this.data._status = 'process';
          }
        } else if (index > firstStep) {
          this.data._status = 'default';
          judgeObjAttr(this.data, '_subStepItems') && changeStatus(this.data, '_subStepItems', '_status', 'default');
        }
      }

      // update icon
      let iconStatus = '';
      if (readonly) {
        if (this.data._status === 'finish') {
          iconStatus = 'check';
        } else if (this.data._status === 'error') {
          iconStatus = 'close';
        }
      }

      this.setData({
        curStatus: this.data._status || this.data.status,
        curSubStepItems: this.data._subStepItems || [],
        computedIcon: iconStatus || this.data.icon,
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
