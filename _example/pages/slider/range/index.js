Component({
  methods: {
    onDragstart(e) {
      console.log('dragstart', e.detail);
    },
    onDragend(e) {
      console.log('dragend', e.detail);
    },
  },
});
