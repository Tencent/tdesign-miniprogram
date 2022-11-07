/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdStepsProps {
  /**
   * 当前步骤，即整个步骤条进度，格式为`1`、`1-0`或`1-1`。默认根据步骤下标判断步骤的完成状态，当前步骤为进行中，当前步骤之前的步骤为已完成，当前步骤之后的步骤为未开始。若当前步骤条存在子步骤条，则会根据子步骤条重新判断当前步骤状态（子步骤条中存在error，则当前步骤error，子步骤条中存在process，当前步骤process，若最后一个子步骤条finish，当前步骤finish，优先级为`finish>error>process`）。注意：如果每个步骤条单独设置了status，则步骤条为设定的status，若传入`status:''`,将默认为未开始状态,传入的status优先级最高。
   * @default 0
   */
  current?: {
    type: null;
    value?: string | number;
  };
  /**
   * 当前步骤，即整个步骤条进度，格式为`1`、`1-0`或`1-1`。默认根据步骤下标判断步骤的完成状态，当前步骤为进行中，当前步骤之前的步骤为已完成，当前步骤之后的步骤为未开始。若当前步骤条存在子步骤条，则会根据子步骤条重新判断当前步骤状态（子步骤条中存在error，则当前步骤error，子步骤条中存在process，当前步骤process，若最后一个子步骤条finish，当前步骤finish，优先级为`finish>error>process`）。注意：如果每个步骤条单独设置了status，则步骤条为设定的status，若传入`status:''`,将默认为未开始状态,传入的status优先级最高。，非受控属性
   * @default 0
   */
  defaultCurrent?: {
    type: null;
    value?: string | number;
  };
  /**
   * 用于控制 current 指向的步骤条的状态
   * @default process
   */
  currentStatus?: {
    type: StringConstructor;
    value?: 'default' | 'process' | 'finish' | 'error';
  };
  /**
   * 自定义组件样式
   * @default ''
   */
  customStyle?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 组件类名，用于设置组件外层元素元素类名
   */
  externalClasses?: {
    type: ArrayConstructor;
    value?: ['t-class'];
  };
  /**
   * 步骤条方向，有两种：横向和纵向
   * @default horizontal
   */
  layout?: {
    type: StringConstructor;
    value?: 'horizontal' | 'vertical';
  };
  /**
   * 只读状态
   * @default false
   */
  readonly?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 【讨论中】步骤条分割符
   * @default line
   */
  separator?: {
    type: StringConstructor;
    value?: 'line' | 'dashed' | 'arrow';
  };
  /**
   * 步骤条风格
   * @default default
   */
  theme?: {
    type: StringConstructor;
    value?: 'default' | 'dot';
  };
}

export interface TdStepItemProps {
  /**
   * 步骤描述
   * @default ''
   */
  content?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 自定义组件样式
   * @default ''
   */
  customStyle?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 组件类名，用于设置组件外层元素元素类名
   */
  externalClasses?: {
    type: ArrayConstructor;
    value?: ['t-class', 't-class-content', 't-class-title', 't-class-description', 't-class-extra'];
  };
  /**
   * 图标。传入 slot 代表使用插槽，其他字符串代表使用内置图标
   */
  icon?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 当前步骤的状态：默认状态（未开始）、进行中状态、完成状态、错误状态
   * @default default
   */
  status?: {
    type: StringConstructor;
    value?: StepStatus;
  };
  /**
   * 子步骤条，仅支持 layout  = 'vertical' 时
   * @default []
   */
  subStepItems?: {
    type: ArrayConstructor;
    value?: SubStepItem[];
  };
  /**
   * 标题
   * @default ''
   */
  title?: {
    type: StringConstructor;
    value?: string;
  };
}

export type StepStatus = 'default' | 'process' | 'finish' | 'error';

export interface SubStepItem {
  status: StepStatus;
  title: string;
}
