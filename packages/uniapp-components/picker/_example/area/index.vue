<template>
  <view>
    <t-cell
      title="选择地区"
      arrow
      hover
      :note="areaText"
      @click="onAreaPicker"
    />

    <t-picker
      v-model:visible="areaVisible"
      :value="areaValue"
      title="选择地区"
      cancel-btn="取消"
      confirm-btn="确认"
      :using-custom-navbar="!isMPAlipay"
      @change="onPickerChange"
      @pick="onColumnChange"
      @cancel="onPickerCancel"
    >
      <t-picker-item :options="provinces" />
      <t-picker-item :options="cities" />
      <t-picker-item :options="counties" />
    </t-picker>
  </view>
</template>

<script>
import TCell from 'tdesign-uniapp/cell/cell.vue';
import TPicker from 'tdesign-uniapp/picker/picker.vue';
import TPickerItem from 'tdesign-uniapp/picker-item/picker-item.vue';
import { areaList } from './helper';

const getOptions = (obj, filter) => {
  const res = Object.keys(obj).map(key => ({
    value: key,
    label: obj[key],
  }));
  if (filter) {
    return res.filter(filter);
  }
  return res;
};
const match = (v1, v2, size) => v1.toString().slice(0, size) === v2.toString().slice(0, size);
export default {
  components: {
    TCell,
    TPicker,
    TPickerItem,
  },
  data() {
    return {
      areaText: '',
      areaValue: [],
      provinces: getOptions(areaList.provinces),
      cities: [],
      counties: [],
      areaVisible: false,
    };
  },
  mounted() {
    // 处理小程序 ready 生命周期
    this.$nextTick(() => this.ready());
  },
  created() {},
  methods: {
    ready() {
      this.init();
    },

    init() {
      const { provinces } = this;
      const { cities, counties } = this.getCities(provinces[0].value);
      this.cities = cities;
      this.counties = counties;
    },

    onColumnChange(e) {
      console.log('pick:', e);
      const { column, index } = e;
      const { provinces, cities } = this;
      if (column === 0) {
        // 更改省份
        const { cities, counties } = this.getCities(provinces[index].value);
        this.cities = cities;
        this.counties = counties;
      }
      if (column === 1) {
        // 更改城市
        const counties = this.getCounties(cities[index].value);
        this.counties = counties;
      }
      if (column === 2) {
        // 更改区县
      }
    },

    getCities(provinceValue) {
      const cities = getOptions(areaList.cities, city => match(city.value, provinceValue, 2));
      const counties = this.getCounties(cities[0].value);
      return {
        cities,
        counties,
      };
    },

    getCounties(cityValue) {
      return getOptions(areaList.counties, county => match(county.value, cityValue, 4));
    },

    onPickerChange(e) {
      const { value, label } = e;
      console.log('picker confirm:', e);
      this.areaVisible = false;
      this.areaValue = value;
      this.areaText =  label.join(' ');
    },

    onPickerCancel(e) {
      console.log('picker cancel', e);
      this.areaVisible = false;
      if (this.areaValue.length) {
        return;
      }
      this.init();
    },

    onAreaPicker() {
      this.areaVisible = true;
    },
  },
};
</script>
<style>
</style>
