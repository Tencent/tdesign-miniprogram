Page({
  data: {
    group1: [
      {
        name: 'radio1',
        title: '单行标题',
        disabled: true,
        bordered: true,
      },
      {
        name: 'radio2',
        title: '双行标题，长文本自动换行，该选项的描述是一段很长的内容',
        disabled: true,
        bordered: false,
      },
    ],
    group2: [
      {
        name: 'radio1',
        title: '单行标题',
        bordered: true,
      },
      {
        name: 'radio2',
        title: '双行标题，长文本自动换行，该选项的描述是一段很长的内容',
        bordered: true,
      },
      {
        name: 'radio3',
        title: '双行标题，长文本自动换行，该选项的描述是一段很长的内容',
        label: '一段很长很长的内容文字，一段很长很长的内容文字，一段很长很长的内容文字',
        bordered: false,
      },
    ],
    group1value: 'radio1',
    group2value: 'radio1',
  },
  onChange(event) {},
});
