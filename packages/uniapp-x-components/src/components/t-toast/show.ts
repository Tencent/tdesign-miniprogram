/**
 * Toast 全局指令式 API
 * -------------------------------------------------------
 * 行为契约对齐 @tdesign/uniapp/toast/index.js：
 *  - 默认导出 Toast(options) 可直接调用
 *  - showToast(opts)  / hideToast()  通过查找当前页面预埋的 <t-toast ref="toast" /> 实例调用
 *  - 用户必须先在 page template 中放入 <t-toast ref="toast" />，否则 console.warn
 *  - duration 默认值 2000（与 uniapp 版本一致）
 *
 * uniapp x 下 ref 查找路径：
 *   getCurrentPages() → 拿到当前 page 实例 → page.$vm.$refs.toast → 调 show/hide
 */

import type { ToastOptions } from './t-toast.types';

const DEFAULT_REF_NAME = 'toast';
const DEFAULT_DURATION = 2000;

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
 * 显示一条 toast（默认导出，支持 Toast(options) 风格调用）
 * @example Toast({ message: '操作成功', theme: 'success' });
 */
export default function Toast(options: ToastOptions): void {
  const opts = { ...options };
  // 对齐 uniapp 版本：duration 默认 2000
  if (opts.duration == null) {
    opts.duration = DEFAULT_DURATION;
  }
  const inst = getToastInstance(DEFAULT_REF_NAME);
  if (inst != null) {
    inst.show(opts);
  }
}

/**
 * 显示一条 toast
 * @example showToast({ message: '操作成功', theme: 'success', duration: 2000 });
 */
export function showToast(options: ToastOptions): void {
  Toast(options);
}

/**
 * 立即隐藏 toast
 */
export function hideToast(): void {
  const inst = getToastInstance(DEFAULT_REF_NAME);
  if (inst != null) {
    inst.hide();
  }
}

/** 对象风格导出，方便 `import { Toast } from ...; Toast.show({})` 调用 */
export const ToastObj = {
  show: showToast,
  hide: hideToast,
};
