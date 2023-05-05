/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdStepsProps {
  /**
   * 当前步骤，即整个步骤条进度。默认根据步骤下标判断步骤的完成状态，当前步骤为进行中，当前步骤之前的步骤为已完成，当前步骤之后的步骤为未开始。如果每个步骤没有设置 value，current 值为步骤长度则表示所有步骤已完成。如果每个步骤设置了自定义 value，则 current = 'FINISH' 表示所有状态完成
   */
  current?: {
    type: null;
    value?: string | number;
  };
  /**
   * 当前步骤，即整个步骤条进度。默认根据步骤下标判断步骤的完成状态，当前步骤为进行中，当前步骤之前的步骤为已完成，当前步骤之后的步骤为未开始。如果每个步骤没有设置 value，current 值为步骤长度则表示所有步骤已完成。如果每个步骤设置了自定义 value，则 current = 'FINISH' 表示所有状态完成，非受控属性
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
   * 步骤条分割符
   * @default line
   */
  separator?: {
    type: StringConstructor;
    value?: 'line' | 'dashed' | 'arrow';
  };
  /**
   * 步骤条顺序
   * @default positive
   */
  sequence?: {
    type: StringConstructor;
    value?: 'positive' | 'reverse';
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
