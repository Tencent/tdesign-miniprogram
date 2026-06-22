export {};

declare module 'vue' {
  type Hooks = App.AppInstance & Page.PageInstance;
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface ComponentCustomOptions extends Hooks {}
}
