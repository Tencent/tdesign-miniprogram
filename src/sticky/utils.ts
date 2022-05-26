const getCurrentPage = function <T>() {
  const pages = getCurrentPages();
  return pages[pages.length - 1] as T & WechatMiniprogram.Page.TrivialInstance;
};

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

export const pageScrollMixin = (scroller: Scroller) => {
  let bindScroller = scroller;
  return Behavior({
    attached() {
      const page = getCurrentPage<{ pageScroller: Scroller[] }>();
      if (!page) return;
      bindScroller = scroller.bind(this);

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

export const getRect = function (context: any, selector: string) {
  return new Promise<WechatMiniprogram.BoundingClientRectCallbackResult>((resolve) => {
    wx.createSelectorQuery()
      .in(context)
      .select(selector)
      .boundingClientRect()
      .exec((rect = []) => resolve(rect[0]));
  });
};
