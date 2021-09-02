import { createApp } from 'vue';
import app from './app.vue';
import router from './router';

// import '../styles/sites/index.less';

// import site webcomponents
import '~/common/site/lib/site.es.js';
import '~/common/site/lib/style.css';

createApp(app)
  .use(router)
  .mount('#app');
