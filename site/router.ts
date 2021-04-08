import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';
import config from './config';

const { navs } = config;

const getDocsRoutes = (docs: any[], type: string): RouteRecordRaw[] => {
  let docsRoutes: RouteRecordRaw[] = [];

  docs.forEach((item) => {
    const docType = item.type || type;
    if (docType === type) {
      if (item.children) {
        docsRoutes = docsRoutes.concat(getDocsRoutes(item.children, docType));
      } else {
        docsRoutes.push({
          path: `/components/${item.name}`,
          name: item.name,
          component: item.component,
        });
      }
    }
  });
  return docsRoutes;
};

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/components/install',
  },
  ...getDocsRoutes(navs.components.docs, 'document'),
  ...getDocsRoutes(navs.components.docs, 'component'),
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
