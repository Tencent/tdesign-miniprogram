import {
  type RouteRecordRaw,
  createRouter,
  createWebHistory,
  type RouterOptions } from 'vue-router';
import config from '../docs.config';
import { sortDocs, type DocType } from './utils';

const docs = sortDocs(config.docs as unknown as DocType[]);
const enDocs = sortDocs(config.enDocs as unknown as DocType[]);

function getDocsRoutes(docs: any[], type: string): RouteRecordRaw[] {
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
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/uniapp/overview',
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/uniapp/overview',
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
  if (to.name !== from.name) {
    // @ts-ignore
    window.NProgress?.start();
  }
  next();
});

router.afterEach(() => {
  // @ts-ignore
  window.NProgress?.done();
  // @ts-ignore
  document.querySelector('td-stats')?.track?.();
});

export default router;
