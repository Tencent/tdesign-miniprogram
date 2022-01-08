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
const getDialogInstance = function (context, selector = '#t-dialog') {
    if (!context) {
        const pages = getCurrentPages();
        const page = pages[pages.length - 1];
        context = page.$$basePage || page;
    }
    const instance = context ? context.selectComponent(selector) : null;
    if (!instance) {
        console.warn('未找到dialog组件,请检查selector是否正确');
        return null;
    }
    return instance;
};
export default {
    alert(options) {
        const { context, selector } = options, otherOptions = __rest(options, ["context", "selector"]);
        const instance = getDialogInstance(context, selector);
        if (!instance)
            return Promise.reject();
        return new Promise((resolve) => {
            instance.setData(Object.assign(Object.assign({ cancelBtn: '' }, otherOptions), { visible: true }));
            instance._onComfirm = resolve;
        });
    },
    confirm(options) {
        const { context, selector } = options, otherOptions = __rest(options, ["context", "selector"]);
        const instance = getDialogInstance(context, selector);
        if (!instance)
            return Promise.reject();
        return new Promise((resolve, reject) => {
            instance.setData(Object.assign(Object.assign({}, otherOptions), { visible: true }));
            instance._onComfirm = resolve;
            instance._onCancel = reject;
        });
    },
    close() {
        const instance = getDialogInstance();
        if (instance) {
            instance.close();
            return Promise.resolve();
        }
        return Promise.reject();
    },
    action(options) {
        const { context, selector, actions } = options, otherOptions = __rest(options, ["context", "selector", "actions"]);
        const instance = getDialogInstance(context, selector);
        if (!instance)
            return Promise.reject();
        if (!actions || actions.length === 0 || actions.length > 7) {
            console.warn('action 数量建议控制在1至7个');
        }
        return new Promise((resolve) => {
            instance.setData(Object.assign(Object.assign({ actions, direction: 'vertical' }, otherOptions), { visible: true }));
            instance._onAction = resolve;
        });
    },
};

//# sourceMappingURL=index.js.map
