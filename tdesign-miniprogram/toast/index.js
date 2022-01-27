var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const getInstance = (context, selector = '#t-toast') => {
    if (!context) {
        const pages = getCurrentPages();
        const page = pages[pages.length - 1];
        context = page.$$basePage || page;
    }
    const instance = context === null || context === void 0 ? void 0 : context.selectComponent(selector);
    if (!instance) {
        console.warn('未找到toast组件,请检查selector是否正确');
        return null;
    }
    return instance;
};
export default function (options) {
    const { context, selector } = options, Options = __rest(options, ["context", "selector"]);
    const instance = getInstance(context, selector);
    if (instance) {
        instance.show(Object.assign(Object.assign({}, Options), { duration: Options.duration || 2000 }));
    }
}

//# sourceMappingURL=index.js.map
