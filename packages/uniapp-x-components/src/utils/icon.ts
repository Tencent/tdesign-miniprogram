/**
 * 图标对象配置（与 t-icon 组件 props 对齐）
 *
 * 用于 tab-bar-item / side-bar-item / tab-panel / drawer-item 等组件
 * 接受字符串图标名 + 可选的尺寸 / 颜色 / 自定义前缀；归一化后业务可统一以
 * 对象形式访问，避免 uts 严格模式下 `string | Object` 联合类型在模板中
 * 无法直接取属性的问题。
 */
export interface IconConfig {
  /** 图标名称，与 t-icon 的 name 一致；为空表示不渲染图标 */
  name: string;
  /** 字体大小，支持 number / string；为空表示由父样式决定 */
  size: string | number;
  /** 颜色；为空表示由父样式决定 */
  color: string;
  /** 自定义图标前缀（替代默认 t-icon-） */
  prefix: string;
}

/** 默认空 IconConfig */
export const EMPTY_ICON: IconConfig = {
  name: '',
  size: '',
  color: '',
  prefix: '',
};

/**
 * 把传入的 string | IconConfig | null 归一化成 IconConfig
 * - 字符串：作为 name，其它字段为空
 * - 对象：缺省字段补空字符串
 * - 其它：返回 EMPTY_ICON
 */
export function normalizeIcon(icon: any | null): IconConfig {
  if (icon == null) return { ...EMPTY_ICON };
  if (typeof icon === 'string') {
    return {
      name: icon,
      size: '',
      color: '',
      prefix: '',
    };
  }
  if (typeof icon === 'object') {
    const obj = icon as Record<string, any>;
    const nameRaw = obj['name'];
    const sizeRaw = obj['size'];
    const colorRaw = obj['color'];
    const prefixRaw = obj['prefix'];
    return {
      name: typeof nameRaw === 'string' ? nameRaw : '',
      size:
        typeof sizeRaw === 'string' || typeof sizeRaw === 'number' ? sizeRaw : '',
      color: typeof colorRaw === 'string' ? colorRaw : '',
      prefix: typeof prefixRaw === 'string' ? prefixRaw : '',
    };
  }
  return { ...EMPTY_ICON };
}
