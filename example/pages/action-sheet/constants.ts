import { ActionSheetTheme } from 'tdesign-miniprogram/action-sheet/index';

const singleCharItems = ['默认选项1', '默认选项2', '默认选项3'];

const basicListOption = {
  theme: ActionSheetTheme.List,
  selector: '#t-action-sheet-imperative',
  items: [
    {
      label: '默认选项',
    },
    {
      label: '自定义选项',
      color: '#0052D9',
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

const withIconListOption = {
  theme: ActionSheetTheme.List,
  selector: '#t-action-sheet-imperative',
  items: [
    {
      label: '默认选项',
      icon: 'app',
    },
    {
      label: '自定义选项',
      icon: 'app',
      color: '#0052D9',
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

const grid = {
  theme: ActionSheetTheme.Grid,
  selector: '#t-action-sheet-imperative',
  items: [
    {
      label: '文字',
      icon: 'image',
    },
    {
      label: '文字',
      icon: 'image',
    },
    {
      label: '文字',
      icon: 'image',
    },
    {
      label: '文字',
      icon: 'image',
    },
    {
      label: '文字',
      icon: 'image',
    },
    {
      label: '文字',
      icon: 'image',
    },
    {
      label: '文字',
      icon: 'image',
    },
    {
      label: '文字',
      icon: 'image',
    },
  ],
};

const withSwiperGrid = {
  theme: ActionSheetTheme.Grid,
  selector: '#t-action-sheet-imperative',
  items: [
    {
      label: '文字',
      icon: 'image',
    },
    {
      label: '文字',
      icon: 'image',
    },
    {
      label: '文字',
      icon: 'image',
    },
    {
      label: '文字',
      icon: 'image',
    },
    {
      label: '文字',
      icon: 'image',
    },
    {
      label: '文字',
      icon: 'image',
    },
    {
      label: '文字',
      icon: 'image',
    },
    {
      label: '文字',
      icon: 'image',
    },
    {
      label: '文字',
      icon: 'image',
    },
    {
      label: '文字',
      icon: 'image',
    },
    {
      label: '文字',
      icon: 'image',
    },
    {
      label: '文字',
      icon: 'image',
    },
    {
      label: '文字',
      icon: 'image',
    },
    {
      label: '文字',
      icon: 'image',
    },
    {
      label: '文字',
      icon: 'image',
    },
    {
      label: '文字',
      icon: 'image',
    },
    {
      label: '文字',
      icon: 'image',
    },
    {
      label: '文字',
      icon: 'image',
    },
    {
      label: '文字',
      icon: 'image',
    },
    {
      label: '文字',
      icon: 'image',
    },
    {
      label: '文字',
      icon: 'image',
    },
    {
      label: '文字',
      icon: 'image',
    },
    {
      label: '文字',
      icon: 'image',
    },
    {
      label: '文字',
      icon: 'image',
    },
  ],
};

export { singleCharItems, basicListOption, withIconListOption, grid, withSwiperGrid };
