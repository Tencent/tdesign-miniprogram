export type Classes = Array<string>;

export interface Styles {
  [css: string]: string | number;
}

export type ImageEvent = any;

export type PlainObject = { [key: string]: any };

export type OptionData = {
  label?: string;
  value?: string | number;
} & PlainObject;

export type TreeOptionData<T = string | number> = {
  children?: Array<TreeOptionData<T>> | boolean;
  /** option label content */
  label?: string;
  /** option search text */
  text?: string;
  /** option value */
  value?: T;
  /** option node content */
  content?: string;
} & PlainObject;

export type FormResetEvent = Event;

export type FormSubmitEvent = Event;

/**
 * 移除 on 前缀并可选地去掉可选修饰符
 * @param T - 原始类型
 * @param MakeRequired - 是否将属性变为必需（默认 false）
 */
export type TransformEventHandlers<
  T,
  MakeRequired extends boolean = false
> = MakeRequired extends true
  ? {
    [K in keyof T as K extends `on${infer Event}`
      ? Uncapitalize<Event>
      : never
    ]-?: T[K]
  }
  : {
    [K in keyof T as K extends `on${infer Event}`
      ? Uncapitalize<Event>
      : never
    ]: T[K]
  };


type WrapWithContext<T extends (...args: any[]) => any> =
  T extends (...args: infer P) => infer R
    ? (context: { [K in keyof P]: P[K] }) => R
    : never;


export type WrapParamsWithContext<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any
    ? WrapWithContext<T[K]>
    : T[K];
};


// 提取非 on 开头的属性
export type ExtractNonOnProps<T> = {
  [K in keyof T as K extends `on${string}` ? never : K]: T[K]
};

export interface IsEmailOptions {
  allow_display_name?: boolean;
  require_display_name?: boolean;
  allow_utf8_local_part?: boolean;
  require_tld?: boolean;
  allow_ip_dot?: boolean;
  domain_specific_validation?: boolean;
  host_blacklist?: string[];
  ignore_max_length?: boolean;
}

export interface IsURLOptions {
  protocols?: string[];
  require_tld?: boolean;
  require_protocol?: boolean;
  require_host?: boolean;
  require_port?: boolean;
  require_valid_protocol?: boolean;
  allow_underscores?: boolean;
  host_whitelist?: (string | RegExp)[];
  host_blacklist?: (string | RegExp)[];
  allow_trailing_dot?: boolean;
  allow_protocol_relative_urls?: boolean;
  disallow_auth?: boolean;
  validate_length?: boolean;
}
/**
 * 通用全局类型
 * */
export type SizeEnum = 'small' | 'medium' | 'large';

export type ShapeEnum = 'circle' | 'round';

export type HorizontalAlignEnum = 'left' | 'center' | 'right';

export type VerticalAlignEnum = 'top' | 'middle' | 'bottom';

export type LayoutEnum = 'vertical' | 'horizontal';

export type ClassName = { [className: string]: any } | ClassName[] | string;

export type CSSSelector = string;

export interface KeysType {
  value?: string;
  label?: string;
  disabled?: string;
}

export interface TreeKeysType extends KeysType {
  children?: string;
}

export interface HTMLElementAttributes {
  [attribute: string]: string;
}

export interface TScroll {
  /**
   * 表示除可视区域外，额外渲染的行数，避免快速滚动过程中，新出现的内容来不及渲染从而出现空白
   * @default 20
   */
  bufferSize?: number;
  /**
   * 表示每行内容是否同一个固定高度，仅在 `scroll.type` 为 `virtual` 时有效，该属性设置为 `true` 时，可用于简化虚拟滚动内部计算逻辑，提升性能，此时则需要明确指定 `scroll.rowHeight` 属性的值
   * @default false
   */
  isFixedRowHeight?: boolean;
  /**
   * 行高，不会给元素添加样式高度，仅作为滚动时的行高参考。一般情况不需要设置该属性。如果设置，可尽量将该属性设置为每行平均高度，从而使得滚动过程更加平滑
   */
  rowHeight?: number;
  /**
   * 启动虚拟滚动的阈值。为保证组件收益最大化，当数据量小于阈值 `scroll.threshold` 时，无论虚拟滚动的配置是否存在，组件内部都不会开启虚拟滚动
   * @default 100
   */
  threshold?: number;
  /**
   * 滚动加载类型，有两种：懒加载和虚拟滚动。<br />值为 `lazy` ，表示滚动时会进行懒加载，非可视区域内的内容将不会默认渲染，直到该内容可见时，才会进行渲染，并且已渲染的内容滚动到不可见时，不会被销毁；<br />值为`virtual`时，表示会进行虚拟滚动，无论滚动条滚动到哪个位置，同一时刻，仅渲染该可视区域内的内容，当需要展示的数据量较大时，建议开启该特性
   */
  type: 'lazy' | 'virtual';
}

/**
 * @deprecated use TScroll instead
 */
export type InfinityScroll = TScroll;

export interface ScrollToElementParams {
  /** 跳转元素下标 */
  index?: number;
  /** 跳转元素距离顶部的距离 */
  top?: number;
  /** 单个元素高度非固定场景下，即 isFixedRowHeight = false。延迟设置元素位置，一般用于依赖不同高度异步渲染等场景，单位：毫秒 */
  time?: number;
  behavior?: 'auto' | 'smooth';
}

export interface ComponentScrollToElementParams extends ScrollToElementParams {
  key?: string | number;
}
