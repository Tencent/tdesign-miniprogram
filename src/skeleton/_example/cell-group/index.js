Component({
  properties: {
    theme: {
      type: String,
      value: 'text',
    },
    loading: {
      type: Boolean,
    },
  },

  data: {
    rowColsAvater: [{ size: '48px', type: 'circle' }],
    rowColsImage: [{ size: '48px', type: 'rect' }],
    rowColsContent: [{ width: '50%' }, { width: '100%' }],
  },
});
