Component({
  methods: {
    handleSelect(e) {
      const { value, entireValue } = e.detail;

      console.log(value);
      console.log(entireValue);
    },
  },
});
