/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdDrawerProps {
  /**
   * 组件是否可见
   * @default false
   */
  visible?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 菜单列表
   * @default []
   */
  sidebar?: {
    type: ArrayConstructor;
    value?: SidebarItem[];
  };
}

export interface SidebarItem {
  /* 菜单名称 */
  name: string;
  /* 跳转路径 */
  path: string;
  /* 图标: 值为字符串,表示图标名称 */
  icon: string;
}
