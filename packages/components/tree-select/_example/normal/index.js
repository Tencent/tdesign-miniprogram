const areaList = {
  provinces: {
    110000: '北京市',
    440000: '广东省',
  },
  cities: {
    110100: '北京市',
    440100: '广州市',
    440200: '韶关市',
    440300: '深圳市',
    440400: '珠海市',
    440500: '汕头市',
    440600: '佛山市',
  },
  counties: {
    110101: '东城区',
    110102: '西城区',
    110105: '朝阳区',
    110106: '丰台区',
    110107: '石景山区',
    110108: '海淀区',
    110109: '门头沟区',
    110111: '房山区',
    110112: '通州区',
    110113: '顺义区',
    110114: '昌平区',
    110115: '大兴区',
    110116: '怀柔区',
    110117: '平谷区',
    110118: '密云区',
    110119: '延庆区',
    440103: '荔湾区',
    440104: '越秀区',
    440105: '海珠区',
    440106: '天河区',
    440111: '白云区',
    440112: '黄埔区',
    440113: '番禺区',
    440114: '花都区',
    440115: '南沙区',
    440117: '从化区',
    440118: '增城区',
    440203: '武江区',
    440204: '浈江区',
    440205: '曲江区',
    440222: '始兴县',
    440224: '仁化县',
    440229: '翁源县',
    440232: '乳源瑶族自治县',
    440233: '新丰县',
    440281: '乐昌市',
    440282: '南雄市',
    440303: '罗湖区',
    440304: '福田区',
    440305: '南山区',
    440306: '宝安区',
    440307: '龙岗区',
    440308: '盐田区',
    440309: '龙华区',
    440310: '坪山区',
    440311: '光明区',
    440402: '香洲区',
    440403: '斗门区',
    440404: '金湾区',
    440507: '龙湖区',
    440511: '金平区',
    440512: '濠江区',
    440513: '潮阳区',
    440514: '潮南区',
    440515: '澄海区',
    440523: '南澳县',
    440604: '禅城区',
    440605: '南海区',
    440606: '顺德区',
    440607: '三水区',
    440608: '高明区',
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
