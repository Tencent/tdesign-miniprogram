Component({
  data: {
    customStepCurrent: 2,
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

  lifetimes: {
    attached() {
      this.init();
    },
  },

  methods: {
    init() {
      const { customStepCurrent, customStepItems } = this.data;
      const newCustomStepItems = customStepItems.map((element, elementIndex) => {
        console.log('===', elementIndex);
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
  },
});
