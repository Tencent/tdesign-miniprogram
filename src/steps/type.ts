/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdStepsProps {
  /**
   * 当前步骤，即整个步骤条进度。默认根据步骤下标判断步骤的完成状态，当前步骤为进行中，当前步骤之前的步骤为已完成，当前步骤之后的步骤为未开始。如果每个步骤没有设置 value，current 值为步骤长度则表示所有步骤已完成。如果每个步骤设置了自定义 value，则 current = 'FINISH' 表示所有状态完成
   * @default 0
   */
  current?: {
    type: StringConstructor;
    optionalTypes: Array<NumberConstructor>;
    value?: string | number;
  };
  /**
   * 当前步骤，即整个步骤条进度。默认根据步骤下标判断步骤的完成状态，当前步骤为进行中，当前步骤之前的步骤为已完成，当前步骤之后的步骤为未开始。如果每个步骤没有设置 value，current 值为步骤长度则表示所有步骤已完成。如果每个步骤设置了自定义 value，则 current = 'FINISH' 表示所有状态完成，非受控属性
   * @default 0
   */
  defaultCurrent?: {
    type: StringConstructor;
    optionalTypes: Array<NumberConstructor>;
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
   * 当前步骤的状态
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
