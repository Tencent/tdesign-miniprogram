Page({
  data: {
    indexList: [],
    list: [
      {
        index: 'A',
        children: ['Aba', 'Alashan', 'Ali', 'Anlang', 'Anqing', 'Anshan', 'Anshun', 'Anyang', 'Aomen'],
      },
      {
        index: 'B',
        children: [
          'Beijing',
          'Baiyin',
          'Baoding',
          'Baoji',
          'Baoshan',
          'Baotou',
          'Bazhong',
          'Beihai',
          'Bengbu',
          'Benxi',
          'Bijie',
          'Binzhou',
          'Baise',
          'Bozhou',
        ],
      },
      {
        index: 'C',
        children: [
          'Chongqing',
          'Chengdu',
          'Changsha',
          'Changchun',
          'Cangzhou',
          'Changde',
          'Changdu',
          'Changzhi',
          'Changzhou',
          'Chaohu',
          'Chaohu',
          'Chengzhou',
          'Chengzhou',
          'Chifeng',
          'Chizhou',
          'Chongzuo',
          'Chuxiong',
          'Chuzhou',
          'Chaoyang',
        ],
      },
      {
        index: 'D',
        children: [
          'Dalian',
          'Dongguan',
          'Dali',
          'Dandong',
          'Daqing',
          'Datong',
          'Daxinanling',
          'Dehong',
          'Deyang',
          'Dezhou',
          'Dingxi',
          'Diqing',
          'Dongying',
        ],
      },
      {
        index: 'E',
        children: ['Eerduosi', 'Ensho', 'Ezhou'],
      },
      {
        index: 'F',
        children: ['Fuzhou', 'Fangliangang', 'Foshan', 'Fushun', 'Fuzhou', 'Fuxin', 'Fuyang'],
      },
      {
        index: 'G',
        children: [
          'Guangzhou',
          'Guilin',
          'Guiyang',
          'Gannan',
          'Ganzhou',
          'Ganzi',
          'Guangan',
          'Guangyuan',
          'Guigang',
          'Guoluo',
        ],
      },
      {
        index: 'J',
        children: [
          'Jieyang',
          'Jiling',
          'Jinjiang',
          'Jian',
          'Jiaozhou',
          'Jiaxing',
          'Jinan',
          'Jixi',
          'Jinzhou',
          'Jiangmen',
          'Jilong',
        ],
      },
      {
        index: 'K',
        children: ['Kunming', 'Kaifeng', 'kangding', 'kashi'],
      },
    ],
  },

  onReady() {
    this.setData({
      indexList: this.data.list.map((item) => item.index),
    });
  },

  onSelect(e) {
    const { index } = e.detail;

    console.log(index);
  },
});
