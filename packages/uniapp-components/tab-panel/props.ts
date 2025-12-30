/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export default {
  /** 透传至 Badge 组件 */
  badgeProps: {
    type: Object,
    default: () => ({}),
  },
  /** 是否禁用当前选项卡 */
  disabled: Boolean,
  /** `1.0.0-rc.1`。图标，传对象则透传至 Icon */
  icon: {
    type: [String, Object],
  },
  /** 选项卡名称 */
  label: {
    type: String,
    default: '',
  },
  /** 是否启用选项卡懒加载 */
  lazy: Boolean,
  /** 用于自定义选项卡面板内容 */
  panel: {
    type: String,
  },
  /** 选项卡的值，唯一标识 */
  value: {
    type: [String, Number],
  },
};
