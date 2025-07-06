export interface TdDraggableProps {
  /**
   * 移动方向
   * @default 'all'
   */
  direction?: {
    type: StringConstructor;
    value?: 'all' | 'vertical' | 'horizontal' | 'none';
  };
}
