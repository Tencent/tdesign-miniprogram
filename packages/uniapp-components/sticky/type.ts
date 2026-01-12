/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdStickyProps {
  /**
   * 函数返回容器对应的 NodesRef 节点，将对应节点指定为组件的外部容器，滚动时组件会始终保持在容器范围内，当组件即将超出容器底部时，会返回原位置
   */
  container?: Function;
  /**
   * 是否禁用组件
   * @default false
   */
  disabled?: boolean;
  /**
   * 吸顶时与顶部的距离，单位`px`
   * @default 0
   */
  offsetTop?: string | number;
  /**
   * 吸顶时的 z-index
   * @default 99
   */
  zIndex?: number;
  /**
   * 滚动时触发，scrollTop: 距离顶部位置，isFixed: 是否吸顶
   */
  onScroll?: (context: { scrollTop: number; isFixed: boolean }) => void;
}
