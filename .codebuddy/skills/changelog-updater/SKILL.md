---
description: "📝 Changelog更新 - 使用 changesets 创建变更记录"
---

# 📝 Changelog 更新器（基于 Changesets）

在 `.changeset` 目录创建独立的变更记录文件。

## 🎯 更新目标

1. **创建 changeset 文件**：在 `.changeset` 目录创建独立的变更记录
2. **分类变更**：按照标准格式分类（🎉 新功能/🔧 功能改进/🐛 Bug修复/📝 文档更新）
3. **保护敏感信息**：不透露代码实现细节
4. **保持简洁**：用用户视角描述功能变更

## 🔒 安全规则

| ❌ 禁止出现 | ✅ 应该使用 |
|-----------|-----------|
| 文件路径或文件名（如 `src/agent/tool.ts`） | 用户可见的功能描述 |
| 类名、接口名、函数名（如 `GitAnalyzer`） | 问题修复的效果说明 |
| 依赖库名称和版本（如 `axios@1.2.3`） | 性能改进的用户体验 |
| 代码片段或实现细节 | 新增命令或选项的说明 |
| 内部模块名称或架构细节 | - |
| API 端点或配置参数 | - |

## 📝 Changeset 文件格式

```markdown
---
"@genie/agent-cli": patch
---

### 🎉 新功能

- 新功能的用户可见描述

### 🔧 功能改进

- 已有功能的改进描述

### 🐛 Bug修复

- Bug 修复描述

### 📝 文档更新

- 文档更新描述
```

## 📊 分类说明

| 分类 | 图标 | 用途 | 版本类型 | 示例 |
|-----|------|------|---------|------|
| 新功能 | 🎉 | 全新的功能特性 | `minor` | 新增智能提交生成功能 |
| 功能改进 | 🔧 | 现有功能的优化和增强 | `patch` | 优化文件搜索性能 |
| Bug修复 | 🐛 | 问题修复 | `patch` | 修复图片粘贴失败问题 |
| 文档更新 | 📝 | 文档相关变更 | `patch` | 更新安装指南 |

## 📋 执行步骤

### 1. 分析变更性质

根据 `git-analyzer` 的结果确定类型：
- 新文件/新功能 → 🎉 新功能
- 功能增强/改进 → 🔧 功能改进
- Bug 修复 → 🐛 Bug修复
- 文档变更 → 📝 文档更新

### 2. 生成变更描述

用简洁的用户语言描述：
- 一行一个要点
- 避免技术细节
- 使用粗体突出关键词：`**关键词**：描述内容`

### 3. 确定变更类型

为 changeset frontmatter 选择类型：
- 🎉 新功能 → `minor`
- 🔧 功能改进 → `patch`
- 🐛 Bug修复 → `patch`
- 📝 文档更新 → `patch`

### 4. 创建 changeset 文件

生成一个描述性的文件名（如 `feature-name.md`），格式：

```markdown
---
"@genie/agent-cli": <major/minor/patch>
---

### 🔧 功能改进

- **错误处理增强**：改进服务端请求错误处理机制，提升错误信息准确性

### 🐛 Bug修复

- **图片粘贴优化**：提升剪贴板图片读取稳定性，支持多文件粘贴
```

**格式说明**：
- frontmatter 中必须包含包名和类型（`major`/`minor`/`patch`）
- 按分类组织变更条目
- 只包含需要的分类，不添加空分类
- 分类按优先级排序：🎉 新功能 → 🔧 功能改进 → 🐛 Bug修复 → 📝 文档更新

### 5. 保存文件

使用 Write 工具将内容写入：
```
/Users/yangsubo/workspace/genie/packages/agent-cli/.changeset/[descriptive-name].md
```

**文件名建议**：
- 使用英文描述主要变更
- 小写字母，用短横线分隔
- 例如：`improve-error-handling.md`, `fix-clipboard-paste.md`

## 📝 示例对比

### ❌ 错误示例
```markdown
### 🎉 新功能

- 在 `src/tools/git-analyzer.ts` 中添加了 `analyzeChanges()` 方法
- 集成 `simple-git` 库用于 Git 操作
- 新增 `GitAnalyzerService` 类实现变更分析
```

### ✅ 正确示例
```markdown
### 🎉 新功能

- **Git 变更智能分析**：自动识别代码变更类型和影响范围
- **智能提交生成**：根据变更内容自动生成规范的提交信息
```

## 📊 输出示例

```markdown
## Changeset 创建报告

**文件位置**：`.changeset/improve-error-handling.md`

**包含的变更**：

### 🔧 功能改进
- **错误处理增强**：改进服务端请求错误处理机制，提升错误信息准确性

### 🐛 Bug修复
- **图片粘贴优化**：提升剪贴板图片读取稳定性，支持多文件粘贴

✅ Changeset 文件已创建，将在下次发版时自动合并到 CHANGELOG.md
```

## 🔄 Changeset 生命周期

创建的 changeset 文件会在发版时通过 `release-changelog-updater` skill 自动合并到 CHANGELOG.md 并删除。

## 输出要求

1. 说明创建的 changeset 文件名和位置
2. 列出添加的条目和所属分类
3. 确认文件已创建成功
4. 如有异常情况，及时报告
