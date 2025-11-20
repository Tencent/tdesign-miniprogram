/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdOverlayProps as OverlayProps } from '../overlay/type';

export interface TdDrawerProps {
  /**
   * 点击蒙层时是否触发抽屉关闭事件
   * @default true
   */
  closeOnOverlayClick?: boolean;
  /**
   * 抽屉关闭时是否销毁节点
   * @default false
   */
  destroyOnClose?: boolean;
  /**
   * 抽屉里的列表项
   */
  items?: DrawerItem[];
  /**
   * 遮罩层的属性，透传至 overlay
   * @default {}
   */
  overlayProps?: OverlayProps;
  /**
   * 抽屉方向
   * @default right
   */
  placement?: 'left' | 'right';
  /**
   * 是否显示遮罩层
   * @default true
   */
  showOverlay?: boolean;
  /**
   * 抽屉的标题
   */
  title?: string;
  /**
   * 是否使用了自定义导航栏
   * @default false
   */
  usingCustomNavbar?: boolean;
  /**
   * 组件是否可见。支持语法糖 `v-model:visible`
   * @default false
   */
  visible?: boolean;
  /**
   * 抽屉层级，样式默认为 11500
   * @default 11500
   */
  zIndex?: number;
  /**
   * 关闭时触发。
   */
  onClose?: (context: { trigger: DrawerTriggerSource }) => void;
  /**
   * 点击抽屉里的列表项
   */
  onItemClick?: (context: { index: number; item: DrawerItem }) => void;
  /**
   * 如果蒙层存在，点击蒙层时触发
   */
  onOverlayClick?: () => void;
  /**
   * 更新可见性
   */
  onUpdateVisible?: (context: { visible: boolean }) => void;
}

export interface DrawerItem {
  title: string;
  icon: string;
}

export type DrawerTriggerSource = 'overlay';
