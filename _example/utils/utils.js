/**
 * 获取设备安全区域信息，主要用于iPhone底部安全区域适配
 */
export const getSafeAreaHeight = () => {
  try {
    const systemInfo = wx.getSystemInfoSync();

    // 获取屏幕高度和安全区域信息
    const { screenHeight, safeArea } = systemInfo;

    if (safeArea) {
      // 计算底部安全区域高度
      const safeAreaBottom = screenHeight - safeArea.bottom;
      return safeAreaBottom;
    }
    // 如果没有安全区域信息，设置为0
    return 0;
  } catch (error) {
    console.error('获取安全区域信息失败:', error);
    return 0;
  }
};

/**
 * 获取导航栏高度，包括状态栏和标题栏
 */
export const getNavigationBarHeight = () => {
  try {
    const systemInfo = wx.getSystemInfoSync();

    // 获取状态栏高度
    const statusBarHeight = systemInfo.statusBarHeight || 0;

    // 获取胶囊按钮位置信息
    const menuButtonInfo = wx.getMenuButtonBoundingClientRect();

    if (menuButtonInfo) {
      // 计算导航栏高度：胶囊按钮底部位置 + 胶囊按钮与底部的间距
      const navigationBarHeight = menuButtonInfo.bottom + (menuButtonInfo.top - statusBarHeight);
      return navigationBarHeight;
    }
    // 如果无法获取胶囊按钮信息，使用默认计算方式
    // 一般情况下，导航栏高度 = 状态栏高度 + 44px（标准导航栏高度）
    const navigationBarHeight = statusBarHeight + 44;

    return navigationBarHeight;
  } catch (error) {
    console.error('获取导航栏高度失败:', error);
    return 44;
  }
};
