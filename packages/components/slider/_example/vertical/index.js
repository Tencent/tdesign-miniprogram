Component({
  data: {
    singlevalue: 35,
    capsuleValue: 35,
    marks: {
      0: '0',
      20: '20',
      40: '40',
      60: '60',
      80: '80',
      100: '100',
    },
  },

  methods: {
    handleSingleChange(e) {
      this.setData({
        singlevalue: e.detail.value,
      });
    },
    handleCapsuleChange(e) {
      this.setData({
        capsuleValue: e.detail.value,
      });
    },
  },
});
