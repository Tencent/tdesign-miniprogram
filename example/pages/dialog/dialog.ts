import Dialog from '@tencent/tdesign-miniprogram/dialog/index';

Page({
  data: {
    compDialogVisible: false,
    openTypeDialogVisible: false,
  },
  // 点击反馈类对话框（标题+内容）
  showFeedbackDialog() {
    Dialog.alert({
      header: '对话框标题',
      body: '告知当前状态、信息和解决方法',
      confirmContent: '我知道了',
    });
  },
  // 点击反馈类对话框（仅内容）
  showFeedbackDialog2() {
    Dialog.alert({
      body: '告知当前状态、信息和解决方法',
      asyncClose: true,
    }).then(({ close }) => {
      // 点击确定按钮
      close(); // 手动关闭弹窗
    });
  },
  // 确认类对话框
  showConfirmDialog() {
    Dialog.confirm({
      theme: 'error',
      header: '弹窗标题',
      body: '告知当前状态、信息和解决方法。告知当前状态、信息和解决方法。告知当前状态、信息和解决方法。告知当前状态、信息和解决方法。告知当前状态、信息和解决方法。告知当前状态、信息和解决方法。告知当前状态、信息和解决方法。告知当前状态、信息和解决方法。告知当前状态、信息和解决方法。告知当前状态、信息和解决方法。告知当前状态、信息和解决方法。告知当前状态、信息和解决方法。告知当前状态、信息和解决方法。告知当前状态、信息和解决方法。告知当前状态、信息和解决方法。告知当前状态、信息和解决方法。告知当前状态、信息和解决方法。告知当前状态、信息和解决方法。告知当前状态、信息和解决方法。告知当前状态、信息和解决方法。告知当前状态、信息和解决方法。告知当前状态、信息和解决方法。告知当前状态、信息和解决方法。告知当前状态、信息和解决方法。告知当前状态、信息和解决方法。告知当前状态、信息和解决方法。',
      cancelContent: '辅助操作',
      confirmContent: '警告操作',
      closeOnClickOverlay: false,
      asyncClose: true,
    }).then(({ close }) => {
      // if (confirm) {
      // 点击确定按钮
      close(); // 关闭弹窗
      // } else {
      // 点击取消按钮
      // close(); // 关闭弹窗
      // }
    });
  },
  // 输入类对话框
  // showInputDialog() { },
  // 展示组件对话框
  showCompDialog() {
    this.setData({
      compDialogVisible: true,
    });
  },
  // 点击笼罩层
  hideCompDialog() {
    this.setData({
      compDialogVisible: false,
    });
  },
  // 展示组件对话框
  showOpenTypeDialog() {
    this.setData({
      openTypeDialogVisible: true,
    });
  },
  // 点击笼罩层
  hideOpenTypeDialog() {
    this.setData({
      openTypeDialogVisible: false,
    });
  },
  openSetting() {
    // 打开授权设置页
    this.hideDialog(); // 关闭弹窗
  },
  hideDialog() {
    this.setData({
      openTypeDialogVisible: false,
    });
  },
});
