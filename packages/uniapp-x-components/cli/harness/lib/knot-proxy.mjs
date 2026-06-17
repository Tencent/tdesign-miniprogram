/**
 * Knot proxy 进程管理
 *
 * 拉起 e2e-proxy（OpenAI 兼容代理），暴露 http://127.0.0.1:<port>/v1
 * 复用：先 GET /healthz；通则跳过启动。
 */
import { spawn } from 'node:child_process';
import http from 'node:http';

function tryHealthCheck(port, host = '127.0.0.1') {
  return new Promise((resolve) => {
    const req = http.get(
      { host, port, path: '/healthz', timeout: 1000 },
      (res) => {
        if (res.statusCode === 200) resolve(true);
        else resolve(false);
        res.resume();
      },
    );
    req.on('error', () => resolve(false));
    req.on('timeout', () => {
      req.destroy();
      resolve(false);
    });
  });
}

async function waitHealthy(port, { timeoutMs = 15000, intervalMs = 300 } = {}) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    if (await tryHealthCheck(port)) return true;
    await new Promise((r) => setTimeout(r, intervalMs));
  }
  return false;
}

/**
 * @param {object} env  必传 KNOT_AGENT_ID/KNOT_API_TOKEN/KNOT_MODEL
 * @param {number} port 监听端口
 * @returns {Promise<{ baseUrl: string; child?: import('node:child_process').ChildProcess; reused: boolean }>}
 */
export async function startKnotProxy({ env, port = 3939, verbose = true } = {}) {
  const baseUrl = `http://127.0.0.1:${port}/v1`;

  // 先看看是不是已经在跑
  if (await tryHealthCheck(port)) {
    if (verbose) console.log(`[knot-proxy] reuse existing service on :${port}`);
    return { baseUrl, reused: true };
  }

  if (!env.KNOT_AGENT_ID || !env.KNOT_API_TOKEN) {
    throw new Error(
      '缺少 KNOT_AGENT_ID / KNOT_API_TOKEN —— 请在 cli/harness/.env 中配置',
    );
  }

  // 优先用全局 e2e-proxy 命令（用户已经 `tnpm i -g @tencent/e2e-knot-proxy`）
  // fallback: require.resolve 包内 dist/cli.js
  const launch = await resolveProxyLauncher();
  if (!launch) {
    throw new Error(
      '未找到 e2e-proxy；请先 `tnpm i -g @tencent/e2e-knot-proxy` 或将其装到 harness 的 node_modules',
    );
  }

  if (verbose) {
    console.log(`[knot-proxy] spawn ${launch.cmd} ${launch.args.join(' ')} --port ${port}`);
  }

  const child = spawn(launch.cmd, [...launch.args, '--port', String(port)], {
    env: { ...process.env, ...env, KNOT_PROXY_PORT: String(port) },
    stdio: verbose ? 'inherit' : 'ignore',
    detached: false,
  });

  child.on('error', (err) => {
    console.error('[knot-proxy] spawn error:', err);
  });

  // 进程退出时跟着退
  const cleanup = () => {
    if (!child.killed) child.kill('SIGTERM');
  };
  process.on('exit', cleanup);
  process.on('SIGINT', () => {
    cleanup();
    process.exit(130);
  });
  process.on('SIGTERM', () => {
    cleanup();
    process.exit(143);
  });

  const ok = await waitHealthy(port);
  if (!ok) {
    cleanup();
    throw new Error(`[knot-proxy] startup timeout, /healthz 在 15s 内不通`);
  }
  if (verbose) console.log(`[knot-proxy] ready on :${port}`);

  return { baseUrl, child, reused: false };
}

async function resolveProxyLauncher() {
  // 1) 优先：PATH 里的 e2e-proxy（全局安装）
  try {
    const { execSync } = await import('node:child_process');
    const p = execSync('which e2e-proxy', { encoding: 'utf8' }).trim();
    if (p) return { cmd: p, args: [] };
  } catch {
    /* not on path */
  }
  // 2) 兜底：require.resolve dist/cli.js（如果用户把它装到 harness 的 deps）
  try {
    const { createRequire } = await import('node:module');
    const require = createRequire(import.meta.url);
    const cli = require.resolve('@tencent/e2e-knot-proxy/dist/cli.js');
    return { cmd: process.execPath, args: [cli] };
  } catch {
    return null;
  }
}

// 允许独立运行（pnpm knot）
if (import.meta.url === `file://${process.argv[1]}`) {
  const { config } = await import('dotenv');
  const path = await import('node:path');
  const { fileURLToPath } = await import('node:url');
  const here = path.dirname(fileURLToPath(import.meta.url));
  config({ path: path.resolve(here, '../.env') });

  const port = Number(process.env.KNOT_PROXY_PORT) || 3939;
  await startKnotProxy({
    env: {
      KNOT_AGENT_ID: process.env.KNOT_AGENT_ID,
      KNOT_API_TOKEN: process.env.KNOT_API_TOKEN,
      KNOT_API_USER: process.env.KNOT_API_USER,
      KNOT_MODEL: process.env.KNOT_MODEL,
    },
    port,
  });
  // 保持进程
  await new Promise(() => {});
}
