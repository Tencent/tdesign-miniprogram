function formatPropKey(key) {
  return key.replace(/^(\w)/, (a, b) => `data${b.toUpperCase()}`);
}


function getPropsWatch(props) {
  const watchProps = Object.keys(props).reduce((acc, item) => {
    acc[item] = {
      handler(val) {
        this[formatPropKey(item)] = val;
      },
    };
    return acc;
  }, {});
  return watchProps;
}


function getPropsData(context, props) {
  const propsData = Object.keys(props).reduce((acc, item) => {
    acc[formatPropKey(item)] = context[item];
    return acc;
  }, {});
  return propsData;
}


function setPropsToData(data) {
  Object.keys(data).forEach((key) => {
    this[formatPropKey(key)] = data[key];
  });
}


export function getFunctionalMixin(dialogProps) {
  return {
    data() {
      return {
        ...getPropsData(this, dialogProps),
      };
    },
    watch: {
      ...getPropsWatch(dialogProps),
    },
    methods: {
      setData(data) {
        setPropsToData.call(this, data);
      },
    },
  };
}
