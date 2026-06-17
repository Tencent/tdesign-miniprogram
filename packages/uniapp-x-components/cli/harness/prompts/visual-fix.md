## 任务：让 target 与 baseline 视觉/API 对齐

组件名：**{{COMP_NAME}}**

### 1. 视觉对比（请仔细看 3 张图）

**baseline**（uniapp 官方 demo，目标长这样）

![baseline]({{BASELINE_IMG_URL}})

**target**（当前 uniapp-x 实现，需要修复）

![target]({{TARGET_IMG_URL}})

**像素 diff**（红色 = 差异；像素差比 {{DIFF_RATIO}}，预算 0.5%）

![diff]({{DIFF_IMG_URL}})

### 2. Props 审计（baseline {{BASELINE_COUNT}} / target {{TARGET_COUNT}}）

#### 缺失字段（baseline 有 / target 没有，需要补齐）
```json
{{MISSING_PROPS_JSON}}
```

#### 多余字段（target 有 / baseline 没有，按需删除或保留）
```json
{{EXTRA_PROPS_JSON}}
```

### 3. 当前 target 源码（仅这 4 个文件可被修改）

#### {{COMP_NAME}}.types.ts
```ts
{{TARGET_TYPES}}
```

#### {{COMP_NAME}}.variants.ts
```ts
{{TARGET_VARIANTS}}
```

#### {{COMP_NAME}}.uvue
```vue
{{TARGET_UVUE}}
```

#### {{COMP_NAME}}.theme.less
```less
{{TARGET_THEME}}
```

### 4. baseline props 契约（仅做 API 对齐参考，**不要照抄实现**）

#### baseline {{BASELINE_PROPS_FILE}}
```ts
{{BASELINE_PROPS}}
```

> 注：baseline 是 uniapp（vue3）写法，target 是 uniapp x（uvue/uts），语法和编译规则不同：
> - 不要照抄 vue3 的 v-html / scoped slot 语法
> - 不要引入未声明的 css 变量
> - 必须保留 cn / cva 工具函数风格
> - 类型需用 uts 兼容写法

### 5. 约束（**必读**）

1. **只输出修改过的文件**，按 system 中的 `<<<FILE path="...">>>` 块格式
2. **每个文件最多输出 1 次**；**禁止重复输出相同的 FILE 块**；**禁止输出未修改的文件**
3. 严禁修改 utils 或别的组件，严禁创建新文件
4. 高 ROI 优先：
   - 缺失 props 加上（types.ts）
   - 视觉差距大的部分（间距/字号/边框/颜色）按 baseline 截图修齐
5. 输出语言：仅 FILE 块，**不要任何解释/思考/markdown 标题/代码 fence ```**
6. 输出末尾必须以 `<<<END>>>` 结束最后一个文件块；不要追加任何文字

请直接开始输出 FILE 块。
