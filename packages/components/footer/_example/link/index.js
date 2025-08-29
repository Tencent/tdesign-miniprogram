Component({
  data: {
    text: 'Copyright © 2021-2031 TD.All Rights Reserved.',
    links: [
      [
        {
          name: '底部链接',
          url: '/pages/index',
          openType: 'navigate',
        },
      ],
      [
        {
          name: '底部链接',
          url: '/pages/index',
          openType: 'navigate',
        },
        {
          name: '底部链接',
          url: '',
          openType: 'navigateBack',
        },
      ],
    ],
  },
});
