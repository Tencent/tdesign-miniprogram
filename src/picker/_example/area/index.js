const areaList = {
  provinces: {
    110000: 'Beijing',
    440000: 'Guangdong',
  },
  cities: {
    110100: 'Beijing',
    440100: 'Guangzhou',
    440200: 'Shaoguan',
    440300: 'Shenzheng',
    440400: 'Zhuhai',
    440500: 'Shantou',
    440600: 'Foshan',
  },
  counties: {
    110101: 'Dongcheng',
    110102: 'Xicheng',
    110105: 'Zhaoyang',
    110106: 'Fengtai',
    110107: 'Shanjinshan',
    110108: 'Haiding',
    110109: 'Mentougou',
    110111: 'Fangshan',
    110112: 'Tongzhou',
    110113: 'Shunyi',
    110114: 'Changping',
    110115: 'Daxing',
    110116: 'Huairou',
    110117: 'Pinggu',
    110118: 'Miyun',
    110119: 'Yanqing',
    440103: 'LIwan',
    440104: 'Yuexiu',
    440105: 'Haizhu',
    440106: 'Tianhe',
    440111: 'Baiyun',
    440112: 'Huangfu',
    440113: 'Boyu',
    440114: 'Huadu',
    440115: 'Nansha',
    440117: 'Conghua',
    440118: 'Zengcheng',
    440203: 'Wujiang',
    440204: 'Zhenjiang',
    440205: 'Qujiang',
    440222: 'Shixing',
    440224: 'Renhua',
    440229: 'Wongyuan',
    440232: 'Ruyuanyaozuzizhixian',
    440233: 'Xinfeng',
    440281: 'Lechang',
    440282: 'Nanxiong',
    440303: 'Luohu',
    440304: 'Futian',
    440305: 'Nanshan',
    440306: 'Baoan',
    440307: 'Longgang',
    440308: 'Yantian',
    440309: 'Longhua',
    440310: 'Pingshan',
    440311: 'Guangming',
    440402: 'Xiangzhou',
    440403: 'Doumen',
    440404: 'Jinwan',
    440507: 'Longhu',
    440511: 'Jinping',
    440512: 'Haojiang',
    440513: 'Chaoyang',
    440514: 'Chaonan',
    440515: 'Chenghai',
    440523: 'Nanao',
    440604: 'Shancheng',
    440605: 'Nanhai',
    440606: 'Shunde',
    440607: 'Sanshui',
    440608: 'Gaoming',
  },
};

const getOptions = (obj, filter) => {
  const res = Object.keys(obj).map((key) => ({ value: key, label: obj[key] }));

  if (filter) {
    return res.filter(filter);
  }

  return res;
};

const match = (v1, v2, size) => v1.toString().slice(0, size) === v2.toString().slice(0, size);

Component({
  data: {
    areaText: '',
    areaValue: [],
    provinces: getOptions(areaList.provinces),
    cities: [],
    counties: [],
  },

  lifetimes: {
    ready() {
      const { provinces } = this.data;
      const { cities, counties } = this.getCities(provinces[0].value);

      this.setData({ cities, counties });
    },
  },

  methods: {
    onColumnChange(e) {
      console.log('pick:', e.detail);
      const { column, index } = e.detail;
      const { provinces, cities } = this.data;

      if (column === 0) {
        // 更改省份
        const { cities, counties } = this.getCities(provinces[index].value);

        this.setData({ cities, counties });
      }

      if (column === 1) {
        // 更改城市
        const counties = this.getCounties(cities[index].value);

        this.setData({ counties });
      }

      if (column === 2) {
        // 更改区县
      }
    },

    getCities(provinceValue) {
      const cities = getOptions(areaList.cities, (city) => match(city.value, provinceValue, 2));
      const counties = this.getCounties(cities[0].value);

      return { cities, counties };
    },

    getCounties(cityValue) {
      return getOptions(areaList.counties, (county) => match(county.value, cityValue, 4));
    },

    onPickerChange(e) {
      const { value, label } = e.detail;

      console.log('picker confirm:', e.detail);
      this.setData({
        areaVisible: false,
        areaValue: value,
        areaText: label.join(' '),
      });
    },

    onPickerCancel(e) {
      console.log('picker cancel', e.detail);
      this.setData({
        areaVisible: false,
      });
    },

    onAreaPicker() {
      this.setData({ areaVisible: true });
    },
  },
});
