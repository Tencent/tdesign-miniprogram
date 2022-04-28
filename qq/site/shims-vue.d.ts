declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module '*.md' {
  const content: string;
  export default content;
}

declare module 'vite-plugin-tdoc';
