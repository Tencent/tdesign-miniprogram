export interface ComponentsOptionsType extends WechatMiniprogram.Component.ComponentOptions {
  styleIsolation?:
  | 'isolated'
  | 'apply-shared'
  | 'shared'
  | 'page-isolated'
  | 'page-apply-shared'
  | 'page-shared';
}

export interface RelationsOptions {
  [componentName: string]: WechatMiniprogram.Component.RelationOption;
}

export interface SuperComponent<D = {}, P = {}, M = {}>
  extends WechatMiniprogram.Component.Lifetimes,
  WechatMiniprogram.Component.OtherOption,
  WechatMiniprogram.Component.InstanceMethods<D> {
  properties: P;
  // 模拟 properties 被代理到 data 上的声明
  data: D;
  options: ComponentsOptionsType;
  methods: M | Record<string, (...args: any[]) => any>;
  $global: Function;
  [x: string]: any;
}

export class SuperComponent<D = {}, P = {}, M = {}> {
  readonly app: any;

  constructor() {
    this.app = getApp();
  }
}
