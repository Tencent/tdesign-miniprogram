# Input

文本输入框，与 [@tdesign/uniapp 的 input](https://tdesign.tencent.com/uniapp/components/input) 视觉与 API 全面对齐：列表内嵌型样式、下分割线、横竖排布局、状态色 tips、清除按钮、前/后置文字与图标、字符限制等。

## Props

| 名称 | 类型 | 默认 | 说明 |
|---|---|---|---|
| modelValue / v-model | string | `''` | 受控值（Vue 3 标准 v-model） |
| value | string | `''` | 与 `modelValue` 等价，兼容 uniapp 版命名 |
| placeholder | string | `''` | 占位符 |
| placeholderClass | string | `''` | 占位符自定义类名 |
| placeholderStyle | string | `''` | 占位符自定义样式 |
| type | `'text' \| 'number' \| 'idcard' \| 'digit' \| 'safe-password' \| 'password' \| 'nickname'` | `'text'` | 输入类型 |
| label | string | `''` | 左侧标签文字 |
| tips | string | `''` | 输入框下方提示文本（颜色随 status 变化） |
| status | `'default' \| 'success' \| 'warning' \| 'error'` | `'default'` | 校验状态（影响 tips 颜色） |
| align | `'left' \| 'center' \| 'right'` | `'left'` | 输入文字对齐 |
| layout | `'horizontal' \| 'vertical'` | `'horizontal'` | 标签 + 输入框排列方式 |
| borderless | boolean | `false` | 是否隐藏底部分割线 |
| prefixIcon | string | `''` | 前置图标名（字符串）；复杂图标请用 `prefix-icon` slot |
| suffixIcon | string | `''` | 后置图标名；复杂图标请用 `suffix-icon` slot |
| suffix | string | `''` | 后置文本（位于 suffixIcon 之前） |
| disabled | boolean | `false` | 禁用 |
| readonly | boolean | `false` | 只读 |
| clearable | boolean | `false` | 是否显示清除按钮（值非空时才显示） |
| clearTrigger | `'always' \| 'focus'` | `'always'` | 清除按钮显示时机 |
| maxlength | number | `-1` | 最大长度，`-1` 不限制 |
| maxcharacter | number | `-1` | 最大字符数（一个汉字算 2），`-1` 不限制 |
| allowInputOverMax | boolean | `false` | 超出 maxlength/maxcharacter 是否允许继续输入 |
| focus | boolean | `false` | 自动获取焦点 |
| confirmType | `'send' \| 'search' \| 'next' \| 'go' \| 'done'` | `'done'` | 键盘右下角按钮文字 |
| confirmHold | boolean | `false` | 点击键盘右下角按钮时是否保持键盘 |
| adjustPosition | boolean | `true` | 键盘弹起时是否自动上推页面 |
| format | `(value: string) => string` | — | 格式化函数（在失焦时执行） |
| customClass | string | `''` | 透传额外类名 |

## Events

| 名称 | 参数 | 说明 |
|---|---|---|
| update:modelValue | `(value: string)` | v-model 同步 |
| update:value | `(value: string)` | 兼容 uniapp 版 |
| change | `({ value, cursor?, keyCode? })` | 值变更 |
| focus | `({ value })` | 聚焦 |
| blur | `({ value, cursor? })` | 失焦（format 已执行） |
| clear | `({ value: '' })` | 用户点击清除按钮 |
| enter | `({ value })` | 用户按下回车 |
| click | `({ trigger: 'input' \| 'suffix' \| 'suffix-icon' })` | 点击输入区 / suffix / suffix-icon |
| keyboardheightchange | `{ height, duration }` | 键盘高度变更 |
| nicknamereview | `{ pass, timeout }` | 昵称审核（仅 type=nickname） |

## Slots

| 名称 | 说明 |
|---|---|
| label | 自定义标签内容 |
| prefix-icon | 自定义前置图标 |
| suffix | 自定义后置文本 |
| suffix-icon | 自定义后置图标 |
| tips | 自定义底部提示 |
| extra | 输入框右侧额外区（如操作按钮） |

## CSS Variables

样式遵循 `--td-input-*` 体系，可通过覆盖任意 token 做主题化（与 uniapp 版同名）：

```css
--td-input-bg-color
--td-input-vertical-padding
--td-input-horizontal-padding
--td-input-border-color
--td-input-border-left-space
--td-input-default-text-color
--td-input-disabled-text-color
--td-input-placeholder-text-color
--td-input-label-text-color
--td-input-suffix-text-color
--td-input-suffix-icon-color
--td-input-prefix-icon-color
--td-input-success-tips-color
--td-input-warning-tips-color
--td-input-error-tips-color
--td-input-align-items
```

## 用法

```vue
<!-- 基础 -->
<t-input v-model="name" label="姓名" placeholder="请输入文字" />

<!-- 带字数限制 -->
<t-input
  v-model="bio"
  label="标签文字"
  placeholder="请输入文字"
  tips="最大输入10个字符"
  :maxlength="10"
/>

<!-- 带操作（suffix-icon） -->
<t-input
  label="标签文字"
  placeholder="请输入文字"
  suffix-icon="info-circle-filled"
  @click="onIconClick"
/>

<!-- 带前置图标 -->
<t-input prefix-icon="app" label="标签文字" placeholder="请输入文字" />

<!-- 校验状态 -->
<t-input
  v-model="phone"
  label="手机号"
  status="error"
  tips="手机号输入不正确"
/>

<!-- 竖排 -->
<t-input
  v-model="addr"
  layout="vertical"
  label="地址"
  placeholder="请输入文字"
/>

<!-- 自定义后置（验证码/操作按钮） -->
<t-input v-model="code" label="验证码" placeholder="输入验证码">
  <template #suffix>
    <text class="verify">发送验证码</text>
  </template>
</t-input>

<!-- 失焦格式化（保留两位小数） -->
<t-input
  v-model="price"
  label="价格"
  align="right"
  suffix="元"
  type="number"
  :format="(v) => /^\d+(\.\d+)?$/.test(v) ? parseFloat(v).toFixed(2) : v"
/>
```
