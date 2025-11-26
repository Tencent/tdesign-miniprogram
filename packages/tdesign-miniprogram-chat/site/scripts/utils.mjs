import path from 'path';

function resolveCwd(...args) {
  args.unshift(process.cwd());
  return path.join(...args);
}

export default resolveCwd;
