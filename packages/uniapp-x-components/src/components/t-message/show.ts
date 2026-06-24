/**
 * Message 全局指令式 API
 * -------------------------------------------------------
 * 行为契约对齐 @tdesign/uniapp/message/index.js：
 *   Message.info({...}) / .success / .warning / .error / .hide()
 *   MessagePlugin.info({...}) / .success / .warning / .error / .hide()
 *
 * 使用前提：当前 page template 中预埋 <t-message ref="message" />
 */

import type { MessageOptions, MessageTheme } from './t-message.types';

const DEFAULT_REF_NAME = 'message';

/** 通过 getCurrentPages 拿到当前页面预埋的 t-message 实例 */
function getMessageInstance(refName: string): any | null {
  const pages = getCurrentPages();
  if (pages.length === 0) return null;
  const page = pages[pages.length - 1] as any;
  const vm = page.$vm;
  if (vm == null) return null;
  const refs = vm.$refs as any;
  if (refs == null) return null;
  const inst = refs[refName];
  if (inst == null) {
    console.warn(`[t-message] 未找到 ref="${refName}" 的 <t-message />，请先在页面 template 中预埋。`);
    return null;
  }
  return inst;
}

/** 内部统一入口 */
function showMessage(options: MessageOptions, theme: MessageTheme): void {
  const inst = getMessageInstance(DEFAULT_REF_NAME);
  if (inst != null) {
    inst.setMessage(options, theme);
  }
}

/** Message 全局 API：4 主题快捷方法 + hide */
const Message = {
  info(options: MessageOptions): void {
    showMessage(options, 'info');
  },
  success(options: MessageOptions): void {
    showMessage(options, 'success');
  },
  warning(options: MessageOptions): void {
    showMessage(options, 'warning');
  },
  error(options: MessageOptions): void {
    showMessage(options, 'error');
  },
  hide(): void {
    const inst = getMessageInstance(DEFAULT_REF_NAME);
    if (inst != null) {
      inst.hide();
    }
  },
};

/** MessagePlugin 导出别名，对齐 @tdesign/uniapp 的 API */
const MessagePlugin = Message;

export { Message, MessagePlugin };
