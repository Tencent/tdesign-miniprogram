# TDesign 微信小程序组件库兼容 QQ 小程序可行性评估

## 一、项目现状概述

该项目是一个 **pnpm monorepo** 组织的微信小程序组件库，核心组成：

| 模块 | 说明 |
|------|------|
| `packages/common` | 跨平台公共逻辑（纯 JS/TS） |
| `packages/components` | 93 个微信小程序原生组件源码 |
| `packages/pro-components` | 高级组件（chat） |
| 构建产物 | `_example/miniprogram_npm/tdesign-miniprogram` |

技术栈：TypeScript + WXML + WXS + Less → 构建为 JS + WXML + WXS + WXSS

---

## 二、可行性结论：整体可行，工程量中等

QQ 小程序与微信小程序在架构上高度相似（基于相同技术底座），**约 80% 的代码可直接兼容**，剩余 20% 需要针对性适配。

---

## 三、兼容性分析详情

### ✅ 完全兼容（无需修改）的部分

| 特性 | 匹配规模 | 说明 |
|------|---------|------|
| `Component()` / `Behavior()` 构造器 | 90+ 组件 | QQ 小程序完全支持 |
| `wx:if` / `wx:for` / `wx:key` 模板语法 | 141+ 处 | QQ 小程序完全支持 |
| `triggerEvent` 事件通信 | 150+ 处 / 66 文件 | 完全支持 |
| `createSelectorQuery` | 40+ 处 / 25 文件 | 完全支持 |
| `selectComponent` / `selectAllComponents` | 22 处 / 17 文件 | 完全支持 |
| `getApp()` / `getCurrentPages()` | 少量 | 完全支持 |
| `getSystemInfoSync` | 8 处 / 5 文件 | 完全支持 |
| `properties` / `data` / `methods` / `lifetimes` | 全部组件 | 完全支持 |
| `relations`（组件关系） | 多处 | 完全支持 |
| WXML 模板语法 | 全部 .wxml | QQ 小程序使用相同语法 |
| WXSS 样式 | 全部 .wxss | QQ 小程序使用相同语法 |
| Less → WXSS 构建 | 构建流程 | 产物格式相同 |

### ⚠️ 需要适配（中等风险）的部分

| 问题 | 影响范围 | 适配方案 | 工作量 |
|------|---------|---------|--------|
| **`wx.*` 全局对象** | 61 个文件 / 122+ 处 | 需替换为 `qq.*` 或使用平台抽象层 | ⭐⭐⭐ |
| **WXS 文件** | 33 个 .wxs 文件 / 99+ 引用 | QQ 小程序支持 QXS（语法基本相同），需验证复杂交互逻辑 | ⭐⭐ |
| **`wx.nextTick`** | 7 个组件 / 9 处 | 添加 `setTimeout(fn, 0)` 作为 fallback | ⭐ |
| **`wx.getWindowInfo` / `getAppBaseInfo` / `getDeviceInfo`** | `common/wechat.ts` 全局封装 | 已有 `getSystemInfoSync` fallback，需确认 QQ 环境回退逻辑 | ⭐ |
| **`createIntersectionObserver({ nativeMode: true })`** | 1 处 | 移除 `nativeMode` 参数 | ⭐ |
| **`wx://form-field` / `wx://form-field-button` 等内置 behaviors** | 11 个组件 | QQ 小程序可能不支持或有差异，需逐一验证 | ⭐⭐⭐ |
| **`wx.chooseMedia` / `wx.chooseMessageFile`** | upload 组件 | QQ 小程序可能使用 `qq.chooseImage` 等旧 API | ⭐⭐ |
| **`wx.getMenuButtonBoundingClientRect`** | navbar 组件 | QQ 小程序可能不支持或返回值不同 | ⭐⭐ |

### 🔴 高风险/可能不支持的部分

| 问题 | 影响范围 | 说明 |
|------|---------|------|
| **Button `open-type` 事件** | button 组件 | `getuserinfo`、`getphonenumber`、`chooseavatar`、`agreeprivacyauthorization` 等是微信特有的，QQ 有自己的 open-type 体系 |
| **WXS 中的 `callMethod`** | swipe-cell、upload/drag 等复杂交互 | QQ 小程序的 QXS 对 `callMethod` 支持情况不确定 |
| **Skyline 渲染引擎相关** | 部分组件有 skyline 适配 | QQ 小程序不支持 Skyline，但这部分是可选的 |

---

## 四、微信小程序特有 API 使用统计

### 1. `wx.*` 全局对象调用

- **匹配文件数**：61 个文件
- **匹配次数**：122+

**主要分布文件：**

| 文件 | 调用次数 | 主要 API |
|------|---------|---------|
| `upload/upload.ts` | 10 | `wx.chooseMedia`, `wx.chooseMessageFile` |
| `navbar/navbar.ts` | 7 | `wx.getMenuButtonBoundingClientRect` |
| `common/wechat.ts` | 4 | `wx.getWindowInfo`, `wx.getAppBaseInfo`, `wx.getDeviceInfo`, `wx.getSystemInfoSync` |
| `common/utils.ts` | 2 | `wx.nextTick` |
| `indexes/indexes.ts` | 多次 | DOM 查询相关 |
| `sticky/sticky.ts` | 多次 | 滚动位置计算 |
| `color-picker/color-picker.ts` | 多次 | Canvas 相关 |
| `qrcode/qrcode.ts` | 多次 | Canvas 相关 |

### 2. WXS 文件详情

共 **33 个 `.wxs` 文件**，被 **99+ 个 `.wxml` 文件**引用：

| 文件路径 | 大小 | 复杂度 |
|----------|------|--------|
| `upload/drag.wxs` | 7.38 KB | 🔴 高（手势拖拽交互） |
| `swipe-cell/swipe-cell.wxs` | 4.86 KB | 🔴 高（滑动手势交互） |
| `upload/upload.wxs` | 3.39 KB | 🟡 中 |
| `common/utils.wxs` | 3.06 KB | 🟡 中（公共工具函数） |
| `progress/progress.wxs` | 1.94 KB | 🟢 低 |
| `rate/rate.wxs` | 1.8 KB | 🟡 中（触摸事件） |
| `badge/badge.wxs` | 1.69 KB | 🟢 低 |
| `paragraph/paragraph.wxs` | 1.44 KB | 🟢 低 |
| `calendar/calendar.wxs` | 1.2 KB | 🟢 低 |
| `tabs/tabs.wxs` | 728 B | 🟢 低 |
| 其他 23 个文件 | < 1 KB | 🟢 低 |

### 3. 使用 `wx://` 内置 Behaviors 的组件

| 组件 | Behavior | QQ 兼容风险 |
|------|----------|------------|
| button | `wx://form-field-button` | 🔴 高 |
| input | `wx://form-field` | 🔴 高 |
| textarea | `wx://form-field` | 🔴 高 |
| checkbox | `wx://form-field` | 🔴 高 |
| checkbox-group | `wx://form-field` | 🔴 高 |
| radio | `wx://form-field` | 🔴 高 |
| radio-group | `wx://form-field` | 🔴 高 |
| switch | `wx://form-field` | 🔴 高 |
| form | `wx://component-export` | 🟡 中 |
| scroll-view | `wx://proxy-scroll-view` | 🟡 中 |
| pull-down-refresh | `wx://proxy-scroll-view` | 🟡 中 |

---

## 五、适配方案建议

### 方案 A：平台抽象层（推荐）

在 `packages/components/common/` 中增加一个**平台适配层**：

```typescript
// common/platform.ts
const isQQ = typeof qq !== 'undefined';
const isWx = typeof wx !== 'undefined';

export const platform = isQQ ? qq : wx;

export function getWindowInfo() {
  if (platform.getWindowInfo) return platform.getWindowInfo();
  return platform.getSystemInfoSync();
}

export function nextTick(fn: () => void) {
  if (platform.nextTick) {
    platform.nextTick(fn);
  } else {
    setTimeout(fn, 0);
  }
}

export function chooseMedia(options: any) {
  if (platform.chooseMedia) {
    return platform.chooseMedia(options);
  }
  // QQ 小程序 fallback 到 chooseImage
  return platform.chooseImage({
    count: options.count,
    sourceType: options.sourceType,
    success: options.success,
    fail: options.fail,
  });
}
// ... 更多 API 封装
```

**优点**：改动集中，一处修改全局生效  
**缺点**：需要改动所有直接调用 `wx.*` 的文件

### 方案 B：构建时替换

在 Gulp 构建管道中增加一个**目标平台参数**，构建 QQ 小程序版本时：

1. 将 `wx.` 替换为 `qq.`
2. 将 `.wxs` 重命名为 `.qxs`（如需要）
3. 处理 Button open-type 等平台差异

**优点**：源码不变，通过构建产出不同平台包  
**缺点**：无法处理 API 差异（仅是简单替换）

### 方案 C（推荐组合）：A + B 混合

- 核心 API 差异通过**平台抽象层**处理
- 全局对象引用通过**构建时条件**处理
- Button open-type 等业务差异通过**条件逻辑**处理

---

## 六、详细工作量估算

| 工作项 | 估算时间 | 说明 |
|--------|---------|------|
| 1. 搭建平台抽象层 | 2-3 天 | 封装 `wx.*` → `platform.*` |
| 2. 改造 `common/` 公共模块 | 1-2 天 | `wechat.ts`, `utils.ts`, `version.ts` 等 |
| 3. 改造 `wx.*` 直接调用 | 3-5 天 | 61 个文件中的 122+ 处引用 |
| 4. WXS 兼容验证与修复 | 3-5 天 | 33 个 WXS 文件逐一测试，特别是手势交互类 |
| 5. 内置 Behaviors 适配 | 2-3 天 | 验证 `wx://form-field` 等 11 个组件是否有替代方案 |
| 6. Button open-type 适配 | 1-2 天 | QQ 小程序 open-type 体系差异 |
| 7. Upload 组件适配 | 1-2 天 | 文件选择 API 差异 |
| 8. Navbar 组件适配 | 0.5-1 天 | 胶囊按钮位置获取方式 |
| 9. 构建流程改造 | 2-3 天 | 支持输出 QQ 小程序产物 |
| 10. 全量组件测试验证 | 5-7 天 | 93+ 组件在 QQ 小程序中运行测试 |
| 11. 文档与示例适配 | 1-2 天 | QQ 小程序 demo 工程配置 |

**总计：约 20-35 人天（1-1.5 个月）**

---

## 七、核心风险点

| 风险 | 级别 | 应对 |
|------|------|------|
| QQ 小程序基础库版本滞后 | 🔴 高 | QQ 小程序基础库更新远慢于微信，部分新 API 可能长期不支持 |
| WXS/QXS `callMethod` 差异 | 🟡 中 | 需要 QQ 小程序真机测试，模拟器可能不准确 |
| `wx://` 内置 behaviors 不支持 | 🟡 中 | 如果 QQ 不支持，需要自行实现表单字段交互逻辑 |
| QQ 小程序官方文档不完善 | 🟡 中 | 部分 API 需要实际测试才知道是否支持 |
| 后续维护双平台同步 | 🟡 中 | 需要建立良好的平台抽象，避免每次更新都要改两套 |

---

## 八、建议实施步骤

1. **POC 验证**（3-5 天）：选取 5-10 个核心组件（button、input、dialog、picker、swipe-cell）在 QQ 小程序中运行，验证核心可行性
2. **搭建平台抽象层**（2-3 天）：`common/platform.ts` + 构建管道改造
3. **逐组件适配**（10-15 天）：按优先级逐一适配 93 个组件
4. **WXS 专项验证**（3-5 天）：重点验证手势交互类 WXS
5. **全量回归测试**（5-7 天）：确保所有组件在 QQ 小程序中正常运行

---

## 九、结论

| 维度 | 评估 |
|------|------|
| **技术可行性** | ✅ 高 — QQ 小程序与微信小程序架构高度一致 |
| **工程量** | 中等 — 约 20-35 人天 |
| **核心难点** | WXS 复杂交互兼容 + 内置 behaviors 替代 + API 差异处理 |
| **推荐方案** | 平台抽象层 + 构建时平台分支 |
| **最大风险** | QQ 小程序基础库滞后导致部分能力无法实现 |

> 💡 **建议**：先用 5 天左右做一个 **POC（概念验证）**，选几个代表性组件在 QQ 小程序中跑通，确认核心风险点的实际情况后再决定完整适配的投入。
