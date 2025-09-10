:: BASE_DOC ::

## API

### FormItem Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
arrow | Boolean | false | 是否显示右侧箭头 | N
help | String | - | 表单项说明内容 | N
label | String | '' | 字段标签名称 | N
label-align | String | - | 表单字段标签对齐方式：左对齐、右对齐、顶部对齐。默认使用 Form 的对齐方式，优先级高于 Form.labelAlign。可选项：left/right/top | N
label-width | String / Number | - | 可以整体设置标签宽度，优先级高于 Form.labelWidth | N
name | String | - | 表单字段名称 | N
required-mark | Boolean | true | 是否显示必填符号（*），优先级高于 Form.requiredMark | N
show-error-message | Boolean | true | 校验不通过时，是否显示错误提示信息，优先级高于 `Form.showErrorMessage` | N
