import TComponent from '../common/component';

TComponent({
  properties: {
    layout: {
      type: String,
      value: 'default', // 'default' | 'full' | 'bar'
    },
    size: {
      type: String,
      value: '40px',
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
    loading: {
      type: Boolean,
      value: true,
    },
  },
  methods: {
    reloadClick() {
      this.triggerEvent('reload');
    },
  },
});
