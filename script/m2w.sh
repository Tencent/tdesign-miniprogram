#!/bin/bash

# 执行构建命令
npm run build

# 切换到 _example 目录
cd _example

# 切换腾讯源
npm config set registry http://mirrors.tencent.com/npm/

pnpm install

pnpm add @tencent/m2w-tdesign@latest -w

# 执行 m2w-tdesign 命令
npx m2w-tdesign build --navigationStyle custom --output ../packages/tdesign-miniprogram/site/dist/live --baseUrl /miniprogram/live

echo "m2w 脚本执行完成！"
