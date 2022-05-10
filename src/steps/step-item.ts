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
    `${prefix}-class-inner`,
    `${prefix}-class-content`,
    `${prefix}-class-title`,
    `${prefix}-class-description`,
    `${prefix}-class-extra`,
    `${prefix}-class-sub`,
    `${prefix}-class-sub-dot`,
    `${prefix}-class-sub-content`,
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
    curSubStepItemsStatus: [],
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
      const _current = String(current);
      const connectLine = '-';

      const judgeObjAttr = (data, attr: string) => {
        return Array.isArray(data[attr]) && data[attr].length;
      };

      const getStepLevel = (s) => {
        const reg = new RegExp(`(.*)${connectLine}{1}.*`);
        return s.replace(reg, '$1');
      };

      const isSameLevelStep = (stepsTag: string, current: string) => {
        return stepsTag.length < current.length && getStepLevel(stepsTag) === getStepLevel(current);
      };

      /**
       * 步骤条状态优先级：status > currentStatus > 子步骤影响
       * 子步骤影响优先级： finish > error > process
       */
      const stepFinalStatus = (item, itemTag, current: string, currentStatus) => {
        let tempStepStatus = '';
        if (item.status !== 'default' && item.status !== undefined) {
          tempStepStatus = item.status === '' ? 'default' : item.status;
        } else {
          tempStepStatus = 'default';
          if (itemTag < current) {
            tempStepStatus = 'finish';
          } else if (itemTag === current && item.status !== '') {
            tempStepStatus = currentStatus;
          }

          if (isSameLevelStep(itemTag, current)) {
            if (judgeObjAttr(item, 'subStepItems')) {
              const tempStepItemsStatus = item.subStepItems.map((subItem, subIndex) => {
                const subItemTag = `${itemTag}${connectLine}${subIndex}`;
                return stepFinalStatus(subItem, subItemTag, current, currentStatus);
              });

              if (tempStepItemsStatus[tempStepItemsStatus.length - 1] === 'finish') {
                tempStepStatus = 'finish';
                return tempStepStatus;
              }
              if (tempStepItemsStatus.includes('process') || tempStepItemsStatus.every((item) => item === 'default')) {
                tempStepStatus = 'process';
              }
              if (tempStepItemsStatus.includes('error')) {
                tempStepStatus = 'error';
              }
            }
          }
        }
        return tempStepStatus;
      };

      // step status
      this.data.tempStatus = stepFinalStatus(this.data, String(index), _current, currentStatus);
      const tempStatusList = [];
      if (judgeObjAttr(this.data, 'subStepItems')) {
        this.data.subStepItems.forEach((subItem, subIndex) => {
          tempStatusList.push(stepFinalStatus(subItem, `${index}${connectLine}${subIndex}`, _current, currentStatus));
        });
      }

      // update icon
      const tempIcon = new Map([
        ['finish', 'check'],
        ['error', 'close'],
      ]);
      let iconStatus = '';
      if (readonly && tempIcon.has(this.data.tempStatus)) {
        iconStatus = tempIcon.get(this.data.tempStatus);
      }

      this.setData({
        curStatus: this.data.tempStatus,
        curSubStepItems: this.data.subStepItems || [],
        curSubStepItemsStatus: tempStatusList || [],
        computedIcon: this.data.icon || iconStatus,
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
