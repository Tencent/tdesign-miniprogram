import { describe, it, expect, beforeAll } from 'vitest';
import { execSync } from 'node:child_process';
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

// 测试由 `cd packages/uniapp-x-components && vitest` 启动，cwd 即包根
const PKG_ROOT = process.cwd();

describe('registry 构建产物', () => {
  beforeAll(() => {
    execSync('node ./cli/build-registry.mjs', { cwd: PKG_ROOT, stdio: 'pipe' });
  });

  it('registry.json 存在且包含必要字段', () => {
    const indexPath = join(PKG_ROOT, 'registry.json');
    expect(existsSync(indexPath)).toBe(true);
    const idx = JSON.parse(readFileSync(indexPath, 'utf8'));
    expect(idx.$schema).toBeDefined();
    expect(Array.isArray(idx.items)).toBe(true);
    expect(idx.items.length).toBeGreaterThanOrEqual(4); // utils + button + cell + input
  });

  it('总索引中 utils 必定先于 button（依赖关系暗示安装顺序）', () => {
    const idx = JSON.parse(
      readFileSync(join(PKG_ROOT, 'registry.json'), 'utf8'),
    );
    const names = idx.items.map((i: { name: string }) => i.name);
    expect(names.indexOf('utils')).toBeLessThan(names.indexOf('button'));
  });

  it('每个组件的 manifest 都内联了 README + types + variants + vue + uvue + theme', () => {
    for (const name of ['button', 'cell', 'input']) {
      const m = JSON.parse(
        readFileSync(join(PKG_ROOT, 'registry', `${name}.json`), 'utf8'),
      );
      const paths = m.files.map((f: { path: string }) => f.path);
      expect(paths.some((p: string) => p.endsWith('README.md'))).toBe(true);
      expect(paths.some((p: string) => p.endsWith('.types.ts'))).toBe(true);
      expect(paths.some((p: string) => p.endsWith('.variants.ts'))).toBe(true);
      expect(paths.some((p: string) => p.endsWith('.vue'))).toBe(true);
      expect(paths.some((p: string) => p.endsWith('.uvue'))).toBe(true);
      expect(paths.some((p: string) => p.endsWith('.less'))).toBe(true);
    }
  });

  it('manifest.files[].content 非空且能被 JSON parse', () => {
    const m = JSON.parse(
      readFileSync(join(PKG_ROOT, 'registry', 'button.json'), 'utf8'),
    );
    for (const f of m.files) {
      expect(typeof f.content).toBe('string');
      expect(f.content.length).toBeGreaterThan(0);
    }
  });

  it('组件依赖了 utils 模块', () => {
    const m = JSON.parse(
      readFileSync(join(PKG_ROOT, 'registry', 'button.json'), 'utf8'),
    );
    expect(m.registryDependencies).toContain('utils');
  });

  it('不应包含 *.test.ts / *.spec.ts 测试文件', () => {
    const m = JSON.parse(
      readFileSync(join(PKG_ROOT, 'registry', 'button.json'), 'utf8'),
    );
    const paths = m.files.map((f: { path: string }) => f.path);
    expect(paths.every((p: string) => !p.includes('.test.'))).toBe(true);
    expect(paths.every((p: string) => !p.includes('.spec.'))).toBe(true);
  });
});
