/**
 * Dialog 全局指令式 API
 * -------------------------------------------------------
 * 行为契约对齐 @tdesign/uniapp 的 dialog 用法：
 *   Dialog.show({...})       通用显示
 *   Dialog.alert({...})      只有确认按钮
 *   Dialog.confirm({...})    取消 + 确认按钮
 *   Dialog.close()           关闭
 *
 * 使用前提：当前 page template 中预埋 <t-dialog ref="dialog" />
 */

import type { DialogOptions } from './t-dialog.types';

const DEFAULT_REF_NAME = 'dialog';

function getDialogInstance(refName: string): any | null {
  const pages = getCurrentPages();
  if (pages.length === 0) return null;
  const page = pages[pages.length - 1] as any;
  const vm = page.$vm;
  if (vm == null) return null;
  const refs = vm.$refs as any;
  if (refs == null) return null;
  const inst = refs[refName];
  if (inst == null) {
    console.warn('[t-dialog] 未找到 ref="' + refName + '" 的 <t-dialog />，请先在页面 template 中预埋。');
    return null;
  }
  return inst;
}

/** 通用 show */
function showDialog(options: DialogOptions): void {
  const inst = getDialogInstance(DEFAULT_REF_NAME);
  if (inst != null) {
    inst.show(options);
  }
}

export const Dialog = {
  /** 通用显示 */
  show(options: DialogOptions): void {
    showDialog(options);
  },
  /** alert：仅确认按钮 */
  alert(options: DialogOptions): void {
    const merged: DialogOptions = {
      title: options.title ?? '',
      content: options.content ?? '',
      confirmBtn: options.confirmBtn ?? '确定',
      cancelBtn: '', // 强制隐藏取消
      buttonLayout: options.buttonLayout ?? 'horizontal',
      closeBtn: options.closeBtn ?? false,
      closeOnOverlayClick: options.closeOnOverlayClick ?? false,
      showOverlay: options.showOverlay ?? true,
      zIndex: options.zIndex ?? 11500,
    };
    showDialog(merged);
  },
  /** confirm：取消 + 确认两个按钮 */
  confirm(options: DialogOptions): void {
    const merged: DialogOptions = {
      title: options.title ?? '',
      content: options.content ?? '',
      cancelBtn: options.cancelBtn ?? '取消',
      confirmBtn: options.confirmBtn ?? '确定',
      buttonLayout: options.buttonLayout ?? 'horizontal',
      closeBtn: options.closeBtn ?? false,
      closeOnOverlayClick: options.closeOnOverlayClick ?? false,
      showOverlay: options.showOverlay ?? true,
      zIndex: options.zIndex ?? 11500,
    };
    showDialog(merged);
  },
  /** 关闭 */
  close(): void {
    const inst = getDialogInstance(DEFAULT_REF_NAME);
    if (inst != null) {
      inst.hide();
    }
  },
};
