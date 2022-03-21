Page({
  data: {
    current: 0,
    childData1: [
      {
        title: '二级步骤描述',
        status: 'process',
      },
      {
        title: '二级步骤描述',
        status: 'default',
      },
    ],
    childData2: [
      {
        title: '二级步骤描述',
        status: 'error',
      },
      {
        title: '二级步骤描述',
        status: 'default',
      },
    ],
  },
  handleChange({ detail }) {
    console.log(detail.current);
    this.setData({
      current: detail.current,
    });
  },
});
