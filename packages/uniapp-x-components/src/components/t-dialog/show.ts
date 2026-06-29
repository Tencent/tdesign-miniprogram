/**
 * Dialog 全局指令式 API
 * -------------------------------------------------------
 * 行为契约对齐 @tdesign/uniapp 的 dialog/index.js（DialogPlugin）：
 *   Dialog.show({...})        通用显示
 *   Dialog.alert({...})       仅确认按钮 → Promise<void>
 *   Dialog.confirm({...})     取消 + 确认 → Promise<string>（resolve 'confirm' / reject 'cancel'）
 *   Dialog.action({...})      多按钮 → Promise<{ index }>
 *   Dialog.close()            关闭
 *
 * 使用前提：当前 page template 中预埋 <t-dialog ref="dialog" />
 *
 * 命名兼容：同时导出 `DialogPlugin` 别名，便于 uniapp 端代码 1:1 迁移：
 *   import { DialogPlugin } from '@/uni_modules/tdesign-uniapp-x/components/t-dialog'
 *   DialogPlugin.confirm({...}).then(...)
 */

import type { DialogOptions, DialogActionContext } from './t-dialog.types';

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
    console.warn(`[t-dialog] 未找到 ref="${refName}" 的 <t-dialog />，请先在页面 template 中预埋。`);
    return null;
  }
  return inst;
}

function showDialog(options: DialogOptions): void {
  const inst = getDialogInstance(DEFAULT_REF_NAME);
  if (inst != null) {
    inst.show(options);
  }
}

function alertDialog(options: DialogOptions): Promise<void> {
  return new Promise<void>((resolve) => {
    const inst = getDialogInstance(DEFAULT_REF_NAME);
    if (inst == null) {
      resolve();
      return;
    }
    const merged: DialogOptions = {
      title: options.title ?? '',
      content: options.content ?? '',
      confirmBtn: options.confirmBtn ?? '确定',
      cancelBtn: '',
      buttonLayout: options.buttonLayout ?? 'horizontal',
      closeBtn: options.closeBtn ?? false,
      closeOnOverlayClick: options.closeOnOverlayClick ?? false,
      showOverlay: options.showOverlay ?? true,
      preventScrollThrough: options.preventScrollThrough ?? true,
      zIndex: options.zIndex ?? 11500,
      onConfirm: () => {
        resolve();
      },
    };
    inst.show(merged);
  });
}

function confirmDialog(options: DialogOptions): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    const inst = getDialogInstance(DEFAULT_REF_NAME);
    if (inst == null) {
      reject('cancel');
      return;
    }
    const merged: DialogOptions = {
      title: options.title ?? '',
      content: options.content ?? '',
      cancelBtn: options.cancelBtn ?? '取消',
      confirmBtn: options.confirmBtn ?? '确定',
      buttonLayout: options.buttonLayout ?? 'horizontal',
      closeBtn: options.closeBtn ?? false,
      closeOnOverlayClick: options.closeOnOverlayClick ?? false,
      showOverlay: options.showOverlay ?? true,
      preventScrollThrough: options.preventScrollThrough ?? true,
      zIndex: options.zIndex ?? 11500,
      onConfirm: () => {
        resolve('confirm');
      },
      onCancel: () => {
        reject('cancel');
      },
    };
    inst.show(merged);
  });
}

function actionDialog(options: DialogOptions): Promise<DialogActionContext> {
  return new Promise<DialogActionContext>((resolve) => {
    const inst = getDialogInstance(DEFAULT_REF_NAME);
    if (inst == null) {
      resolve({ index: -1 } as DialogActionContext);
      return;
    }
    const layout = options.buttonLayout ?? 'vertical';
    const merged: DialogOptions = {
      title: options.title ?? '',
      content: options.content ?? '',
      actions: options.actions ?? null,
      buttonLayout: layout,
      cancelBtn: '',
      confirmBtn: '',
      closeBtn: options.closeBtn ?? false,
      closeOnOverlayClick: options.closeOnOverlayClick ?? false,
      showOverlay: options.showOverlay ?? true,
      preventScrollThrough: options.preventScrollThrough ?? true,
      zIndex: options.zIndex ?? 11500,
      onAction: (index: number) => {
        resolve({ index } as DialogActionContext);
      },
    };
    inst.show(merged);
  });
}

function closeDialog(): void {
  const inst = getDialogInstance(DEFAULT_REF_NAME);
  if (inst != null) {
    inst.hide();
  }
}

export const Dialog = {
  show(options: DialogOptions): void {
    showDialog(options);
  },
  alert(options: DialogOptions): Promise<void> {
    return alertDialog(options);
  },
  confirm(options: DialogOptions): Promise<string> {
    return confirmDialog(options);
  },
  action(options: DialogOptions): Promise<DialogActionContext> {
    return actionDialog(options);
  },
  close(): void {
    closeDialog();
  },
};

/** 别名，与 uniapp 端 `import { DialogPlugin } from '@tdesign/uniapp'` 命名一致 */
export const DialogPlugin = Dialog;
