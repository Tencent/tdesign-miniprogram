Component({
  options: {
    styleIsolation: 'apply-shared',
  },
  data: {
    marks: {
      0: '0',
      20: '20',
      40: '40',
      60: '60',
      80: '80',
      100: '100',
    },
  },
  methods: {
    handleChange(e) {
      console.log(e);
    },
  },
});
