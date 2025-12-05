Component({
  options: {
    multipleSlots: true,
    addGlobalClass: true,
  },
  properties: {
    title: {
      type: String,
      default: '',
    },
    desc: {
      type: String,
      default: '',
    },
    operList: Array,
    padding: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    clickHandle(e) {
      const { type } = e.currentTarget.dataset;
      this.triggerEvent('clickoper', type);
    },
  },
});
