import SkylineBehavior from '@behaviors/skyline.js';

Component({
  behaviors: [SkylineBehavior],
  data: {
    isCheck: false,
  },
  methods: {
    switchChange() {
      const { isCheck } = this.data;
      this.setData({ isCheck: !isCheck });
    },
  },
});
