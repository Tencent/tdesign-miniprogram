import { promises } from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

import type { ResolvedConfig, ViteDevServer } from 'vite';

import generateChangelogJson from '../../../../common/docs/plugins/changelog-to-json';

const __dirname = dirname(fileURLToPath(import.meta.url));

const outputPath = path.resolve(__dirname, '../../../site/dist/changelog.json');
const changelogPath = path.resolve(__dirname, '../../../CHANGELOG.md');

export default function changelog2Json() {
  let config: ResolvedConfig;
  return {
    name: 'changelog-to-json',
    configResolved(resolvedConfig: ResolvedConfig) {
      config = resolvedConfig;
    },
    configureServer(server: ViteDevServer) {
      // 开发模式时拦截请求
      server.middlewares.use('/changelog.json', async (_, res) => {
        const json = await generateChangelogJson(changelogPath, 'mobile');
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(json));
      });
    },
    async closeBundle(error?: Error) {
      if (error) return;
      // 生产构建时写入物理文件
      if (config.env.PROD || config.env.MODE === 'preview') {
        const json = await generateChangelogJson(changelogPath, 'mobile');
        await promises.writeFile(outputPath, JSON.stringify(json));
      }
    },
  };
}
