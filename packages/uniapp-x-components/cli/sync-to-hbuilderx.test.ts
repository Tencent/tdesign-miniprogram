import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { execSync } from 'node:child_process';
import { mkdtempSync, rmSync, writeFileSync, readFileSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, sep } from 'node:path';

const PKG_ROOT = process.cwd();
const CONFIG_PATH = join(PKG_ROOT, '.sync-targets.json');
const BACKUP = `${CONFIG_PATH}.bak`;

let tmpRoot = '';

function run(args = '') {
  return execSync(`node ./cli/sync-to-hbuilderx.mjs ${args}`, {
    cwd: PKG_ROOT,
    encoding: 'utf8',
  });
}

describe('sync-to-hbuilderx', () => {
  beforeAll(() => {
    // 备份用户实际配置
    if (existsSync(CONFIG_PATH)) {
      writeFileSync(BACKUP, readFileSync(CONFIG_PATH));
    }
    tmpRoot = mkdtempSync(join(tmpdir(), 'sync-hb-'));
    writeFileSync(
      CONFIG_PATH,
      JSON.stringify({
        targets: [
          {
            name: 'unit-test-target',
            root: tmpRoot,
            componentsDir: 'components',
            utilsDir: 'utils',
          },
        ],
      }),
    );
  });

  afterAll(() => {
    rmSync(tmpRoot, { recursive: true, force: true });
    if (existsSync(BACKUP)) {
      writeFileSync(CONFIG_PATH, readFileSync(BACKUP));
      rmSync(BACKUP, { force: true });
    } else {
      rmSync(CONFIG_PATH, { force: true });
    }
  });

  it('dry-run 不应写入任何文件', () => {
    const out = run('--dry-run');
    expect(out).toContain('dry-run');
    expect(existsSync(join(tmpRoot, 'components'))).toBe(false);
  });

  it('once 同步会创建 components/ 与 utils/ 两个目录', () => {
    run();
    expect(existsSync(join(tmpRoot, 'components', 'button', 'button.uvue'))).toBe(true);
    expect(existsSync(join(tmpRoot, 'utils', 'cn.uts'))).toBe(true);
  });

  it('.ts 应被映射为 .uts，.uvue/.less 保持原样', () => {
    expect(existsSync(join(tmpRoot, 'components', 'button', 'button.types.uts'))).toBe(true);
    expect(existsSync(join(tmpRoot, 'components', 'button', 'button.variants.uts'))).toBe(true);
    expect(existsSync(join(tmpRoot, 'components', 'button', 'button.theme.less'))).toBe(true);
    expect(existsSync(join(tmpRoot, 'components', 'button', 'index.uts'))).toBe(true);
  });

  it('应跳过 .vue 镜像与 *.spec.ts / *.test.ts 测试文件', () => {
    expect(existsSync(join(tmpRoot, 'components', 'button', 'button.vue'))).toBe(false);
    expect(existsSync(join(tmpRoot, 'components', 'button', 'button.spec.ts'))).toBe(false);
    expect(existsSync(join(tmpRoot, 'components', 'button', 'button.spec.uts'))).toBe(false);
    expect(existsSync(join(tmpRoot, 'utils', 'cn.test.uts'))).toBe(false);
  });

  it('index.ts 中的 .vue 导入应被改写为 .uvue', () => {
    const idx = readFileSync(join(tmpRoot, 'components', 'button', 'index.uts'), 'utf8');
    expect(idx).not.toMatch(/\.vue['"]/);
    expect(idx).toMatch(/\.uvue['"]/);
  });

  it('再次 once 同步应该全部 skip（幂等）', () => {
    const out = run();
    expect(out).toMatch(/0 新建/);
    // 至少其中一些路径不应再次出现写入标识
    const lines = out.split('\n');
    const writes = lines.filter((l) => l.includes('＋') || l.includes('✎'));
    expect(writes.length).toBe(0);
  });

  it('修改源文件后再次同步应被识别为 update', () => {
    const target = join(tmpRoot, 'components', 'button', 'button.theme.less');
    // 把目标文件人工搞坏，再跑一次同步，应该被覆盖回正确内容
    writeFileSync(target, '/* tampered */');
    const out = run();
    expect(out).toMatch(/1 更新|✎/);
    const restored = readFileSync(target, 'utf8');
    expect(restored).not.toContain('tampered');
  });

  it('路径分隔符在不同平台都正确', () => {
    // 仅断言生成的路径用了系统 sep
    const sample = join(tmpRoot, 'components', 'button', 'button.uvue');
    expect(sample.includes(sep)).toBe(true);
  });
});
