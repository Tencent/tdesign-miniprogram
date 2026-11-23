import clampHorizontal from '../../popover/utils';

describe('popover utils', () => {
  describe('clampHorizontal', () => {
    it(':keeps a position that already fits', () => {
      expect(clampHorizontal(100, 50, 375)).toBe(100);
    });

    it(':pulls a popover back from the left edge', () => {
      expect(clampHorizontal(-20, 100, 375)).toBe(0);
    });

    it(':pulls a popover back from the right edge', () => {
      // 气泡右边界 360 + 100 = 460 超出 375 的屏幕宽度，应贴住右边缘
      expect(clampHorizontal(360, 100, 375)).toBe(275);
    });

    it(':pins a popover wider than the viewport to the left edge', () => {
      expect(clampHorizontal(50, 500, 375)).toBe(0);
    });
  });
});
