/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdLinkProps } from './type';
const props: TdLinkProps = {
  /** 链接内容 */
  content: {
    type: String,
  },
  /** 跳转页面参数。url 指跳转路径；events 页面间通信接口；routeType 自定义路由类型；delta 返回的页面数，具体可参考：https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.switchTab.html。*/
  navigatorProps: {
    type: Object,
  },
  /** 前置图标 */
  prefixIcon: {
    type: null,
  },
  /** 尺寸 */
  size: {
    type: String,
    value: 'medium',
  },
  /** 已废弃。组件状态 */
  status: {
    type: String,
    value: 'normal',
  },
  /** 禁用态 */
  disabled: {
    type: Boolean,
    value: false,
  },
  /** 是否开启点击反馈 */
  hover: {
    type: Boolean,
    value: false,
  },
  /** 前置图标 */
  suffixIcon: {
    type: null,
  },
  /** 组件风格，依次为默认色、品牌色、危险色、警告色、成功色 */
  theme: {
    type: String,
    value: 'default',
  },
  /** 普通状态是否显示链接下划线 */
  underline: {
    type: Boolean,
  },
};

export default props;
