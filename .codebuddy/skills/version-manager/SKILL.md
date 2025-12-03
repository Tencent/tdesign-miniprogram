---
name: version-manager
description: "🔢 版本号管理 - 分析变更类型并更新版本号"
---

# 🔢 版本号管理器

根据变更类型自动确定版本号，并更新 package.json 文件。

## 🎯 语义化版本规范

### 版本号格式
```
major.minor.patch
主版本.次版本.修订版本
```

### 版本递增规则

| 变更类型 | 版本号变更 | 示例 |
|---------|-----------|------|
| **BREAKING CHANGE** | Major +1 | 1.2.3 → 2.0.0 |
| **feat（新功能）** | Minor +1 | 1.2.3 → 1.3.0 |
| **fix/docs/chore** | Patch +1 | 1.2.3 → 1.2.4 |

### 判断优先级
1. 如果有 BREAKING CHANGE → Major 版本
2. 如果有 feat 提交 → Minor 版本
3. 其他情况 → Patch 版本

## 📋 执行步骤

### 0. 检查变更范围 ⚠️ 前置条件

**必须满足以下条件才能继续版本更新:**

检查本次变更是否涉及组件源代码目录：
```bash
git diff --name-only HEAD | grep "^packages/pro-components/chat/"
```

**判断逻辑:**
- ✅ 如果有输出（变更包含 `packages/pro-components/chat/` 下的文件）→ 继续执行版本更新
- ❌ 如果无输出（变更不涉及组件源代码）→ **跳过版本更新**，输出提示信息

**提示信息模板:**
```markdown
⚠️ 跳过版本号更新

**原因**: 本次变更未涉及组件源代码目录 `packages/pro-components/chat/`

**当前变更范围**:
- .codebuddy/ 配置文件
- 文档文件
- 其他非组件代码

**说明**: 只有修改组件源代码时才需要更新版本号。配置文件、文档等变更不会触发版本更新。
```

**边界情况:**
- 如果是新分支（无 HEAD）,使用 `git diff --cached --name-only` 检查暂存区
- 如果是首次提交，跳过此检查

### 1. 获取当前版本号

从 `packages/care-ui-uni/package.json` 读取版本信息：
```bash
jq -r '.version' packages/care-ui-uni/package.json
```

**注意**：版本号位于 `packages/care-ui-uni/package.json` 的 `version` 字段。

### 2. 读取 Changeset 文件

列出所有待处理的 changeset 文件：
```bash
find .changeset -name "*.md" ! -name "README.md" -type f
```

对每个 changeset 文件：
- 解析 frontmatter（`---` 包裹的部分）
- 提取版本类型字段，格式示例：
  ```yaml
  ---
  "@genie/agent-cli": patch  # 可能的值: major, minor, patch
  ---
  ```
- 汇总所有文件的版本类型

**版本类型优先级**：取最高级别
- `major` > `minor` > `patch`
- 示例：如果有 2 个 `patch` 和 1 个 `minor`，则选择 `minor`

**边界情况处理**：
- 如果 `.changeset/` 目录下没有 changeset 文件（只有 README.md），默认使用 `patch`
- 如果无法解析某个文件，输出警告并跳过该文件

### 3. 计算新版本号

根据汇总的版本类型递增版本号：

```javascript
const [major, minor, patch] = currentVersion.split('.').map(Number)

if (versionType === 'major') {
  newVersion = `${major + 1}.0.0`
} else if (versionType === 'minor') {
  newVersion = `${major}.${minor + 1}.0`
} else { // patch
  newVersion = `${major}.${minor}.${patch + 1}`
}
```

**示例**：
- 当前版本 `2.8.2` + `patch` → `2.8.3`
- 当前版本 `2.8.2` + `minor` → `2.9.0`
- 当前版本 `2.8.2` + `major` → `3.0.0`

### 4. 更新 package.json

使用 jq 命令更新版本号：
```bash
jq '.version = "新版本号"' packages/care-ui-uni/package.json > packages/care-ui-uni/package.json.tmp && \
mv packages/care-ui-uni/package.json.tmp packages/care-ui-uni/package.json
```

**重要**：必须更新 `packages/care-ui-uni/package.json` 中的 `version` 字段。

## 📊 输出信息

生成版本更新报告：

```markdown
## 版本更新报告

**当前版本**：2.8.2
**新版本**：2.8.3

**版本类型**：patch

**Changeset 文件统计**：
- 处理了 1 个 changeset 文件
- 版本类型分布：patch (1)

**版本号更新位置**：packages/care-ui-uni/package.json → version
```

## ⚠️ 注意事项

1. **版本号格式验证**：确保版本号符合 `x.y.z` 格式
2. **变更确认**：重大版本更新（Major）应特别谨慎
3. **文件路径**：版本号位于 `packages/care-ui-uni/package.json` 的 `version` 字段
4. **变更范围检查**：仅当修改 `packages/pro-components/chat/` 目录下的文件时才更新版本号
5. **跳过场景**：
   - 仅修改文档文件（*.md）
   - 仅修改配置文件（.codebuddy/、.env等）
   - 仅修改测试文件或示例代码
   - 仅修改构建脚本

## 📝 版本更新决策流程图

```
开始
  ↓
检查 git diff 是否包含 packages/pro-components/chat/
  ↓
  ├─ 是 → 继续执行版本更新
  │         ↓
  │       读取当前版本号
  │         ↓
  │       分析 Changeset 文件
  │         ↓
  │       计算新版本号
  │         ↓
  │       更新 package.json
  │         ↓
  │       输出版本更新报告
  │
  └─ 否 → 跳过版本更新
            ↓
          输出跳过提示信息
            ↓
          结束
```

## 输出要求

1. **变更范围检查结果**：明确说明是否包含组件源代码变更
2. **版本更新决策**：说明是否需要更新版本号及原因
3. **版本号信息**（如需更新）：明确说明当前版本和新版本
4. **变更类型解释**：基于什么变更类型确定版本号
5. **更新文件路径**：显示更新的文件路径和字段
6. **异常处理**：如有异常情况，及时报告并等待确认

## 📊 完整输出示例

### 场景 1: 包含组件源代码变更（需要更新版本）

```markdown
## 🔍 变更范围检查

**检查结果**: ✅ 发现组件源代码变更

**变更文件列表**:
- packages/pro-components/chat/chat-sender/chat-sender.ts
- .codebuddy/README.md

**判断**: 包含组件源代码变更，继续执行版本更新。

---

## 版本更新报告

**当前版本**: 0.1.35-alpha.3
**新版本**: 0.1.36-alpha.0

**版本类型**: minor（新增功能）

**Changeset 文件统计**:
- 处理了 2 个 changeset 文件
- 版本类型分布：minor (1), patch (1)
- 最高优先级：minor

**版本号更新位置**: packages/care-ui-uni/package.json → version

✅ 版本号已更新
```

### 场景 2: 不包含组件源代码变更（跳过更新）

```markdown
## 🔍 变更范围检查

**检查结果**: ❌ 未发现组件源代码变更

**变更文件列表**:
- .codebuddy/README.md
- .codebuddy/QUICK_START.md
- .codebuddyrc.json
- .env.example
- CHANGELOG.md
- docs/release-notes/v0.1.35-alpha.3.md

**判断**: 变更仅涉及配置文件和文档，不需要更新组件版本号。

---

⚠️ **跳过版本号更新**

**原因**: 本次变更未涉及组件源代码目录 `packages/pro-components/chat/`

**当前变更范围**:
- CodeBuddy 配置文件
- 文档文件
- 环境变量配置

**说明**: 只有修改组件源代码时才需要更新版本号。配置文件、文档等变更不会触发版本更新。

**建议**: 可以直接提交这些变更，无需修改 package.json 版本号。
```
