import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import { TdCascaderProps, CascaderFilterFunction } from './type';
import { getRect, debounce } from '../common/utils';
import usingConfig from '../mixins/using-config';

const { prefix } = config;
const componentName = 'cascader';

export interface CascaderProps extends TdCascaderProps {}

type OptionsType = TdCascaderProps['options']['value'];
type KeysType = TdCascaderProps['keys']['value'];

type FlatPath = {
  key: string;
  path: any[];
  indexes: number[];
  labels: string[];
  text: string;
  disabled: boolean;
};

type ResultFragment = { id: number; text: string; highlight: boolean };

type FilterResult = {
  key: string;
  indexes: number[];
  disabled: boolean;
  fragments: ResultFragment[];
};

function parseOptions(options: OptionsType, keys: KeysType) {
  const label = keys?.label ?? 'label';
  const value = keys?.value ?? 'value';
  const disabled = keys?.disabled ?? 'disabled';

  return options.map((item) => {
    return {
      [label]: item[label],
      [value]: item[value],
      [disabled]: item[disabled],
    };
  });
}

function flattenPaths(options: OptionsType, keys: KeysType): FlatPath[] {
  const labelKey = keys?.label ?? 'label';
  const valueKey = keys?.value ?? 'value';
  const childrenKey = keys?.children ?? 'children';
  const disabledKey = keys?.disabled ?? 'disabled';
  const result: FlatPath[] = [];

  const walk = (list: any[], path: any[], indexes: number[]) => {
    list.forEach((item, idx) => {
      const nextPath = [...path, item];
      const nextIndexes = [...indexes, idx];
      const children = item?.[childrenKey];
      if (Array.isArray(children) && children.length > 0) {
        walk(children, nextPath, nextIndexes);
      } else {
        const labels = nextPath.map((node) => String(node?.[labelKey] ?? ''));
        const text = [labels.join(''), String(item?.text ?? '')].filter(Boolean).join('');
        result.push({
          key: nextPath.map((node) => String(node?.[valueKey] ?? '')).join('/'),
          path: nextPath,
          indexes: nextIndexes,
          labels,
          text,
          disabled: nextPath.some((node) => node?.[disabledKey]),
        });
      }
    });
  };

  walk(options || [], [], []);
  return result;
}

function buildFragments(labels: string[], keyword: string): ResultFragment[] {
  const joined = labels.join(' / ');
  const push = (acc: ResultFragment[], text: string, highlight: boolean) => {
    if (!text) return;
    acc.push({ id: acc.length, text, highlight });
  };

  if (!keyword) return [{ id: 0, text: joined, highlight: false }];

  const fragments: ResultFragment[] = [];
  const haystack = joined.toLowerCase();
  const needle = keyword.toLowerCase();
  let cursor = 0;
  while (cursor < joined.length) {
    const hit = haystack.indexOf(needle, cursor);
    if (hit === -1) {
      push(fragments, joined.slice(cursor), false);
      break;
    }
    push(fragments, joined.slice(cursor, hit), false);
    push(fragments, joined.slice(hit, hit + needle.length), true);
    cursor = hit + needle.length;
  }
  return fragments.length ? fragments : [{ id: 0, text: joined, highlight: false }];
}

function defaultFilter(keyword: string, _option: any, path: any[], labelKey: string) {
  const lower = keyword.toLowerCase();
  const joined = path
    .map((node) => String(node?.[labelKey] ?? ''))
    .join('')
    .toLowerCase();
  const text = String(path[path.length - 1]?.text ?? '').toLowerCase();
  return joined.includes(lower) || (!!text && text.includes(lower));
}

const defaultState = {
  contentHeight: 0,
  stepHeight: 0,
  tabsHeight: 0,
  subTitlesHeight: 0,
  stepsInitHeight: 0,
  filterHeight: 0,
  flatPaths: [] as FlatPath[],
};

@wxComponent()
export default class Cascader extends SuperComponent {
  behaviors = [usingConfig({ componentName })];

  externalClasses = [`${prefix}-class`];

  options: WechatMiniprogram.Component.ComponentOptions = {
    multipleSlots: true,
    pureDataPattern: /^options$/,
  };

  properties = props;

  filterDebounced: ((value: string) => void) | null = null;

  controlledProps = [
    {
      key: 'value',
      event: 'change',
    },
  ];

  state = {
    ...defaultState,
  };

  data = {
    prefix,
    classPrefix: `${prefix}-${componentName}`,
    stepIndex: 0,
    selectedIndexes: [],
    selectedValue: [],
    scrollTopList: [],
    steps: [],
    _optionsHeight: 0,
    filterKeyword: '',
    filterResults: [] as FilterResult[],
    isSearching: false,
  };

  observers = {
    visible(v) {
      if (v) {
        const $tabs = this.selectComponent('#tabs');
        $tabs?.setTrack();
        $tabs?.getTabHeight().then((res) => {
          this.state.tabsHeight = res.height;
        });
        this.initOptionsHeight(this.data.steps.length);
        this.updateScrollTop();
        this.initWithValue();
      } else {
        this.state = { ...defaultState };
        if (this.data.isSearching) {
          this.resetFilter();
        }
      }
    },

    value() {
      this.initWithValue();
    },

    options() {
      const { selectedValue, steps, items } = this.genItems();

      this.setData({
        steps,
        items,
        selectedValue,
        stepIndex: items.length - 1,
      });

      this.invalidateFlatPaths();
      if (this.data.isSearching) {
        this.applyFilter(this.data.filterKeyword);
      }
    },

    keys() {
      this.invalidateFlatPaths();
      if (this.data.isSearching) {
        this.applyFilter(this.data.filterKeyword);
      }
    },

    filterable(v: boolean) {
      if (!v && this.data.isSearching) {
        this.resetFilter();
      }
    },
    selectedIndexes() {
      const { visible, theme } = this.properties;
      const { selectedValue, steps, items } = this.genItems();
      const setData = {
        steps,
        selectedValue,
        stepIndex: items.length - 1,
      };

      if (JSON.stringify(items) !== JSON.stringify(this.data.items)) {
        Object.assign(setData, { items });
      }

      this.setData(setData);

      if (visible && theme === 'step') {
        this.updateOptionsHeight(steps.length);
      }
    },

    async stepIndex() {
      const { visible } = this.data;

      if (visible) {
        this.updateScrollTop();
      }
    },
  };

  methods = {
    updateOptionsHeight(steps: number) {
      const { contentHeight, stepsInitHeight, stepHeight, subTitlesHeight, filterHeight } = this.state;
      this.setData({
        _optionsHeight: contentHeight - stepsInitHeight - subTitlesHeight - filterHeight - (steps - 1) * stepHeight,
      });
    },

    async initOptionsHeight(steps: number) {
      const { classPrefix } = this.data;
      const { theme, subTitles, filterable } = this.properties;

      const { height } = await getRect(this, `.${classPrefix}__content`);
      this.state.contentHeight = height;

      if (theme === 'step') {
        await Promise.all([getRect(this, `.${classPrefix}__steps`), getRect(this, `.${classPrefix}__step`)]).then(
          ([stepsRect, stepRect]) => {
            this.state.stepsInitHeight = stepsRect.height - (steps - 1) * stepRect.height;
            this.state.stepHeight = stepRect.height;
          },
        );
      }

      if (subTitles.length > 0) {
        const { height } = await getRect(this, `.${classPrefix}__options-title`);
        this.state.subTitlesHeight = height;
      }

      if (filterable) {
        const filterRect = await getRect(this, `.${classPrefix}__filter`);
        this.state.filterHeight = filterRect.height;
      }

      const optionsInitHeight = this.state.contentHeight - this.state.subTitlesHeight - this.state.filterHeight;
      this.setData({
        _optionsHeight:
          theme === 'step'
            ? optionsInitHeight - this.state.stepsInitHeight - (steps - 1) * this.state.stepHeight
            : optionsInitHeight - this.state.tabsHeight,
      });
    },

    initWithValue() {
      if (this.data.value != null && this.data.value !== '') {
        const selectedIndexes = this.getIndexesByValue(this.data.options, this.data.value);

        if (selectedIndexes) {
          this.setData({ selectedIndexes });
        }
      } else {
        this.setData({ selectedIndexes: [] });
      }
    },
    getIndexesByValue(options: OptionsType, value) {
      const { keys } = this.data;

      for (let i = 0, size = options.length; i < size; i += 1) {
        const opt = options[i];
        if (opt[keys?.value ?? 'value'] === value) {
          return [i];
        }
        if (opt[keys?.children ?? 'children']) {
          const res = this.getIndexesByValue(opt[keys?.children ?? 'children'], value);
          if (res) {
            return [i, ...res];
          }
        }
      }
    },
    updateScrollTop() {
      const { visible, items, selectedIndexes, stepIndex } = this.data;

      if (visible) {
        getRect(this, '.cascader-radio-group-0').then((rect) => {
          const eachRadioHeight = rect.height / items[0]?.length;

          this.setData({
            [`scrollTopList[${stepIndex}]`]: eachRadioHeight * selectedIndexes[stepIndex],
          });
        });
      }
    },
    hide(trigger) {
      this.setData({ visible: false });
      this.triggerEvent('close', { trigger: trigger });
    },
    onVisibleChange() {
      this.hide('overlay');
    },
    onClose() {
      if (this.data.checkStrictly) {
        this.triggerChange();
      }
      this.hide('close-btn');
    },
    invalidateFlatPaths() {
      this.state.flatPaths = [];
    },
    ensureFlatPaths() {
      let { flatPaths } = this.state;
      if (!flatPaths || flatPaths.length === 0) {
        const { options, keys } = this.data;
        flatPaths = flattenPaths(options, keys);
        this.state.flatPaths = flatPaths;
      }
      return flatPaths;
    },
    resetFilter() {
      this.setData({
        filterKeyword: '',
        filterResults: [],
        isSearching: false,
      });
    },
    onFilterChange(e: { detail?: { value?: string } }) {
      const value = e?.detail?.value ?? '';
      if (!this.filterDebounced) {
        this.filterDebounced = debounce((kw: string) => this.applyFilter(kw), 200);
      }
      this.filterDebounced(value);
    },
    onFilterClear() {
      this.resetFilter();
    },
    applyFilter(rawKeyword: string) {
      const keyword = String(rawKeyword ?? '').trim();
      if (!keyword) {
        this.resetFilter();
        return;
      }

      const { keys, filter } = this.data;
      const labelKey = keys?.label ?? 'label';
      const userFilter = filter as CascaderFilterFunction | null;
      const flat = this.ensureFlatPaths();
      const results: FilterResult[] = [];

      flat.forEach((entry: FlatPath) => {
        const leaf = entry.path[entry.path.length - 1];
        const matched =
          typeof userFilter === 'function'
            ? !!userFilter(keyword, leaf, entry.path)
            : defaultFilter(keyword, leaf, entry.path, labelKey);
        if (matched) {
          results.push({
            key: entry.key,
            indexes: entry.indexes,
            disabled: entry.disabled,
            fragments: buildFragments(entry.labels, keyword),
          });
        }
      });

      this.setData({
        filterKeyword: rawKeyword,
        filterResults: results,
        isSearching: true,
      });
    },
    onFilterResultTap(e: { currentTarget: { dataset: { key: string } } }) {
      const { key } = e.currentTarget.dataset;
      const target = this.data.filterResults.find((item: FilterResult) => item.key === key);
      if (!target || target.disabled) return;

      const { indexes } = target;
      const { items: newItems } = this.regenItemsByIndexes(indexes);

      this.resetFilter();
      this.setData(
        {
          items: newItems,
          selectedIndexes: indexes,
          stepIndex: indexes.length - 1,
        },
        () => this.triggerChange(),
      );
      this.hide('finish');
    },
    regenItemsByIndexes(selectedIndexes: number[]) {
      const { options, keys, placeholder, globalConfig } = this.data;
      const selectedValue: any[] = [];
      const steps: string[] = [];
      const items: any[] = [parseOptions(options, keys)];
      const labelKey = keys?.label ?? 'label';
      const valueKey = keys?.value ?? 'value';
      const childrenKey = keys?.children ?? 'children';

      let current: any[] = options as any[];
      for (let i = 0, size = selectedIndexes.length; i < size; i += 1) {
        const index = selectedIndexes[i];
        const next = current[index];
        selectedValue.push(next[valueKey]);
        steps.push(next[labelKey]);
        const children = next[childrenKey];
        if (Array.isArray(children) && children.length > 0) {
          items.push(parseOptions(children, keys));
          current = children;
        }
      }

      if (steps.length < items.length) {
        steps.push(placeholder || globalConfig.placeholder);
      }

      return { selectedValue, steps, items };
    },
    onStepClick(e) {
      const { index } = e.currentTarget.dataset;

      this.setData({ stepIndex: index });
    },
    onTabChange(e) {
      const { value } = e.detail;

      this.setData({
        stepIndex: value,
      });
    },
    genItems() {
      const { options, selectedIndexes, keys, placeholder, globalConfig } = this.data;
      const selectedValue = [];
      const steps = [];
      const items = [parseOptions(options, keys)];

      if (options.length > 0) {
        let current = options;
        for (let i = 0, size = selectedIndexes.length; i < size; i += 1) {
          const index = selectedIndexes[i];
          const next = current[index];
          current = next[keys?.children ?? 'children'];

          selectedValue.push(next[keys?.value ?? 'value']);
          steps.push(next[keys?.label ?? 'label']);

          if (next[keys?.children ?? 'children']) {
            items.push(parseOptions(next[keys?.children ?? 'children'], keys));
          }
        }
      }

      if (steps.length < items.length) {
        steps.push(placeholder || globalConfig.placeholder);
      }

      return {
        selectedValue,
        steps,
        items,
      };
    },
    handleSelect(e) {
      const { level } = e.target.dataset;
      const { value } = e.detail;
      const { checkStrictly } = this.properties;
      const { selectedIndexes, items, keys, options, selectedValue } = this.data;
      const index = items[level].findIndex((item) => item[keys?.value ?? 'value'] === value);

      let item = selectedIndexes.slice(0, level).reduce((acc, item, index) => {
        if (index === 0) {
          return acc[item];
        }
        return acc[keys?.children ?? 'children'][item];
      }, options);

      if (level === 0) {
        item = item[index];
      } else {
        item = item[keys?.children ?? 'children'][index];
      }

      if (item[keys?.disabled ?? 'disabled']) {
        return;
      }
      this.triggerEvent('pick', {
        value: item[keys?.value ?? 'value'],
        label: item[keys?.label ?? 'label'],
        index,
        level,
      });
      selectedIndexes[level] = index;
      if (checkStrictly && selectedValue.includes(String(value))) {
        selectedIndexes.length = level;
        this.setData({ selectedIndexes });
        return;
      }
      selectedIndexes.length = level + 1;

      const { items: newItems } = this.genItems();
      if (item?.[keys?.children ?? 'children']?.length >= 0) {
        this.setData({
          selectedIndexes,
          [`items[${level + 1}]`]: newItems[level + 1],
        });
      } else {
        // setCascaderValue(item.value);
        this.setData(
          {
            selectedIndexes,
          },
          this.triggerChange,
        );
        this.hide('finish');
      }
    },
    triggerChange() {
      const { items, selectedValue, selectedIndexes } = this.data;
      this._trigger('change', {
        value: selectedValue[selectedValue.length - 1] ?? '',
        selectedOptions: items.map((item, index) => item[selectedIndexes[index]]).filter(Boolean),
      });
    },
  };
}
