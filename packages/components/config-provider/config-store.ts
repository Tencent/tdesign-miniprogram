/**
 * 全局配置 Store
 * 提供响应式的语言包状态管理
 */

import ReactiveState from './reactive-state';

export type Locale = Record<string, any>;

/**
 * 全局配置 Store 单例
 */
class ConfigStore {
  // 当前语言包
  currentLocale = new ReactiveState<Locale>({});

  // 主题变量
  themeVars = new ReactiveState<Record<string, string>>({});

  // 使用 Map 存储页面级别状态标记
  private _pageInitFlags = new Map<string, { theme: boolean; locale: boolean }>();

  // 存储组件销毁时的清理函数
  private _cleanupCallbacks = new Map<string, () => void>();

  /**
   * 深度比较两个对象是否相等
   */
  private _deepEqual(a: any, b: any): boolean {
    // 快速引用比较
    if (a === b) return true;

    // 类型检查
    if (typeof a !== typeof b) return false;

    // null/undefined 检查
    if (a == null || b == null) return a === b;

    // 基本类型比较
    if (typeof a !== 'object') return false;

    // 快速属性数量检查
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;

    // 对象比较：先尝试 JSON 快速比较（仅在属性数量相同时）
    try {
      const jsonA = JSON.stringify(a);
      const jsonB = JSON.stringify(b);
      if (jsonA === jsonB) return true;
    } catch (e) {
      // 序列化失败（如循环引用），回退到深度遍历
    }

    // 深度遍历比较
    return keysA.every((key) => this._deepEqual(a[key], b[key]));
  }

  /**
   * 切换语言包
   * @param locale 语言包
   * @param componentId 组件唯一标识符
   */
  switchLocale(locale: Locale, componentId?: string): void {
    if (!componentId) return;

    const pageInitFlag = this._getOrInitPageFlag(componentId);

    // 首次设置时标记为已初始化
    if (!pageInitFlag.locale) {
      pageInitFlag.locale = true;
      this.currentLocale.value = locale;
    } else {
      // 已初始化后，允许动态切换语言（检查内容是否真的变化）
      // 先进行快速非空检查，避免空对象比较
      const isEmptyLocale = !locale || Object.keys(locale).length === 0;
      const isCurrentEmpty = Object.keys(this.currentLocale.value).length === 0;

      // 如果一个是空的另一个不是，或者深度比较不相等，则更新
      if (isEmptyLocale !== isCurrentEmpty || !this._deepEqual(locale, this.currentLocale.value)) {
        this.currentLocale.value = locale;
      }
    }
  }

  /**
   * 更新主题变量
   * @param vars 主题变量对象
   */
  updateThemeVars(vars: Record<string, string>): void {
    this.themeVars.value = { ...this.themeVars.value, ...vars };
  }

  /**
   * 获取或初始化页面级别状态标记
   * @param componentId 组件唯一标识符
   */
  private _getOrInitPageFlag(componentId: string): { theme: boolean; locale: boolean } {
    if (!this._pageInitFlags.has(componentId)) {
      this._pageInitFlags.set(componentId, { theme: false, locale: false });
    }

    return this._pageInitFlags.get(componentId)!;
  }

  /**
   * 注册组件销毁时的清理回调
   * @param componentId 组件唯一标识符
   * @param cleanup 清理函数
   */
  registerCleanup(componentId: string, cleanup: () => void): void {
    this._cleanupCallbacks.set(componentId, cleanup);
  }

  /**
   * 重置页面状态
   * @param componentId 组件唯一标识符
   */
  resetPageState(componentId?: string): void {
    if (componentId) {
      this._pageInitFlags.delete(componentId);

      // 执行清理回调
      const cleanup = this._cleanupCallbacks.get(componentId);
      if (cleanup) {
        try {
          cleanup();
        } catch (e) {
          console.error(`[ConfigStore] Error during cleanup for ${componentId}:`, e);
        }
        this._cleanupCallbacks.delete(componentId);
      }
    }
  }
}

// 导出单例
export const configStore = new ConfigStore();
