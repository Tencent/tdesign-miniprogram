/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdImageViewerProps {
  /**
   * 遮罩的背景颜色
   * @default 'rgba(0, 0, 0, 1)'
   */
  backgroundColor?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 是否显示关闭操作，前提需要开启页码。值为字符串表示图标名称，值为 `true` 表示使用默认图标 `close`，值为 `Object` 类型，表示透传至 `icon` ，不传表示不显示图标
   * @default false
   */
  closeBtn?: {
    type: null;
    value?: string | boolean | object;
  };
  /**
   * 是否显示删除操作，前提需要开启页码。值为字符串表示图标名称，值为 `true` 表示使用默认图标 `delete`，值为 `Object` 类型，表示透传至 `icon`，不传表示不显示图标
   * @default false
   */
  deleteBtn?: {
    type: null;
    value?: string | boolean | object;
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
   * 初始化页码
   * @default 0
   */
  initialIndex?: {
    type: NumberConstructor;
    value?: Number;
  };
  /**
   * 是否显示页码
   * @default false
   */
  showIndex?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 是否使用了自定义导航栏
   * @default false
   */
  usingCustomNavbar?: {
    type: BooleanConstructor;
    value?: boolean;
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
