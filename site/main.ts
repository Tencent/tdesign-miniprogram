import { createApp } from 'vue';
import app from './app.vue';
import router from './router';

// import '../styles/sites/index.less';

// import site webcomponents
import 'tdesign-site-components/lib/site.es.js';
import 'tdesign-site-components/lib/styles/style.css';

createApp(app)
  .use(router)
  .mount('#app');
