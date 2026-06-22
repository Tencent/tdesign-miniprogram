# Result

反馈结果状态。用于反馈一系列操作任务的结果。

## Props

| 名称 | 类型 | 默认 | 说明 |
|---|---|---|---|
| theme | `'default' \| 'success' \| 'warning' \| 'error'` | `'default'` | 内置主题，控制主题色与默认图标 |
| title | string | `''` | 标题 |
| description | string | `''` | 描述文字 |
| icon | `string \| boolean` | `true` | 图标。`true` 按 theme 渲染内置字体图标；string 视为图片 URL；`false` 不显示图标 |
| image | string | `''` | 图片地址（优先级高于 `icon`） |
| customClass | string | `''` | 透传额外类名 |

> uniapp-x 端不支持 `icon` 透传 Object，如需自定义图标请使用 `image` 插槽。

## Slots

| 名称 | 说明 |
|---|---|
| image | 自定义图标 / 图片显示内容；存在时不再渲染默认主题图标与 `image` |
| title | 自定义标题显示内容 |
| description | 自定义描述显示内容 |

## 用法

```vue
<!-- 基础（按 theme 渲染默认图标） -->
<t-result title="操作成功" description="请耐心等待审核结果" />

<!-- 主题 -->
<t-result theme="success" title="操作成功" description="说明文案" />
<t-result theme="warning" title="操作警告" description="说明文案" />
<t-result theme="error" title="操作失败" description="说明文案" />

<!-- 自定义图片 -->
<t-result
  image="https://tdesign.gtimg.com/mobile/demos/result1.png"
  title="自定义结果"
  description="描述文字"
/>

<!-- 自定义描述（插槽） -->
<t-result theme="success" title="支付成功">
  <template #description>
    <text>请到</text>
    <text style="color: #0052d9">订单详情</text>
    <text>查看订单状态</text>
  </template>
</t-result>

<!-- 不显示图标 -->
<t-result :icon="false" title="纯文字结果" description="说明文案" />
```

## CSS Variables

| 名称 | 默认值 | 说明 |
|---|---|---|
| `--td-result-icon-size` | `80px` | 图标/图片尺寸 |
| `--td-result-icon-default-color` | `#0052d9` | 默认主题图标颜色 |
| `--td-result-icon-success-color` | `#2ba471` | 成功主题图标颜色 |
| `--td-result-icon-warning-color` | `#ed7b2f` | 警告主题图标颜色 |
| `--td-result-icon-error-color` | `#d54941` | 失败主题图标颜色 |
| `--td-result-title-font-size` | `20px` | 标题字号 |
| `--td-result-title-color` | `rgba(0, 0, 0, 0.9)` | 标题颜色 |
| `--td-result-title-margin-top` | `4px` | 标题上边距 |
| `--td-result-description-font-size` | `14px` | 描述字号 |
| `--td-result-description-color` | `rgba(0, 0, 0, 0.6)` | 描述颜色 |
| `--td-result-description-margin-top` | `8px` | 描述上边距 |
