/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-09-07 10:22:33
 * */

import { TdNavbarProps } from './type';
const props: TdNavbarProps = {
  /** 是否添加动画效果 */
  animation: {
    type: Boolean,
    value: true,
  },
  /** 背景 */
  background: {
    type: String,
    value: '',
  },
  /** 导航中间页面 */
  content: {
    type: String,
  },
  /** 后退按钮后退层数 含义参考 wx.navigateBack，特殊的，传入 0 不会发生执行 wx.navigateBack，只会触发一个 goback 事件供自行处理 */
  delta: {
    type: Number,
  },
  /** 组件类名，分别用于设置组件外层元素、标题、左侧图标、首页图标、右侧图标、胶囊等元素类名 */
  externalClasses: {
    type: String,
    value: '',
  },
  /** 是否固定在顶部 */
  fixed: {
    type: Boolean,
    value: true,
  },
  /** 首页图标地址。值为 '' 或者 undefiend 则表示不显示返回图标，值为 'circle' 表示显示默认图标，值为 'slot' 表示使用插槽渲染，值为其他则表示图标地址 */
  homeIcon: {
    type: String,
  },
  /** 左侧图标地址，值为 '' 或者 undefiend 则表示不显示返回图标，值为 'arrow-left' 表示显示返回图标，值为 'slot' 表示使用插槽渲染，值为其他则表示图标地址 */
  leftIcon: {
    type: String,
  },
  /** 页面标题 */
  title: {
    type: String,
  },
  /** 标题文字最大长度，超出的范围使用 `...` 表示 */
  titleMaxLength: {
    type: Number,
  },
  /** 是否显示 */
  visible: {
    type: Boolean,
    value: true,
  },
};

export default props;
