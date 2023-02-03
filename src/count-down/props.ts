/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdCountDownProps } from './type';
const props: TdCountDownProps = {
  /** 是否自动开始倒计时 */
  autoStart: {
    type: Boolean,
    value: true,
  },
  /** 最终倒计时的展示内容，值为'default'时使用默认的格式，否则使用自定义样式插槽 */
  content: {
    type: String,
    value: 'default',
  },
  /** 时间格式，DD-日，HH-时，mm-分，ss-秒，SSS-毫秒 */
  format: {
    type: String,
    value: 'HH:mm:ss',
  },
  /** 是否开启毫秒级渲染 */
  millisecond: {
    type: Boolean,
    value: false,
  },
  /** 倒计时尺寸 */
  size: {
    type: String,
    value: 'medium',
  },
  /** 使用时间单位分割 */
  splitWithUnit: {
    type: Boolean,
    value: false,
  },
  /** 倒计时风格 */
  theme: {
    type: String,
    value: 'default',
  },
  /** 倒计时时长，单位毫秒 */
  time: {
    type: Number,
  },
};

export default props;
