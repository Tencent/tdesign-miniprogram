import TComponent from '../common/component';
import config from '../common/config';
const { prefix } = config;

TComponent({
  relations: {
    './steps': {
      type: 'ancestor',
    },
  },
  properties: {
    title: {
      type: String,
      value: '',
    },
    /**
     * 内容
     */
    content: {
      type: String,
      value: '',
    },
    /**
     * item状态
     */
    status: {
      type: String,
      value: '', // 'wait' | 'process' | 'finish' | 'error'
    },
    icon: {
      type: String,
      value: '',
    },
  },
  // 组件的内部数据
  data: {
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
  },
  lifetimes: {
    ready() {
      const [parent] = this.getRelationNodes('./steps') || [];

      if (parent) {
        this.setData({
          parent,
        });
      }
    },
  },
  methods: {
    updateStatus(current, index, type, direction, steps) {
      const { status } = this.data;
      let newStatus = status;
      if (!status) {
        if (index < current) {
          // 1. 本步骤序号小于当前步骤并且没有设定任何步骤序号，设定状态为 finish

          newStatus = 'finish';
        } else if (index === current) {
          // 2. 本步骤序号等于当前步骤. 默认为process

          newStatus = 'process';
        } else {
          // 3. 本步骤序号大于当前步骤，默认为wait

          newStatus = 'wait';
        }
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
  },
});
