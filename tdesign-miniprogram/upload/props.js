/* eslint-disable */
const props = {
    /** 添加按钮内容。值为空，使用默认图标渲染；值为 slot 则表示使用插槽渲染；其他值无效。 */
    addContent: {
        type: String,
    },
    /** 图片上传配置，视频上传配置，文件上传配置等，包含图片尺寸、图片来源、视频来源、视频拍摄最长时间等。更多细节查看小程序官网。[图片上传](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.chooseImage.html)。[视频上传](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseVideo.html) */
    config: {
        type: Object,
    },
    /** 删除图标。值为空，使用默认图标渲染；值为 slot 则表示使用插槽渲染；其他值无效。 */
    deleteBtn: {
        type: String,
    },
    /** 已上传文件列表 */
    files: {
        type: Array,
        value: null,
    },
    /** 已上传文件列表，非受控属性 */
    defaultFiles: {
        type: null,
        value: undefined,
    },
    /** upload组件每行上传图片列数以及图片的宽度和高度 */
    gridConfig: {
        type: Object,
    },
    /** 预览窗格的 gutter 大小，单位 rpx */
    gutter: {
        type: Number,
        value: 16,
    },
    /** 用于控制文件上传数量，值为 0 则不限制 */
    max: {
        type: Number,
        value: 0,
    },
    /** 支持上传的文件类型，图片或视频 */
    mediaType: {
        type: Array,
        value: ['image', 'video'],
    },
    /** 自定义上传方法 */
    requestMethod: {
        type: null,
    },
    /** 图片文件大小限制，单位 KB。可选单位有：`'B' | 'KB' | 'MB' | 'GB'`。示例一：`1000`。示例二：`{ size: 2, unit: 'MB', message: '图片大小不超过 {sizeLimit} MB' }` */
    sizeLimit: {
        type: Number,
        optionalTypes: [Object],
    },
};
export default props;

//# sourceMappingURL=props.js.map
