/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdChatLoadingProps {
  /**
   * 加载的状态形式
   * @default moving
   */
  animation?: {
    type: StringConstructor;
    value?: 'skeleton' | 'moving' | 'gradient' | 'dot';
  };
  /**
   * 加载过程展示的文字内容
   * @default ''
   */
  text?: {
    type: StringConstructor;
    value?: string;
  };
}
