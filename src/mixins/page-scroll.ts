import { getCurrentPage } from '../common/utils';

type IPageScrollOption = WechatMiniprogram.Page.IPageScrollOption;
type Scroller = (this: WechatMiniprogram.Component.TrivialInstance, event?: IPageScrollOption) => void;

const onPageScroll = function (event?: IPageScrollOption) {
  const page = getCurrentPage<{
    pageScroller: Scroller[];
  }>();

  if (!page) return;
  const { pageScroller } = page;

  pageScroller.forEach((scroller: Scroller) => {
    if (typeof scroller === 'function') {
      // @ts-ignore
      scroller(event);
    }
  });
};

export default (scroller: Scroller) => {
  return Behavior({
    attached() {
      const page = getCurrentPage<{ pageScroller: Scroller[] }>();
      if (!page) return;
      const bindScroller = scroller.bind(this);

      if (Array.isArray(page.pageScroller)) {
        page.pageScroller.push(bindScroller);
      } else {
        page.pageScroller =
          typeof page.onPageScroll === 'function' ? [page.onPageScroll.bind(page), bindScroller] : [bindScroller];
      }

      page.onPageScroll = onPageScroll;
    },

    detached() {
      const page = getCurrentPage<{ pageScroller: Scroller[] }>();
      if (!page) return;
      page.pageScroller = page.pageScroller?.filter((item) => item !== scroller) || [];
    },
  });
};
