import { getCurrentPage } from '../common/utils';

export default {
  data() {
    return {
      skylineRender: false,
    };
  },
  mounted() {
    this.skylineRender = getCurrentPage().renderer === 'skyline';
  },
};
