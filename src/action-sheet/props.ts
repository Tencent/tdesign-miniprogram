/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdActionSheetProps } from './type';
const props: TdActionSheetProps = {
  /** 水平对齐方式 */
  align: {
    type: String,
    value: 'center',
  },
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
  /** 动作面板描述文字 */
  description: {
    type: String,
    value: '',
  },
  /** 菜单项 */
  items: {
    type: Array,
  },
  /** popupProps透传 */
  popupProps: {
    type: Object,
    value: {},
  },
  /** 是否显示取消按钮 */
  showCancel: {
    type: Boolean,
    value: true,
  },
  /** 是否显示遮罩层 */
  showOverlay: {
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
