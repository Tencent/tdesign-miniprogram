export default {
  classPrefix: {
    type: String,
    default: '',
  },
  customStyle: {
    type: [String, Object],
    default: '',
  },
  isMultiple: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: '',
  },
  sliderInfo: {
    type: Object,
    default: () => ({}),
  },
  saturationThumbStyle: {
    type: [String, Object],
    default: '',
  },
  hueSliderStyle: {
    type: [String, Object],
    default: '',
  },
  enableAlpha: {
    type: Boolean,
    default: false,
  },
  alphaSliderStyle: {
    type: [String, Object],
    default: '',
  },
  showPrimaryColorPreview: {
    type: Boolean,
    default: false,
  },
  previewColor: {
    type: String,
    default: '',
  },
  formatList: {
    type: Array,
    default: () => ([]),
  },
  innerSwatchList: {
    type: Array,
    default: () => ([]),
  },
  format: {
    type: String,
    default: 'RGB',
  },
};
