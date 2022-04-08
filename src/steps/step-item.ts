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
      const _current = String(current);
      const connectLine = '-';

      /**
       * 判断对象的attr为数组 && 数组长度大于0
       */
      const judgeObjAttr = (data, attr: string) => {
        return Array.isArray(data[attr]) && data[attr].length;
      };

      /**
       * 去除字符串最后一个`connectLine`符号及之后的字符，即1-1 变为1， 1-10-1变为1-10
       */
      const RegReplace = (s) => {
        const reg = new RegExp(`(.*)${connectLine}{1}.*`);
        return s.replace(reg, '$1');
      };

      /**
       * 判断当前步骤条与current指定的步骤是否同级
       */
      const sameSteps = (stepsTag: String, current: String) => {
        return stepsTag.length !== current.length && RegReplace(stepsTag) === RegReplace(current);
      };

      /**
       * @param item 步骤条
       * @param index 步骤条下标
       * @param itemTag 步骤条位置标记
       * @param current 指定步骤条
       * @param currentStatus 指定当前状态
       * @returns 状态
       */
      const stepFinalStatus = (item, index, itemTag, current: String, currentStatus) => {
        let _status = '';
        // console.log(item.status);
        if (item.status !== 'default' && item.status !== undefined) {
          _status = item.status === '' ? 'default' : item.status;
        } else if (item.status === 'default' || item.status === undefined) {
          if (itemTag < current) {
            _status = 'finish';
          }

          if (itemTag === current || sameSteps(itemTag, current)) {
            // console.log(itemTag, item.sta);
            _status = item.status === '' ? 'default' : currentStatus;
            // 子步骤
            if (judgeObjAttr(item, '_subStepItems')) {
              // 1. 获取所有子步骤条的状态
              const _statusList = [];
              item._subStepItems.forEach((subItem, subIndex) => {
                const subItemTag = `${itemTag}${connectLine}${subIndex}`;
                const subStatus = stepFinalStatus(subItem, subIndex, subItemTag, current, currentStatus);
                _statusList.push(subStatus);
              });

              // 2. 根据数组中子步骤条状态，判断当前步骤条状态。优先级：finish>error>process
              // 2.1. 子步骤条中存在process或current指向子步骤且子步骤全为default，当前步骤process
              // 2.2. 子步骤条中存在error，当前步骤error
              // 2.3. 最后一个子步骤条为finish，当前步骤为finish
              if (_statusList.includes('process') || _statusList.every((item) => item === 'default')) {
                _status = 'process';
              }
              if (_statusList.includes('error')) {
                _status = 'error';
              }
              if (_statusList[_statusList.length - 1] === 'finish') {
                _status = 'finish';
              }
            }
          }
          if (itemTag > current) {
            _status = 'default';
          }
        }

        return _status;
      };

      // 1. 拷贝一份 subStepItems
      if (judgeObjAttr(this.data, 'subStepItems')) {
        const _subStepItems = JSON.parse(JSON.stringify(this.data.subStepItems));
        this.data._subStepItems = _subStepItems;
      }

      // 2. 判断status
      // 2.1 当前步骤条
      this.data._status = stepFinalStatus(this.data, index, String(index), _current, currentStatus);
      // 2.1 当前步骤条其子步骤条
      if (judgeObjAttr(this.data, '_subStepItems')) {
        this.data._subStepItems.forEach((subItem, subIndex) => {
          subItem._status = stepFinalStatus(
            subItem,
            subIndex,
            `${index}${connectLine}${subIndex}`,
            _current,
            currentStatus,
          );
        });
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
        curStatus: this.data._status,
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
