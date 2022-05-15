// @ts-ignore
import Dialog from 'tdesign-miniprogram/dialog/index';

const title = '对话框标题';
const maxTitle = '对话框标题告知当前状态、信息和解决方法，等内容。描述文案尽可能控制在三行内';
const message = '告知当前状态、信息和解决方法，等内容。描述文案尽可能控制在三行内';

interface Config {
  title: string;
  tConfirmBtn: string;
  content: string;
  confirmBtn: string;
  cancelBtn: string;
  buttonLayout: 'horizontal' | 'vertical';
  actions: boolean | { name: string; primary?: boolean; style?: string }[];
}

const dialogConfig: Config = {
  title: '',
  tConfirmBtn: '',
  content: '',
  confirmBtn: '',
  cancelBtn: '',
  buttonLayout: 'horizontal',
  actions: false,
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
    useSlot: false,
    dialogConfig,
    currentKey: '',
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
            text: '带说明文本',
          },
          {
            type: 'multiTextAndTitle',
            text: '带说明文本最大高度',
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
      {
        title: '命令调用',
        btns: [
          {
            type: 'commandWithCancel',
            text: '带取消按钮',
          },
          {
            type: 'command',
            text: '无取消按钮',
          },
        ],
      },
    ],
  },

  /** 切换dialog配置项 */
  clickHandle(e) {
    const key = e.detail;
    switch (key) {
      // 纯文本弹窗
      case 'text':
      case 'multiText': {
        this.setData({
          show: true,
          currentKey: key,
          dialogConfig: modelConfigFactory({
            title: key === 'text' ? title : maxTitle,
            confirmBtn: '知道了',
          }),
        });
        return;
      }
      // 标题&副标题弹窗
      case 'textAndTitle':
      case 'multiTextAndTitle': {
        this.setData({
          show: true,
          currentKey: key,
          dialogConfig: modelConfigFactory({
            title: key === 'textAndTitle' ? title : '对话框带文本最大高度',
            content: key === 'textAndTitle' ? message : '',
            confirmBtn: '我知道了',
          }),
        });
        return;
      }
      // 确认弹窗-普通
      case 'confirm': {
        this.setData({
          show: true,
          currentKey: key,
          dialogConfig: modelConfigFactory({
            title,
            content: message,
            confirmBtn: '按钮最多字数',
            cancelBtn: '取消',
          }),
        });
        return;
      }
      // 确认弹窗-警示操作
      case 'warnConfirm': {
        this.setData({
          show: true,
          currentKey: key,
          dialogConfig: modelConfigFactory({
            title,
            tConfirmBtn: 'custom-confirm-btn',
            confirmBtn: '警示操作',
            cancelBtn: '取消',
          }),
        });
        return;
      }
      // 按钮文字过长弹层
      case 'tooLongBtnContent': {
        this.setData({
          show: true,
          currentKey: key,
          dialogConfig: modelConfigFactory({
            title,
            content: message,
            confirmBtn: '按钮文案文字内容较长',
            cancelBtn: '取消',
            buttonLayout: 'vertical',
          }),
        });
        return;
      }
      // 多按钮弹层
      case 'multiBtn': {
        this.setData({
          show: true,
          currentKey: key,
          dialogConfig: modelConfigFactory({
            title,
            content: message,
            buttonLayout: 'vertical', // 'horizontal' | 'vertical'
            actions: [
              { name: '取消', primary: false },
              { name: '单行按钮最多十五个字符文案内容', primary: true },
              { name: '按钮文案文字内容较长', primary: true, style: 'color:red;' },
            ], // {name: string, primary?: string}
          }),
        });
        return;
      }
      // 带输入弹窗
      case 'withInput':
      case 'textAndTitleWithInput': {
        this.setData({
          show: true,
          useSlot: true,
          currentKey: key,
          dialogConfig: modelConfigFactory({
            title: '带输入框对话框',
            content: key === 'withInput' ? '' : message,
            confirmBtn: '确认',
            cancelBtn: '取消',
          }),
        });
        return;
      }
      case 'commandWithCancel': {
        Dialog.confirm({
          title: '弹窗标题',
          content: '告知当前状态、信息和解决方法等内容。',
          confirmBtn: '确认按钮',
          cancelBtn: '取消按钮',
        });
        return;
      }
      case 'command': {
        Dialog.confirm({
          title: '弹窗标题',
          content: '告知当前状态、信息和解决方法等内容。',
          confirmBtn: '确认按钮',
        });
        return;
      }
      default: {
        Dialog.alert({
          title: `未知key: ${key}`,
          content: '',
        });
        break;
      }
    }
  },

  /** 异步关闭弹层 */
  closeHandle() {
    this.confirmHandle();
  },

  /** 普通弹层关闭 */
  confirmHandle() {
    this.setData({
      show: false,
      useSlot: false,
    });
  },
});
