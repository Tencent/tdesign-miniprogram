const watch = require('gulp-watch');
const path = require('path');
const { config } = require('./config');
const { copy } = require('./core');
const net = require('net');
const port = 12345; // 选择一个空闲端口


function isPortInUse(port) {
  return new Promise((resolve) => {
    const server = net.createServer();
    server.once('error', () => resolve(true));
    server.once('listening', () => {
      server.close(() => resolve(false));
    });
    server.listen(port);
  });
}


async function main() {
  if (await isPortInUse(port)) {
    console.log('[Watch] 监听已在其他终端运行');
    return;
  }
  // 创建监听服务器（占用端口）
  const server = net.createServer();
  server.listen(port);


  watch(config.baseAndChatSourceGlob, async (e) => {
    const { event, history, base } = e || {};

    if (event !== 'unlink' && history?.[0]
       && (history[0].includes('tdesign-uniapp/components') || history[0].includes('tdesign-uniapp-chat/components'))) {
      const filePath = history[0];
      let relativePath = path.relative(base, filePath);
      console.log('relativePath', relativePath);
      if (relativePath.startsWith(`tdesign${path.sep}`) || relativePath.startsWith(`tdesign-uniapp-chat${path.sep}`)) {
        relativePath = relativePath.split(path.sep).slice(1)
          .join(path.sep);
      }

      console.log('base', base);
      console.log('history', history);

      const { relativeTargetByCwd, relativeSourceByCwd } = await copy({
        relativePath,
        filePath,
        config,
      });
      console.log(`[Wrote] done! \nFrom ${relativeSourceByCwd} to ${relativeTargetByCwd}`);
    }
  });

  // 监听进程终止信号
  process.on('exit', () => server.close());
  process.on('SIGINT', gracefulShutdown);
  process.on('SIGTERM', gracefulShutdown);
}


// 优雅关闭函数
function gracefulShutdown() {
  console.log('\n[Watch] 收到终止信号，关闭监听器...');
  process.exit(0); // 退出进程
}


main();
