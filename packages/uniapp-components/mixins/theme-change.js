import { appBaseInfo } from '../common/utils';

export const themeMixin = {
  data() {
    return {
      theme: 'light',
    };
  },
  mounted() {
    this.theme = appBaseInfo.theme;
    if (typeof uni.onThemeChange !== 'function') return;
    uni.onThemeChange((t) => {
      this.theme = t.theme;
    });
  },
};
