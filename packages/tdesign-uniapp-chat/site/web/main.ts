import { createApp } from 'vue';

// @ts-ignore
// import TDesign from '@/index';
// import 'tdesign-mobile-vue/style/index.js';

import { registerLocaleChange } from 'tdesign-site-components-uniapp';
import 'tdesign-site-components-uniapp/lib/styles/prism-theme-dark.less';
import 'tdesign-site-components-uniapp/lib/styles/prism-theme.less';
import 'tdesign-site-components-uniapp/lib/styles/style.css';

import 'tdesign-uniapp-theme-generator';

import App from './app.vue';
import router from './router';
import Stackblitz from './stackblitz/index.vue';

registerLocaleChange();

const app = createApp(App);

app.component('Stackblitz', Stackblitz);

app.use(router).mount('#app');
