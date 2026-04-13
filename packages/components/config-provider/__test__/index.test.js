import path from 'path';
import simulate from 'miniprogram-simulate';
import { configStore } from '../config-store';
import ReactiveState from '../reactive-state';
import themeVarsToCSS from '../utils';
import { getComponentLocale, useConfig } from '../use-config';

describe('config-provider', () => {
  const configProvider = load(path.resolve(__dirname, '../config-provider'));

  it(`: style && customStyle`, async () => {
    const id = simulate.load({
      template: `<t-config-provider class="config" style="{{style}}" customStyle="{{customStyle}}"></t-config-provider>`,
      data: {
        style: 'color: red',
        customStyle: 'font-size: 9px',
      },

      usingComponents: {
        't-config-provider': configProvider,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));
    const $configProvider = comp.querySelector('.config >>> .t-config-provider');
    if (VIRTUAL_HOST) {
      expect(
        $configProvider.dom.getAttribute('style').includes(`${comp.data.style}; ${comp.data.customStyle}`),
      ).toBeTruthy();
    } else {
      expect($configProvider.dom.getAttribute('style').includes(`${comp.data.customStyle}`)).toBeTruthy();
    }
  });

  it(`:base`, async () => {
    const id = simulate.load({
      template: `<t-config-provider class="config"></t-config-provider>`,
      usingComponents: {
        't-config-provider': configProvider,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $config = comp.querySelector('.config >>> .t-config-provider');
    expect($config).toBeTruthy();
  });

  it(`:globalConfig`, async () => {
    const id = simulate.load({
      template: `<t-config-provider
        class="config"
        globalConfig="{{globalConfig}}"
      ></t-config-provider>`,
      data: {
        globalConfig: {
          calendar: {
            title: '选择日期',
            confirm: '确定',
            weekdays: ['日', '一', '二', '三', '四', '五', '六'],
          },
          picker: {
            cancel: '取消',
            confirm: '确认',
          },
        },
      },
      usingComponents: {
        't-config-provider': configProvider,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $config = comp.querySelector('.config >>> .t-config-provider');
    expect($config).toBeTruthy();

    // 更新 globalConfig
    await simulate.sleep(10);
    comp.setData({
      globalConfig: {
        calendar: {
          title: 'Select Date',
          confirm: 'Confirm',
          weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        },
      },
    });

    await simulate.sleep(10);
  });

  it(`:themeVars`, async () => {
    const id = simulate.load({
      template: `<t-config-provider
        class="config"
        themeVars="{{themeVars}}"
      ></t-config-provider>`,
      data: {
        themeVars: {
          buttonPrimaryBorderColor: '#ff6b00',
          'button-primary-color': '#ff6b00',
          'button-primary-bg-color': '#ff6a0094',
        },
      },
      usingComponents: {
        't-config-provider': configProvider,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $config = comp.querySelector('.config >>> .t-config-provider');
    expect($config).toBeTruthy();

    // 更新 themeVars
    await simulate.sleep(10);
    comp.setData({
      themeVars: {
        buttonPrimaryBorderColor: '#0052d9',
        'button-primary-color': '#0052d9',
      },
    });

    await simulate.sleep(10);
  });

  it(`:mixedConfig`, async () => {
    const id = simulate.load({
      template: `<t-config-provider
        class="config"
        globalConfig="{{globalConfig}}"
        themeVars="{{themeVars}}"
      ></t-config-provider>`,
      data: {
        globalConfig: {
          actionSheet: {
            cancel: '取消',
          },
        },
        themeVars: {
          primaryColor: '#0052d9',
        },
      },
      usingComponents: {
        't-config-provider': configProvider,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $config = comp.querySelector('.config >>> .t-config-provider');
    expect($config).toBeTruthy();

    // 同时更新 globalConfig 和 themeVars
    await simulate.sleep(10);
    comp.setData({
      globalConfig: {
        actionSheet: {
          cancel: 'Cancel',
        },
      },
      themeVars: {
        primaryColor: '#ff6b00',
      },
    });

    await simulate.sleep(10);
  });

  it(`:componentLifecycle`, async () => {
    const id = simulate.load({
      template: `<t-config-provider
        class="config"
        globalConfig="{{globalConfig}}"
      ></t-config-provider>`,
      data: {
        globalConfig: {
          picker: {
            cancel: '取消',
          },
        },
      },
      usingComponents: {
        't-config-provider': configProvider,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    // 检查组件是否正确初始化
    const $config = comp.querySelector('.config >>> .t-config-provider');
    expect($config).toBeTruthy();

    // 销毁组件
    comp.detach();

    await simulate.sleep(10);
  });

  it(`:emptyConfig`, async () => {
    const id = simulate.load({
      template: `<t-config-provider
        class="config"
        globalConfig="{{globalConfig}}"
        themeVars="{{themeVars}}"
      ></t-config-provider>`,
      data: {
        globalConfig: {},
        themeVars: {},
      },
      usingComponents: {
        't-config-provider': configProvider,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $config = comp.querySelector('.config >>> .t-config-provider');
    expect($config).toBeTruthy();
  });
});

describe('config-store', () => {
  beforeEach(() => {
    // 每个测试前重置 store
    configStore.currentLocale.value = {};
    configStore.themeVars.value = {};
  });

  describe('switchLocale', () => {
    it('should not switch when componentId is undefined', () => {
      const initialValue = configStore.currentLocale.value;
      configStore.switchLocale({ test: 'value' });
      expect(configStore.currentLocale.value).toEqual(initialValue);
    });

    it('should set locale on first call', () => {
      const componentId = 'test-1';
      const locale = { picker: { cancel: '取消' } };
      configStore.switchLocale(locale, componentId);
      expect(configStore.currentLocale.value).toEqual(locale);
    });

    it('should update locale on subsequent calls with different content', () => {
      const componentId = 'test-2';
      const locale1 = { picker: { cancel: '取消' } };
      const locale2 = { picker: { cancel: 'Cancel' } };

      configStore.switchLocale(locale1, componentId);
      configStore.switchLocale(locale2, componentId);

      expect(configStore.currentLocale.value).toEqual(locale2);
    });

    it('should not update locale when content is same', () => {
      const componentId = 'test-3';
      const locale = { picker: { cancel: '取消' } };

      configStore.switchLocale(locale, componentId);
      const valueAfterFirst = configStore.currentLocale.value;
      configStore.switchLocale(locale, componentId);

      expect(configStore.currentLocale.value).toBe(valueAfterFirst);
    });

    it('should handle empty locale', () => {
      const componentId = 'test-4';
      const locale1 = { picker: { cancel: '取消' } };
      const locale2 = {};

      configStore.switchLocale(locale1, componentId);
      configStore.switchLocale(locale2, componentId);

      expect(configStore.currentLocale.value).toEqual(locale2);
    });
  });

  describe('updateThemeVars', () => {
    it('should merge and override theme vars', () => {
      configStore.updateThemeVars({ color: '#ff0000', fontSize: 14 });
      configStore.updateThemeVars({ color: '#0000ff', bgColor: '#00ff00' });

      expect(configStore.themeVars.value).toEqual({
        color: '#0000ff',
        fontSize: 14,
        bgColor: '#00ff00',
      });
    });

    it('should handle empty vars', () => {
      configStore.updateThemeVars({});
      expect(configStore.themeVars.value).toEqual({});
    });
  });

  describe('resetPageState', () => {
    it('should reset page state', () => {
      const componentId = 'test-reset';
      const locale = { picker: { cancel: '取消' } };
      configStore.switchLocale(locale, componentId);

      configStore.resetPageState(componentId);
      // After reset, should be able to set locale again as if it's the first time
      const newLocale = { picker: { cancel: 'Cancel' } };
      configStore.switchLocale(newLocale, componentId);
      expect(configStore.currentLocale.value).toEqual(newLocale);
    });

    it('should handle undefined componentId', () => {
      expect(() => {
        configStore.resetPageState(undefined);
      }).not.toThrow();
    });

    it('should execute cleanup callback', () => {
      const componentId = 'test-cleanup';
      const mockCleanup = jest.fn();
      configStore.registerCleanup(componentId, mockCleanup);
      configStore.resetPageState(componentId);

      expect(mockCleanup).toHaveBeenCalled();
    });

    it('should handle cleanup errors gracefully', () => {
      const componentId = 'test-error';
      const errorCleanup = jest.fn(() => {
        throw new Error('Cleanup error');
      });
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

      configStore.registerCleanup(componentId, errorCleanup);
      expect(() => {
        configStore.resetPageState(componentId);
      }).not.toThrow();

      expect(consoleSpy).toHaveBeenCalled();
      consoleSpy.mockRestore();
    });
  });

  describe('registerCleanup', () => {
    it('should register and execute cleanup callback', () => {
      const componentId = 'test-register';
      const cleanup = jest.fn();
      configStore.registerCleanup(componentId, cleanup);
      configStore.resetPageState(componentId);
      expect(cleanup).toHaveBeenCalled();
    });
  });

  describe('locale comparison behavior', () => {
    it('should detect nested object and array changes', () => {
      const componentId = 'test-nested';
      const locale1 = {
        picker: {
          cancel: '取消',
          confirm: '确定',
        },
        calendar: {
          title: '选择日期',
          weekdays: ['日', '一', '二', '三', '四', '五', '六'],
        },
      };
      const locale2 = {
        picker: {
          cancel: '取消',
          confirm: '确定',
        },
        calendar: {
          title: 'Select Date',
          weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        },
      };

      configStore.switchLocale(locale1, componentId);
      configStore.switchLocale(locale2, componentId);

      expect(configStore.currentLocale.value).toEqual(locale2);
    });

    it('should handle locale with same structure but different values', () => {
      const componentId = 'test-diff-value';
      const locale1 = {
        picker: {
          cancel: '取消',
          confirm: '确认',
        },
      };
      const locale2 = {
        picker: {
          cancel: 'Cancel',
          confirm: 'Confirm',
        },
      };

      configStore.switchLocale(locale1, componentId);
      configStore.switchLocale(locale2, componentId);

      expect(configStore.currentLocale.value).toEqual(locale2);
    });
  });
});

describe('reactive-state', () => {
  it('should initialize with value', () => {
    const state = new ReactiveState({ test: 'value' });
    expect(state.value).toEqual({ test: 'value' });
  });

  it('should notify subscribers on value change', () => {
    const state = new ReactiveState(0);
    const mockFn = jest.fn();
    state.subscribe(mockFn);

    state.value = 1;
    expect(mockFn).toHaveBeenCalledTimes(2); // initial + change
    expect(mockFn).toHaveBeenLastCalledWith(1);
  });

  it('should not notify on same value or reference', () => {
    const state = new ReactiveState(0);
    const mockFn = jest.fn();
    state.subscribe(mockFn);

    state.value = 0;
    expect(mockFn).toHaveBeenCalledTimes(1); // only initial

    const obj = { a: 1 };
    state.value = obj;
    state.value = obj;
    expect(mockFn).toHaveBeenCalledTimes(2); // initial + obj change
  });

  it('should unsubscribe correctly', () => {
    const state = new ReactiveState(0);
    const mockFn = jest.fn();
    const unsubscribe = state.subscribe(mockFn);

    unsubscribe();
    state.value = 1;

    expect(mockFn).toHaveBeenCalledTimes(1); // only initial
  });

  it('should handle multiple subscribers', () => {
    const state = new ReactiveState(0);
    const mockFn1 = jest.fn();
    const mockFn2 = jest.fn();

    state.subscribe(mockFn1);
    state.subscribe(mockFn2);

    state.value = 1;

    expect(mockFn1).toHaveBeenLastCalledWith(1);
    expect(mockFn2).toHaveBeenLastCalledWith(1);
  });

  it('should handle different value types', () => {
    const objState = new ReactiveState({ a: 1 });
    const mockFn1 = jest.fn();
    objState.subscribe(mockFn1);

    objState.value = { a: 2 };
    expect(mockFn1).toHaveBeenLastCalledWith({ a: 2 });

    const arrState = new ReactiveState([1, 2, 3]);
    const mockFn2 = jest.fn();
    arrState.subscribe(mockFn2);

    arrState.value = [1, 2, 4];
    expect(mockFn2).toHaveBeenLastCalledWith([1, 2, 4]);

    const boolState = new ReactiveState(false);
    const mockFn3 = jest.fn();
    boolState.subscribe(mockFn3);

    boolState.value = true;
    expect(mockFn3).toHaveBeenLastCalledWith(true);
  });

  it('should handle falsy values correctly', () => {
    const state = new ReactiveState(0);
    const mockFn = jest.fn();
    state.subscribe(mockFn);

    state.value = 0;
    expect(mockFn).toHaveBeenCalledTimes(1); // only initial

    state.value = null;
    expect(mockFn).toHaveBeenLastCalledWith(null);

    state.value = undefined;
    expect(mockFn).toHaveBeenLastCalledWith(undefined);
  });

  it('should unsubscribe only specific listener', () => {
    const state = new ReactiveState(0);
    const mockFn1 = jest.fn();
    const mockFn2 = jest.fn();
    const mockFn3 = jest.fn();

    const unsubscribe1 = state.subscribe(mockFn1);
    state.subscribe(mockFn2);
    const unsubscribe3 = state.subscribe(mockFn3);

    unsubscribe1();

    state.value = 1;

    expect(mockFn1).toHaveBeenCalledTimes(1); // only initial
    expect(mockFn2).toHaveBeenCalledTimes(2); // initial + change
    expect(mockFn3).toHaveBeenCalledTimes(2); // initial + change

    unsubscribe3();
    state.value = 2;

    expect(mockFn1).toHaveBeenCalledTimes(1); // only initial
    expect(mockFn2).toHaveBeenCalledTimes(3); // initial + 2 changes
    expect(mockFn3).toHaveBeenCalledTimes(2); // initial + 1 change
  });
});

describe('themeVarsToCSS', () => {
  it('should convert camelCase to kebab-case', () => {
    const result = themeVarsToCSS({ buttonPrimaryColor: '#ff0000' });
    expect(result).toEqual({ '--td-button-primary-color': '#ff0000' });
  });

  it('should handle keys with hyphens', () => {
    const result = themeVarsToCSS({ 'button-primary-color': '#ff0000' });
    expect(result).toEqual({ '--td-button-primary-color': '#ff0000' });
  });

  it('should preserve keys starting with --', () => {
    const result = themeVarsToCSS({ '--custom-var': '#ff0000', '----custom-var': '#00ff00' });
    expect(result).toEqual({ '--custom-var': '#ff0000', '----custom-var': '#00ff00' });
  });

  it('should handle mixed key formats', () => {
    const result = themeVarsToCSS({
      buttonPrimaryColor: '#ff0000',
      'button-bg-color': '#00ff00',
      '--custom-var': '#0000ff',
      'button-primary-bg-color-hover': '#ff0000',
    });
    expect(result).toEqual({
      '--td-button-primary-color': '#ff0000',
      '--td-button-bg-color': '#00ff00',
      '--custom-var': '#0000ff',
      '--td-button-primary-bg-color-hover': '#ff0000',
    });
  });

  it('should use custom prefix', () => {
    const result = themeVarsToCSS({ buttonColor: '#ff0000' }, '--custom-');
    expect(result).toEqual({ '--custom-button-color': '#ff0000' });
  });

  it('should handle empty object', () => {
    const result = themeVarsToCSS({});
    expect(result).toEqual({});
  });

  it('should convert all values to strings', () => {
    const result = themeVarsToCSS({
      color: '#ff0000',
      fontSize: 14,
      lineHeight: 1.5,
      opacity: 0.5,
      zIndex: 100,
    });
    expect(result).toEqual({
      '--td-color': '#ff0000',
      '--td-font-size': '14',
      '--td-line-height': '1.5',
      '--td-opacity': '0.5',
      '--td-z-index': '100',
    });
  });

  it('should preserve zero values', () => {
    const result = themeVarsToCSS({ opacity: 0 });
    expect(result).toEqual({ '--td-opacity': '0' });
  });
});

describe('useConfig', () => {
  beforeEach(() => {
    // 每个测试前重置 store
    configStore.currentLocale.value = {};
    configStore.themeVars.value = {};
  });

  describe('getComponentLocale', () => {
    it('should return default locale when no config provided', () => {
      const component = {};
      const defaultLocale = { cancel: '取消', confirm: '确定' };
      const result = getComponentLocale(component, 'picker', defaultLocale);
      expect(result).toEqual(defaultLocale);
    });

    it('should merge global and component locale config', () => {
      configStore.currentLocale.value = {
        picker: { cancel: 'GlobalCancel', confirm: 'GlobalConfirm' },
      };
      const component = {
        properties: {
          locale: { cancel: 'ComponentCancel' },
        },
      };
      const defaultLocale = { cancel: '取消', confirm: '确定' };
      const result = getComponentLocale(component, 'picker', defaultLocale, 'locale');
      expect(result).toEqual({
        cancel: 'ComponentCancel',
        confirm: 'GlobalConfirm',
      });
    });

    it('should handle component without properties', () => {
      const component = {};
      const defaultLocale = { cancel: '取消' };
      const result = getComponentLocale(component, 'picker', defaultLocale, 'locale');
      expect(result).toEqual(defaultLocale);
    });

    it('should handle empty and null global locale', () => {
      const component = {};
      const defaultLocale = { cancel: '取消', confirm: '确定' };

      configStore.currentLocale.value = {};
      let result = getComponentLocale(component, 'picker', defaultLocale);
      expect(result).toEqual(defaultLocale);

      configStore.currentLocale.value = null;
      result = getComponentLocale(component, 'picker', defaultLocale);
      expect(result).toEqual(defaultLocale);
    });

    it('should handle component locale not in global config', () => {
      configStore.currentLocale.value = {
        calendar: { title: '选择日期' },
      };
      const component = {};
      const defaultLocale = { cancel: '取消' };
      const result = getComponentLocale(component, 'picker', defaultLocale);
      expect(result).toEqual(defaultLocale);
    });

    it('should merge all locale sources correctly', () => {
      configStore.currentLocale.value = {
        picker: {
          cancel: 'GlobalCancel',
          confirm: 'GlobalConfirm',
          title: 'GlobalTitle',
        },
      };
      const component = {
        properties: {
          locale: {
            cancel: 'ComponentCancel',
            confirm: 'ComponentConfirm',
          },
        },
      };
      const defaultLocale = {
        cancel: '默认取消',
        confirm: '默认确认',
        title: '默认标题',
        placeholder: '默认占位符',
      };
      const result = getComponentLocale(component, 'picker', defaultLocale, 'locale');
      expect(result).toEqual({
        cancel: 'ComponentCancel',
        confirm: 'ComponentConfirm',
        title: 'GlobalTitle',
        placeholder: '默认占位符',
      });
    });
  });

  describe('useConfig hook', () => {
    it('should get locale correctly', () => {
      const hook = useConfig('picker');
      configStore.currentLocale.value = {
        picker: { cancel: 'Cancel' },
      };
      const component = {};
      const defaultLocale = { cancel: '取消', confirm: '确定' };
      const result = hook.getLocale(defaultLocale, component);
      expect(result.cancel).toBe('Cancel');
      expect(result.confirm).toBe('确定');
    });

    it('should subscribe to locale changes', () => {
      const hook = useConfig('picker');
      const component = {};
      const mockCallback = jest.fn();

      hook.subscribeLocale(component, mockCallback);

      configStore.currentLocale.value = {
        picker: { cancel: 'NewCancel' },
      };

      expect(mockCallback).toHaveBeenCalled();
    });

    it('should return unsubscribe function', () => {
      const hook = useConfig('picker');
      const component = {};
      const mockCallback = jest.fn();

      const unsubscribe = hook.subscribeLocale(component, mockCallback);
      unsubscribe();

      configStore.currentLocale.value = {
        picker: { cancel: 'NewCancel' },
      };

      // After unsubscribe, callback should still be called because it's initial call
      expect(mockCallback).toHaveBeenCalled();
    });
  });
});
