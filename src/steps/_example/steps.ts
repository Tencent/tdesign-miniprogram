Page({
  data: {
    current: 1,
    subStepItems: [
      {
        title: '二级步骤描述',
      },
      {
        title: '二级步骤描述',
      },
    ],
    customStepCurrent: 1,
    customStepItems: [
      {
        title: '二级步骤描述',
        content: '可自定义此处内容',
        extra: '可自定义此处内容',
      },
      {
        content: '可自定义此处内容',
        extra: '可自定义此处内容',
      },
      {
        content: '可自定义此处内容',
        extra: '可自定义此处内容',
      },
      {
        title: '二级步骤描述',
        extra: '可自定义此处内容',
        content: '可自定义此处内容',
      },
      {
        title: '二级步骤描述',
        extra: '可自定义此处内容',
        content: '可自定义此处内容',
      },
    ],
  },

  handleChange({ detail }) {
    console.log(detail.current);
    this.setData({
      current: detail.current,
    });
  },

  onLoad() {
    const { customStepCurrent, customStepItems } = this.data;
    const newCustomStepItems = customStepItems.map((element, elementIndex) => {
      if (elementIndex < customStepCurrent) {
        element.status = 'finish';
      } else if (elementIndex === customStepCurrent) {
        element.status = 'active';
      } else {
        element.status = 'default';
      }
      return element;
    });
    this.setData({
      customStepItems: newCustomStepItems,
    });
  },
});
