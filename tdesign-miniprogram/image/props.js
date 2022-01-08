/* eslint-disable */
const props = {
    /** 组件类名，分别用于设置加载组件外层元素，中间内容等元素类名 */
    externalClasses: {
        type: Array,
    },
    /** 加载失败时显示的内容，值为 'default' 则表示使用默认加载失败风格，值为空或者 'slot' 表示使用插槽渲染，值为其他则表示普通文本内容，如“加载失败” */
    loadFailed: {
        type: String,
        value: 'default',
    },
    /** 加载态内容，值为 'default' 则表示使用默认加载中风格，值为空或者 'slot' 表示使用插槽渲染，值为其他则表示普通文本内容，如“加载中” */
    loading: {
        type: String,
        value: 'default',
    },
    /** 图片资源地址 */
    src: {
        type: String,
        value: '',
    },
    /** 图片裁剪、缩放的模式 [查看小程序文档](https://developers.weixin.qq.com/miniprogram/dev/component/image.html) */
    mode: {
        type: String,
        value: 'scaleToFill',
    },
    /** 默认不解析 webP 格式，只支持网络资源 */
    webp: {
        type: Boolean,
        value: false,
    },
    /** 图片懒加载，在即将进入一定范围（上下三屏）时才开始加载 */
    lazyLoad: {
        type: Boolean,
        value: false,
    },
    /** 长按图片显示发送给朋友、收藏、保存图片、搜一搜、打开名片/前往群聊/打开小程序（若图片中包含对应二维码或小程序码）的菜单。<br>支持识别的码：小程序码 <br>仅小程序支持识别的码：微信个人码、微信群码、企业微信个人码、 企业微信群码与企业微信互通群码； */
    showMenuByLongpress: {
        type: Boolean,
        value: false,
    },
};
export default props;

//# sourceMappingURL=props.js.map
