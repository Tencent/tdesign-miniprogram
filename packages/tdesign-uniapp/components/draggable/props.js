const props = {
  direction: {
    type: String,
    value: 'all',
  },
  tClass: {
    type: String,
    default: '',
  },
  tClassButton: {
    type: String,
    default: '',
  },
  customStyle: {
    type: [String, Object],
    default: '',
  },
};
export default props;
