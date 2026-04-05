<template>
  <view
    :class="[
      classPrefix,
      tClass,
      classPrefix + '--layout-' + tableLayout,
      prefix + '-vertical-align-' + verticalAlign,
      bordered ? classPrefix + '--bordered' : '',
      stripe ? classPrefix + '--striped' : '',
      (stripe && (maxHeight || height)) ? classPrefix + '--header-fixed' : '',
      loading ? classPrefix + '--loading' : '',
      rowspanAndColspan ? classPrefix + '--rowspan-colspan' : '',
      hasFixedColumn ? classPrefix + '--column-fixed' : '',
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
      <view
        :class="classPrefix + '__table-elm'"
        :style="tableElementStylesStr"
      >
        <!-- 表头 -->
        <view
          v-if="showHeader"
          :class="[
            classPrefix + '__header',
            (maxHeight || height) ? classPrefix + '__header--fixed' : '',
          ]"
        >
          <view :class="classPrefix + '__header-tr'">
            <view
              v-for="(col, colIndex) in columns"
              :key="col.colKey || colIndex"
              :class="[
                classPrefix + '__th',
                getThClassName(col, colIndex),
              ]"
              :style="'' + getColStyle(col, colIndex)"
            >
              <view :class="classPrefix + '__th-content'">
                {{ col.title }}
              </view>
            </view>
          </view>
        </view>

        <!-- 表体 -->
        <view :class="classPrefix + '__body'">
          <!-- 空数据 -->
          <view
            v-if="isEmpty"
            :class="classPrefix + '__empty-row'"
          >
            <view :class="classPrefix + '__empty'">
              <template v-if="empty">
                {{ empty }}
              </template>
              <slot
                v-else
                name="empty"
              />
            </view>
          </view>

          <!-- 数据行 -->
          <view
            v-for="rowItem in renderData"
            :key="rowItem.rowId"
            :class="[classPrefix + '__tr', rowItem.rowClass]"
            :style="rowItem.rowStyle"
            @click="onRowClick(rowItem.rowIndex)"
          >
            <template
              v-for="(cell, tdIndex) in rowItem.cells"
              :key="cell.colKey"
            >
              <view
                v-if="!cell.skipped"
                :class="[
                  classPrefix + '__td',
                  cell.className,
                  cell.isLastRow ? classPrefix + '__td-last-row' : '',
                  cell.isFirstCol ? classPrefix + '__td-first-col' : '',
                ]"
                :style="'' + getColStyle(columns[tdIndex], tdIndex)"
                @click.stop="onCellClick(rowItem.rowIndex, tdIndex)"
              >
                <view :class="classPrefix + '__td-content'">
                  {{ cell.content }}
                </view>
              </view>
            </template>
          </view>
        </view>
      </view>

      <!-- 加载中 -->
      <view
        v-if="loading"
        :class="classPrefix + '__loading--full'"
      >
        <slot name="loading">
          <t-loading v-bind="loadingProps" />
        </slot>
      </view>
    </scroll-view>

    <!-- 表尾总结行 -->
    <view
      v-if="footerSummary"
      :class="classPrefix + '__bottom-content'"
    >
      {{ footerSummary }}
    </view>
    <slot name="footer-summary" />
  </view>
</template>
<script>
import TLoading from '../loading/loading.vue';
import { uniComponent } from '../common/src/index';
import { prefix } from '../common/config';
import props from './base-table-props';
import tools from '../common/utils.wxs';

const name = `${prefix}-table`;

function getVal(obj, path) {
  if (!obj || !path) return undefined;
  const keys = path.split('.');
  let result = obj;
  keys.forEach((key) => {
    if (result !== undefined && result !== null) {
      result = result[key];
    }
  });
  return result;
}

function formatCSSUnit(unit) {
  if (!unit) return unit;
  return Number.isNaN(Number(unit)) ? unit : `${unit}px`;
}

export default {
  components: {
    TLoading,
  },
  emits: [
    'row-click',
    'cell-click',
    'scroll',
    'scroll-to-bottom',
  ],
  ...uniComponent({
    name,
    options: {
      styleIsolation: 'shared',
    },
    externalClasses: [
      `${prefix}-class`,
    ],
    props: {
      ...props,
    },
    data() {
      return {
        prefix,
        classPrefix: name,
        tools,
        renderData: [],
        isEmpty: false,
        hasFixedColumn: false,
        scrollableToLeft: false,
        scrollableToRight: false,
        fixedLeftOffsets: [],
        fixedRightOffsets: [],
        lastFixedLeftIndex: -1,
        firstFixedRightIndex: -1,
        fixedTopRows: 0,
        fixedBottomRows: 0,
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
    },
    methods: {
      getColStyle(col, colIndex) {
        if (!col) return '';
        const defaultColWidth = this.tableLayout === 'fixed' ? '80px' : undefined;
        const width = formatCSSUnit(col.width || defaultColWidth);
        const minWidth =          !formatCSSUnit(col.width || defaultColWidth) && !col.minWidth && this.tableLayout === 'fixed'           ? '80px'           : formatCSSUnit(col.minWidth);
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

      getThClassName(col, colIndex) {
        const classes = [];
        if (col.colKey) classes.push(`${name}__th-${col.colKey}`);
        if (col.align && col.align !== 'left') classes.push(`${prefix}-align-${col.align}`);
        if (col.fixed === 'left') classes.push(`${name}__cell--fixed-left`);
        if (col.fixed === 'right') classes.push(`${name}__cell--fixed-right`);
        if (colIndex === this.lastFixedLeftIndex) classes.push(`${name}__cell--fixed-left-last`);
        if (colIndex === this.firstFixedRightIndex) classes.push(`${name}__cell--fixed-right-first`);
        return classes.join(' ');
      },

      updateRenderData() {
        const { columns, data, cellEmptyContent, rowKey, rowspanAndColspan, fixedRows } = this;

        // 解析 fixedRows
        const fixedTopRows = (fixedRows && fixedRows[0]) || 0;
        const fixedBottomRows = (fixedRows && fixedRows[1]) || 0;
        this.fixedTopRows = fixedTopRows;
        this.fixedBottomRows = fixedBottomRows;

        // 是否有固定表头
        const hasFixedHeader = !!(this.showHeader && (this.maxHeight || this.height));

        const dataLen = (data || []).length;

        // 检测是否有固定列
        const hasFixedColumn = (columns || []).some(col => !!col.fixed);
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
        const skipSpansMap = new Map();
        if (rowspanAndColspan && data?.length && columns?.length) {
          for (let i = 0; i < data.length; i += 1) {
            const row = data[i];
            for (let j = 0; j < columns.length; j += 1) {
              const col = columns[j];
              const cellKey = `${getVal(row, rowKey || 'id')}_${col.colKey || j}`;
              const state = skipSpansMap.get(cellKey) || {};
              const o = rowspanAndColspan({ row, col, rowIndex: i, colIndex: j }) || {};
              if (o.rowspan || o.colspan || state.rowspan || state.colspan) {
                if (o.rowspan) state.rowspan = o.rowspan;
                if (o.colspan) state.colspan = o.colspan;
                skipSpansMap.set(cellKey, state);
              }
              if (state.rowspan || state.colspan) {
                const maxRowIndex = i + (state.rowspan || 1);
                const maxColIndex = j + (state.colspan || 1);
                for (let ri = i; ri < maxRowIndex; ri += 1) {
                  for (let ci = j; ci < maxColIndex; ci += 1) {
                    if (ri !== i || ci !== j) {
                      if (data[ri] && columns[ci]) {
                        const key = `${getVal(data[ri], rowKey || 'id')}_${columns[ci].colKey || ci}`;
                        const s = skipSpansMap.get(key) || {};
                        s.skipped = true;
                        skipSpansMap.set(key, s);
                      }
                    }
                  }
                }
              }
            }
          }
        }

        // 构建渲染数据
        const renderData = (data || []).map((row, rowIndex) => {
          const cells = (columns || []).map((col, colIndex) => {
            const cellKey = `${getVal(row, rowKey || 'id')}_${col.colKey || colIndex}`;
            const spanState = skipSpansMap.get(cellKey);

            const tdClasses = [];
            if (col.align && col.align !== 'left') tdClasses.push(`${prefix}-align-${col.align}`);
            if (col.fixed === 'left') tdClasses.push(`${name}__cell--fixed-left`);
            if (col.fixed === 'right') tdClasses.push(`${name}__cell--fixed-right`);
            if (colIndex === this.lastFixedLeftIndex) tdClasses.push(`${name}__cell--fixed-left-last`);
            if (colIndex === this.firstFixedRightIndex) tdClasses.push(`${name}__cell--fixed-right-first`);

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

            return {
              colKey: col.colKey || String(colIndex),
              content: cellContent,
              className: tdClasses.join(' '),
              skipped: spanState?.skipped || false,
              rowspan: spanState?.rowspan || 0,
              colspan: spanState?.colspan || 0,
              isLastRow: !!(spanState?.rowspan && rowIndex + spanState.rowspan === data.length),
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
            rowStyle = `position: sticky; top: 0px; z-index: ${fixedRowZIndex};`;
          }
          if (fixedBottomRows > 0 && rowIndex >= dataLen - fixedBottomRows) {
            rowClasses.push(`${name}__row--fixed-bottom`);
            if (rowIndex === dataLen - fixedBottomRows) {
              rowClasses.push(`${name}__row--fixed-bottom-first`);
            }
            rowStyle = `position: sticky; bottom: 0px; z-index: ${fixedRowZIndex};`;
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
