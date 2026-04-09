:: BASE_DOC ::

## API

### FormItem Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
arrow | Boolean | false | 是否显示右侧箭头 | N
content-align | String | - | 表单内容对齐方式，优先级高于 Form.contentAlign。可选项：left/right | N
for | String | - | label 原生属性 | N
help | String | - | 表单项说明内容 | N
label | String | '' | 字段标签名称 | N
label-align | String | - | 表单字段标签对齐方式：左对齐、右对齐、顶部对齐。默认使用 Form 的对齐方式，优先级高于 Form.labelAlign。可选项：left/right/top | N
label-width | String / Number | - | 可以整体设置标签宽度，优先级高于 Form.labelWidth | N
name | String | - | 表单字段名称 | N
required-mark | Boolean | undefined | 是否显示必填符号（*），优先级高于 Form.requiredMark | N
rules | Array | - | 表单字段校验规则。TS 类型：`Array<FormRule>` | N
show-error-message | Boolean | undefined | 校验不通过时，是否显示错误提示信息，优先级高于 `Form.showErrorMessage` | N

### FormItem Slots

名称 | 描述
-- | --
help | 自定义 `help` 显示内容
label | 自定义 `label` 显示内容

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述 
-- | -- | --
--td-form-item-horizontal-padding | 32rpx | -
--td-form-item-justify-content | space-between | -
--td-form-item-label-width | 160rpx | -
--td-form-item-vertical-padding | 32rpx | -
