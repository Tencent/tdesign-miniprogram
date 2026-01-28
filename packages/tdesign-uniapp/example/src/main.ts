import { createSSRApp } from 'vue';
import App from './App.vue';
import './style/app.less';
import DemoBaseMixin from './mixins/demo-base.js';

import TDemo from '@tdesign/uniapp/demo/demo.vue';
import TNavbar from '@tdesign/uniapp/navbar/navbar.vue';
import TDemoHeader from '@tdesign/uniapp/demo-header/demo-header.vue';
import TDemoNavbar from '@tdesign/uniapp/demo-navbar/demo-navbar.vue';


export function createApp() {
  const app = createSSRApp(App);

  app.component('t-demo', TDemo);
  app.component('t-demo-header', TDemoHeader);
  app.component('t-demo-navbar', TDemoNavbar);
  app.component('t-navbar', TNavbar);

  app.mixin(DemoBaseMixin);
  return {
    app,
  };
}
