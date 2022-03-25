Page({
  data: {
    current: 1,
    childData: [
      {
        title: '二级步骤描述',
      },
      {
        title: '二级步骤描述',
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
