import Message from '@tencent/tdesign-miniprogram/message/index';

Page({
  showMessage(e) {
    const type = e.currentTarget.dataset.type;
    Message[type]('hello')
  }
});
