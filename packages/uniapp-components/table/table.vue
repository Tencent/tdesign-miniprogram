<template>
  <view
    :class="[
      classPrefix,
      tClass,
      classPrefix + '--layout-' + tableLayout,
      prefix + '-vertical-align-' + verticalAlign,
      bordered ? classPrefix + '--bordered' : '',
      stripe ? classPrefix + '--striped' : '',
      stripe && (maxHeight || height) ? classPrefix + '--header-fixed' : '',
      loading ? classPrefix + '--loading' : '',
      rowspanAndColspan ? classPrefix + '--rowspan-colspan' : '',
      hasFixedColumn ? classPrefix + '--column-fixed' : '',
      isRowDraggable ? classPrefix + '--row-draggable' : '',
      isColDraggable ? classPrefix + '--col-draggable' : '',
    ]"
    :style="'' + tools._style([customStyle])"
  >
    <scroll-view
      :class="contentClasses"
      :style="tableContentStylesStr"
      scroll-x
      :scroll-y="!!(height || maxHeight)"
      @scroll="onScroll"
    >
      <view :class="classPrefix + '__table-elm'" :style="tableElementStylesStr">
        <!-- 表头 -->
        <view
          v-if="showHeader"
          :class="[classPrefix + '__header', maxHeight || height ? classPrefix + '__header--fixed' : '']"
        >
          <view :class="classPrefix + '__header-tr'">
            <view
              v-for="(col, colIndex) in columns"
              :key="col.colKey || colIndex"
              :class="[
                classPrefix + '__th',
                getThClassName(col, colIndex),
                dragColEnabled ? classPrefix + '__th--drag-sort' : '',
                draggingColIndex === colIndex ? classPrefix + '__th--dragging' : '',
                col.sorter ? classPrefix + '__th--sortable' : '',
              ]"
              :style="getColStyle(col, colIndex) + (draggingColIndex === colIndex ? ';' + colDragTransform : '')"
              @touchstart="onColTouchStart($event, colIndex)"
              @touchmove="onColTouchMove($event)"
              @touchend="onColTouchEnd()"
            >
              <view :class="classPrefix + '__th-content'">
                <text>{{ col.title }}</text>
                <view v-if="col.sorter" :class="classPrefix + '__sort-trigger'">
                  <view :class="classPrefix + '__sort-icons'">
                    <t-icon
                      v-if="!col.sortType || col.sortType === 'all' || col.sortType === 'asc'"
                      name="chevron-down"
                      :class="[
                        classPrefix + '__sort-icon',
                        classPrefix + '__sort-icon--asc',
                        sortMap[col.colKey] && !sortMap[col.colKey].descending
                          ? classPrefix + '__sort-icon--active'
                          : classPrefix + '__sort-icon--default',
                      ]"
                      size="16px"
                      @click.stop="onSortIconClick(colIndex, false)"
                    />
                    <t-icon
                      v-if="!col.sortType || col.sortType === 'all' || col.sortType === 'desc'"
                      name="chevron-down"
                      :class="[
                        classPrefix + '__sort-icon',
                        sortMap[col.colKey] && sortMap[col.colKey].descending
                          ? classPrefix + '__sort-icon--active'
                          : classPrefix + '__sort-icon--default',
                      ]"
                      size="16px"
                      @click.stop="onSortIconClick(colIndex, true)"
                    />
                  </view>
                </view>
              </view>
            </view>
          </view>
        </view>

        <!-- 表体 -->
        <view :class="classPrefix + '__body'" :style="tbodyStyles">
          <!-- 空数据 -->
          <view v-if="isEmpty" :class="classPrefix + '__empty-row'">
            <view :class="classPrefix + '__empty'">
              <template v-if="empty">
                {{ empty }}
              </template>
              <slot v-else name="empty" />
            </view>
          </view>

          <!-- 数据行：非合并场景为 flex 行结构 -->
          <template v-if="!hasSpan">
            <view
              v-for="rowItem in renderData"
              :key="rowItem.rowId"
              :class="[
                classPrefix + '__tr',
                classPrefix + '__tr-' + rowItem.rowIndex,
                rowItem.rowClass,
                rowItem.draggingClass,
              ]"
              :style="rowItem.rowStyle + (rowItem.dragTransform ? ';' + rowItem.dragTransform : '')"
              @click="onRowClick(rowItem.rowIndex)"
              @touchstart="onRowTouchStart($event, rowItem.rowIndex)"
              @touchmove="onRowTouchMove($event)"
              @touchend="onRowTouchEnd()"
            >
              <!-- #ifdef VUE2 -->
              <!-- eslint-disable-next-line vue/no-unused-vars -->
              <template v-for="(cell, tdIndex) in rowItem.cells">
                <!-- #endif -->
                <!-- #ifdef VUE3 -->
                <template v-for="(cell, tdIndex) in rowItem.cells" :key="cell.colKey">
                  <!-- #endif -->

                  <view
                    :class="[
                      classPrefix + '__td',
                      cell.className,
                      draggingColIndex === tdIndex ? classPrefix + '__td--dragging' : '',
                    ]"
                    :style="
                      '' +
                      cell.cellStyle +
                      (draggingColIndex === tdIndex && colDragTransform ? ';' + colDragTransform : '')
                    "
                    @click.stop="onCellClick(rowItem.rowIndex, tdIndex)"
                  >
                    <view :class="classPrefix + '__td-content'">
                      {{ cell.content }}
                    </view>
                  </view>
                  <!-- #ifdef VUE3 -->
                </template>
                <!-- #endif -->

                <!-- #ifdef VUE2 -->
              </template>
              <!-- #endif -->
            </view>
          </template>

          <!-- 数据行：合并场景，body 为 grid 容器、td 跨行跨列 -->
          <template v-else>
            <!-- #ifdef VUE2 -->
            <!-- eslint-disable-next-line vue/no-unused-vars -->
            <template v-for="spanRow in renderData">
              <!-- #endif -->
              <!-- #ifdef VUE3 -->
              <template v-for="spanRow in renderData" :key="spanRow.rowId">
                <!-- #endif -->
                <!-- #ifdef VUE2 -->
                <!-- eslint-disable-next-line vue/no-unused-vars -->
                <template v-for="(spanCell, spanTdIndex) in spanRow.cells">
                  <!-- #endif -->
                  <!-- #ifdef VUE3 -->
                  <template v-for="(spanCell, spanTdIndex) in spanRow.cells" :key="spanCell.colKey">
                    <!-- #endif -->
                    <view
                      v-if="!spanCell.skipped"
                      :class="[
                        classPrefix + '__td',
                        spanCell.className,
                        spanCell.isLastRow ? classPrefix + '__td-last-row' : '',
                        spanCell.isFirstCol ? classPrefix + '__td-first-col' : '',
                      ]"
                      :style="'' + spanCell.cellStyle"
                      @click.stop="onCellClick(spanRow.rowIndex, spanTdIndex)"
                    >
                      <view :class="classPrefix + '__td-content'">
                        {{ spanCell.content }}
                      </view>
                    </view>
                    <!-- #ifdef VUE3 -->
                  </template>
                  <!-- #endif -->
                  <!-- #ifdef VUE2 -->
                </template>
                <!-- #endif -->
                <!-- #ifdef VUE3 -->
              </template>
              <!-- #endif -->
              <!-- #ifdef VUE2 -->
            </template>
            <!-- #endif -->
          </template>
        </view>
      </view>

      <!-- 加载中 -->
      <view v-if="loading" :class="classPrefix + '__loading--full'">
        <slot name="loading">
          <t-loading
            :delay="(loadingProps && loadingProps.delay) || 0"
            :duration="(loadingProps && loadingProps.duration) || 800"
            :fullscreen="!!(loadingProps && loadingProps.fullscreen)"
            :indicator="loadingProps && loadingProps.indicator !== undefined ? loadingProps.indicator : true"
            :inherit-color="!!(loadingProps && loadingProps.inheritColor)"
            :layout="(loadingProps && loadingProps.layout) || 'horizontal'"
            :loading="loadingProps && loadingProps.loading !== undefined ? loadingProps.loading : true"
            :pause="!!(loadingProps && loadingProps.pause)"
            :progress="loadingProps && loadingProps.progress"
            :reverse="!!(loadingProps && loadingProps.reverse)"
            :size="(loadingProps && loadingProps.size) || '20px'"
            :text="(loadingProps && loadingProps.text) || ''"
            :theme="(loadingProps && loadingProps.theme) || 'circular'"
          />
        </slot>
      </view>
    </scroll-view>

    <!-- 表尾总结行 -->
    <view v-if="footerSummary" :class="classPrefix + '__bottom-content'">
      {{ footerSummary }}
    </view>
    <slot name="footer-summary" />
  </view>
</template>
<script>
import { prefix } from '../common/config';
import { uniComponent } from '../common/src/index';
import tools from '../common/utils.wxs';
import TLoading from '../loading/loading.vue';
import TIcon from '../icon/icon.vue';

import baseProps from './base-table-props';
import primaryProps from './primary-table-props';
import { get as getVal, formatCSSUnit, getCellKey, getSkipSpansMap, handleCellSpan } from './utils';

const name = `${prefix}-table`;

export default {
  components: {
    TLoading,
    TIcon,
  },
  emits: ['row-click', 'cell-click', 'scroll', 'scroll-to-bottom', 'sort-change', 'data-change', 'change', 'drag-sort'],
  ...uniComponent({
    name,
    options: {
      styleIsolation: 'shared',
    },
    externalClasses: [`${prefix}-class`],
    props: {
      ...baseProps,
      ...primaryProps,
    },
    data() {
      return {
        prefix,
        classPrefix: name,
        tools,
        renderData: [],
        isEmpty: false,
        hasFixedColumn: false,
        hasSpan: false,
        tbodyStyles: '',
        scrollableToLeft: false,
        scrollableToRight: false,
        fixedLeftOffsets: [],
        fixedRightOffsets: [],
        lastFixedLeftIndex: -1,
        firstFixedRightIndex: -1,
        fixedTopRows: 0,
        fixedBottomRows: 0,
        // 拖拽相关状态
        isRowDraggable: false,
        isColDraggable: false,
        dragColEnabled: false,
        draggingColIndex: -1,
        colDragTransform: '',
        // 排序相关状态
        sortMap: {},
      };
    },
    computed: {
      contentClasses() {
        const classes = [`${this.classPrefix}__content`];
        if (this.scrollableToLeft) classes.push(`${this.classPrefix}__content--scrollable-to-left`);
        if (this.scrollableToRight) classes.push(`${this.classPrefix}__content--scrollable-to-right`);
        return classes.join(' ');
      },
      tableContentStylesStr() {
        const styles = [];
        if (this.height) styles.push(`height: ${formatCSSUnit(this.height)}`);
        if (this.maxHeight) styles.push(`max-height: ${formatCSSUnit(this.maxHeight)}`);
        return styles.join('; ');
      },
      tableElementStylesStr() {
        // 优先使用用户指定的 tableContentWidth
        if (this.tableContentWidth) {
          return `width: ${formatCSSUnit(this.tableContentWidth)}`;
        }
        // 有固定列时，自动根据列宽之和计算 tableContentWidth
        if (this.hasFixedColumn && this.columns && this.columns.length > 0) {
          const totalWidth = this.columns.reduce((sum, col) => sum + parseFloat(String(col.width || 80)), 0);
          return `width: ${totalWidth}px`;
        }
        return '';
      },
    },
    watch: {
      columns: {
        handler() {
          this.updateRenderData();
        },
        deep: true,
        immediate: true,
      },
      data: {
        handler() {
          this.updateRenderData();
        },
        deep: true,
        immediate: true,
      },
      cellEmptyContent() {
        this.updateRenderData();
      },
      rowKey() {
        this.updateRenderData();
      },
      rowspanAndColspan() {
        this.updateRenderData();
      },
      fixedRows: {
        handler() {
          this.updateRenderData();
        },
        deep: true,
      },
      dragSort: {
        handler() {
          this.updateDragState();
        },
        immediate: true,
      },
      sort() {
        this.updateSortMap();
      },
      defaultSort() {
        this.updateSortMap();
      },
      showSortColumnBgColor() {
        this.updateRenderData();
      },
    },
    methods: {
      getColStyle(col, colIndex) {
        if (!col) return '';
        const defaultColWidth = this.tableLayout === 'fixed' ? '80px' : undefined;
        const width = formatCSSUnit(col.width || defaultColWidth);
        const minWidth =
          !formatCSSUnit(col.width || defaultColWidth) && !col.minWidth && this.tableLayout === 'fixed'
            ? '80px'
            : formatCSSUnit(col.minWidth);
        const styles = [];
        // 当列设置了固定宽度时，使用 flex: 0 0 auto 防止被 flex 压缩，支持横向滚动
        if (col.width) {
          styles.push('flex: 0 0 auto');
        }
        if (width) styles.push(`width: ${width}`);
        if (minWidth) styles.push(`min-width: ${minWidth}`);
        // 固定列定位
        if (col.fixed === 'left' && this.fixedLeftOffsets[colIndex] !== undefined) {
          styles.push(`left: ${this.fixedLeftOffsets[colIndex]}px`);
        } else if (col.fixed === 'right' && this.fixedRightOffsets[colIndex] !== undefined) {
          styles.push(`right: ${this.fixedRightOffsets[colIndex]}px`);
        }
        return styles.join('; ');
      },

      getCustomClassName(className = '') {
        const calcClassName = (name) => {
          if (typeof name === 'function') {
            return name() || '';
          }
          return name;
        };

        if (Array.isArray(className)) {
          return className.map(calcClassName);
        }
        return [calcClassName(className)];
      },

      getThClassName(col, colIndex) {
        const classes = [];
        if (col.colKey) classes.push(`${name}__th-${col.colKey}`);
        if (col.align && col.align !== 'left') classes.push(`${prefix}-align-${col.align}`);
        if (col.fixed === 'left') classes.push(`${name}__cell--fixed-left`);
        if (col.fixed === 'right') classes.push(`${name}__cell--fixed-right`);
        if (col.className) classes.push(...this.getCustomClassName(col.className));
        if (colIndex === this.lastFixedLeftIndex) classes.push(`${name}__cell--fixed-left-last`);
        if (colIndex === this.firstFixedRightIndex) classes.push(`${name}__cell--fixed-right-first`);
        // 排序列背景色
        if (this.showSortColumnBgColor && col.sorter && this.sortMap[col.colKey]) {
          classes.push(`${name}__sort-column`);
        }
        return classes.join(' ');
      },

      // ========== 排序相关 ==========
      normalizeSort(sort) {
        if (!sort) return [];
        return Array.isArray(sort) ? sort : [sort];
      },

      buildSortMap(sortArray) {
        return sortArray.reduce((prev, cur, index) => {
          prev[cur.sortBy] = { index, ...cur };
          return prev;
        }, {});
      },

      updateSortMap() {
        const { sort, defaultSort } = this;
        let sortArray;
        if (sort) {
          sortArray = this.normalizeSort(sort);
        } else if (this._innerSortChanged) {
          sortArray = this.normalizeSort(this._innerSort);
        } else {
          sortArray = this.normalizeSort(defaultSort);
        }
        this.sortMap = this.buildSortMap(sortArray);
      },

      onSortIconClick(colIndex, descending) {
        const { columns, multipleSort, sort, defaultSort } = this;
        const col = (columns || [])[colIndex];
        if (!col || !col.sorter) return;

        const currentSort = sort || (this._innerSortChanged ? this._innerSort : defaultSort);
        const sortArray = this.normalizeSort(currentSort);
        const { colKey } = col;

        let nextSort;
        if (multipleSort) {
          const result = [...sortArray];
          const existIndex = result.findIndex((s) => s.sortBy === colKey);
          if (existIndex !== -1) {
            if (result[existIndex].descending === descending) {
              result.splice(existIndex, 1);
            } else {
              result[existIndex] = { sortBy: colKey, descending };
            }
          } else {
            result.push({ sortBy: colKey, descending });
          }
          nextSort = result;
        } else {
          const currentSingle = sortArray[0];
          if (currentSingle && currentSingle.sortBy === colKey && currentSingle.descending === descending) {
            nextSort = undefined;
          } else {
            nextSort = { sortBy: colKey, descending };
          }
        }

        const nextSortArray = this.normalizeSort(nextSort);
        this.$emit('sort-change', { sort: nextSort });
        if (nextSort) {
          this.$emit('data-change', { trigger: 'sort' });
        }
        this.$emit('change', { sorter: nextSort }, { trigger: 'sorter' });

        // 非受控模式下更新内部排序状态
        if (!sort) {
          this._innerSortChanged = true;
          this._innerSort = nextSortArray.length === 0 ? undefined : nextSortArray;
          this.updateSortMap();
        }
      },

      // ========== 拖拽模式 ==========
      updateDragState() {
        const { dragSort } = this;
        this.isRowDraggable = ['row', 'row-handler', 'row-handler-col'].includes(dragSort);
        this.isColDraggable = ['col', 'row-handler-col'].includes(dragSort);
        this.dragColEnabled = this.isColDraggable;
        if ((this.isRowDraggable || this.isColDraggable) && !this._dragMeasured) {
          this.$nextTick(() => {
            this.measureDragDimensions();
          });
        }
      },

      measureDragDimensions() {
        const query = uni.createSelectorQuery().in(this);
        if (this.isRowDraggable) {
          query.select(`.${name}__tr`).boundingClientRect();
        }
        if (this.isColDraggable) {
          query.selectAll(`.${name}__th`).boundingClientRect();
        }
        query.exec((res) => {
          if (!res) return;
          let idx = 0;
          if (this.isRowDraggable) {
            const rowRect = res[idx];
            if (rowRect && rowRect.height) {
              this._rowHeight = rowRect.height;
            }
            idx += 1;
          }
          if (this.isColDraggable) {
            const colRects = res[idx];
            if (colRects && colRects.length > 0) {
              this._colWidths = colRects.map((r) => r.width);
            }
          }
          this._dragMeasured = true;
        });
      },

      // ========== 行拖拽排序 ==========
      onRowTouchStart(e, rowIndex) {
        if (!this.isRowDraggable || this.hasSpan) return;
        const touch = e.touches[0];
        this._dragRowTargetIndex = rowIndex;
        this._dragRowState = {
          startY: touch.clientY,
          startX: touch.clientX,
          rowIndex,
          activated: false,
          lastMoveTime: 0,
          lastTargetIndex: rowIndex,
        };
      },

      onRowTouchMove(e) {
        if (!this._dragRowState) return;
        const touch = e.touches[0];
        const { startX, startY, rowIndex } = this._dragRowState;
        const deltaX = touch.clientX - startX;
        const deltaY = touch.clientY - startY;

        if (!this._dragRowState.activated) {
          if (Math.abs(deltaY) > 10 && Math.abs(deltaY) > Math.abs(deltaX)) {
            this._dragRowState.activated = true;
            this.setRowDragStyle(
              rowIndex,
              `${name}__tr--dragging`,
              `transform: translateY(${deltaY}px); z-index: 100;`,
            );
          } else {
            return;
          }
        }

        const now = Date.now();
        if (now - this._dragRowState.lastMoveTime < 16) return;
        this._dragRowState.lastMoveTime = now;

        const rowHeight = this._rowHeight || 44;
        const targetIndex = Math.max(
          0,
          Math.min(this.renderData.length - 1, rowIndex + Math.round(deltaY / rowHeight)),
        );

        this.setRowDragStyle(rowIndex, `${name}__tr--dragging`, `transform: translateY(${deltaY}px); z-index: 100;`);
        this._dragRowState.lastTargetIndex = targetIndex;
        this._dragRowTargetIndex = targetIndex;
      },

      onRowTouchEnd() {
        if (!this._dragRowState) return;
        const { activated, rowIndex } = this._dragRowState;
        this._dragRowState = null;

        if (!activated) {
          this.setRowDragStyle(rowIndex, '', '');
          return;
        }

        const targetIndex = this._dragRowTargetIndex ?? rowIndex;
        this.setRowDragStyle(rowIndex, '', '');

        if (targetIndex === rowIndex) return;

        const { data } = this;
        const newData = [...(data || [])];
        const [movedItem] = newData.splice(rowIndex, 1);
        newData.splice(targetIndex, 0, movedItem);

        this.$emit('drag-sort', {
          currentIndex: rowIndex,
          current: (data || [])[rowIndex],
          targetIndex,
          target: (data || [])[targetIndex],
          data: data || [],
          newData,
          sort: 'row',
        });
      },

      setRowDragStyle(rowIndex, draggingClass, dragTransform) {
        const list = [...this.renderData];
        if (list[rowIndex]) {
          list[rowIndex] = { ...list[rowIndex], draggingClass, dragTransform };
          this.renderData = list;
        }
      },

      // ========== 列拖拽排序 ==========
      onColTouchStart(e, colIndex) {
        if (!this.dragColEnabled) return;
        const touch = e.touches[0];
        this._dragColTargetIndex = colIndex;
        this._dragColState = {
          startX: touch.clientX,
          startY: touch.clientY,
          colIndex,
          activated: false,
          lastMoveTime: 0,
          lastTargetIndex: colIndex,
        };
      },

      onColTouchMove(e) {
        if (!this._dragColState) return;
        const touch = e.touches[0];
        const { startX, startY, colIndex } = this._dragColState;
        const deltaX = touch.clientX - startX;
        const deltaY = touch.clientY - startY;

        if (!this._dragColState.activated) {
          if (Math.abs(deltaX) > 10 && Math.abs(deltaX) > Math.abs(deltaY)) {
            this._dragColState.activated = true;
            this.draggingColIndex = colIndex;
            this.colDragTransform = `transform: translateX(${deltaX}px); z-index: 100;`;
          } else {
            return;
          }
        }

        const now = Date.now();
        if (now - this._dragColState.lastMoveTime < 16) return;
        this._dragColState.lastMoveTime = now;

        const colWidths = this._colWidths || [];
        const avgColWidth = colWidths.length > 0 ? colWidths.reduce((a, b) => a + b, 0) / colWidths.length : 80;
        const targetIndex = Math.max(
          0,
          Math.min((this.columns || []).length - 1, colIndex + Math.round(deltaX / avgColWidth)),
        );

        this.draggingColIndex = colIndex;
        this.colDragTransform = `transform: translateX(${deltaX}px); z-index: 100;`;
        this._dragColState.lastTargetIndex = targetIndex;
        this._dragColTargetIndex = targetIndex;
      },

      onColTouchEnd() {
        if (!this._dragColState) return;
        const { activated, colIndex } = this._dragColState;
        this._dragColState = null;

        if (!activated) {
          this.draggingColIndex = -1;
          this.colDragTransform = '';
          return;
        }

        const targetIndex = this._dragColTargetIndex ?? colIndex;
        this.draggingColIndex = -1;
        this.colDragTransform = '';

        if (targetIndex === colIndex) return;

        const { columns } = this;
        const newColumns = [...(columns || [])];
        const [movedCol] = newColumns.splice(colIndex, 1);
        newColumns.splice(targetIndex, 0, movedCol);

        this.$emit('drag-sort', {
          currentIndex: colIndex,
          current: (columns || [])[colIndex],
          targetIndex,
          target: (columns || [])[targetIndex],
          data: columns || [],
          newData: newColumns,
          sort: 'col',
        });
      },

      updateRenderData() {
        const { columns, data, cellEmptyContent, rowKey, rowspanAndColspan, fixedRows } = this;

        // 拖拽模式判断
        this.updateDragState();
        // 排序状态计算
        this.updateSortMap();

        // 解析 fixedRows
        const fixedTopRows = (fixedRows && fixedRows[0]) || 0;
        const fixedBottomRows = (fixedRows && fixedRows[1]) || 0;
        this.fixedTopRows = fixedTopRows;
        this.fixedBottomRows = fixedBottomRows;

        // 是否有固定表头
        const hasFixedHeader = !!(this.showHeader && (this.maxHeight || this.height));

        const dataLen = (data || []).length;

        // 检测是否有固定列
        const hasFixedColumn = (columns || []).some((col) => !!col.fixed);
        this.hasFixedColumn = hasFixedColumn;

        // 计算固定列偏移量
        if (hasFixedColumn) {
          const fixedLeftOffsets = [];
          const fixedRightOffsets = [];
          let leftOffset = 0;
          for (let i = 0; i < (columns || []).length; i += 1) {
            fixedLeftOffsets[i] = leftOffset;
            const col = columns[i];
            if (col.fixed === 'left') {
              leftOffset += parseFloat(String(col.width || 80));
            }
          }
          let rightOffset = 0;
          for (let i = (columns || []).length - 1; i >= 0; i -= 1) {
            fixedRightOffsets[i] = rightOffset;
            const col = columns[i];
            if (col.fixed === 'right') {
              rightOffset += parseFloat(String(col.width || 80));
            }
          }
          this.fixedLeftOffsets = fixedLeftOffsets;
          this.fixedRightOffsets = fixedRightOffsets;

          // 找到最后一个左固定列和第一个右固定列的索引
          let lastLeft = -1;
          let firstRight = -1;
          (columns || []).forEach((col, index) => {
            if (col.fixed === 'left') lastLeft = index;
            if (col.fixed === 'right' && firstRight === -1) firstRight = index;
          });
          this.lastFixedLeftIndex = lastLeft;
          this.firstFixedRightIndex = firstRight;

          // 初始状态：可向右滚动
          this.scrollableToRight = true;
          this.scrollableToLeft = false;
        }

        // 计算合并单元格
        const hasSpan = !!rowspanAndColspan && !!data?.length && !!columns?.length;
        const skipSpansMap = getSkipSpansMap(data, columns, rowKey, rowspanAndColspan);
        this.hasSpan = hasSpan;

        // 合并场景 grid 列模板，列宽与表头 flex 对齐：有 width 用固定值，其余用 1fr
        let tbodyStyles = '';
        if (hasSpan) {
          const templateColumns = (columns || [])
            .map((col) => {
              const width = formatCSSUnit(col.width);
              return width ? `${width}` : 'minmax(0, 1fr)';
            })
            .join(' ');
          tbodyStyles = `grid-template-columns: ${templateColumns};`;
        }
        this.tbodyStyles = tbodyStyles;

        // 构建渲染数据
        const renderData = (data || []).map((row, rowIndex) => {
          const cells = (columns || []).map((col, colIndex) => {
            const cellKey = getCellKey(row, rowKey, col.colKey, rowIndex, colIndex);
            const { rowspan, colspan, skipped } = handleCellSpan(cellKey, skipSpansMap);

            const tdClasses = [];
            if (col.align && col.align !== 'left') tdClasses.push(`${prefix}-align-${col.align}`);
            if (col.fixed === 'left') tdClasses.push(`${name}__cell--fixed-left`);
            if (col.fixed === 'right') tdClasses.push(`${name}__cell--fixed-right`);
            if (colIndex === this.lastFixedLeftIndex) tdClasses.push(`${name}__cell--fixed-left-last`);
            if (colIndex === this.firstFixedRightIndex) tdClasses.push(`${name}__cell--fixed-right-first`);
            // 排序列背景色
            if (this.showSortColumnBgColor && col.sorter && this.sortMap[col.colKey]) {
              tdClasses.push(`${name}__sort-column`);
            }

            let cellContent = '';
            if (col.colKey === 'serial-number') {
              cellContent = String(rowIndex + 1);
            } else if (typeof col.cell === 'function') {
              cellContent = col.cell({ row, col, rowIndex, colIndex });
            } else {
              const val = getVal(row, col.colKey || '');
              if (val !== undefined && val !== null && val !== '') {
                cellContent = String(val);
              } else if (cellEmptyContent) {
                cellContent = cellEmptyContent;
              }
            }

            // 合并场景用 grid 定位实现跨行跨列
            const cellStyle = hasSpan
              ? `grid-column: ${colIndex + 1} / span ${colspan || 1}; grid-row: ${rowIndex + 1} / span ${rowspan || 1}`
              : this.getColStyle(col, colIndex);

            return {
              colKey: col.colKey || String(colIndex),
              content: cellContent,
              className: tdClasses.join(' '),
              cellStyle,
              skipped: skipped || false,
              rowspan: rowspan || 0,
              colspan: colspan || 0,
              isLastRow: !!(rowspan && rowIndex + rowspan === data.length),
              isFirstCol: !!(rowspanAndColspan && colIndex === 0),
            };
          });

          // 固定行类名和样式
          const rowClasses = [];
          let rowStyle = '';
          // 固定行的 z-index 需要高于固定列的 z-index（右侧固定列 z-index 为 31），否则横向滚动时固定列内容会覆盖固定行
          const fixedRowZIndex = hasFixedColumn ? 32 : 2;
          if (fixedTopRows > 0 && rowIndex < fixedTopRows) {
            rowClasses.push(`${name}__row--fixed-top`);
            // top/bottom 值将在 nextTick 中通过实际 DOM 测量来设置
            rowStyle = `position: sticky; top: 0; z-index: ${fixedRowZIndex};`;
          }
          if (fixedBottomRows > 0 && rowIndex >= dataLen - fixedBottomRows) {
            rowClasses.push(`${name}__row--fixed-bottom`);
            if (rowIndex === dataLen - fixedBottomRows) {
              rowClasses.push(`${name}__row--fixed-bottom-first`);
            }
            rowStyle = `position: sticky; bottom: 0; z-index: ${fixedRowZIndex};`;
          }
          // 冻结表尾行时，最后一行非冻结行去除下边框
          if (fixedBottomRows > 0 && rowIndex === dataLen - fixedBottomRows - 1) {
            rowClasses.push(`${name}__row--without-border-bottom`);
          }

          return {
            rowIndex,
            rowId: getVal(row, rowKey || 'id'),
            cells,
            row,
            rowClass: rowClasses.join(' '),
            rowStyle,
            draggingClass: '',
            dragTransform: '',
          };
        });

        this.renderData = renderData;
        this.isEmpty = !data || data.length === 0;

        // 动态测量行高，修正固定行的 top/bottom 值
        if (fixedTopRows > 0 || fixedBottomRows > 0) {
          this.$nextTick(() => {
            this.measureAndFixStickyPositions(hasFixedHeader, fixedTopRows, fixedBottomRows, dataLen);
          });
        }
      },

      measureAndFixStickyPositions(hasFixedHeader, fixedTopRows, fixedBottomRows, dataLen) {
        const query = uni.createSelectorQuery().in(this);
        // 查询表头高度
        const headerSelector = `.${name}__header`;
        // 查询所有数据行
        const rowSelector = `.${name}__tr`;

        query.select(headerSelector).boundingClientRect();
        query.selectAll(rowSelector).boundingClientRect();
        query.exec((res) => {
          if (!res) return;
          const headerRect = res[0];
          const rowRects = res[1];
          if (!rowRects || rowRects.length === 0) return;

          const headerHeight = hasFixedHeader && headerRect ? headerRect.height : 0;

          const fixedRowZIndex = this.hasFixedColumn ? 32 : 2;

          // 计算固定顶部行的 top 值
          let topOffset = headerHeight;
          for (let i = 0; i < fixedTopRows && i < rowRects.length; i += 1) {
            const rd = this.renderData[i];
            if (rd) {
              rd.rowStyle = `position: sticky; top: ${topOffset}px; z-index: ${fixedRowZIndex};`;
              topOffset += rowRects[i].height;
            }
          }

          // 计算固定底部行的 bottom 值
          let bottomOffset = 0;
          for (let i = dataLen - 1; i >= dataLen - fixedBottomRows && i >= 0; i -= 1) {
            const rd = this.renderData[i];
            if (rd && i < rowRects.length) {
              rd.rowStyle = `position: sticky; bottom: ${bottomOffset}px; z-index: ${fixedRowZIndex};`;
              bottomOffset += rowRects[i].height;
            }
          }

          // 触发视图更新
          this.renderData = [...this.renderData];
        });
      },

      onRowClick(rowIndex) {
        const { data } = this;
        if (data && data[rowIndex]) {
          this.$emit('row-click', {
            row: data[rowIndex],
            index: rowIndex,
          });
        }
      },

      onCellClick(rowIndex, colIndex) {
        const { data, columns } = this;
        if (data && data[rowIndex] && columns && columns[colIndex]) {
          this.$emit('cell-click', {
            row: data[rowIndex],
            col: columns[colIndex],
            rowIndex,
            colIndex,
          });
        }
        // 合并场景无 __tr 行容器，click 不冒泡到 onRowClick，需手动补触发
        if (this.hasSpan && data && data[rowIndex]) {
          this.$emit('row-click', {
            row: data[rowIndex],
            index: rowIndex,
          });
        }
      },

      onScroll(e) {
        this.$emit('scroll', { e });

        // 更新固定列滚动阴影状态
        if (this.hasFixedColumn) {
          const detail = e.detail || e.target || {};
          const scrollLeft = detail.scrollLeft || 0;
          const scrollWidth = detail.scrollWidth || 0;
          const clientWidth = detail.clientWidth || detail.offsetWidth || 0;
          if (scrollWidth > 0 && clientWidth > 0) {
            this.scrollableToLeft = scrollLeft > 1;
            this.scrollableToRight = scrollWidth - scrollLeft - clientWidth > 1;
          }
        }
      },
    },
  }),
};
</script>
<style scoped src="./table.css"></style>
