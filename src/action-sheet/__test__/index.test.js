import simulate from 'miniprogram-simulate';
import path from 'path';
import * as Util from '../../common/utils';
import { show, close } from '../show';

describe('action-sheet', () => {
  const ActionSheetTheme = {
    List: 'list',
    Grid: 'grid',
  };

  const actionSheet = load(path.resolve(__dirname, `../action-sheet`), 't-action-sheet');

  describe('props', () => {
    it(': cancel-text', async () => {
      const id = simulate.load({
        template: `<t-action-sheet id="t-action-sheet"
        visible
        cancel-text="{{cancelText}}" />`,
        data: {
          cancelText: 'cancel',
        },
        usingComponents: {
          't-action-sheet': actionSheet,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));
      // expect(comp.toJSON()).toMatchSnapshot();
      const $actionSheet = comp.querySelector('#t-action-sheet');
      const $cancel = $actionSheet.querySelector('.t-action-sheet__cancel');
      expect($cancel.dom.textContent.trim()).toBe($actionSheet.data.cancelText);
    });

    it(': theme & count', async () => {
      let clickItemValue;
      const handleSelected = jest.fn((selected) => {
        clickItemValue = selected.detail;
      });
      const id = simulate.load({
        template: `<t-action-sheet
          id="t-action-sheet"
          visible
          theme="{{theme}}"
          count="{{count}}"
          items="{{items}}"
          bind:selected="handleSelected"
        />`,
        data: {
          theme: ActionSheetTheme.Grid,
          count: 2,
          items: [
            {
              label: '自定义选项',
              color: '#0052D9',
            },
            {
              label: '文字',
              icon: 'image',
            },
            {
              label: '失效选项',
              disabled: true,
            },
          ],
        },
        methods: {
          handleSelected,
        },
        usingComponents: {
          't-action-sheet': actionSheet,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $actionSheet = comp.querySelector('#t-action-sheet');
      // 手动触发 onSwiperChange 函数
      const mockData = { detail: { current: 1, source: 'touch' } };
      $actionSheet.instance.onSwiperChange(mockData);
      expect($actionSheet.instance.data.currentSwiperIndex).toBe(mockData.detail.current);

      const $gridItems = $actionSheet.querySelectorAll('.t-action-sheet__square');
      expect($gridItems.length).toEqual(3);

      // current = 1
      const index = 2;
      $gridItems[index].dispatchEvent('tap');
      await simulate.sleep(10);
      expect(handleSelected).toHaveBeenCalledTimes(1);
      expect(clickItemValue.index).toEqual(index);
      expect(clickItemValue.selected).toEqual(comp.instance.data.items[index]);
    });
  });

  describe('events', () => {
    it(': selected && cancel', async () => {
      let clickItemValue;
      const handleSelected = jest.fn((selected) => {
        clickItemValue = selected.detail;
      });
      const handleCancel = jest.fn();
      const id = simulate.load({
        template: `<t-action-sheet id="t-action-sheet"
        visible
        cancel-text="{{cancelText}}"
        items="{{items}}"
        bind:selected="handleSelected"
        bind:cancel="handleCancel" />`,
        data: {
          cancelText: 'cancel',
          items: [
            {
              label: '自定义选项',
              color: '#0052D9',
            },
            {
              label: '失效选项',
              disabled: true,
            },
          ],
        },
        methods: {
          handleSelected,
          handleCancel,
        },
        usingComponents: {
          't-action-sheet': actionSheet,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));
      // expect(comp.toJSON()).toMatchSnapshot();
      const $actionSheet = comp.querySelector('#t-action-sheet');
      const $cancel = $actionSheet.querySelector('.t-action-sheet__cancel');
      const $items = $actionSheet.querySelectorAll('.t-action-sheet__list-item');

      expect($cancel.dom.textContent.trim()).toBe($actionSheet.data.cancelText);
      expect($items.length).toBe(comp.data.items.length);

      const index = 1;
      $items[index].dispatchEvent('tap');
      await simulate.sleep();
      expect(handleSelected).toHaveBeenCalledTimes(1);
      expect(clickItemValue.index).toEqual(index);
      expect(clickItemValue.selected).toEqual(comp.instance.data.items[index]);

      expect($actionSheet.instance.data.visible).toEqual(true);
      $cancel.dispatchEvent('tap');
      await simulate.sleep();
      expect(handleCancel).toHaveBeenCalledTimes(1);
    });

    it(': visible-change', async () => {
      let visibleValue;
      const handleVisibleChange = jest.fn((visible) => {
        visibleValue = visible.detail.visible;
      });
      const id = simulate.load({
        template: `<t-action-sheet
          id="t-action-sheet"
          visible
          show-cancel="{{showCancel}}"
          items="{{items}}"
          bind:visible-change="handleVisibleChange"
        />`,
        data: {
          showCancel: false,
          items: [
            {
              label: '自定义选项',
              color: '#0052D9',
            },
            {
              label: '失效选项',
              disabled: true,
            },
          ],
        },
        methods: {
          handleVisibleChange,
        },
        usingComponents: {
          't-action-sheet': actionSheet,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));
      // expect(comp.toJSON()).toMatchSnapshot();
      const $actionSheet = comp.querySelector('#t-action-sheet');
      const $cancel = $actionSheet.querySelector('t-action-sheet__cancel');
      expect($cancel).toBeUndefined();

      // 模拟点击遮罩层
      const $popupOverlay = comp.querySelector('#t-action-sheet >>> #popup-overlay');
      $popupOverlay.dispatchEvent('tap');
      await simulate.sleep(0);
      expect(handleVisibleChange).toHaveBeenCalledTimes(1);
      expect(visibleValue).toEqual(false);
    });
  });

  describe('instance', () => {
    it(': props', async () => {
      let visibleValue;
      const handleSelected = jest.fn();
      const handleVisibleChange = jest.fn((e) => {
        visibleValue = e.detail.visible;
      });
      const id = simulate.load({
        template: `<t-action-sheet
          id="t-action-sheet"
          visible
          bind:selected="handleSelected"
          bind:visible-change="handleVisibleChange"
        />`,
        methods: {
          handleSelected,
          handleVisibleChange,
        },
        usingComponents: {
          't-action-sheet': actionSheet,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));
      const $actionSheet = comp.querySelector('#t-action-sheet');

      const mock = jest.spyOn(Util, 'getInstance');
      // mock.mockImplementation(() => $actionSheet.instance);

      mock.mockImplementationOnce(() => $actionSheet.instance);
      mock.mockImplementationOnce(() => undefined);
      mock.mockImplementationOnce(() => $actionSheet.instance);

      mock.mockImplementationOnce(() => undefined);
      mock.mockImplementationOnce(() => $actionSheet.instance);

      // show
      show({
        selector: '#t-action-sheet',
        context: $actionSheet.instance,
        theme: 'grid',
        items: [
          {
            label: '文字',
            icon: 'image',
          },
          {
            label: '文字',
            icon: 'image',
          },
        ],
      });
      expect(handleVisibleChange).toHaveBeenCalledTimes(1);
      expect(visibleValue).toBe(true);
      // expect(comp.toJSON()).toMatchSnapshot();
      // click overlay
      const $overlay = comp.querySelector('#t-action-sheet >>> #popup-overlay');
      $overlay.dispatchEvent('tap');
      await simulate.sleep();
      expect(handleVisibleChange).toHaveBeenCalledTimes(2);
      show();
      show();
      close();
      // close
      close({
        selector: '#t-action-sheet',
        context: $actionSheet.instance,
      });
      expect(handleVisibleChange).toHaveBeenCalledTimes(4);
      expect(visibleValue).toBe(false);
    });
  });
});
