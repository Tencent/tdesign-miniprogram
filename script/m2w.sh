#!/bin/bash

TYPE=${1:-all}

# 检查 type 参数是否合法
if [ "$TYPE" != "all" ] && [ "$TYPE" != "base" ] && [ "$TYPE" != "chat" ]; then
  echo "错误: 不支持的 type 参数 '$TYPE'"
  echo "支持的 type: all, base, chat"
  exit 1
fi

# 根据 type 参数设置 output 和 baseUrl
if [ "$TYPE" = "base" ]; then
  OUTPUT="--output ../packages/tdesign-miniprogram/site/dist/live"
  BASE_URL="--baseUrl /miniprogram/live"
elif [ "$TYPE" = "chat" ]; then
  OUTPUT="--output ../packages/tdesign-miniprogram-chat/site/dist/live"
  BASE_URL="--baseUrl /miniprogram-chat/live"
else
  OUTPUT="./m2w_dist"
  BASE_URL="/"
fi

# 执行构建命令
npx cross-env NODE_ENV=production gulp --gulpfile script/gulpfile.dist.js --cwd ./
npx cross-env NODE_ENV=production TYPE=$TYPE SKIP_SKYLINE=true gulp --gulpfile script/gulpfile.example.js --cwd ./

# 切换到 _example 目录
cd _example

# 切换腾讯源
npm config set registry http://mirrors.tencent.com/npm/

pnpm install

pnpm add @tencent/m2w-tdesign@latest -w

# 执行 m2w-tdesign 命令
npx m2w-tdesign build --navigationStyle custom $OUTPUT $BASE_URL

echo "m2w 脚本执行完成！"
