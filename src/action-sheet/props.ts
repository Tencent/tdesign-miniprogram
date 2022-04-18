/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdActionSheetProps } from './type';
const props: TdActionSheetProps = {
  /** 设置取消按钮的文本 */
  cancelText: {
    type: String,
    value: '取消',
  },
  /** 设置每页展示菜单的数量，仅当 type=grid 时有效 */
  count: {
    type: Number,
    value: 8,
  },
  /** 菜单项 */
  items: {
    type: Array,
  },
  /** 是否显示取消按钮 */
  showCancel: {
    type: Boolean,
    value: true,
  },
  /** 展示类型，列表和表格形式展示 */
  theme: {
    type: String,
    value: 'list',
  },
  /** 显示与隐藏 */
  visible: {
    type: Boolean,
    value: null,
  },
  /** 显示与隐藏，非受控属性 */
  defaultVisible: {
    type: Boolean,
    value: false,
  },
};

export default props;
