/**
 * harness 全局配置
 *
 * 包含：
 *  - 路径常量（仓库根 / uniapp 版组件根 / uniapp-x 组件根）
 *  - 视口（与 uniapp 官方 demo 站对齐：iPhone 13 Pro，390×844 dpr=3）
 *  - 组件 manifest：组件名 ↔ baseline 路径 ↔ 各 demo 子页
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 仓库根（cli/harness/ → uniapp-x-components/ → tdesign-miniprogram/）
export const REPO_ROOT = path.resolve(__dirname, '../../../..');
export const UNI_X_ROOT = path.resolve(__dirname, '..', '..'); // uniapp-x-components/
export const UNI_X_SRC = path.join(UNI_X_ROOT, 'src');
export const UNI_X_COMPONENTS = path.join(UNI_X_SRC, 'components');
export const UNIAPP_COMPONENTS = path.join(REPO_ROOT, 'packages/uniapp-components');
export const RUNS_DIR = path.join(__dirname, 'runs');

/** 视口：与 uniapp 官方 demo 站对齐 */
export const VIEWPORT = {
  width: 390,
  height: 844,
  deviceScaleFactor: 3,
  isMobile: true,
  hasTouch: true,
  userAgent:
    'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1',
};

/** 像素 diff 阈值（pixelmatch threshold，越小越敏感；0~1） */
export const PIXEL_THRESHOLD = 0.1;

/** 当前 fix 模式下，单次最多消耗的 LLM 轮数 */
export const DEFAULT_MAX_ROUNDS = 3;

/**
 * 组件 manifest：决定每个组件
 *  - uniapp 版（baseline）的源码目录、demo URL
 *  - uniapp-x 版（待对齐）的源码目录、demo URL
 *  - 主 demo 页 + 各子用例
 */
export const COMPONENTS = {
  't-input': {
    name: 't-input',
    baseline: {
      // baseline 源码（uniapp 版的 props.ts / type.ts / .less / .vue）
      sourceDir: path.join(UNIAPP_COMPONENTS, 'input'),
      propsFile: 'props.ts',
      typeFile: 'type.ts',
      // baseline 在线 demo（uniapp 官方站，用 SSR Live）
      demoPath: '/#/pages-more/input/input',
    },
    target: {
      // uniapp-x 当前实现
      sourceDir: path.join(UNI_X_COMPONENTS, 't-input'),
      typesFile: 't-input.types.ts',
      themeFile: 't-input.theme.less',
      uvueFile: 't-input.uvue',
      variantsFile: 't-input.variants.ts',
      // 本地 H5 dev demo（HBuilderX gui 自动跑）
      demoPath: '/#/pages-more/tdesign-uniapp-x/t-input/t-input',
    },
    // 主 demo 页 + 各子用例（用例名与 _example/<case>/index.uvue 同名）
    cases: ['base', 'label', 'align', 'layout', 'maxlength', 'prefix', 'suffix', 'status', 'special'],
  },
};

/** 视觉允许的最大像素差占比（>该比例时认为不达标，需要 fix） */
export const VISUAL_BUDGET = 0.005; // 0.5%

/**
 * fix 模式下 LLM 可写文件白名单（按组件展开后实际允许写入的相对路径）
 * 防止 LLM 修改不相关文件
 */
export const FIX_ALLOWED_FILES = (comp) => [
  `${comp}.uvue`,
  `${comp}.theme.less`,
  `${comp}.types.ts`,
  `${comp}.variants.ts`,
];
