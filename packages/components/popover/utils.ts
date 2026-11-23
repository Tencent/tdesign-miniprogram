/**
 * 把气泡的水平位置夹到屏幕可见范围内。
 *
 * 纵向越界由 `calcPlacement` 翻转 placement 兜底，这里只处理横向：
 * 气泡既不能贴出左边缘，也不能贴出右边缘。内容比屏幕还宽时固定在左边缘，
 * 保证开头部分可见，而不是被推到负坐标完全看不见。
 *
 * @param left 期望的水平位置（px）
 * @param contentWidth 气泡内容宽度（px）
 * @param windowWidth 屏幕宽度（px）
 */
export default function clampHorizontal(left: number, contentWidth: number, windowWidth: number): number {
  const maxLeft = Math.max(windowWidth - contentWidth, 0);
  return Math.min(Math.max(left, 0), maxLeft);
}
