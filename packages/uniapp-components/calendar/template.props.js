export default {
  classPrefix: {
    type: String,
    default: '',
  },
  usePopup: {
    type: Boolean,
  },
  switchMode: {
    type: String,
    default: '',
  },
  tClass: {
    type: String,
    default: '',
  },
  customStyle: {
    type: [String, Object],
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  realLocalText: {
    type: Object,
    default: () => ({}),
  },
  months: {
    type: Array,
    default: () => ([]),
  },
  currentMonth: {
    type: [Array, Object],
    default: () => ([]),
  },
  actionButtons: {
    type: Object,
    default: () => ({}),
  },
  days: {
    type: Array,
    default: () => ([]),
  },
  scrollIntoView: {
    type: String,
    default: '',
  },
  firstDayOfWeek: {
    type: Number,
    default: 0,
  },
  innerConfirmBtn: {
    type: [Object, String],
    default: '',
  },
};
