/**
 * uniapp-x demo 首页配置（参考 packages/tdesign-uniapp/example/src/pages/home/data）
 *
 * 设计目标：
 *   1) 与 uniapp 版分组、命名、图标完全保持一致（base / nav / form / display / ux / other）；
 *   2) 通过 `path` 字段决定点击跳转目标——uniapp-x 当前已落地的组件指向其调试页；
 *      未落地的组件 path 为空，前端可统一引导到一个"暂未上线"的占位逻辑。
 *   3) 完全声明式，新增/调整组件清单不需要改 home 页面模板。
 */

export type HomeChild = {
  name: string;
  label: string;
  /** 已实现组件指向 pages-more 路径；未实现保持空字符串，UI 上做禁用提示 */
  path: string;
};

export type HomeGroup = {
  name: string;
  icon: string;
  childArr: HomeChild[];
};

/**
 * uniapp-x 当前已实现的组件 → 调试页路径
 * 路径来源：cli/sync-to-hbuilderx.mjs 中 `src/components/t-<name>/_example/t-<name>.uvue`
 *           会被同步到 `<root>/pages-more/tdesign-uniapp-x/t-<name>/t-<name>`
 *
 * 用 switch 而不是哈希索引，规避 uts 端对动态键访问的额外限制；
 * 新增/移除组件时只改这个函数即可。
 */
function p(name: string): string {
  switch (name) {
    case 'Avatar':
      return '/pages-more/tdesign-uniapp-x/t-avatar/t-avatar';
    case 'Badge':
      return '/pages-more/tdesign-uniapp-x/t-badge/t-badge';
    case 'Button':
      return '/pages-more/tdesign-uniapp-x/t-button/t-button';
    case 'Cell':
      return '/pages-more/tdesign-uniapp-x/t-cell/t-cell';
    case 'CheckTag':
      return '/pages-more/tdesign-uniapp-x/t-check-tag/t-check-tag';
    case 'Collapse':
      return '/pages-more/tdesign-uniapp-x/t-collapse/t-collapse';
    case 'CountDown':
      return '/pages-more/tdesign-uniapp-x/t-countdown/t-countdown';
    case 'Divider':
      return '/pages-more/tdesign-uniapp-x/t-divider/t-divider';
    case 'Empty':
      return '/pages-more/tdesign-uniapp-x/t-empty/t-empty';
    case 'Fab':
      return '/pages-more/tdesign-uniapp-x/t-fab/t-fab';
    case 'Footer':
      return '/pages-more/tdesign-uniapp-x/t-footer/t-footer';
    case 'Grid':
      return '/pages-more/tdesign-uniapp-x/t-grid/t-grid';
    case 'Icon':
      return '/pages-more/tdesign-uniapp-x/t-icon/t-icon';
    case 'Image':
      return '/pages-more/tdesign-uniapp-x/t-image/t-image';
    case 'ImageViewer':
      return '/pages-more/tdesign-uniapp-x/t-image-viewer/t-image-viewer';
    case 'Input':
      return '/pages-more/tdesign-uniapp-x/t-input/t-input';
    case 'Link':
      return '/pages-more/tdesign-uniapp-x/t-link/t-link';
    case 'Loading':
      return '/pages-more/tdesign-uniapp-x/t-loading/t-loading';
    case 'NoticeBar':
      return '/pages-more/tdesign-uniapp-x/t-notice-bar/t-notice-bar';
    case 'Progress':
      return '/pages-more/tdesign-uniapp-x/t-progress/t-progress';
    case 'QRCode':
      return '/pages-more/tdesign-uniapp-x/t-qrcode/t-qrcode';
    case 'Result':
      return '/pages-more/tdesign-uniapp-x/t-result/t-result';
    case 'Skeleton':
      return '/pages-more/tdesign-uniapp-x/t-skeleton/t-skeleton';
    case 'Steps':
      return '/pages-more/tdesign-uniapp-x/t-steps/t-steps';
    case 'Tag':
      return '/pages-more/tdesign-uniapp-x/t-tag/t-tag';
    case 'Watermark':
      return '/pages-more/tdesign-uniapp-x/t-watermark/t-watermark';
    case 'Overlay':
      return '/pages-more/tdesign-uniapp-x/t-overlay/t-overlay';
    default:
      return '';
  }
}

export const homeList: HomeGroup[] = [
  {
    name: '基础',
    icon: 'app',
    childArr: [
      { name: 'Button', label: '按钮', path: p('Button') },
      { name: 'Divider', label: '分割线', path: p('Divider') },
      { name: 'Fab', label: '悬浮按钮', path: p('Fab') },
      { name: 'Icon', label: '图标', path: p('Icon') },
      { name: 'Link', label: '链接', path: p('Link') },
      { name: 'Layout', label: '布局', path: p('Layout') },
    ] as HomeChild[],
  },
  {
    name: '导航',
    icon: 'view-module',
    childArr: [
      { name: 'BackTop', label: '返回顶部', path: p('BackTop') },
      { name: 'Drawer', label: '抽屉', path: p('Drawer') },
      { name: 'Indexes', label: '索引', path: p('Indexes') },
      { name: 'Navbar', label: '导航栏', path: p('Navbar') },
      { name: 'SideBar', label: '侧边栏', path: p('SideBar') },
      { name: 'Steps', label: '步骤条', path: p('Steps') },
      { name: 'TabBar', label: '标签栏', path: p('TabBar') },
      { name: 'Tabs', label: '选项卡', path: p('Tabs') },
    ] as HomeChild[],
  },
  {
    name: '输入',
    icon: 'bulletpoint',
    childArr: [
      { name: 'Calendar', label: '日历', path: p('Calendar') },
      { name: 'Cascader', label: '级联选择器', path: p('Cascader') },
      { name: 'Checkbox', label: '多选框', path: p('Checkbox') },
      { name: 'ColorPicker', label: '颜色选择器', path: p('ColorPicker') },
      { name: 'DateTimePicker', label: '时间选择器', path: p('DateTimePicker') },
      { name: 'Form', label: '表单', path: p('Form') },
      { name: 'Input', label: '输入框', path: p('Input') },
      { name: 'Picker', label: '选择器', path: p('Picker') },
      { name: 'Radio', label: '单选框', path: p('Radio') },
      { name: 'Rate', label: '评分', path: p('Rate') },
      { name: 'Search', label: '搜索框', path: p('Search') },
      { name: 'Slider', label: '滑动选择器', path: p('Slider') },
      { name: 'Stepper', label: '步进器', path: p('Stepper') },
      { name: 'Switch', label: '开关', path: p('Switch') },
      { name: 'Textarea', label: '多行文本框', path: p('Textarea') },
      { name: 'TreeSelect', label: '树形选择器', path: p('TreeSelect') },
      { name: 'Upload', label: '上传', path: p('Upload') },
    ] as HomeChild[],
  },
  {
    name: '数据展示',
    icon: 'image',
    childArr: [
      { name: 'Avatar', label: '头像', path: p('Avatar') },
      { name: 'Badge', label: '徽标', path: p('Badge') },
      { name: 'Cell', label: '单元格', path: p('Cell') },
      { name: 'Collapse', label: '折叠面板', path: p('Collapse') },
      { name: 'CountDown', label: '倒计时', path: p('CountDown') },
      { name: 'Empty', label: '空状态', path: p('Empty') },
      { name: 'Footer', label: '页脚', path: p('Footer') },
      { name: 'Grid', label: '宫格', path: p('Grid') },
      { name: 'Image', label: '图片', path: p('Image') },
      { name: 'ImageViewer', label: '图片预览', path: p('ImageViewer') },
      { name: 'Progress', label: '进度条', path: p('Progress') },
      { name: 'QRCode', label: '二维码', path: p('QRCode') },
      { name: 'Result', label: '结果', path: p('Result') },
      { name: 'Skeleton', label: '骨架屏', path: p('Skeleton') },
      { name: 'Sticky', label: '吸顶', path: p('Sticky') },
      { name: 'Swiper', label: '轮播图', path: p('Swiper') },
      { name: 'Tag', label: '标签', path: p('Tag') },
      { name: 'Watermark', label: '水印', path: p('Watermark') },
    ] as HomeChild[],
  },
  {
    name: '反馈',
    icon: 'chat',
    childArr: [
      { name: 'ActionSheet', label: '动作面板', path: p('ActionSheet') },
      { name: 'Dialog', label: '对话框', path: p('Dialog') },
      { name: 'DropdownMenu', label: '下拉菜单', path: p('DropdownMenu') },
      { name: 'Guide', label: '引导', path: p('Guide') },
      { name: 'Loading', label: '加载', path: p('Loading') },
      { name: 'Message', label: '消息通知', path: p('Message') },
      { name: 'NoticeBar', label: '公告栏', path: p('NoticeBar') },
      { name: 'Overlay', label: '遮罩层', path: p('Overlay') },
      { name: 'Popover', label: '弹出气泡', path: p('Popover') },
      { name: 'Popup', label: '弹出层', path: p('Popup') },
      { name: 'PullDownRefresh', label: '下拉刷新', path: p('PullDownRefresh') },
      { name: 'SwipeCell', label: '滑动操作', path: p('SwipeCell') },
      { name: 'Toast', label: '轻提示', path: p('Toast') },
    ] as HomeChild[],
  },
  {
    name: '其他',
    icon: 'menu-application',
    childArr: [
      { name: 'ConfigProvider', label: '全局配置', path: p('ConfigProvider') },
    ] as HomeChild[],
  },
];
