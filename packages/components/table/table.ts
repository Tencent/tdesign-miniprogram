import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './base-table-props';
import type { BaseTableCol, TableRowData } from './type';

const { prefix } = config;
const name = `${prefix}-table`;

function get(obj: any, path: string) {
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

function formatCSSUnit(unit: string | number | undefined) {
  if (!unit) return unit;
  return Number.isNaN(Number(unit)) ? unit : `${unit}px`;
}

@wxComponent()
export default class Table extends SuperComponent {
  externalClasses = [`${prefix}-class`];

  options = {
    multipleSlots: true,
  };

  properties = props;

  data = {
    prefix,
    classPrefix: name,
    tableClasses: '',
    tableContentStyles: '',
    tableElementStyles: '',
    theadClasses: '',
    tbodyClasses: '',
    renderData: [] as any[],
    isEmpty: false,
    colStyles: [] as string[],
    thClassNames: [] as string[],
    tdClassNames: [] as string[][],
    hasFixedColumn: false,
    scrollableToLeft: false,
    scrollableToRight: false,
    contentClasses: '',
  };

  observers = {
    'bordered, stripe, verticalAlign, loading, rowspanAndColspan, tableLayout, height, maxHeight, tableContentWidth, showHeader, columns, data, cellEmptyContent, rowKey, fixedRows'(
      this: any,
    ) {
      this.updateTable();
    },
  };

  lifetimes = {
    attached(this: any) {
      this.updateTable();
    },
  };

  methods = {
    updateTable(this: any) {
      const {
        bordered,
        stripe,
        verticalAlign,
        loading,
        rowspanAndColspan,
        tableLayout,
        height,
        maxHeight,
        tableContentWidth,
        showHeader,
        columns,
        data,
        cellEmptyContent,
        rowKey,
        fixedRows,
      } = this.properties;

      // 解析 fixedRows
      const fixedTopRows = (fixedRows && (fixedRows as number[])[0]) || 0;
      const fixedBottomRows = (fixedRows && (fixedRows as number[])[1]) || 0;

      // 是否有固定表头
      const hasFixedHeader = !!(showHeader && (maxHeight || height));

      // 检测是否有固定列
      const hasFixedColumn = (columns || []).some((col: BaseTableCol) => !!col.fixed);

      // 表格基础类名
      const tableClasses = [
        name,
        `${prefix}-vertical-align-${verticalAlign || 'middle'}`,
        bordered ? `${name}--bordered` : '',
        stripe ? `${name}--striped` : '',
        stripe && (maxHeight || height) ? `${name}--header-fixed` : '',
        loading ? `${name}--loading` : '',
        rowspanAndColspan ? `${name}--rowspan-colspan` : '',
        hasFixedColumn ? `${name}--column-fixed` : '',
      ]
        .filter(Boolean)
        .join(' ');

      // 表格内容区域样式
      const contentStyles: string[] = [];
      if (height) contentStyles.push(`height: ${formatCSSUnit(height)}`);
      if (maxHeight) contentStyles.push(`max-height: ${formatCSSUnit(maxHeight)}`);
      const tableContentStyles = contentStyles.join('; ');

      // 表格元素样式
      let tableElementStyles = tableContentWidth ? `width: ${formatCSSUnit(tableContentWidth)}` : '';
      // 有固定列时，自动根据列宽之和计算 tableContentWidth
      if (!tableElementStyles && hasFixedColumn && columns && columns.length > 0) {
        const totalWidth = (columns as BaseTableCol[]).reduce((sum: number, col: BaseTableCol) => {
          return sum + parseFloat(String(col.width || 80));
        }, 0);
        tableElementStyles = `width: ${totalWidth}px`;
      }

      // 表头类名
      const theadClasses = [`${name}__header`, maxHeight || height ? `${name}__header--fixed` : '']
        .filter(Boolean)
        .join(' ');

      const tbodyClasses = `${name}__body`;

      // 表格布局类名
      const layoutClass = `${name}--layout-${tableLayout || 'fixed'}`;

      // 计算固定列偏移量
      const fixedLeftOffsets: number[] = [];
      const fixedRightOffsets: number[] = [];
      if (hasFixedColumn) {
        // 计算左侧固定列的 left 偏移
        let leftOffset = 0;
        for (let i = 0; i < (columns || []).length; i += 1) {
          fixedLeftOffsets[i] = leftOffset;
          const col = columns[i];
          if (col.fixed === 'left') {
            const w = parseFloat(String(col.width || 80));
            leftOffset += w;
          }
        }
        // 计算右侧固定列的 right 偏移
        let rightOffset = 0;
        for (let i = (columns || []).length - 1; i >= 0; i -= 1) {
          fixedRightOffsets[i] = rightOffset;
          const col = columns[i];
          if (col.fixed === 'right') {
            const w = parseFloat(String(col.width || 80));
            rightOffset += w;
          }
        }
      }

      // 找到最后一个左固定列和第一个右固定列的索引
      let lastFixedLeftIndex = -1;
      let firstFixedRightIndex = -1;
      (columns || []).forEach((col: BaseTableCol, index: number) => {
        if (col.fixed === 'left') lastFixedLeftIndex = index;
        if (col.fixed === 'right' && firstFixedRightIndex === -1) firstFixedRightIndex = index;
      });

      // 列样式
      const defaultColWidth = tableLayout === 'fixed' ? '80px' : undefined;
      const colStyles = (columns || []).map((col: BaseTableCol, colIndex: number) => {
        const width = formatCSSUnit(col.width || defaultColWidth);
        const minWidth =
          !formatCSSUnit(col.width || defaultColWidth) && !col.minWidth && tableLayout === 'fixed'
            ? '80px'
            : formatCSSUnit(col.minWidth);
        const styles: string[] = [];
        // 当列设置了固定宽度时，使用 flex: 0 0 auto 防止被 flex 压缩，支持横向滚动
        if (col.width) {
          styles.push('flex: 0 0 auto');
        }
        if (width) styles.push(`width: ${width}`);
        if (minWidth) styles.push(`min-width: ${minWidth}`);
        // 固定列定位
        if (col.fixed === 'left') {
          styles.push(`left: ${fixedLeftOffsets[colIndex]}px`);
        } else if (col.fixed === 'right') {
          styles.push(`right: ${fixedRightOffsets[colIndex]}px`);
        }
        return styles.join('; ');
      });

      // 表头类名
      const thClassNames = (columns || []).map((col: BaseTableCol, colIndex: number) => {
        const classes: string[] = [];
        if (col.colKey) classes.push(`${name}__th-${col.colKey}`);
        if (col.align && col.align !== 'left') classes.push(`${prefix}-align-${col.align}`);
        if (col.fixed === 'left') classes.push(`${name}__cell--fixed-left`);
        if (col.fixed === 'right') classes.push(`${name}__cell--fixed-right`);
        if (colIndex === lastFixedLeftIndex) classes.push(`${name}__cell--fixed-left-last`);
        if (colIndex === firstFixedRightIndex) classes.push(`${name}__cell--fixed-right-first`);
        return classes.join(' ');
      });

      // 计算合并单元格
      const skipSpansMap = new Map<string, { rowspan?: number; colspan?: number; skipped?: boolean }>();
      if (rowspanAndColspan && data?.length && columns?.length) {
        for (let i = 0; i < data.length; i += 1) {
          const row = data[i];
          for (let j = 0; j < columns.length; j += 1) {
            const col = columns[j];
            const cellKey = `${get(row, rowKey || 'id')}_${col.colKey || j}`;
            const state = skipSpansMap.get(cellKey) || {};
            const o = (rowspanAndColspan as any)({ row, col, rowIndex: i, colIndex: j }) || {};
            if (o.rowspan || o.colspan || state.rowspan || state.colspan) {
              if (o.rowspan) state.rowspan = o.rowspan;
              if (o.colspan) state.colspan = o.colspan;
              skipSpansMap.set(cellKey, state);
            }
            // 标记被合并的单元格
            if (state.rowspan || state.colspan) {
              const maxRowIndex = i + (state.rowspan || 1);
              const maxColIndex = j + (state.colspan || 1);
              for (let ri = i; ri < maxRowIndex; ri += 1) {
                for (let ci = j; ci < maxColIndex; ci += 1) {
                  if (ri !== i || ci !== j) {
                    if (data[ri] && columns[ci]) {
                      const key = `${get(data[ri], rowKey || 'id')}_${columns[ci].colKey || ci}`;
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
      const renderData = (data || []).map((row: TableRowData, rowIndex: number) => {
        const cells = (columns || []).map((col: BaseTableCol, colIndex: number) => {
          const cellKey = `${get(row, rowKey || 'id')}_${col.colKey || colIndex}`;
          const spanState = skipSpansMap.get(cellKey);

          const tdClasses: string[] = [];
          if (col.align && col.align !== 'left') tdClasses.push(`${prefix}-align-${col.align}`);
          if (col.fixed === 'left') tdClasses.push(`${name}__cell--fixed-left`);
          if (col.fixed === 'right') tdClasses.push(`${name}__cell--fixed-right`);
          if (colIndex === lastFixedLeftIndex) tdClasses.push(`${name}__cell--fixed-left-last`);
          if (colIndex === firstFixedRightIndex) tdClasses.push(`${name}__cell--fixed-right-first`);

          let cellContent = '';
          if (col.colKey === 'serial-number') {
            cellContent = String(rowIndex + 1);
          } else if (typeof col.cell === 'function') {
            cellContent = col.cell({ row, col, rowIndex, colIndex });
          } else {
            const val = get(row, col.colKey || '');
            if (val !== undefined && val !== null && val !== '') {
              cellContent = String(val);
            } else if (cellEmptyContent) {
              cellContent = cellEmptyContent as string;
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

        return {
          rowIndex,
          rowId: get(row, rowKey || 'id'),
          cells,
          row,
          rowClass: (() => {
            const classes: string[] = [];
            const dataLen = data.length;
            if (fixedTopRows > 0 && rowIndex < fixedTopRows) {
              classes.push(`${name}__row--fixed-top`);
            }
            if (fixedBottomRows > 0 && rowIndex >= dataLen - fixedBottomRows) {
              classes.push(`${name}__row--fixed-bottom`);
              if (rowIndex === dataLen - fixedBottomRows) {
                classes.push(`${name}__row--fixed-bottom-first`);
              }
            }
            if (fixedBottomRows > 0 && rowIndex === dataLen - fixedBottomRows - 1) {
              classes.push(`${name}__row--without-border-bottom`);
            }
            return classes.join(' ');
          })(),
          rowStyle: (() => {
            const dataLen = data.length;
            // 固定行的 z-index 需要高于固定列的 z-index（右侧固定列 z-index 为 31），否则横向滚动时固定列内容会覆盖固定行
            const fixedRowZIndex = this.data.hasFixedColumn ? 32 : 2;
            if (fixedTopRows > 0 && rowIndex < fixedTopRows) {
              // top/bottom 值将在 afterSetData 中通过实际 DOM 测量来设置
              return `position: sticky; top: 0px; z-index: ${fixedRowZIndex};`;
            }
            if (fixedBottomRows > 0 && rowIndex >= dataLen - fixedBottomRows) {
              return `position: sticky; bottom: 0px; z-index: ${fixedRowZIndex};`;
            }
            return '';
          })(),
        };
      });

      const isEmpty = !data || data.length === 0;

      // 内容区域类名（滚动阴影）
      const contentClasses = [`${name}__content`, hasFixedColumn ? `${name}__content--scrollable-to-right` : '']
        .filter(Boolean)
        .join(' ');

      this.setData(
        {
          tableClasses,
          tableContentStyles,
          tableElementStyles,
          theadClasses,
          tbodyClasses,
          layoutClass,
          renderData,
          isEmpty,
          colStyles,
          thClassNames,
          columnsLength: (columns || []).length,
          hasFixedColumn,
          contentClasses,
        },
        () => {
          // 动态测量行高，修正固定行的 top/bottom 值
          if (fixedTopRows > 0 || fixedBottomRows > 0) {
            this.measureAndFixStickyPositions(hasFixedHeader, fixedTopRows, fixedBottomRows, (data || []).length);
          }
        },
      );
    },

    measureAndFixStickyPositions(
      this: any,
      hasFixedHeader: boolean,
      fixedTopRows: number,
      fixedBottomRows: number,
      dataLen: number,
    ) {
      const query = this.createSelectorQuery();
      query.select(`.${name}__header`).boundingClientRect();
      query.selectAll(`.${name}__tr`).boundingClientRect();
      query.exec((res: any) => {
        if (!res) return;
        const headerRect = res[0];
        const rowRects = res[1];
        if (!rowRects || rowRects.length === 0) return;

        const headerHeight = hasFixedHeader && headerRect ? headerRect.height : 0;
        const updates: Record<string, string> = {};
        const fixedRowZIndex = this.data.hasFixedColumn ? 32 : 2;

        // 计算固定顶部行的 top 值
        let topOffset = headerHeight;
        for (let i = 0; i < fixedTopRows && i < rowRects.length; i += 1) {
          updates[`renderData[${i}].rowStyle`] = `position: sticky; top: ${topOffset}px; z-index: ${fixedRowZIndex};`;
          topOffset += rowRects[i].height;
        }

        // 计算固定底部行的 bottom 值
        let bottomOffset = 0;
        for (let i = dataLen - 1; i >= dataLen - fixedBottomRows && i >= 0; i -= 1) {
          if (i < rowRects.length) {
            updates[`renderData[${i}].rowStyle`] =
              `position: sticky; bottom: ${bottomOffset}px; z-index: ${fixedRowZIndex};`;
            bottomOffset += rowRects[i].height;
          }
        }

        if (Object.keys(updates).length > 0) {
          this.setData(updates);
        }
      });
    },

    onRowClick(this: any, e: any) {
      const { rowIndex } = e.currentTarget.dataset;
      const { data } = this.properties;
      if (data && data[rowIndex]) {
        this.triggerEvent('row-click', {
          row: data[rowIndex],
          index: rowIndex,
        });
      }
    },

    onCellClick(this: any, e: any) {
      const { rowIndex, colIndex } = e.currentTarget.dataset;
      const { data, columns } = this.properties;
      if (data && data[rowIndex] && columns && columns[colIndex]) {
        this.triggerEvent('cell-click', {
          row: data[rowIndex],
          col: columns[colIndex],
          rowIndex,
          colIndex,
        });
      }
    },

    onScroll(this: any, e: any) {
      this.triggerEvent('scroll', { e });

      const target = e.detail || {};

      // 更新固定列滚动阴影状态
      if (this.data.hasFixedColumn && target.scrollLeft !== undefined) {
        const { scrollLeft } = target;
        const scrollWidth = target.scrollWidth || 0;
        // 使用 createSelectorQuery 获取实际宽度
        this.createSelectorQuery()
          .select(`.${name}__content`)
          .boundingClientRect()
          .exec((res: any) => {
            if (res && res[0]) {
              const containerWidth = res[0].width;
              const canScrollLeft = scrollLeft > 1;
              const canScrollRight = scrollWidth - scrollLeft - containerWidth > 1;
              const contentClasses = [
                `${name}__content`,
                canScrollLeft ? `${name}__content--scrollable-to-left` : '',
                canScrollRight ? `${name}__content--scrollable-to-right` : '',
              ]
                .filter(Boolean)
                .join(' ');

              if (contentClasses !== this.data.contentClasses) {
                this.setData({ contentClasses });
              }
            }
          });
      }

      // 滚动到底部检测
      if (
        target.scrollHeight &&
        target.scrollTop !== undefined &&
        target.scrollHeight - target.scrollTop - target.clientHeight <= 50
      ) {
        this.triggerEvent('scroll-to-bottom');
      }
    },
  };
}
