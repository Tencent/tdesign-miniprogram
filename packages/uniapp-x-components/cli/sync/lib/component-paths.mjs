import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// cli/sync/lib → cli/sync → cli → uniapp-x-components → packages → repo root
export const REPO_ROOT = path.resolve(__dirname, '../../../../..');
export const UNIAPP_X_ROOT = path.resolve(__dirname, '../../..');
export const UNIAPP_BASELINE_ROOT = path.resolve(REPO_ROOT, 'packages/uniapp-components');

/**
 * 把 t-input 转成 input
 */
export function toBaselineName(targetName) {
  return targetName.replace(/^t-/, '');
}

/**
 * 解析一个组件相关的全部路径。
 * @param {string} targetName 例 't-input'
 */
export function resolveComponentPaths(targetName) {
  const baselineName = toBaselineName(targetName);
  const targetDir = path.resolve(UNIAPP_X_ROOT, 'src/components', targetName);
  const baselineDir = path.resolve(UNIAPP_BASELINE_ROOT, baselineName);

  return {
    targetName,
    baselineName,
    target: {
      dir: targetDir,
      types: path.join(targetDir, `${targetName}.types.ts`),
      less: path.join(targetDir, `${targetName}.theme.less`),
      uvue: path.join(targetDir, `${targetName}.uvue`),
      variants: path.join(targetDir, `${targetName}.variants.ts`),
      readme: path.join(targetDir, 'README.md'),
    },
    baseline: {
      dir: baselineDir,
      props: path.join(baselineDir, 'props.ts'),
      type: path.join(baselineDir, 'type.ts'),
      less: path.join(baselineDir, `${baselineName}.less`),
    },
  };
}

/**
 * 列出 src/components/ 下所有 t-* 组件
 */
export function listAllTargetComponents() {
  const dir = path.resolve(UNIAPP_X_ROOT, 'src/components');
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isDirectory() && d.name.startsWith('t-'))
    .map((d) => d.name)
    .sort();
}

/**
 * 校验某组件 baseline / target 是否都存在
 */
export function checkComponentExists(paths) {
  const missing = [];
  if (!fs.existsSync(paths.target.dir)) missing.push(`target dir: ${paths.target.dir}`);
  if (!fs.existsSync(paths.baseline.dir)) missing.push(`baseline dir: ${paths.baseline.dir}`);
  if (!fs.existsSync(paths.baseline.props)) missing.push(`baseline props.ts: ${paths.baseline.props}`);
  return missing;
}
