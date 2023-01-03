/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdStepsProps } from './type';
const props: TdStepsProps = {
  /** 当前步骤，即整个步骤条进度，格式为`1`、`1-0`或`1-1`。默认根据步骤下标判断步骤的完成状态，当前步骤为进行中，当前步骤之前的步骤为已完成，当前步骤之后的步骤为未开始。若当前步骤条存在子步骤条，则会根据子步骤条重新判断当前步骤状态（子步骤条中存在error，则当前步骤error，子步骤条中存在process，当前步骤process，若最后一个子步骤条finish，当前步骤finish，优先级为`finish>error>process`）。注意：如果每个步骤条单独设置了status，则步骤条为设定的status，若传入`status:''`,将默认为未开始状态,传入的status优先级最高。 */
  current: {
    type: null,
    value: null,
  },
  /** 当前步骤，即整个步骤条进度，格式为`1`、`1-0`或`1-1`。默认根据步骤下标判断步骤的完成状态，当前步骤为进行中，当前步骤之前的步骤为已完成，当前步骤之后的步骤为未开始。若当前步骤条存在子步骤条，则会根据子步骤条重新判断当前步骤状态（子步骤条中存在error，则当前步骤error，子步骤条中存在process，当前步骤process，若最后一个子步骤条finish，当前步骤finish，优先级为`finish>error>process`）。注意：如果每个步骤条单独设置了status，则步骤条为设定的status，若传入`status:''`,将默认为未开始状态,传入的status优先级最高。，非受控属性 */
  defaultCurrent: {
    type: null,
    value: 0,
  },
  /** 用于控制 current 指向的步骤条的状态 */
  currentStatus: {
    type: String,
    value: 'process',
  },
  /** 自定义组件样式 */
  style: {
    type: String,
    value: '',
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
  /** 【讨论中】步骤条分割符 */
  separator: {
    type: String,
    value: 'line',
  },
  /** 步骤条风格 */
  theme: {
    type: String,
    value: 'default',
  },
};

export default props;
