Component({
  data: {
    items: [
      {
        variant: 'light',
        checked: false,
      },
      {
        variant: 'dark',
        checked: false,
      },
      {
        variant: 'outline',
        checked: false,
      },
      {
        variant: 'outline-light',
        checked: false,
      },
    ],
  },

  methods: {
    handleCheckTagChange(e) {
      console.log(e.detail.checked);
    },
  },
});
