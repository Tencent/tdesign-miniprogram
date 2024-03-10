const list = [
  {
    value: 'home',
    label: 'Home',
    icon: 'home',
    children: [],
  },
  {
    value: 'app',
    label: 'App',
    icon: 'app',
    children: [],
  },
  {
    value: 'user',
    label: 'User',
    children: [
      {
        value: 'info',
        label: 'Basic Information',
      },
      {
        value: 'home-page',
        label: 'Homepage',
      },
      {
        value: 'setting',
        label: 'Setting',
      },
    ],
  },
];

Component({
  data: {
    list,
  },
});
