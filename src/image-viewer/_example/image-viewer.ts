import Toast from 'tdesign-miniprogram/toast/index';

Page({
  data: {
    visible: false,
    showIndex: false,
    closeBtn: false,
    deleteBtn: false,
    images: [],
    operList1: [
      {
        title: '图片预览类型',
        btns: [
          {
            type: 'basic',
            text: '基础图片预览',
          },
          {
            type: 'withDeleteBasic',
            text: '有删除操作',
          },
          {
            type: 'withOverHeightBasic',
            text: '图片超高情况',
          },
          {
            type: 'withOverWidthBasic',
            text: '图片超宽情况',
          },
        ],
      },
    ],
  },

  onReady() {
    //
  },

  clickHandle(e: any) {
    const { detail } = e;
    switch (detail) {
      case 'basic':
        this.setData({
          images: [
            ...Array.from({ length: 6 }).fill(
              'https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/miniprogram/images/preview1.png',
            ),
          ],
          showIndex: true,
          visible: true,
        });
        break;
      case 'withDeleteBasic':
        this.setData({
          images: [
            ...Array.from({ length: 6 }).fill(
              'https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/miniprogram/images/preview4.png',
            ),
          ],
          showIndex: true,
          visible: true,
          closeBtn: true,
          deleteBtn: true,
        });
        break;
      case 'withOverHeightBasic':
        this.setData({
          images: [
            ...Array.from({ length: 6 }).fill(
              'https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/miniprogram/images/preview3.png',
            ),
          ],
          showIndex: true,
          visible: true,
        });
        break;
      case 'withOverWidthBasic':
        this.setData({
          images: [
            ...Array.from({ length: 6 }).fill(
              'https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/miniprogram/images/preview2.png',
            ),
          ],
          showIndex: true,
          visible: true,
        });
        break;
      default:
        break;
    }
  },

  onChange(e: any) {
    const {
      detail: { index },
    } = e;
    Toast({
      context: this,
      selector: '#t-toast',
      message: `翻到第${index + 1}个`,
    });
  },

  onDelete(e: any) {
    const {
      detail: { index },
    } = e;
    Toast({
      context: this,
      selector: '#t-toast',
      message: `删除第${index + 1}个`,
    });
  },

  onClose(e: any) {
    const {
      detail: { trigger },
    } = e;
    if (trigger === 'overlay') {
      Toast({
        context: this,
        selector: '#t-toast',
        message: '点击overlay关闭',
      });
    } else if (trigger === 'button') {
      Toast({
        context: this,
        selector: '#t-toast',
        message: `点击button关闭`,
      });
    }
    this.setData({
      visible: false,
    });
  },
});
