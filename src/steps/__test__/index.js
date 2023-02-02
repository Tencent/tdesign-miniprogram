Component({
  data: {
    current1: 0,
    current2: 0,
    layout: 'horizontal',
    readonly: false,
    theme: 'default',
    currentSub: '1-0',
    subStepItems1: [
      {
        title: '二级步骤描述',
        status: 'process',
      },
      {
        title: '二级步骤描述',
        status: 'finish',
      },
    ],
    subStepItems2: [
      {
        title: '二级步骤描述',
        status: 'process',
      },
      {
        title: '二级步骤描述',
        status: 'error',
      },
    ],
    style: 'color: red',
    customStyle: 'font-size: 9px',
  },
  methods: {
    onChange1(e) {
      this.setData({ current1: e.detail.current });
    },
    onChange2(e) {
      this.setData({ current2: e.detail.current });
    },
  },
});
