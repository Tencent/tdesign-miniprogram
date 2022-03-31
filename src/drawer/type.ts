/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdDrawerProps {
  /**
   * 点击蒙层时是否触发抽屉关闭事件
   * @default true
   */
  closeOnOverlayClick?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 抽屉关闭时是否销毁节点
   * @default false
   */
  destroyOnClose?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 抽屉里的列表项
   */
  items?: {
    type: ArrayConstructor;
    value?: DrawerItem[];
  };
  /**
   * 抽屉方向
   * @default right
   */
  placement?: {
    type: StringConstructor;
    value?: 'left' | 'right' | 'top' | 'bottom';
  };
  /**
   * 是否显示遮罩层
   * @default true
   */
  showOverlay?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 组件是否可见
   * @default false
   */
  visible?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 抽屉层级，样式默认为 1500
   */
  zIndex?: {
    type: NumberConstructor;
    value?: number;
  };
}

export interface DrawerItem {
  title: string;
  icon: string;
}
