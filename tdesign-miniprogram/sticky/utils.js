const getCurrentPage = function () {
    const pages = getCurrentPages();
    return pages[pages.length - 1];
};
const onPageScroll = function (event) {
    const { pageScroller = [] } = getCurrentPage();
    pageScroller.forEach((scroller) => {
        if (typeof scroller === 'function') {
            // @ts-ignore
            scroller(event);
        }
    });
};
export const pageScrollMixin = (scroller) => Behavior({
    attached() {
        const page = getCurrentPage();
        if (Array.isArray(page.pageScroller)) {
            page.pageScroller.push(scroller.bind(this));
        }
        else {
            page.pageScroller =
                typeof page.onPageScroll === 'function'
                    ? [page.onPageScroll.bind(page), scroller.bind(this)]
                    : [scroller.bind(this)];
        }
        page.onPageScroll = onPageScroll;
    },
    detached() {
        var _a;
        const page = getCurrentPage();
        page.pageScroller = ((_a = page.pageScroller) === null || _a === void 0 ? void 0 : _a.filter((item) => item !== scroller)) || [];
    },
});
export const getRect = function (context, selector) {
    return new Promise((resolve) => {
        wx.createSelectorQuery()
            .in(context)
            .select(selector)
            .boundingClientRect()
            .exec((rect = []) => resolve(rect[0]));
    });
};

//# sourceMappingURL=utils.js.map
