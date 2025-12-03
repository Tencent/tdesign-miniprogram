---
name: release-branch-manager
description: "🌿 发版分支管理 - 创建规范的发版分支"
---

# 🌿 发版分支管理器

根据版本号创建符合规范的发版分支。

## 🎯 分支命名规范

### 发版分支格式
```
publish/codebuddy-code-v{版本号}
```

### 示例
- `publish/codebuddy-code-v2.4.0`
- `publish/codebuddy-code-v1.0.12`
- `publish/codebuddy-code-v3.0.0`

## 📋 执行步骤

### 1. 检查当前分支

```bash
git branch --show-current
```

### 2. 判断是否需要创建发版分支

| 情况 | 是否创建 |
|------|---------|
| 当前在 `main` 或 `master` 分支 | ✅ 创建 |
| 当前在其他功能分支，但需要独立的发版分支 | ✅ 创建 |
| 当前已在 `publish/` 开头的分支 | ❌ 不创建 |
| 用户明确要求使用当前分支 | ❌ 不创建 |

### 3. 生成分支名

从 `version-manager` skill 获取新版本号，生成分支名：

```bash
BRANCH_NAME="publish/codebuddy-code-v${NEW_VERSION}"
```

**示例**：
- 版本号 `2.4.0` → 分支名 `publish/codebuddy-code-v2.4.0`
- 版本号 `1.0.12` → 分支名 `publish/codebuddy-code-v1.0.12`

### 4. 检查分支是否存在

```bash
# 检查本地分支
git branch --list "$BRANCH_NAME"

# 检查远程分支
git ls-remote --heads origin "$BRANCH_NAME"
```

**处理方式**：
- **本地存在**：切换到该分支
- **远程存在**：拉取并切换
- **都不存在**：创建新分支

### 5. 创建并切换分支

```bash
git checkout -b $BRANCH_NAME
```

或者，如果分支已存在：

```bash
git checkout $BRANCH_NAME
```

## 📊 分支管理策略

### 发版流程中的分支使用

```
main (主分支)
  │
  ├─ feat/new-feature (功能开发)
  │    │
  │    └─ MR → main
  │
  └─ publish/codebuddy-code-v2.4.0 (发版分支)
       │
       ├─ 更新版本号
       ├─ 更新 Changelog
       ├─ 构建验证
       │
       └─ MR → main (发版合并)
```

### 分支生命周期

1. **创建**：从 main 分支创建发版分支
2. **更新**：在发版分支上更新版本信息
3. **验证**：执行构建和测试
4. **合并**：通过 MR 合并回 main
5. **清理**：合并后可删除发版分支（可选）

## ⚠️ 注意事项

1. **命名规范**：必须严格遵循 `publish/codebuddy-code-v` 前缀
2. **版本号格式**：使用完整的 `x.y.z` 格式
3. **分支冲突**：如果分支已存在，需要确认是否复用
4. **权限检查**：确保有权限创建和推送分支

## 📊 输出示例

```markdown
## 发版分支管理报告

**当前分支**：main
**新分支名**：publish/codebuddy-code-v2.4.0

**操作**：✅ 已创建并切换到发版分支

**分支用途**：
- 版本号更新：2.3.0 → 2.4.0
- Changelog 更新：标记发布日期
- 构建验证：确保代码质量
- 发版 MR：合并回 main 分支
```

## 输出要求

1. 明确说明当前分支和目标分支
2. 显示分支创建或切换的操作结果
3. 说明分支的用途和后续步骤
4. 如有异常情况（如分支已存在），及时报告并说明处理方式
