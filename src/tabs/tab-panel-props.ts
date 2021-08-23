/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-08-23 20:51:17
 * */

import { TdTabPanelProps } from './type';
const props: TdTabPanelProps = {
  /** 选项卡内容隐藏时是否仍然渲染 */
  destroyOnHide: {
    type: Boolean,
    value: true,
  },
  /** 选项卡名称，可自定义选项卡导航内容 */
  label: {
    type: String,
  },
  /** 用于自定义选项卡面板内容 */
  panel: {
    type: String,
  },
  /** 选项卡的值，唯一标识 */
  value: {
    type: String,
    optionalTypes: [Number],
  },
};

export default props;
