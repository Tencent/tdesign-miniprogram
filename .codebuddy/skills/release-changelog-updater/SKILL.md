---
name: release-changelog-updater
description: "📋 发版 Changelog 更新 - 合并 Changesets 并生成版本条目"
---

# 📋 发版 Changelog 更新器

在发版时读取并合并所有 changeset 文件，生成格式化的 CHANGELOG 版本条目。

## 🎯 更新目标

1. **读取 Changeset 文件**：从 `.changeset/` 目录读取所有待发布的变更
2. **按分类合并变更**：按照分类组织内容（🎉 新功能/🔧 功能改进/🐛 Bug修复 等）
3. **生成版本条目**：在 CHANGELOG.md 中插入新版本（包含版本号和发布日期）
4. **清理 Changeset 文件**：删除已合并的 changeset 文件

## 📋 执行步骤

### 1️⃣ 检查 Changeset 文件

列出所有待处理的 changeset 文件：

```bash
ls -1 .changeset/*.md | grep -v README.md
```

**如果没有文件**（只有 README.md 和 config.json）：
- 输出提示：「✨ 没有待合并的 changeset 文件，跳过 CHANGELOG 更新」
- 直接返回成功，不修改任何文件

### 2️⃣ 读取并解析 Changeset 文件

对每个 changeset 文件（`.changeset/*.md`，排除 README.md）：

**解析逻辑**：
1. **Frontmatter**（`---` 包裹的部分）：
   - 提取版本类型：`patch`、`minor` 或 `major`

2. **Summary**（frontmatter 之后的内容）：
   - 查找分类标题（以 `###` 开头的行，如 `### 🎉 新功能`）
   - 提取该分类下的所有内容（直到下一个 `###` 或文件结束）
   - 一个 changeset 可以包含多个分类

### 3️⃣ 按分类合并所有变更

**支持的分类及优先级**：
1. 🎉 新功能
2. 🔧 功能改进
3. 🐛 Bug修复
4. ⚡️ 性能优化
5. 📝 文档更新
6. 🧪 测试
7. 📦 依赖更新
8. 其他

**合并逻辑**：
- 将所有 changeset 文件中相同分类的内容合并到一起
- 每个变更条目保持独立的行
- 如果内容不以 `-` 开头，自动添加列表符号
- 按照上述优先级排序分类

### 4️⃣ 获取版本号和日期

- **版本号**：从 `version-manager` skill 获取
- **发布日期**：使用当前日期（格式：YYYY-MM-DD）

```bash
date +%Y-%m-%d
```

### 5️⃣ 生成并插入新版本条目

**插入位置**：在 CHANGELOG.md 的描述文字之后、第一个 `##` 版本标题之前

**实现步骤**：
1. 使用 Read 工具读取 CHANGELOG.md
2. 找到第一个 `##` 标题的位置
3. 使用 Edit 工具在该位置之前插入新版本内容

### 6️⃣ 删除已处理的 Changeset 文件

逐个删除已合并的 changeset 文件（保留 README.md 和 config.json）：

```bash
# 逐个删除已处理的文件
rm .changeset/adopt-changesets-workflow.md
rm .changeset/improve-session-list.md
```


## ⚠️ 注意事项

| 注意事项 | 说明 |
|---------|------|
| **文件排除** | 不要读取或删除 `README.md` 和 `config.json`，只处理 `.changeset/*.md` 文件 |
| **格式保持** | 版本号：`## [x.y.z] - YYYY-MM-DD`；分类标题：`### 🎉 新功能`；列表项：以 `-` 开头 |
| **插入位置** | 必须在描述文字之后、第一个 `##` 版本标题之前，新旧版本之间留一个空行 |
| **空文件处理** | 如果没有待处理的 `.md` 文件，直接返回成功并输出友好提示 |
| **依赖关系** | 版本号必须从 `version-manager` skill 获取，不要自己计算 |

## 📊 输出示例

```markdown
## 📋 Changelog 更新报告

**处理的 Changeset 文件**：
- ✅ adopt-changesets-workflow.md (patch)
- ✅ improve-session-list.md (patch)

**生成的版本条目**：
- 版本号：2.8.3
- 发布日期：2025-11-26
- 包含分类：🔧 功能改进

**插入位置**：CHANGELOG.md 第 7 行（描述文字之后）

**预览**：
```
## [2.8.3] - 2025-11-26

### 🔧 功能改进

- **Changelog 管理优化**：采用 Changesets 工具管理版本变更记录,避免多人协作时的合并冲突
- **会话列表优化**: 改进会话恢复面板的数据处理逻辑
```

**清理状态**：
- ✅ 已删除 2 个 changeset 文件
- ✅ 保留 README.md 和 config.json
```

## 输出要求

1. 列出所有处理的 changeset 文件及其版本类型
2. 显示生成的版本号和日期
3. 展示插入的新版本条目预览
4. 确认文件清理状态
5. 如有异常情况（如没有 changeset 文件），友好提示
