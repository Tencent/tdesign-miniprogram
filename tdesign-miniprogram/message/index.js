import { MessageType } from './message.interface';
const getInstance = function (context, selector = '#t-message') {
    if (!context) {
        const pages = getCurrentPages();
        const page = pages[pages.length - 1];
        context = page.$$basePage || page;
    }
    const instance = context === null || context === void 0 ? void 0 : context.selectComponent(selector);
    if (!instance) {
        return null;
    }
    return instance;
};
const showMessage = function (options, theme = MessageType.info) {
    const { context, selector } = options;
    const instance = getInstance(context, selector);
    if (!instance) {
        return Promise.reject(new Error('未找到Message组件, 请检查selector是否正确'));
    }
    // instance.hide();
    instance.resetData(() => {
        instance.setData(Object.assign({ theme }, options), instance.show);
    });
    return instance;
};
export default {
    info(options) {
        return showMessage(options, MessageType.info);
    },
    success(options) {
        return showMessage(options, MessageType.success);
    },
    warning(options) {
        return showMessage(options, MessageType.warning);
    },
    error(options) {
        return showMessage(options, MessageType.error);
    },
    hide() {
        const instance = getInstance();
        if (!instance) {
            return;
        }
        instance.hide();
    },
};

//# sourceMappingURL=index.js.map
