/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdImageViewerProps {
  /**
   * 遮罩的背景颜色
   * @default ''
   */
  backgroundColor?: string;
  /**
   * 是否显示关闭操作，前提需要开启页码。值为字符串表示图标名称，值为 `true` 表示使用默认图标 `close`，值为 `Object` 类型，表示透传至 `icon` ，不传表示不显示图标
   * @default false
   */
  closeBtn?: string | boolean | object;
  /**
   * 是否显示删除操作，前提需要开启页码。值为字符串表示图标名称，值为 `true` 表示使用默认图标 `delete`，值为 `Object` 类型，表示透传至 `icon`，不传表示不显示图标
   * @default false
   */
  deleteBtn?: string | boolean | object;
  /**
   * 图片数组
   * @default []
   */
  images?: Array<string>;
  /**
   * 初始化页码
   * @default 0
   */
  initialIndex?: Number;
  /**
   * 是否开启图片懒加载。开启后会预加载当前图片、相邻图片
   * @default true
   */
  lazy?: boolean;
  /**
   * 是否显示页码
   * @default false
   */
  showIndex?: boolean;
  /**
   * 是否使用了自定义导航栏
   * @default false
   */
  usingCustomNavbar?: boolean;
  /**
   * 隐藏/显示预览
   * @default false
   */
  visible?: boolean;
  /**
   * 隐藏/显示预览，非受控属性
   * @default false
   */
  defaultVisible?: boolean;
  /**
   * 翻页时回调
   */
  onChange?: (context: { index: number }) => void;
  /**
   * 点击操作按钮button或者overlay时触发
   */
  onClose?: (context: { trigger: 'overlay' | 'button'; visible: Boolean; index: Number }) => void;
  /**
   * 点击删除操作按钮时触发
   */
  onDelete?: (context: { index: number }) => void;
}
