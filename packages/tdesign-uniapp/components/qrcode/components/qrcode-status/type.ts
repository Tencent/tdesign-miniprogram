export interface QRCodeStatusProps {
  /**
   * 二维码状态
   * @default 'active'
   */
  status?: 'active' | 'expired' | 'loading' | 'scanned';

  /**
   * 本地化文本配置
   */
  locale?: {
    /** 过期提示文本 */
    expiredText?: string;
    /** 刷新按钮文本 */
    refreshText?: string;
    /** 已扫描提示文本 */
    scannedText?: string;
  };

  /**
   * 是否启用自定义渲染
   * @default false
   */
  statusRender?: boolean;
}
