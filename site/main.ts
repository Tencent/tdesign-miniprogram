import { createApp } from 'vue';
import app from './app.vue';
import router from './router';

// import '../styles/sites/index.less';

// import site webcomponents
import 'tdesign-site-components/lib/site.es.js';
import 'tdesign-site-components/lib/styles/style.css';
import 'tdesign-site-components/lib/styles/prism-theme.less';
import 'tdesign-site-components/lib/styles/prism-theme-dark.less';

// import icons webcomponents
import 'tdesign-icons-view';

createApp(app).use(router).mount('#app');
