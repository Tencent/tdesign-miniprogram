Component({
  data: {
    gutter: 4,
    border: false,
    jumpType: '',
    style: 'color: red',
    customStyle: 'font-size: 9px',
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
