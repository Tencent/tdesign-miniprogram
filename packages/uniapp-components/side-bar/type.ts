/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdSideBarProps {
  /**
   * 选项值
   */
  value?: string | number;
  /**
   * 选项值，非受控属性
   */
  defaultValue?: string | number;
  /**
   * 选项值发生变化时触发
   */
  onChange?: (context: { value: number | string; label: string }) => void;
  /**
   * 点击选项时触发
   */
  onClick?: (context: { value: number | string; label: string }) => void;
}
