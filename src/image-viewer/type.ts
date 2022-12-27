/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdImageViewerProps {
  /**
   * 自定义组件样式
   * @default ''
   */
  customStyle?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 遮罩的背景颜色
   * @default rgba(0, 0, 0, .6)
   */
  backgroundColor?: {
    type: StringConstructor;
    optionalTypes: Array<NumberConstructor>;
    value?: string | number;
  };
  /**
   * 图片数组
   * @default []
   */
  images?: {
    type: ArrayConstructor;
    value?: Array<string>;
  };
  /**
   * 默认展示第几项
   * @default 0
   */
  initialIndex?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 是否显示页码
   * @default false
   */
  showIndex?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /** 是否显示删除操作 */
  deleteBtn?: {
    type: null;
    value?: boolean | string | object;
  };
  /** 是否显示关闭操作 */
  closeBtn?: {
    type: null;
    value?: boolean | string | object;
  };
  /**
   * 隐藏/显示预览
   * @default false
   */
  visible?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 隐藏/显示预览，非受控属性
   * @default false
   */
  defaultVisible?: {
    type: BooleanConstructor;
    value?: boolean;
  };
}
