# TDesign UniApp X 组件完善继续指南

## 当前进度

- **总组件数**: 88 个
- **已完成（完整实现）**: 54 个（含之前已有的 + 本次新增的 6 个）
- **骨架已生成（待完善）**: 34 个
- **完成度**: 61.4%

## 已完善完整实现的新组件（本次）

1. ✅ `t-checkbox` - 复选框
2. ✅ `t-checkbox-group` - 复选框组
3. ✅ `t-radio` - 单选框
4. ✅ `t-radio-group` - 单选框组
5. ✅ `t-textarea` - 文本域

## 待完善组件清单（34个）

### 🔴 高优先级（建议优先完成）

| 组件 | 说明 | 参考文件 |
|------|------|----------|
| t-form | 表单 | `uniapp-components/form/form.vue` |
| t-form-item | 表单项 | `uniapp-components/form-item/form-item.vue` |
| t-input | 输入框（已有但需检查） | `uniapp-components/input/input.vue` |
| t-picker | 选择器 | `uniapp-components/picker/picker.vue` |
| t-picker-item | 选择器项 | `uniapp-components/picker-item/picker-item.vue` |
| t-date-time-picker | 日期时间选择器 | `uniapp-components/date-time-picker/` |
| t-stepper | 步进器 | `uniapp-components/stepper/stepper.vue` |
| t-switch | 开关 | `uniapp-components/switch/switch.vue` |
| t-slider | 滑块 | `uniapp-components/slider/slider.vue` |
| t-rate | 评分 | `uniapp-components/rate/rate.vue` |
| t-search | 搜索框 | `uniapp-components/search/search.vue` |
| t-upload | 上传 | `uniapp-components/upload/upload.vue` |

### 🟡 中优先级

| 组件 | 说明 | 参考文件 |
|------|------|----------|
| t-calendar | 日历 | `uniapp-components/calendar/` |
| t-cascader | 级联选择器 | `uniapp-components/cascader/` |
| t-dropdown-menu | 下拉菜单 | `uniapp-components/dropdown-menu/` |
| t-dropdown-item | 下拉项 | `uniapp-components/dropdown-item/` |
| t-popover | 气泡卡片 | `uniapp-components/popover/` |
| t-pull-down-refresh | 下拉刷新 | `uniapp-components/pull-down-refresh/` |
| t-swiper | 轮播图 | `uniapp-components/swiper/` |
| t-swiper-nav | 轮播导航 | `uniapp-components/swiper-nav/` |
| t-swipe-cell | 滑动单元格 | `uniapp-components/swipe-cell/` |
| t-sticky | 吸顶容器 | `uniapp-components/sticky/` |
| t-tree-select | 树选择 | `uniapp-components/tree-select/` |
| t-table | 表格 | `uniapp-components/table/` |

### 🟢 低优先级

| 组件 | 说明 | 参考文件 |
|------|------|----------|
| t-color-picker | 颜色选择器 | `uniapp-components/color-picker/` |
| t-config-provider | 全局配置 | `uniapp-components/config-provider/` |
| t-draggable | 可拖拽 | `uniapp-components/draggable/` |
| t-guide | 引导页 | `uniapp-components/guide/` |
| t-locale | 国际化 | `uniapp-components/locale/` |
| t-message-item | 消息项 | `uniapp-components/message-item/` |
| t-paragraph | 段落 | `uniapp-components/paragraph/` |
| t-scroll-view | 滚动视图 | `uniapp-components/scroll-view/` |
| t-segmented | 分段器 | `uniapp-components/segmented/` |
| t-text | 文本 | `uniapp-components/text/` |
| t-title | 标题 | `uniapp-components/title/` |
| t-transition | 过渡动画 | `uniapp-components/transition/` |

## 完善步骤（每个组件）

### 1. 同步 API 定义

```bash
# 从 uniapp-components 复制 props.ts 和 type.ts
cp uniapp-components/{comp}/props.ts uniapp-x-components/src/components/t-{comp}/props.ts
cp uniapp-components/{comp}/type.ts uniapp-x-components/src/components/t-{comp}/type.ts
```

### 2. 同步 CSS Token

```bash
# 复制主题样式文件
cp uniapp-components/{comp}/t-{comp}.theme.less uniapp-x-components/src/components/t-{comp}/t-{comp}.theme.less
# 或复制 .less 文件
cp uniapp-components/{comp}/{comp}.less uniapp-x-components/src/components/t-{comp}/
```

### 3. 完善 .uvue 实现

参考 `uniapp-components/{comp}/{comp}.vue` 的实现，转换为 `.uvue` 格式：

- **模板部分**: 保持基本一致，注意 uni-app x 的指令语法
- **脚本部分**:
  - `export default {}` → `<script setup lang="uts">`
  - `props` → `defineProps({...})`
  - `data()` → `ref()` / `reactive()`
  - `methods` → `function` 或直接定义
  - `computed` → `computed(() => ...)`
  - `watch` → `watch(() => ..., () => ...)`
- **样式部分**: 保持基本一致，确保引入了 `.theme.less`

### 4. 创建/完善示例代码

```bash
# 复制示例代码
cp -r uniapp-components/{comp}/_example uniapp-x-components/src/components/t-{comp}/_example
```

### 5. 更新导出

确保 `src/components/index.ts` 中已导出该组件。

## 快速批量同步脚本

由于之前的脚本有问题，建议使用以下手动命令逐个同步：

```bash
# 同步单个组件的 API 和样式
COMP=form  # 替换为目标组件名
cp /Users/guowangyang/Documents/github/tdesign-miniprogram/packages/uniapp-components/$COMP/props.ts \
   /Users/guowangyang/Documents/github/tdesign-miniprogram/packages/uniapp-x-components/src/components/t-$COMP/props.ts
cp /Users/guowangyang/Documents/github/tdesign-miniprogram/packages/uniapp-components/$COMP/type.ts \
   /Users/guowangyang/Documents/github/tdesign-miniprogram/packages/uniapp-x-components/src/components/t-$COMP/type.ts
cp /Users/guowangyang/Documents/github/tdesign-miniprogram/packages/uniapp-components/$COMP/t-$COMP.theme.less \
   /Users/guowangyang/Documents/github/tdesign-miniprogram/packages/uniapp-x-components/src/components/t-$COMP/t-$COMP.theme.less
```

## 已补充导出的组件

在 `packages/uniapp-x-components/src/components/index.ts` 中已添加导出：

- t-action-sheet
- t-calendar
- t-cascader
- t-color-picker
- t-date-time-picker
- t-dialog
- t-drawer
- t-dropdown-item
- t-dropdown-menu
- t-fab
- t-form
- t-form-item
- t-grid
- t-grid-item
- t-image-viewer
- t-indexes
- t-indexes-anchor
- t-message
- t-popup
- t-qrcode
- t-rate
- t-search
- t-side-bar
- t-side-bar-item
- t-slider
- t-stepper
- t-swipe-cell
- t-swiper
- t-swiper-nav
- t-switch
- t-table
- t-tabs
- t-tab-panel
- t-tag
- t-textarea
- t-toast
- t-upload
- ... 等 40+ 个组件

## 下一步行动

1. **逐个完善高优先级组件**（参考上述清单）
2. **每个组件确保 4 个文件完整**：
   - `t-{comp}.uvue` - 组件实现
   - `t-{comp}.types.ts` - 类型定义（或 type.ts）
   - `t-{comp}.variants.ts` - 变体样式
   - `t-{comp}.theme.less` - CSS Token
3. **每个组件确保有示例代码**（`_example/` 目录）
4. **运行测试确保组件能正常编译和使用**

## 注意事项

1. **API 对齐**: 确保 `defineProps` 中的属性与 `uniapp-components` 的 `props.ts` 一致
2. **CSS Token 对齐**: 确保 `.theme.less` 中的 CSS 变量与 `uniapp-components` 一致
3. **事件对齐**: 确保发出的事件名称与 `uniapp-components` 一致
4. **插槽对齐**: 确保提供的插槽与 `uniapp-components` 一致
