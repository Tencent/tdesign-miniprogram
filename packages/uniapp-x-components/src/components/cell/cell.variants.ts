import { cva } from '../../utils/cva';

export const cellVariants = cva('t-cell', {
  variants: {
    align: {
      top: 't-cell--align-top',
      middle: 't-cell--align-middle',
      bottom: 't-cell--align-bottom',
    },
    bordered: { true: 't-cell--bordered' },
    hover: { true: 't-cell--hover' },
    disabled: { true: 't-cell--disabled' },
    arrow: { true: 't-cell--arrow' },
  },
  defaultVariants: {
    align: 'middle',
  },
});
