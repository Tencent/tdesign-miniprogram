import { RouteRecordRaw, createRouter, createWebHistory, RouterOptions } from 'vue-router';
// @ts-ignore
import siteConfig from './site.config';
// eslint-disable-next-line
const { docs, enDocs } = siteConfig;

const getDocsRoutes = (docs: any[], type: string): RouteRecordRaw[] => {
  let docsRoutes: Array<RouteRecordRaw> = [];
  let docRoute;

  docs.forEach((item) => {
    const docType = item.type || type;
    if (docType === type) {
      const { children } = item;

      if (children) {
        docsRoutes = docsRoutes.concat(getDocsRoutes(children, docType));
      } else {
        docRoute = { ...item };
        docsRoutes.push(docRoute);
      }
    }
  });
  return docsRoutes;
};

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/miniprogram/overview',
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/miniprogram/overview',
  },
  ...getDocsRoutes(docs, 'document'),
  ...getDocsRoutes(docs, 'component'),
  ...getDocsRoutes(enDocs, 'document'),
  ...getDocsRoutes(enDocs, 'component'),
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
    window.NProgress && window.NProgress.start();
  }
  next();
});

router.afterEach(() => {
  // @ts-ignore
  window.NProgress && window.NProgress.done();
  // @ts-ignore
  document.querySelector('td-stats')?.track?.();
});

export default router;
