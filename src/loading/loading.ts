import TComponent from '../common/component';
import config from '../common/config';
const { prefix } = config;
const name = `${prefix}-loading`;

TComponent({
  data: {
    classPrefix: name,
  },
  properties: {
    layout: {
      type: String,
      value: 'default', // 'default' | 'full' | 'bar'
    },
    size: {
      type: String,
      value: 'medium',
    },
    textSize: {
      type: String,
      value: '14px',
    },
    textPadding: {
      type: String,
      value: '0',
    },
    vertical: {
      type: Boolean,
      value: true,
    },
    type: {
      type: String,
      value: 'circle',
    },
    error: {
      type: Boolean,
      value: false,
    },
    showType: {
      type: String,
      value: 'all', // 'all' | 'text-only' | 'icon-only'
    },
    title: {
      type: String,
      value: '加载中',
    },
    progress: {
      type: Number,
      value: '-1',
    },
    loading: Boolean,
  },
  methods: {
    reloadClick() {
      this.triggerEvent('reload');
    },
  },
});
