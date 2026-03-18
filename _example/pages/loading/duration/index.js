import SkylineBehavior from '@behaviors/skyline.js';

Component({
  behaviors: [SkylineBehavior],

  data: {
    duration: 800,
  },
  methods: {
    durationChange(e) {
      this.setData({ duration: e.detail.value });
    },
  },
});
