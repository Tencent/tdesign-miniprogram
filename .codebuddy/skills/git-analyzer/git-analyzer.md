---
name: git-analyzer
description: "📊 Git变更分析 - 分析当前git状态、分支信息和变更详情"
---

# 📊 Git 变更分析器

分析 Git 仓库的变更信息，为分支创建、提交信息生成提供决策依据。

## 🎯 分析目标

| 分析项 | 说明 |
|-------|------|
| **Git 状态** | 工作区和暂存区状态（整个仓库） |
| **分支信息** | 当前分支和远程信息 |
| **变更统计** | 修改的文件和代码行数 |
| **变更详情** | 具体的文件变更和代码差异 |
| **变更范围** | 区分 agent-cli 和其他包的变更 |
| **提交历史** | 最近的提交信息风格 |

## 📋 执行步骤

**重要**：使用 Bash 工具执行以下命令，合并相关命令减少 tool call 次数。

### 1. 基础信息收集
```bash
REPO_ROOT=$(git rev-parse --show-toplevel) && \
echo "=== 仓库根目录 ===" && echo "$REPO_ROOT" && \
echo -e "\n=== Git 状态 ===" && git -C "$REPO_ROOT" status --short && \
echo -e "\n=== 当前分支 ===" && git -C "$REPO_ROOT" branch --show-current && \
echo -e "\n=== 远程仓库 ===" && git -C "$REPO_ROOT" remote -v
```

### 2. 变更统计和文件列表
```bash
REPO_ROOT=$(git rev-parse --show-toplevel) && \
echo "=== 整体变更统计 ===" && \
(git -C "$REPO_ROOT" diff --cached --stat 2>/dev/null || git -C "$REPO_ROOT" diff --stat 2>/dev/null || echo "无变更") && \
echo -e "\n=== 文件变更列表 ===" && \
(git -C "$REPO_ROOT" diff --name-status 2>/dev/null || echo "无文件变更")
```

### 3. agent-cli 包的变更详情
```bash
REPO_ROOT=$(git rev-parse --show-toplevel) && \
echo "=== agent-cli 包变更统计 ===" && \
(git -C "$REPO_ROOT" diff --stat -- packages/agent-cli/ 2>/dev/null || echo "agent-cli 包无变更") && \
echo -e "\n=== 其他包变更 ===" && \
(git -C "$REPO_ROOT" diff --name-only 2>/dev/null | grep -v '^packages/agent-cli/' || echo "其他包无变更")
```

### 4. 未跟踪文件和提交历史
```bash
REPO_ROOT=$(git rev-parse --show-toplevel) && \
echo "=== 未跟踪文件 ===" && \
(git -C "$REPO_ROOT" ls-files --others --exclude-standard | grep -E '\.(ts|js|json|md|yml|yaml)$' || echo "无相关未跟踪文件") && \
echo -e "\n=== 最近提交历史 ===" && \
(git -C "$REPO_ROOT" log --oneline -5 --format="%s" || echo "无提交历史")
```

## 📊 分析报告

基于以上命令输出，生成简洁的变更分析报告：

### 1. 当前状态
- 当前分支和远程仓库信息
- 工作区状态（已暂存/未暂存/未跟踪文件数量）

### 2. 变更范围
- agent-cli 包的变更文件数
- 其他包的变更（如果有）

### 3. 变更性质
- 根据文件变更判断类型：feat/fix/refactor/docs/chore
- 识别主要变更点

### 4. 关键变更点
- 列出主要的文件变更
- 重点关注 agent-cli 包的变更

### 5. 提交风格参考
- 最近的提交信息格式
- 用于保持一致的命名风格

## ⚠️ 错误处理

| 问题 | 处理方式 |
|------|---------|
| 命令执行失败 | 显示友好提示（如「无变更」），继续执行后续步骤 |
| 空输出 | 显示相应提示，这是正常情况 |
| 大型变更 | 输出已限制行数，避免信息过载 |

## 输出要求

1. **信息准确性**：直接从命令输出提取信息，不臆测
2. **突出重点**：优先展示 agent-cli 包的变更
3. **标识范围**：明确指出是否包含其他包的变更
4. **支持决策**：提供足够信息支持后续的分支创建和提交信息生成
