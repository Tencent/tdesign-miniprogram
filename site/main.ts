import { createApp } from 'vue';
import router from './router';
import app from './app.vue';
import '../common/style/miniprogram/index.less';
import '../common/style/site/index.less';

createApp(app)
  .use(router)
  .mount('#app');
