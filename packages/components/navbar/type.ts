/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdNavbarProps {
  /**
   * 是否添加动画效果
   * @default true
   */
  animation?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 后退按钮后退层数，含义参考 [wx.navigateBack](https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateBack.html)，特殊的，传入 0 不会发生执行 wx.navigateBack
   * @default 1
   */
  delta?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 是否固定在顶部
   * @default true
   */
  fixed?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 是否展示左侧箭头
   * @default false
   */
  leftArrow?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 页面标题
   */
  title?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 标题文字最大长度，超出的范围使用 `...` 表示
   */
  titleMaxLength?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 是否显示
   * @default true
   */
  visible?: {
    type: BooleanConstructor;
    value?: boolean;
  };
}
