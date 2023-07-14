/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdTabPanelProps } from './type';
const props: TdTabPanelProps = {
  /** 透传至 Badge 组件 */
  badgeProps: {
    type: Object,
    value: null,
  },
  /** 【实现有误，暂不支持】选项卡内容隐藏时是否销毁 */
  destroyOnHide: {
    type: Boolean,
    value: true,
  },
  /** 是否禁用当前选项卡 */
  disabled: {
    type: Boolean,
    value: false,
  },
  /** 图标，传对象则透传至 Icon */
  icon: {
    type: null,
  },
  /** 选项卡名称 */
  label: {
    type: String,
    value: '',
  },
  /** 用于自定义选项卡面板内容 */
  panel: {
    type: String,
  },
  /** 选项卡的值，唯一标识 */
  value: {
    type: null,
  },
};

export default props;
