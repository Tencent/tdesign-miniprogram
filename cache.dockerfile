# 选择一个 Base 镜像
FROM node:12

# 设置工作目录
WORKDIR /space

# 将 by 中的文件列表 COPY 过来
COPY . .

# 根据 COPY 过来的文件进行依赖的安装
RUN npm i

# 设置好需要的环境变量
ENV NODE_PATH=/space/node_modules

