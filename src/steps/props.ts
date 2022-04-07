/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdStepsProps } from './type';
const props: TdStepsProps = {
  /** 当前步骤，即整个步骤条进度。默认根据步骤下标判断步骤的完成状态，当前步骤为进行中，当前步骤之前的步骤为已完成，当前步骤之后的步骤为未开始。如果每个步骤没有设置 value，current 值为步骤长度则表示所有步骤已完成。如果每个步骤设置了自定义 value，则 current = 'FINISH' 表示所有状态完成 */
  current: {
    type: String,
    optionalTypes: [Number],
    value: null,
  },
  /** 当前步骤，即整个步骤条进度。默认根据步骤下标判断步骤的完成状态，当前步骤为进行中，当前步骤之前的步骤为已完成，当前步骤之后的步骤为未开始。如果每个步骤没有设置 value，current 值为步骤长度则表示所有步骤已完成。如果每个步骤设置了自定义 value，则 current = 'FINISH' 表示所有状态完成，非受控属性 */
  defaultCurrent: {
    type: String,
    optionalTypes: [Number],
    value: 0,
  },
  /** 用于控制 current 指向的步骤条的状态 */
  currentStatus: {
    type: String,
    value: 'process',
  },
  /** 组件类名，用于设置组件外层元素元素类名 */
  externalClasses: {
    type: Array,
  },
  /** 步骤条方向，有两种：横向和纵向 */
  layout: {
    type: String,
    value: 'horizontal',
  },
  /** 只读状态 */
  readonly: {
    type: Boolean,
    value: false,
  },
  /** 步骤条风格 */
  theme: {
    type: String,
    value: 'default',
  },
};

export default props;
