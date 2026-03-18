const list = [
  {
    value: 'home',
    label: '首页',
    icon: 'home',
    children: [],
  },
  {
    value: 'app',
    label: '应用',
    icon: 'app',
    children: [],
  },
  {
    value: 'user',
    label: '我的',
    children: [
      {
        value: 'info',
        label: '基本信息',
      },
      {
        value: 'home-page',
        label: '个人主页',
      },
      {
        value: 'setting',
        label: '设置',
      },
    ],
  },
];

Component({
  data: {
    list,
  },
});
