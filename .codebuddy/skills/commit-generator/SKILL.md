---
name: commit-generator
description: "✍️ 提交信息生成 - 生成符合Conventional Commits规范的提交信息"
---

# ✍️ Commit 信息生成器

根据代码变更生成符合 [Conventional Commits](https://www.conventionalcommits.org/) 规范的提交信息。

## 🎯 提交信息格式

```
<type>(<scope>): <subject>

<body>


🤖 Generated with [CodeBuddy Code]

Co-Authored-By: CodeBuddy Code
```

### 格式说明

| 部分 | 要求 | 示例 |
|-----|------|------|
| **Title** | `<type>(<scope>): <subject>`，不超过 50 字符 | `feat(agent-cli-git): 添加智能提交生成功能` |
| **空行** | Title 和 Body 之间必须有空行 | - |
| **Body** | 详细描述变更内容（为什么、解决什么、主要变更点、影响范围） | 见下方示例 |
| **签名** | 以 CodeBuddy 签名结尾（前面留两个空行） | 见上方格式 |

## 📝 Type 类型

| Type | 说明 | 使用场景 | 示例 |
|------|------|---------|------|
| `feat` | 新功能 | 新增文件较多 | `feat(agent-cli-git): 添加智能提交生成功能` |
| `fix` | Bug 修复 | 修复 bug | `fix(agent-cli-parser): 修复文件路径解析错误` |
| `docs` | 文档更新 | 只改文档 | `docs(agent-cli-readme): 更新安装说明` |
| `refactor` | 重构 | 重构代码 | `refactor(agent-cli-agent): 简化拦截器链逻辑` |
| `test` | 测试 | 测试相关 | `test(agent-cli-unit): 添加单元测试` |
| `chore` | 构建/工具 | 只改工具配置 | `chore(agent-cli-deps): 升级依赖版本` |

## 🎯 Scope 范围

**必须使用 `agent-cli-` 前缀**，根据项目结构确定：

| Scope | 说明 |
|-------|------|
| `agent-cli-git` | Git 相关功能 |
| `agent-cli-agent` | Agent 系统 |
| `agent-cli-tools` | 工具模块 |
| `agent-cli-ui` | 用户界面 |
| `agent-cli-session` | 会话管理 |
| `agent-cli-mcp` | MCP 集成 |
| `agent-cli-sandbox` | 沙箱系统 |

## ✍️ Subject 主题

- 使用祈使句，现在时态：「添加」而非「添加了」
- 首字母小写
- 结尾不加句号
- 不超过 50 个字符
- 清晰描述变更内容

**示例**：
- ✅ `添加 Git 变更智能分析功能`
- ✅ `修复内存泄漏问题`
- ✅ `简化工具注册流程`
- ❌ `添加了新功能`（过去式）
- ❌ `update code`（不清晰）

## 📝 Body 详细描述

**必须包含以下内容**：

1. **变更原因**：为什么做这个变更
2. **解决的问题**：解决了什么问题或实现了什么需求
3. **主要变更点**：列出关键的变更内容（2-5 点）
4. **影响范围**：说明影响的模块或功能

**示例**：
```
为了提升 MR 创建流程的自动化程度和可维护性。

通过将原本内联的命令拆分为多个原子 skill，实现更好的模块化和复用。

主要变更:
- 新增 git-analyzer skill 用于分析代码变更
- 新增 branch-manager skill 用于分支管理
- 新增 commit-generator skill 用于生成规范提交
- 新增 docs-updater skill 用于文档更新
- 新增 changelog-updater skill 用于变更日志管理
- 重构 /mr 命令为基于 skill 编排的流程

影响范围: .codebuddy/commands/ 和 .codebuddy/skills/ 目录
```

## 🔧 生成步骤

### 1. 分析变更内容
基于 `git-analyzer` 的报告：
- 识别变更的主要类型
- 确定影响的范围/模块
- 提取核心变更点

### 2. 确定 Type 和 Scope
根据变更类型选择合适的 type 和 scope。

### 3. 编写 Subject
模板：`<type>(agent-cli-<scope>): <动词><宾语>`

### 4. 编写 Body
包含变更原因、解决的问题、主要变更点、影响范围。

### 5. 添加 CodeBuddy 签名
所有提交信息必须以以下内容结尾：
```


🤖 Generated with [CodeBuddy Code]

Co-Authored-By: CodeBuddy Code
```

### 6. 参考历史提交
```bash
git log --oneline -5 --format="%s"
```
保持与项目现有提交风格一致。

## ✅ 质量检查

好的提交信息：
- ✅ 类型准确
- ✅ 范围明确
- ✅ 主题清晰简洁（不超过 50 字符）
- ✅ 使用现在时态
- ✅ 首字母小写
- ✅ 必须包含 Body 详细描述
- ✅ 必须包含 CodeBuddy 签名

Body 描述质量检查：
- ✅ 说明了变更原因
- ✅ 列出了主要变更点
- ✅ 明确了影响范围
- ✅ 内容清晰易懂

## 📊 完整示例

```
feat(agent-cli-git): 添加 Git 变更智能分析功能

为了提升代码提交质量和自动化程度。

实现了基于 git 命令的智能变更分析，自动识别变更类型和范围。

主要变更:
- 新增 git-analyzer skill 用于分析 git 状态和变更
- 支持识别变更类型 (feat/fix/refactor 等)
- 支持提取关键变更点
- 集成到 /mr 命令工作流中

影响范围: .codebuddy/skills/git-analyzer/ 目录


🤖 Generated with [CodeBuddy Code]

Co-Authored-By: CodeBuddy Code
```

## 输出要求

提供生成的提交信息（包含完整的 Body 描述和 CodeBuddy 签名），可提供 2-3 个备选方案供选择。
