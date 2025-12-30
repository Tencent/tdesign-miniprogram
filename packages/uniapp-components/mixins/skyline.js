import { getCurrentPage } from '../common/utils.js';

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
