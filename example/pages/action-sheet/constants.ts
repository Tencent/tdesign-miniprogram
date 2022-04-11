import { ActionSheetShowOption, ActionSheetTheme } from 'tdesign-miniprogram/action-sheet/index';

const singleCharItems = ['默认选项1', '默认选项2', '默认选项3'];

const basicListOption: ActionSheetShowOption = {
  theme: ActionSheetTheme.List,
  selector: '#t-action-sheet-imperative',
  items: [
    {
      label: '默认选项',
    },
    {
      label: '失效选项',
      disabled: true,
    },
    {
      label: '警告选项',
      color: '#e34d59',
    },
  ],
};

const withIconListOption: ActionSheetShowOption = {
  theme: ActionSheetTheme.List,
  selector: '#t-action-sheet-imperative',
  items: [
    {
      label: '默认选项',
      icon: 'app',
    },
    {
      label: '失效选项',
      disabled: true,
      icon: 'app',
    },
    {
      label: '警告选项',
      color: '#e34d59',
      icon: 'app',
    },
  ],
};

const grid: ActionSheetShowOption = {
  theme: ActionSheetTheme.Grid,
  selector: '#t-action-sheet-imperative',
  items: [
    {
      label: '文字1',
      color: '#0052d9;',
      url: 'https://cdn-we-retail.ym.tencent.com/retail-ui/components-exp/avatar/avatar-v2/1.png',
    },
    {
      label: '文字2',
      url: 'https://cdn-we-retail.ym.tencent.com/retail-ui/components-exp/avatar/avatar-v2/2.png',
    },
    {
      label: '文字3',
      url: 'https://cdn-we-retail.ym.tencent.com/retail-ui/components-exp/avatar/avatar-v2/3.png',
    },
    {
      label: '文字4',
      url: 'https://cdn-we-retail.ym.tencent.com/retail-ui/components-exp/avatar/avatar-v2/4.png',
    },
    {
      label: '文字5',
      url: 'https://cdn-we-retail.ym.tencent.com/retail-ui/components-exp/avatar/avatar-v2/5.png',
    },
    {
      label: '文字6',
      url: 'https://cdn-we-retail.ym.tencent.com/retail-ui/components-exp/avatar/avatar-v2/1.png',
    },
    {
      label: '文字7',
      url: 'https://cdn-we-retail.ym.tencent.com/retail-ui/components-exp/avatar/avatar-v2/2.png',
    },
    {
      label: '文字8',
      url: 'https://cdn-we-retail.ym.tencent.com/retail-ui/components-exp/avatar/avatar-v2/3.png',
    },
  ],
};

const withSwiperGrid: ActionSheetShowOption = {
  theme: ActionSheetTheme.Grid,
  selector: '#t-action-sheet-imperative',
  count: 6,
  items: [
    {
      label: '文字1-1',
      color: '#4fc08d',
      url: 'https://cdn-we-retail.ym.tencent.com/retail-ui/components-exp/avatar/avatar-v2/1.png',
    },
    {
      label: '文字1-2',
      url: 'https://cdn-we-retail.ym.tencent.com/retail-ui/components-exp/avatar/avatar-v2/2.png',
    },
    {
      label: '文字1-3',
      url: 'https://cdn-we-retail.ym.tencent.com/retail-ui/components-exp/avatar/avatar-v2/3.png',
    },
    {
      label: '文字1-4',
      url: 'https://cdn-we-retail.ym.tencent.com/retail-ui/components-exp/avatar/avatar-v2/4.png',
    },
    {
      label: '文字1-5',
      url: 'https://cdn-we-retail.ym.tencent.com/retail-ui/components-exp/avatar/avatar-v2/5.png',
    },
    {
      label: '文字1-6',
      url: 'https://cdn-we-retail.ym.tencent.com/retail-ui/components-exp/avatar/avatar-v2/1.png',
    },
    {
      label: '文字2-1',
      url: 'https://cdn-we-retail.ym.tencent.com/retail-ui/components-exp/avatar/avatar-v2/2.png',
    },
    {
      label: '文字2-2',
      url: 'https://cdn-we-retail.ym.tencent.com/retail-ui/components-exp/avatar/avatar-v2/3.png',
    },
    {
      label: '文字2-3',
      url: 'https://cdn-we-retail.ym.tencent.com/retail-ui/components-exp/avatar/avatar-v2/1.png',
    },
    {
      label: '文字2-4',
      url: 'https://cdn-we-retail.ym.tencent.com/retail-ui/components-exp/avatar/avatar-v2/2.png',
    },
    {
      label: '文字2-5',
      url: 'https://cdn-we-retail.ym.tencent.com/retail-ui/components-exp/avatar/avatar-v2/3.png',
    },
    {
      label: '文字2-6',
      url: 'https://cdn-we-retail.ym.tencent.com/retail-ui/components-exp/avatar/avatar-v2/4.png',
    },
    {
      label: '文字3-1',
      url: 'https://cdn-we-retail.ym.tencent.com/retail-ui/components-exp/avatar/avatar-v2/5.png',
    },
    {
      label: '文字3-2',
      url: 'https://cdn-we-retail.ym.tencent.com/retail-ui/components-exp/avatar/avatar-v2/1.png',
    },
    {
      label: '文字3-3',
      url: 'https://cdn-we-retail.ym.tencent.com/retail-ui/components-exp/avatar/avatar-v2/2.png',
    },
    {
      label: '文字3-4',
      url: 'https://cdn-we-retail.ym.tencent.com/retail-ui/components-exp/avatar/avatar-v2/3.png',
    },
    {
      label: '文字3-5',
      url: 'https://cdn-we-retail.ym.tencent.com/retail-ui/components-exp/avatar/avatar-v2/1.png',
    },
    {
      label: '文字3-6',
      url: 'https://cdn-we-retail.ym.tencent.com/retail-ui/components-exp/avatar/avatar-v2/2.png',
    },
    {
      label: '文字4-1',
      url: 'https://cdn-we-retail.ym.tencent.com/retail-ui/components-exp/avatar/avatar-v2/3.png',
    },
    {
      label: '文字4-2',
      url: 'https://cdn-we-retail.ym.tencent.com/retail-ui/components-exp/avatar/avatar-v2/4.png',
    },
    {
      label: '文字4-3',
      url: 'https://cdn-we-retail.ym.tencent.com/retail-ui/components-exp/avatar/avatar-v2/5.png',
    },
    {
      label: '文字4-4',
      url: 'https://cdn-we-retail.ym.tencent.com/retail-ui/components-exp/avatar/avatar-v2/1.png',
    },
    {
      label: '文字4-5',
      url: 'https://cdn-we-retail.ym.tencent.com/retail-ui/components-exp/avatar/avatar-v2/2.png',
    },
    {
      label: '文字4-6',
      url: 'https://cdn-we-retail.ym.tencent.com/retail-ui/components-exp/avatar/avatar-v2/3.png',
    },
  ],
};

export { singleCharItems, basicListOption, withIconListOption, grid, withSwiperGrid };
