/**
 * Toast 全局指令式 API
 * -------------------------------------------------------
 * 行为契约对齐 @tdesign/uniapp/toast/index.js：
 *  - showToast(opts)  / hideToast()  通过查找当前页面预埋的 <t-toast ref="toast" /> 实例调用
 *  - 用户必须先在 page template 中放入 <t-toast ref="toast" />，否则 console.warn
 *
 * uniapp x 下 ref 查找路径：
 *   getCurrentPages() → 拿到当前 page 实例 → page.$vm.$refs.toast → 调 show/hide
 */

import type { ToastOptions } from './t-toast.types';

const DEFAULT_REF_NAME = 'toast';

/**
 * 通过 getCurrentPages 拿到当前页面预埋的 t-toast 实例
 * @param refName 用户在 template 中的 ref 名（默认 'toast'）
 */
function getToastInstance(refName: string): any | null {
  const pages = getCurrentPages();
  if (pages.length === 0) return null;
  const page = pages[pages.length - 1] as any;
  // uvue 中 page.$vm.$refs[refName] 即用户 template 的 ref 实例
  const vm = page.$vm;
  if (vm == null) return null;
  const refs = vm.$refs as any;
  if (refs == null) return null;
  const inst = refs[refName];
  if (inst == null) {
    console.warn('[t-toast] 未找到 ref="' + refName + '" 的 <t-toast />，请先在页面 template 中预埋。');
    return null;
  }
  return inst;
}

/**
 * 显示一条 toast
 * @example showToast({ message: '操作成功', theme: 'success', duration: 2000 });
 */
export function showToast(options: ToastOptions): void {
  const refName = DEFAULT_REF_NAME;
  const inst = getToastInstance(refName);
  if (inst != null) {
    inst.show(options);
  }
}

/**
 * 立即隐藏 toast
 */
export function hideToast(): void {
  const refName = DEFAULT_REF_NAME;
  const inst = getToastInstance(refName);
  if (inst != null) {
    inst.hide();
  }
}

/** 默认导出对象，方便 `import Toast from ...; Toast.show({})` 风格调用 */
export const Toast = {
  show: showToast,
  hide: hideToast,
};
