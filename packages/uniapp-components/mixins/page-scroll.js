import { getCurrentPage } from '../common/utils';
import Bus from '../common/bus';

const overflowScrollReg = /scroll|auto|overlay/i;

export const bus = new Bus();
export const PAGE_SCROLL_EVENT_NAME = 'page-scroll';


const onPageScroll = function (event) {
  const page = getCurrentPage();

  if (!page) return;
  const { pageScroller } = page;

  pageScroller?.forEach((scroller) => {
    if (typeof scroller === 'function') {
      scroller(event);
    }
  });
};


export default (funcName = 'onScroll', useBus = true) => {
  // #ifdef H5
  useBus = false;
  // #endif

  return {
    mounted() {
      if (useBus) {
        bus.on(PAGE_SCROLL_EVENT_NAME, this[funcName]);
        return;
      }

      // #ifdef H5
      this._scroller = getScroller(this.$el);
      if (this._scroller) {
        this._scroller.addEventListener('scroll', this._bindScroller);
      }
      // #endif

      const page = getCurrentPage();
      if (!page) return;


      if (Array.isArray(page.pageScroller)) {
        page.pageScroller.push(this._bindScroller);
      } else {
        page.pageScroller = typeof page.onPageScroll === 'function' ? [page.onPageScroll.bind(page), this._bindScroller] : [this._bindScroller];
      }

      page.onPageScroll = onPageScroll;
    },

    beforeUnMount() {
      if (useBus) {
        bus.off(PAGE_SCROLL_EVENT_NAME, this[funcName]);
        return;
      }

      // #ifdef H5
      if (this._scroller) {
        this._scroller.removeEventListener('scroll', this._bindScroller);
      }
      // #endif

      const page = getCurrentPage();
      if (!page) return;

      page.pageScroller = page.pageScroller?.filter(item => item !== this._bindScroller) || [];
    },
    methods: {
      _bindScroller(e) {
        let result;
        // #ifdef H5
        result = this[funcName]?.call(this, e.target);
        // #endif
        // #ifndef H5
        result = this[funcName]?.call(this, e);
        // #endif
        return result;
      },
    },
  };
};


export function getScroller(el, root) {
  // #ifdef H5
  if (root === void 0) {
    root = window;
  }

  let node = el;

  while (node && node.tagName !== 'HTML' && node.tagName !== 'BODY' && node.nodeType === 1 && node !== root) {
    const { overflowY } = window.getComputedStyle(node);

    if (overflowScrollReg.test(overflowY)) {
      return node;
    }

    node = node.parentNode;
  }

  return root;
  // #endif
}


export function handlePageScroll(e) {
  bus.emit(PAGE_SCROLL_EVENT_NAME, e);
  return bus;
}
