/**
 * fixme: miniprogram-api-typings 未加入的新api临时声明，更新后可删除
 */
declare namespace WechatMiniprogram {
  interface Wx {
    onMenuButtonBoundingClientRectWeightChange(callback: (rect: any) => void): void;
    offMenuButtonBoundingClientRectWeightChange(callback: (res: any) => void): void;
  }
}
