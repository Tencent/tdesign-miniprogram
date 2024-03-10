Component({
  data: {
    text: 'Copyright © 2021-2031 TD.All Rights Reserved.',
    links: [
      [
        {
          name: 'Bottom Link',
          url: '/pages/index',
          openType: 'navigate',
        },
      ],
      [
        {
          name: 'Bottom Link',
          url: '/pages/index',
          openType: 'navigate',
        },
        {
          name: 'Bottom Link',
          url: '',
          openType: 'navigateBack',
        },
      ],
    ],
  },
});
