const placeholder = '搜索预设文案';
const actionText = '取消';
Page({
  data: {
    first: '',
    searchBoxGroup: [
      {
        id: `${Math.random()}`,
        keyword: '',
        placeholder,
        actionText: '',
      },
      {
        id: `${Math.random()}`,
        keyword: '',
        placeholder,
        actionText: '取消',
      },
      {
        id: `${Math.random()}`,
        keyword: '关键词',
        placeholder,
        actionText: '取消',
      },
    ],
  },

  changeHandle({
    detail,
    currentTarget: {
      dataset: { idx },
    },
  }) {
    this.setData({
      [`searchBoxGroup[${idx}].keyword`]: detail.value,
    });
  },

  focusHandle({
    currentTarget: {
      dataset: { idx },
    },
  }) {
    this.data.searchBoxGroup.forEach((_, index) => {
      this.setData({
        [`searchBoxGroup[${index}].actionText`]: '',
      });
    });

    this.setData({
      [`searchBoxGroup[${idx}].actionText`]: actionText,
      [`searchBoxGroup[${idx}].focus`]: true,
    });
  },

  cancelHandle({
    currentTarget: {
      dataset: { idx },
    },
  }) {
    this.setData({
      [`searchBoxGroup[${idx}].actionText`]: '',
    });
  },

  clearHandle({
    currentTarget: {
      dataset: { idx },
    },
  }) {
    this.setData({
      [`searchBoxGroup[${idx}].keyword`]: '',
    });
  },
});
