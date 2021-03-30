import TComponent from '../common/component';
import config from '../common/config';
const { prefix } = config;
const name = `${prefix}-steps`;

TComponent({
  relations: {
    './step': {
      type: 'descendant',
      linked() {
        this.updateChildren();
      },
    },
  },
  properties: {
    readonly: {
      type: Boolean,
      value: false,
    },
    /**
     * 当前步骤；从0开始
     */
    current: {
      type: Number,
    },
    /**
     * 图标状态default, dot
     */
    type: {
      type: String,
      value: 'default', // 'default' | 'dot'
    },
    /**
     * 方向 horizontal vertical
     */
    direction: {
      type: String,
      value: 'horizontal', // 'horizontal' | 'vertical'
    },
  },
  // 组件的内部数据
  data: {
    classPrefix: name,
  },
  methods: {
    updateChildren() {
      const items = this.getRelationNodes('./step');
      const len = items.length;
      const { current } = this.data;

      if (len > 0) {
        items.forEach((item, index) => {
          item.updateStatus(current, index, this.data.type, this.data.direction);
        });
      }
    },
    handleClick(index) {
      if (this.data.direction === 'vertical') {
        return;
      }
      if (!this.data.readonly) {
        const preIndex = this.data.current;
        this.setData(
          {
            current: index,
          },
          () => {
            this.updateChildren();
          },
        );
        this.triggerEvent('change', {
          previous: preIndex,
          current: index,
        });
      }
    },
  },
});
