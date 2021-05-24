import Message from '@tencent/tdesign-miniprogram/message/index';

Page({
  showMessage(e) {
    const { type } = e.currentTarget.dataset;
    Message[type]('hello');
  },
});
