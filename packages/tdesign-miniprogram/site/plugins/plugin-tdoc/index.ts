import vitePluginTdoc from 'vite-plugin-tdoc';
import createVuePlugin from '@vitejs/plugin-vue';

import transforms from './transforms';

export default function createTDesignPlugin() {

  const vuePlugin = createVuePlugin({
    ssr: false,
    include: [/\.md$/],
    template: { compilerOptions: { isCustomElement: tag => tag.startsWith('td-') } }
  });

  return vitePluginTdoc({
    plugins: [vuePlugin],
    transforms, // 解析markdown 数据
    markdown: {
      anchor: {
        tabIndex: false,
        config: (anchor: any) => ({
          permalink: anchor.permalink.linkInsideHeader({ symbol: '' }),
        }),
      },
      toc: {
        listClass: 'tdesign-toc_list',
        itemClass: 'tdesign-toc_list_item',
        linkClass: 'tdesign-toc_list_item_a',
        containerClass: 'tdesign-toc_container',
      },
    },
  });
};
