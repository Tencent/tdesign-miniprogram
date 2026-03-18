Component({
  data: {
    autosize: {
      maxHeight: 120,
      minHeight: 20,
    },
  },
  methods: {
    onLineChange(e) {
      console.log('lineCount: ', e.detail);
    },
  },
});
