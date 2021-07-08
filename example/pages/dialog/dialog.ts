// @ts-ignore
import Dialog from '@tencent/tdesign-miniprogram/dialog/index';

const title = '对话框标题';
const maxTitle = '对话框标题告知当前状态、信息和解决方法，等内容。描述文案尽可能控制在三行内';
const message = '告知当前状态、信息和解决方法，等内容。描述文案尽可能控制在三行内';
const maxMessage =
  '告知当前状态、信息和解决方法。告知当前状态、信息和解决方法。告知当前状态、信息和解决方法。告知当前状态、信息和解决方法。告知当前状态、信息和解决方法。告知当前状态、信息和解决方法。告知当前状态、信息和解决方法。告知当前状态、信息和解决方法。告知当前状态、信息和解决方法。告知当前状态、信息和解决方法。告知当前状态、信息和解决方法。告知当前状态、信息和解决方法。告知当前状态、信息和解决方法。告知当前状态、信息和解决方法。告知当前状态、信息和解决方法。告知当前状态、信息和解决方法。告知当前状态、信息和解决方法。告知当前状态、信息和解决方法。告知当前状态、信息和解决方法。告知当前状态、信息和解决方法。告知当前状态、信息和解决方法。告知当前状态、信息和解决方法。告知当前状态、信息和解决方法。告知当前状态、信息和解决方法。告知当前状态、信息和解决方法。告知当前状态、信息和解决方法。';

interface Config {
  title: string;
  tConfirmBtn: string;
  message: string;
  showConfirmButton: boolean;
  showCancelButton: boolean;
  confirmButtonText: string;
  cancelButtonText: string;
  confirmOpenTypeValue: string;
  asyncClose: boolean;
  direction: 'row' | 'column';
  actions: { name: string; primary?: boolean; style?: string }[];
}

const dialogConfig: Config = {
  title: '',
  tConfirmBtn: '',
  message: '',
  showConfirmButton: false,
  showCancelButton: false,
  confirmButtonText: '',
  cancelButtonText: '',
  confirmOpenTypeValue: '',
  asyncClose: false,
  direction: 'row',
  actions: [],
};

const modelConfigFactory = (opt: Partial<Config>) => {
  return {
    ...dialogConfig,
    ...opt,
  };
};

Page({
  data: {
    show: false,
    show4Slot: false,
    reDeployModal: true,
    dialogConfig,
    operList: [
      {
        title: '反馈类对话框',
        btns: [
          {
            type: 'text',
            text: '单行标题',
          },
          {
            type: 'multiText',
            text: '多行标题最大高度',
          },
          {
            type: 'textAndTitle',
            text: '多行标题最大高度',
          },
          {
            type: 'multiTextAndTitle',
            text: '多行标题最大高度',
          },
        ],
      },
      {
        title: '确认类对话框',
        btns: [
          {
            type: 'confirm',
            text: '双按钮',
          },
          {
            type: 'warnConfirm',
            text: '带警示按钮',
          },
          {
            type: 'tooLongBtnContent',
            text: '双按钮文字过长',
          },
          {
            type: 'multiBtn',
            text: '多按钮',
          },
        ],
      },
      {
        title: '输入类对话框',
        btns: [
          {
            type: 'withInput',
            text: '单行标题',
          },
          {
            type: 'textAndTitleWithInput',
            text: '带说明文本',
          },
        ],
      },
    ],
  },

  /** 隐藏渲染可配置的dialog组件 */
  closeConfigableDialogHandle() {
    return new Promise((resolve) => {
      this.setData({ reDeployModal: false }, () => resolve({}));
    });
  },

  clickHandle(e) {
    this.closeConfigableDialogHandle()
      .then(() => this.switchDialogConfigHandle(e.detail))
      .then(() => {
        this.setData({ reDeployModal: true });
      });
  },

  /** 切换dialog配置项 */
  switchDialogConfigHandle(key: string) {
    switch (key) {
      // 纯文本弹窗
      case 'text':
      case 'multiText': {
        this.setData({
          show: true,
          show4Slot: false,
          dialogConfig: modelConfigFactory({
            title: key === 'text' ? title : maxTitle,
            showConfirmButton: true,
            confirmButtonText: '知道了',
          }),
        });
        return;
      }
      // 标题&副标题弹窗
      case 'textAndTitle':
      case 'multiTextAndTitle': {
        this.setData({
          show: true,
          show4Slot: false,
          dialogConfig: modelConfigFactory({
            title: key === 'textAndTitle' ? title : '对话框带文本最大高度',
            message: key === 'textAndTitle' ? message : maxMessage,
            showConfirmButton: true,
            confirmButtonText: '我知道了',
          }),
        });
        return;
      }
      // 确认弹窗-普通
      case 'confirm': {
        this.setData({
          show: true,
          show4Slot: false,
          dialogConfig: modelConfigFactory({
            title,
            message,
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText: '按钮最多字数',
            cancelButtonText: '取消',
          }),
        });
        return;
      }
      // 确认弹窗-警示操作
      case 'warnConfirm': {
        this.setData({
          show: true,
          show4Slot: false,
          dialogConfig: modelConfigFactory({
            title,
            tConfirmBtn: 'custom-confirm-btn',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText: '警示操作',
            cancelButtonText: '取消',
          }),
        });
        return;
      }
      // 按钮文字过长弹层
      case 'tooLongBtnContent': {
        this.setData({
          show: true,
          show4Slot: false,
          dialogConfig: modelConfigFactory({
            title,
            message,
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText: '按钮文案文字内容较长',
            cancelButtonText: '取消',
            direction: 'column',
          }),
        });
        return;
      }
      // 多按钮弹层
      case 'multiBtn': {
        this.setData({
          show: true,
          show4Slot: false,
          dialogConfig: modelConfigFactory({
            title,
            message,
            direction: 'column', // 'row' | 'column'
            actions: [
              { name: '取消', primary: false },
              { name: '按钮文案文字内容较长', primary: true },
              { name: '单行按钮最多十五个字符文案内容', primary: true },
            ], // {name: string, primary?: string, style?: string}[]
          }),
        });
        return;
      }
      // 带输入弹窗
      case 'withInput':
      case 'textAndTitleWithInput': {
        this.setData({
          dialogConfig: modelConfigFactory({
            title,
            message: key === 'withInput' ? '' : message,
          }),
          show: false,
          show4Slot: true,
        });
        return;
      }

      default: {
        Dialog.alert({
          title: `未知key: ${key}`,
          message: '',
        });
        break;
      }
    }
  },

  /** 异步关闭弹层 */
  asyncCloseHandle() {
    if (this.data.dialogConfig.asyncClose) {
      setTimeout(() => this.confirmHandle(), 1000);
    } else {
      this.confirmHandle();
    }
  },

  /** 普通弹层关闭 */
  confirmHandle() {
    this.setData({
      show4Slot: false,
      show: false,
    });
    Dialog.close();
  },
});
