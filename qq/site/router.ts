import { RouteRecordRaw, createRouter, createWebHistory, RouterOptions } from 'vue-router';
// @ts-ignore
import siteConfig from './site.config';

const { docs } = siteConfig;

const getDocsRoutes = (docs: any[], type: string): RouteRecordRaw[] => {
  let docsRoutes: Array<RouteRecordRaw> = [];
  docs.forEach((item) => {
    const docType = item.type || type;
    if (docType === type) {
      let { children } = item;
      if (item.type === 'component') {
        children = item.children.sort((a: any, b: any) => {
          const nameA = a.name.toUpperCase();
          const nameB = b.name.toUpperCase();
          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
          return 0;
        });
      }
      if (children) {
        docsRoutes = docsRoutes.concat(getDocsRoutes(children, docType));
      } else {
        docsRoutes.push({
          path: item.path,
          name: item.name,
          meta: item.meta || {},
          component: item.component,
        });
      }
    }
  });
  return docsRoutes;
};

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/qq-miniprogram/overview',
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/qq-miniprogram/overview',
  },
  ...getDocsRoutes(docs, 'document'),
  ...getDocsRoutes(docs, 'component'),
];

const routerConfig: RouterOptions = {
  routes,
  history: createWebHistory('/'),
};

const router = createRouter(routerConfig);

router.beforeEach((to, from, next) => {
  // @ts-ignore
  if (typeof NProgress !== 'undefined') {
    // @ts-ignore
    NProgress.start();
  }
  next();
});

router.afterEach(() => {
  // @ts-ignore
  if (typeof NProgress !== 'undefined') {
    // @ts-ignore
    NProgress.done();
  }
});

export default router;
