Component({
  data: {
    fabButton: {
      icon: 'call',
      variant: 'outline',
      openType: 'getPhoneNumber',
    },
  },
  methods: {
    handleClick(e) {
      console.log(e);
    },
  },
});
