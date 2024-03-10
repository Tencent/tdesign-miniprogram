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

const generateTree = () => {
  const { provinces, cities, counties } = areaList;
  const options = [];
  const eachObj = (obj, cb) => Object.keys(obj).forEach(cb);
  const match = (v1, v2, base) => parseInt(v1 / base, 10) === parseInt(v2 / base, 10);

  eachObj(provinces, (prov) => {
    const cityList = [];

    eachObj(cities, (city) => {
      const countyList = [];

      if (match(city, prov, 10000)) {
        eachObj(counties, (county) => {
          if (match(county, city, 100)) {
            countyList.push({
              label: counties[county],
              value: county,
            });
          }
        });
        cityList.push({
          label: cities[city],
          value: city,
          children: countyList,
        });
      }
    });

    const item = {
      label: provinces[prov],
      value: prov,
      children: cityList,
    };

    options.push(item);
  });

  return options;
};

Component({
  data: {
    options: generateTree(),
    value: ['110000', '110100', '110101'],
  },

  methods: {
    onChange(e) {
      this.setData({
        value: e.detail.value,
      });
    },
  },
});
