# cli/sync — 纯脚本对齐工具链（无 LLM）

> 与 `cli/harness`（基于 LLM 的视觉对齐）并行存在，本目录走**确定性脚本**路线：
> 把"机械活"全交给脚本，"创意活"留给人，**不调用任何 LLM**。

## 设计原则

1. **零 LLM**：所有同步动作都是规则可枚举的，跑出来 100% 决定论
2. **dry-run 优先**：sync-* 默认只打印 plan，加 `--apply` 才真写文件
3. **报告给人看**：audit-* 产物落到 `cli/sync/.reports/*.md`（已 gitignore）

## 工具一览

| 脚本 | 作用 | npm 入口 |
| --- | --- | --- |
| `audit-props.mjs` | 对比 baseline ↔ target 的 props | `npm run audit:props -- t-input` |
| `audit-tokens.mjs` | 对比 baseline ↔ target 的 less CSS Token | `npm run audit:tokens -- t-input` |
| `typecheck.mjs` | 跑 `tsc --noEmit`，整理出错文件 | `npm run audit:typecheck` |
| `report.mjs` | 一键跑前三步并生成 README index | `npm run audit` |
| `sync-props.mjs` | **真改**：把 baseline 缺失字段写入 target | `npm run sync:props -- t-input --apply` |
| `sync-tokens.mjs` | **真改**：把 baseline 缺失 token 写入 target | `npm run sync:tokens -- t-input --apply --overwrite` |

## sync 行为细节

### sync-tokens

- 缺失字段：插入 `@td-{name}: var(--td-{xxx}, NORMALIZED_FALLBACK);`
- `NORMALIZED_FALLBACK` 经过两层标准化：
  1. **less 变量展开**：`@text-color-primary` → `rgba(0, 0, 0, 0.9)`（递归解析 _variables.less + 组件局部别名）
  2. **rpx → px 转换**：`32rpx` → `16px`（750 设计稿 → 375 设计稿）
- 默认值不一致：默认保留 target；加 `--overwrite` 才覆盖

### sync-props

- 字段类型自动转换：`[String, null]` → `string | null`（types.ts）+ `[String, null]`（uvue defineProps）
- **跳过**以下字段，让用户手动处理：
  - `onXxx` 事件 → 应该用 `defineEmits` 而非 prop
  - 纯 `Function` 类型 → 让用户写具体函数签名
  - 纯 `Object` 类型 → 让用户写具体 interface
- 工厂函数 default `() => ({})` 会自动降级到合理值（避免 uvue 类型不匹配）

## 数据流

```
packages/uniapp-components/{comp}/         packages/uniapp-x-components/src/components/t-{comp}/
       ├── props.ts       ─────┐                  ┌──── t-{comp}.types.ts
       ├── type.ts        ─────┤  audit-props ◀──┤
       └── {comp}.less    ─────┤                  └──── t-{comp}.uvue (defineProps)
                               │  audit-tokens ◀────── t-{comp}.theme.less
       common/style/_variables.less ──→ less-vars-expand.mjs（字典）
                               │
                               └──→  cli/sync/.reports/*.md
```

## 工作流推荐

```bash
# 1) 看现状
npm run audit

# 2) 一键真改（低风险：只补缺）
npm run sync:props -- --all --apply
npm run sync:tokens -- --all --apply

# 3) 高风险：把 target 现有不一致的 token 默认值也改成 baseline 标准化值
npm run sync:tokens -- --all --apply --overwrite

# 4) 回到 audit 验证
npm run audit
```

## 与 harness 的分工

| 维度 | `cli/sync` (本目录) | `cli/harness` |
| --- | --- | --- |
| 是否调用 LLM | ❌ | ✅ |
| 解决问题 | API/Token **结构 + 默认值对齐** | 视觉对齐（截图 diff） |
| 单组件耗时 | < 1 秒 | 数分钟 |
| 准确性 | 100% | LLM 抽卡 |
| 谁来改 | 脚本（dry-run 后人工 review） | LLM（看截图） |

**推荐工作流**：先用 `cli/sync` 做结构与默认值对齐到 100%，再用 `cli/harness` 做最后一公里的视觉微调（如有必要）。

## 实战记录（2026-06-15）

第一轮全量 sync 后实测数据：

| 组件 | props 缺失（自动补） | token 缺失（自动补） | token 默认值修正 | tsc |
|---|---|---|---|---|
| t-button | 20 字段 | 99 个 | 0 | ✅ |
| t-cell | 8 字段 | 23 个 | 0 | ✅ |
| t-input | 0（已对齐） | 7 个 | 10 处 | ✅ |

剩 1 处 t-button.loadingProps（纯 Object 类型）需手动定义 interface。
