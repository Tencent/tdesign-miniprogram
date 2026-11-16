/**
 * 图标字体预加载（issue #4710）。
 *
 * H5 端此前只在首个 t-icon-* 渲染后由浏览器发起字体请求，
 * 请求返回前图标显示为占位方块（tofu）。这里在模块加载阶段
 * 通过 FontFace API 主动触发加载，与 icon.less 中 @font-face
 * 指向同一 URL，浏览器会复用同一请求，不会重复下载。
 *
 * 小程序 / APP 端不存在 document.fonts，直接跳过（原生渲染
 * 不走浏览器字体加载路径）。重复调用是幂等的：仅首次触发。
 */

const ICON_FONT_FAMILY = 't';
const ICON_FONT_URL = 'https://tdesign.gtimg.com/icon/0.4.6/fonts/t.woff';

let iconFontLoadPromise: Promise<void> | null = null;

export function ensureIconFontLoaded(): Promise<void> {
  if (iconFontLoadPromise) {
    return iconFontLoadPromise;
  }

  const canUseFontFace =
    typeof document !== 'undefined' &&
    typeof (document as any).fonts !== 'undefined' &&
    typeof FontFace !== 'undefined';

  if (!canUseFontFace) {
    iconFontLoadPromise = Promise.resolve();
    return iconFontLoadPromise;
  }

  // 静默失败：字体加载失败时回退到原有行为（CSS @font-face 触发的请求）
  iconFontLoadPromise = new Promise<void>((resolve) => {
    try {
      const face = new FontFace(ICON_FONT_FAMILY, `url(${ICON_FONT_URL}) format('woff')`);
      (document as any).fonts.add(face);
      face.load().then(resolve, resolve);
    } catch (e) {
      resolve();
    }
  });
  return iconFontLoadPromise;
}