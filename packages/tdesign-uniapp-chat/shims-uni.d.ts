/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable import/no-unresolved */
/// <reference types='@dcloudio/types' />
import 'vue';

declare module '@vue/runtime-core' {
  type Hooks = App.AppInstance & Page.PageInstance;

  interface ComponentCustomOptions extends Hooks {

  }
}
