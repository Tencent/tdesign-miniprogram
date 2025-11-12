/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdChatThinkingProps {
  /**
   * 内容区域最大高度，超出会自动滚动
   * @default moving
   */
  animation?: {
    type: StringConstructor;
    value?: 'skeleton' | 'moving' | 'gradient' | 'dot';
  };
  /**
   * 是否折叠
   * @default false
   */
  collapsed?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 思考内容对象
   */
  content: {
    type: ObjectConstructor;
    value?: { text?: string; title?: string };
    required?: boolean;
  };
  /**
   * 布局方式
   * @default block
   */
  layout?: {
    type: StringConstructor;
    value?: 'block' | 'border';
  };
  /**
   * 内容区域最大高度，超出会自动滚动
   */
  maxHeight?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 思考状态
   * @default pending
   */
  status: {
    type: StringConstructor;
    value?: 'complete' | 'stop' | 'error' | 'pending';
    required?: boolean;
  };
}
