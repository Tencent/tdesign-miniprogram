<template>
  <view>
    <t-popup
      :class="tClass"
      :visible="dataVisible"
      placement="bottom"
      :show-overlay="isShowOverlay(popupProps && popupProps.showOverlay, true)"
      :using-custom-navbar="popupProps && popupProps.usingCustomNavbar"
      :z-index="popupProps && popupProps.zIndex"
      :overlay-props="popupProps && popupProps.overlayProps"
      @visible-change="onVisibleChange"
    >
      <view :style="'' + tools._style([customStyle])" :class="classPrefix">
        <view :class="classPrefix + '__title'">
          <slot name="title" />
          {{ title || globalConfig.title || '' }}
        </view>
        <view :class="classPrefix + '__close-btn'" @click="onClose">
          <slot name="close-btn" />
          <t-icon v-if="closeBtn" size="48rpx" name="close" />
        </view>

        <slot name="header" />

        <view :class="classPrefix + '__content'">
          <view v-if="filterable" :class="classPrefix + '__filter'">
            <t-search
              :value="filterKeyword"
              :placeholder="filterPlaceholder || globalConfig.filterPlaceholder"
              @change="onFilterChange"
              @clear="onFilterClear"
            />
          </view>

          <block v-if="!isSearching">
            <block v-if="steps && steps.length">
              <view v-if="theme == 'step'" :class="classPrefix + '__steps'">
                <view
                  v-for="(item, index) in steps"
                  :key="index"
                  :class="classPrefix + '__step'"
                  :data-index="index"
                  @click="() => onStepClick(index)"
                >
                  <view
                    :class="
                      classPrefix +
                      '__step-dot ' +
                      classPrefix +
                      '__step-dot--' +
                      (item !== placeholder ? 'active' : '') +
                      ' ' +
                      classPrefix +
                      '__step-dot--' +
                      (index === steps.length - 1 ? 'last' : '')
                    "
                  />

                  <view
                    :class="
                      classPrefix +
                      '__step-label ' +
                      classPrefix +
                      '__step-label--' +
                      (index === stepIndex ? 'active' : '')
                    "
                  >
                    {{ item }}
                  </view>

                  <t-icon
                    name="chevron-right"
                    size="44rpx"
                    :t-class="classPrefix + '__step-arrow'"
                    :custom-style="stepArrowCustomStyle"
                    style="margin-left: auto"
                  />
                </view>
              </view>

              <t-tabs
                v-if="theme == 'tab'"
                ref="tabs"
                :value="stepIndex"
                :space-evenly="false"
                @change="({ value }) => onTabChange(value)"
              >
                <t-tab-panel
                  v-for="(item, index) in steps"
                  :key="index"
                  :ref="`tab-${index}`"
                  :value="index"
                  :label="item"
                />
              </t-tabs>
            </block>

            <slot name="middle-content" />

            <view v-if="subTitles && subTitles[stepIndex]" :class="classPrefix + '__options-title'">
              {{ subTitles[stepIndex] }}
            </view>

            <view
              :class="classPrefix + '__options-container'"
              :style="'' + `width: ${items.length + 1}00vw; transform: translateX(-${stepIndex}00vw)`"
            >
              <scroll-view
                v-for="(options, index) in items"
                :key="index"
                :class="classPrefix + '__options'"
                scroll-y
                :scroll-top="scrollTopList[index]"
                type="list"
                :style="'height: ' + optionsHeight + 'px'"
              >
                <view :class="'cascader-radio-group-' + index">
                  <t-radio-group
                    :value="selectedValue[index]"
                    :keys="keys"
                    :options="options"
                    :data-level="index"
                    placement="right"
                    icon="line"
                    borderless
                    @change="(e) => handleSelect(e, { level: index, value: e.value })"
                  />
                </view>
              </scroll-view>
            </view>
          </block>

          <block v-else>
            <scroll-view v-if="filterResults.length" :class="classPrefix + '__filter-result'" scroll-y type="list">
              <view
                v-for="item in filterResults"
                :key="item.key"
                :class="
                  classPrefix +
                  '__filter-result-item' +
                  (item.disabled ? ' ' + classPrefix + '__filter-result-item--disabled' : '')
                "
                :hover-class="item.disabled ? '' : classPrefix + '__filter-result-item--hover'"
                :data-key="item.key"
                @click="() => onFilterResultTap(item.key)"
              >
                <text
                  v-for="frag in item.fragments"
                  :key="frag.id"
                  :class="frag.highlight ? classPrefix + '__filter-highlight' : ''"
                >
                  {{ frag.text }}
                </text>
              </view>
            </scroll-view>
            <view v-else :class="classPrefix + '__filter-empty'">
              {{ globalConfig.empty }}
            </view>
          </block>
        </view>
      </view>
    </t-popup>
  </view>
</template>
<script>
import { prefix } from '../common/config';
import { uniComponent } from '../common/src/index';
import { getRect, coalesce, nextTick, debounce } from '../common/utils';
import tools from '../common/utils.wxs';
import TIcon from '../icon/icon';
import usingConfig from '../mixins/using-config';
import TPopup from '../popup/popup';
import TRadioGroup from '../radio-group/radio-group';
import TSearch from '../search/search.vue';
import TTabPanel from '../tab-panel/tab-panel.vue';
import TTabs from '../tabs/tabs';

import props from './props';

const componentName = 'cascader';
const name = `${prefix}-${componentName}`;

function parseOptions(options, keys) {
  const label = coalesce(keys?.label, 'label');
  const value = coalesce(keys?.value, 'value');
  const disabled = coalesce(keys?.disabled, 'disabled');

  return options.map((item) => ({
    [label]: item[label],
    [value]: item[value],
    [disabled]: item[disabled],
  }));
}

function flattenPaths(options, keys) {
  const labelKey = coalesce(keys?.label, 'label');
  const valueKey = coalesce(keys?.value, 'value');
  const childrenKey = coalesce(keys?.children, 'children');
  const disabledKey = coalesce(keys?.disabled, 'disabled');
  const result = [];

  const walk = (list, path, indexes) => {
    list.forEach((item, idx) => {
      const nextPath = [...path, item];
      const nextIndexes = [...indexes, idx];
      const children = item?.[childrenKey];
      if (Array.isArray(children) && children.length > 0) {
        walk(children, nextPath, nextIndexes);
      } else {
        const labels = nextPath.map((node) => String(coalesce(node?.[labelKey], '')));
        const text = [labels.join(''), String(coalesce(item?.text, ''))].filter(Boolean).join('');
        result.push({
          key: nextPath.map((node) => String(coalesce(node?.[valueKey], ''))).join('/'),
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

function buildFragments(labels, keyword) {
  const joined = labels.join(' / ');
  const push = (acc, text, highlight) => {
    if (!text) return;
    acc.push({ id: acc.length, text, highlight });
  };

  if (!keyword) return [{ id: 0, text: joined, highlight: false }];

  const fragments = [];
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

function defaultFilter(keyword, _option, path, labelKey) {
  const lower = keyword.toLowerCase();
  const joined = path
    .map((node) => String(coalesce(node?.[labelKey], '')))
    .join('')
    .toLowerCase();
  const text = String(coalesce(path[path.length - 1]?.text, '')).toLowerCase();
  return joined.includes(lower) || (!!text && text.includes(lower));
}

const defaultState = {
  contentHeight: 0,
  stepHeight: 0,
  tabsHeight: 0,
  subTitlesHeight: 0,
  stepsInitHeight: 0,
  filterHeight: 0,
  flatPaths: [],
};

export default {
  components: {
    TIcon,
    TPopup,
    TTabs,
    TTabPanel,
    TRadioGroup,
    TSearch,
  },
  ...uniComponent({
    name,
    mixins: [usingConfig({ componentName })],
    options: {
      styleIsolation: 'shared',
    },
    controlledProps: [
      {
        key: 'value',
        event: 'change',
      },
    ],
    externalClasses: [`${prefix}-class`],
    props: {
      ...props,
    },
    emits: ['update:visible'],
    data() {
      return {
        prefix,
        classPrefix: name,
        stepIndex: 0,
        selectedIndexes: [],
        selectedValue: [],
        scrollTopList: [],
        steps: [],
        optionsHeight: 0,
        tools,

        dataVisible: this.visible,
        dataValue: coalesce(this.value, this.defaultValue),
        items: [],
        filterKeyword: '',
        filterResults: [],
        isSearching: false,
      };
    },
    computed: {
      stepArrowCustomStyle() {
        return tools._style({
          color:
            'var(--td-cascader-step-arrow-color, var(--td-text-color-placeholder, var(--td-font-gray-3, rgba(0, 0, 0, .4))))',
          marginLeft: 'auto',
        });
      },
    },
    watch: {
      visible: {
        handler(v) {
          this.dataVisible = v;
        },
        immediate: true,
      },
      dataVisible: {
        handler(v) {
          if (v) {
            nextTick().then(() => {
              const $tabs = this.$refs.tabs;
              $tabs?.setTrack();
              $tabs?.getTabHeight().then((res) => {
                this.state.tabsHeight = res.height;
              });
            });

            // 不能使用 this.$nextTick，在头条小程序下会报错
            nextTick().then(() => {
              this.initOptionsHeight(this.steps.length);
              this.updateScrollTop();
              this.initWithValue();
            });
          } else {
            this.state = { ...defaultState };
            if (this.isSearching) {
              this.resetFilter();
            }
          }
        },
        immediate: true,
      },

      value: {
        handler(v) {
          this.dataValue = v;
        },
        immediate: true,
      },

      dataValue: {
        handler() {
          this.initWithValue();
        },
        immediate: true,
        deep: true,
      },

      options: {
        handler() {
          const { selectedValue, steps, items } = this.genItems();

          this.steps = steps;
          this.items = items;
          this.selectedValue = selectedValue;
          this.stepIndex = items.length - 1;
          this.setTabParent();

          this.invalidateFlatPaths();
          if (this.isSearching) {
            this.applyFilter(this.filterKeyword);
          }
        },
        immediate: true,
        deep: true,
      },
      keys: {
        handler() {
          this.invalidateFlatPaths();
          if (this.isSearching) {
            this.applyFilter(this.filterKeyword);
          }
        },
        deep: true,
      },
      filterable: {
        handler(v) {
          if (!v && this.isSearching) {
            this.resetFilter();
          }
        },
      },
      selectedIndexes: {
        handler() {
          const { visible, theme } = this;
          const { selectedValue, steps, items } = this.genItems();

          this.steps = steps;
          this.setTabParent();
          this.selectedValue = selectedValue;
          this.stepIndex = items.length - 1;

          if (JSON.stringify(items) !== JSON.stringify(this.items)) {
            this.items = items;
          }

          if (visible && theme === 'step') {
            this.updateOptionsHeight(steps.length);
          }
        },
        immediate: true,
        deep: true,
      },

      stepIndex: {
        handler() {
          const { dataVisible: visible } = this;

          if (visible) {
            this.updateScrollTop();
          }
        },
        immediate: true,
        deep: true,
      },
    },
    created() {
      this.state = {
        ...defaultState,
      };
      this.filterDebounced = null;
    },
    mounted() {},
    methods: {
      setTabParent() {
        // #ifdef MP-TOUTIAO
        nextTick().then(() => {
          const tabsRef = this.$refs.tabs;
          this.steps.forEach((tools, index) => {
            const tabRef = this.$refs[`tab-${index}`];
            tabRef?.[0]?.setParent(tabsRef);
          });
        });
        // #endif
      },
      updateOptionsHeight(steps) {
        const { contentHeight, stepsInitHeight, stepHeight, subTitlesHeight } = this.state;
        this.optionsHeight = contentHeight - stepsInitHeight - subTitlesHeight - (steps - 1) * stepHeight;
      },

      async initOptionsHeight(steps) {
        const { theme, subTitles, filterable, classPrefix } = this;

        const { height } = await getRect(this, `.${classPrefix}__content`);
        this.state.contentHeight = height;

        if (theme === 'step') {
          await Promise.all([getRect(this, `.${classPrefix}__steps`), getRect(this, `.${classPrefix}__step`)])
            .then(([stepsRect, stepRect]) => {
              this.state.stepsInitHeight = stepsRect.height - (steps - 1) * stepRect.height;
              this.state.stepHeight = stepRect.height;
            })
            .catch(() => {});
        }

        if (subTitles.length > 0) {
          const { height } = await getRect(this, `.${classPrefix}__options-title`);
          this.state.subTitlesHeight = height;
        }

        if (filterable) {
          await getRect(this, `.${classPrefix}__filter`)
            .then((filterRect) => {
              this.state.filterHeight = filterRect.height;
            })
            .catch(() => {});
        }

        const optionsInitHeight = this.state.contentHeight - this.state.subTitlesHeight - this.state.filterHeight;
        this.optionsHeight =
          theme === 'step'
            ? optionsInitHeight - this.state.stepsInitHeight - (steps - 1) * this.state.stepHeight
            : optionsInitHeight - this.state.tabsHeight;
      },

      initWithValue() {
        if (this.dataValue != null && this.dataValue !== '') {
          const selectedIndexes = this.getIndexesByValue(this.options, this.dataValue);

          if (selectedIndexes) {
            this.selectedIndexes = selectedIndexes;
          }
        } else {
          this.selectedIndexes = [];
        }
      },
      getIndexesByValue(options, value) {
        const { keys } = this;

        for (let i = 0, size = options.length; i < size; i += 1) {
          const opt = options[i];
          if (opt[coalesce(keys?.value, 'value')] === value) {
            return [i];
          }
          if (opt[coalesce(keys?.children, 'children')]) {
            const res = this.getIndexesByValue(opt[coalesce(keys?.children, 'children')], value);
            if (res) {
              return [i, ...res];
            }
          }
        }
      },
      updateScrollTop() {
        const { dataVisible: visible, items, selectedIndexes, stepIndex } = this;

        if (visible) {
          getRect(this, '.cascader-radio-group-0')
            .then((rect) => {
              const eachRadioHeight = rect.height / items[0]?.length;

              this[`scrollTopList[${stepIndex}]`] = eachRadioHeight * selectedIndexes[stepIndex];
            })
            .catch(() => {});
        }
      },
      hide(trigger) {
        this.dataVisible = false;
        this.$emit('close', { trigger });
        this.$emit('update:visible', false);
      },
      onVisibleChange() {
        this.hide('overlay');
      },
      onClose() {
        if (this.checkStrictly) {
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
          flatPaths = flattenPaths(this.options, this.keys);
          this.state.flatPaths = flatPaths;
        }
        return flatPaths;
      },
      resetFilter() {
        this.filterKeyword = '';
        this.filterResults = [];
        this.isSearching = false;
      },
      onFilterChange(e) {
        const value = e?.value ?? e?.detail?.value ?? '';
        if (!this.filterDebounced) {
          this.filterDebounced = debounce((kw) => this.applyFilter(kw), 200);
        }
        this.filterDebounced(value);
      },
      onFilterClear() {
        this.resetFilter();
      },
      applyFilter(rawKeyword) {
        const keyword = String(rawKeyword ?? '').trim();
        if (!keyword) {
          this.resetFilter();
          return;
        }

        const { keys, filter } = this;
        const labelKey = coalesce(keys?.label, 'label');
        const userFilter = filter;
        const flat = this.ensureFlatPaths();
        const results = [];

        flat.forEach((entry) => {
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

        this.filterKeyword = rawKeyword;
        this.filterResults = results;
        this.isSearching = true;
      },
      onFilterResultTap(key) {
        const target = this.filterResults.find((item) => item.key === key);
        if (!target || target.disabled) return;

        const { indexes } = target;
        const { items: newItems } = this.regenItemsByIndexes(indexes);

        this.resetFilter();
        this.items = newItems;
        this.selectedIndexes = indexes;
        this.stepIndex = indexes.length - 1;
        setTimeout(() => this.triggerChange());
        this.hide('finish');
      },
      regenItemsByIndexes(selectedIndexes) {
        const { options, keys, placeholder, globalConfig } = this;
        const selectedValue = [];
        const steps = [];
        const items = [parseOptions(options, keys)];
        const labelKey = coalesce(keys?.label, 'label');
        const valueKey = coalesce(keys?.value, 'value');
        const childrenKey = coalesce(keys?.children, 'children');

        let current = options;
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
      onStepClick(index) {
        this.stepIndex = index;
      },
      onTabChange(value) {
        this.stepIndex = value;
      },
      genItems() {
        const { options, selectedIndexes, keys, placeholder, globalConfig } = this;
        const selectedValue = [];
        const steps = [];
        const items = [parseOptions(options, keys)];

        if (options.length > 0) {
          let current = options;
          for (let i = 0, size = selectedIndexes.length; i < size; i += 1) {
            const index = selectedIndexes[i];
            const next = current[index];
            current = next[coalesce(keys?.children, 'children')];

            selectedValue.push(next[coalesce(keys?.value, 'value')]);
            steps.push(next[coalesce(keys?.label, 'label')]);

            if (next[coalesce(keys?.children, 'children')]) {
              items.push(parseOptions(next[coalesce(keys?.children, 'children')], keys));
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
      handleSelect(tools, { level, value }) {
        const { checkStrictly } = this;
        const { selectedIndexes, items, keys, options, selectedValue } = this;

        const index = items[level].findIndex((item) => item[coalesce(keys?.value, 'value')] === value);

        let item = selectedIndexes.slice(0, level).reduce((acc, item, index) => {
          if (index === 0) {
            return acc[item];
          }
          return acc[coalesce(keys?.children, 'children')][item];
        }, options);

        if (level === 0) {
          item = item[index];
        } else {
          item = item[coalesce(keys?.children, 'children')][index];
        }

        if (item[coalesce(keys?.disabled, 'disabled')]) {
          return;
        }
        this.$emit('pick', {
          value: item[coalesce(keys?.value, 'value')],
          label: item[coalesce(keys?.label, 'label')],
          index,
          level,
        });
        selectedIndexes[level] = index;
        if (checkStrictly && selectedValue.includes(String(value))) {
          selectedIndexes.length = level;
          this.selectedIndexes = selectedIndexes;
          return;
        }
        selectedIndexes.length = level + 1;

        const { items: newItems } = this.genItems();
        if (item?.[coalesce(keys?.children, 'children')]?.length >= 0) {
          this.selectedIndexes = selectedIndexes;
          this[`items[${level + 1}]`] = newItems[level + 1];
        } else {
          // setCascaderValue(item.value);
          this.selectedIndexes = selectedIndexes;
          setTimeout(this.triggerChange);

          this.hide('finish');
        }
        // #ifdef VUE2
        this.$set(this, 'selectedIndexes', JSON.parse(JSON.stringify(selectedIndexes)));
        // #endif
      },
      triggerChange() {
        const { items, selectedValue, selectedIndexes } = this;
        this._trigger('change', {
          value: coalesce(selectedValue[selectedValue.length - 1], ''),
          selectedOptions: items.map((item, index) => item[selectedIndexes[index]]).filter(Boolean),
        });
      },
      isShowOverlay(value, defaultValue) {
        return tools.isBoolean(value) ? value : defaultValue;
      },
    },
  }),
};
</script>
<style scoped src="./cascader.css"></style>
