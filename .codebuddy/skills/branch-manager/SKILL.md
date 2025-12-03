---
description: "🌿 分支管理 - 创建符合规范的Git分支"
---

# 🌿 Git 分支管理器

根据变更内容创建符合规范的分支名称。

## 🎯 分支命名规范

| 前缀 | 用途 | 示例 |
|------|------|------|
| `feat/` | 新功能 | `feat/git-analyzer` |
| `fix/` | Bug 修复 | `fix/memory-leak` |
| `refactor/` | 代码重构 | `refactor/session-manager` |
| `docs/` | 文档更新 | `docs/api-reference` |
| `chore/` | 构建/工具 | `chore/update-deps` |
| `test/` | 测试相关 | `test/add-unit-tests` |
| `perf/` | 性能优化 | `perf/reduce-bundle-size` |

## 📐 命名规则

1. **全部小写**：使用小写字母和连字符
2. **简洁明确**：清晰描述变更内容
3. **避免特殊字符**：只使用字母、数字、连字符
4. **长度适中**：建议 20-40 个字符

### 示例对比

| ✅ 正确 | ❌ 错误 | 问题 |
|--------|--------|------|
| `feat/smart-commit-generator` | `feature` | 太模糊 |
| `fix/git-status-parsing` | `fix_bug` | 使用下划线 |
| `refactor/interceptor-chain` | `mywork` | 无意义 |

## 📋 执行步骤

### 1. 检查当前分支状态
```bash
REPO_ROOT=$(git rev-parse --show-toplevel) && \
echo "=== 当前分支 ===" && git -C "$REPO_ROOT" branch --show-current && \
echo -e "\n=== 本地分支列表 ===" && git -C "$REPO_ROOT" branch
```

### 2. 判断是否需要新分支

| 情况 | 是否创建 |
|------|---------|
| 当前在 `main`/`master` 分支 | ✅ 创建 |
| 当前分支不符合命名规范 | ✅ 创建 |
| 用户明确要求新分支 | ✅ 创建 |
| 已在功能分支且命名合适 | ❌ 不创建 |
| 用户明确说明使用当前分支 | ❌ 不创建 |

### 3. 生成分支名

**流程**：
1. 确定变更类型 → 选择前缀
2. 提取核心变更内容 → 生成描述
3. 组合成分支名
4. 验证命名规范

### 4. 创建并切换分支

```bash
REPO_ROOT=$(git rev-parse --show-toplevel) && \
git -C "$REPO_ROOT" checkout -b <branch-name> && \
echo "✓ 已创建并切换到分支: <branch-name>"
```

## 输出要求

说明是否需要创建分支，如需要则提供建议的分支名。
