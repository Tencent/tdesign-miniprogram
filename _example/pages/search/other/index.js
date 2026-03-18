Component({
  data: {
    value: '',
  },

  methods: {
    onChange({ detail }) {
      console.log(`modelValue: ${detail.value}`);
    },
  },
});
