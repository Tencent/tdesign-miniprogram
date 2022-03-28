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
    curSubStep: [],
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
    // 判断对象的attr属性存在 && attr数组长度不为0
    judgeObjAttr(data, attr: string) {
      return data[attr] && data[attr].length;
    },

    changeStatus(data, attr, attr2, status) {
      data[attr].forEach((item) => {
        item[attr2] = status;
      });
    },

    updateStatus(current, currentStatus, index, theme, layout, steps, step, readonly) {
      const { status } = this.data;
      const _current = String(current);
      const firstStep = Number(_current.split('.')[0]);
      const secondStep = Number(_current.split('.')[1] ? _current.split('.')[1] : undefined);

      // 1. 拷贝一份 substep
      if (this.judgeObjAttr(step.data, 'subStepItems')) {
        const _subStepItems = JSON.parse(JSON.stringify(step.data.subStepItems));
        step.data._subStepItems = _subStepItems;
      }

      // 2. 优先指定的statue && 判断step及子步骤状态
      if (status !== 'default') {
        step.data._status = status;
        status === 'finish' &&
          this.judgeObjAttr(step.data, '_subStepItems') &&
          this.changeStatus(step.data, '_subStepItems', '_status', 'finish');
      } else if (status === 'default') {
        if (index < firstStep) {
          step.data._status = 'finish';
          this.judgeObjAttr(step.data, '_subStepItems') &&
            this.changeStatus(step.data, '_subStepItems', '_status', 'finish');
        } else if (index === firstStep) {
          step.data._status = currentStatus;
          this.judgeObjAttr(step.data, '_subStepItems') &&
            step.data._subStepItems.forEach((subItem, subIndex) => {
              if (subIndex < secondStep) {
                subItem._status = 'finish';
              } else if (subIndex === secondStep) {
                subItem._status = currentStatus;
              }
            });

          currentStatus === 'finish' &&
            this.judgeObjAttr(step.data, '_subStepItems') &&
            this.changeStatus(step.data, '_subStepItems', '_status', 'finish');
        } else if (index > firstStep) {
          step.data._status = 'default';
          this.judgeObjAttr(step.data, '_subStepItems') &&
            this.changeStatus(step.data, '_subStepItems', '_status', 'default');
        }
      }

      // update icon
      let iconStatus = '';
      if (readonly) {
        if (step.data._status === 'finish') {
          iconStatus = 'check';
        } else if (step.data._status === 'error') {
          iconStatus = 'close';
        }
      }

      this.setData({
        curStatus: step.data._status || step.data.status,
        curSubStep: step.data._subStepItems || [],
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
