Component({
  data: {
    marks: { 20: '20', 40: '40', 60: '60', 80: '80', 100: '100' },
  },
  methods: {
    handleChange(e) {
      console.log(e.detail.value);
    },
  },
});
