Component({
  data: {
    gutter: 4,
    border: false,
    jumpType: '',
  },
  properties: {
    onClick: null,
  },
  methods: {
    handleClick() {
      this.data.onClick?.();
    },
  },
});
