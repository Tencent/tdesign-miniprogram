# 📚 Skills 使用指南

本目录包含项目自定义的 Skills，用于自动化常见的开发任务。

## 📋 可用的 Skills

| Skill 名称 | 描述 | 用途 |
|-----------|------|------|
| `git-analyzer` | Git 变更分析 | 分析 git 状态、分支信息和变更详情 |
| `version-manager` | 版本号管理 | 分析变更类型并自动更新版本号 |
| `branch-manager` | 分支管理 | 创建符合规范的 Git 分支 |
| `release-branch-manager` | 发版分支管理 | 创建规范的发版分支 |
| `changelog-updater` | Changelog 更新 | 使用 changesets 创建变更记录 |
| `release-changelog-updater` | 发版 Changelog 更新 | 合并 Changesets 并生成版本条目 |
| `release-notes-generator` | Release Notes 生成 | 从 Changelog 生成用户友好的发版说明 |
| `commit-generator` | 提交信息生成 | 生成符合 Conventional Commits 规范的提交信息 |
| `docs-updater` | 文档更新 | 检查并更新 docs 目录的相关文档 |

## 🚀 如何使用 Skills

### 方法 1：在 CodeBuddy Code CLI 中使用（推荐）

当您使用 CodeBuddy Code CLI 时，这些 skills 会自动加载。您可以通过以下方式调用：

```bash
# 在对话中提及 skill 名称，AI 会自动识别并使用
cbc "请使用 git-analyzer skill 分析当前变更"
```

AI 助手会：
1. 识别您提到的 skill
2. 读取对应的 SKILL.md 文件内容
3. 按照 skill 中的指令执行操作

### 方法 2：AI 助手自动调用

在执行相关任务时，AI 助手会自动判断是否需要使用某个 skill：

```bash
# AI 会自动使用 version-manager skill
cbc "帮我发布新版本"

# AI 会自动使用 commit-generator skill
cbc "为当前变更生成提交信息"
```

### 方法 3：在 Command 中引用

在 `.codebuddy/commands/` 目录的自定义命令中，可以引用这些 skills：

```markdown
## 执行步骤

1. 使用 `git-analyzer` skill 分析变更
2. 使用 `version-manager` skill 确定版本号
3. ...
```

## 🛠️ Skill 文件结构

每个 skill 都是一个 `SKILL.md` 文件，包含：

```markdown
---
name: skill-name
description: "Skill 描述"
allowed-tools: "tool1,tool2,tool3"  # 可选
---

# Skill 标题

详细的执行步骤和说明...
```

### Frontmatter 字段说明

- `name`（可选）：Skill 名称，如果未指定则使用目录名
- `description`（必需）：简短描述，会显示在 skill 列表中
- `allowed-tools`（可选）：限制此 skill 可以使用的工具列表

## 📝 创建新的 Skill

1. 在 `.codebuddy/skills/` 目录下创建新目录：
   ```bash
   mkdir .codebuddy/skills/my-skill
   ```

2. 创建 `SKILL.md` 文件：
   ```bash
   cat > .codebuddy/skills/my-skill/SKILL.md << 'EOF'
   ---
   name: my-skill
   description: "我的自定义 Skill"
   ---
   
   # 我的 Skill
   
   ## 执行步骤
   
   1. 第一步...
   2. 第二步...
   EOF
   ```

3. 重启 CodeBuddy Code CLI，新 skill 会自动加载

## ⚠️ 重要说明

### Skill 加载机制

- **项目级 Skills**：从 `<project>/.codebuddy/skills/` 加载
- **用户级 Skills**：从 `~/.codebuddy/skills/` 加载
- 项目级 skills 优先级更高，可以覆盖同名的用户级 skills

### 与 `use_skill` 工具的区别

- `use_skill` 工具：调用 **AI 助手系统预定义的 skills**（如 `skill-creator`）
- 本地 Skills：通过 **SkillTool** 工具调用，AI 助手会自动识别并使用

### 调试 Skills

如果 skill 没有被正确加载：

1. 检查文件名是否为 `SKILL.md`（大小写敏感）
2. 检查 frontmatter 格式是否正确（YAML 格式）
3. 检查目录结构：`.codebuddy/skills/<skill-name>/SKILL.md`
4. 查看 CodeBuddy Code 日志：
   ```bash
   cbc --verbose
   ```

## 📚 相关文档

- [Commands 文档](../commands/README.md) - 了解如何创建自定义命令
- [Changesets 工作流](../../CHANGESETS_WORKFLOW.md) - 了解变更管理流程
- [发版流程](../commands/release.md) - 了解完整的发版流程

---

**提示**：Skills 是 CodeBuddy Code 的强大功能，可以大幅提升开发效率。善用 skills 可以实现复杂任务的自动化！
