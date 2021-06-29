const emptyArr = new Array(20).fill(null);
const numberArr = [...emptyArr].map((_, i) => ({
  title: `选项 ${i + 1}`,
  value: `option_${i + 1}`,
}));

const disabledArr = [...emptyArr].map((_, i) => ({
  title: `选项 ${i + 1}`,
  value: `option_${i + 1}`,
  disabled: (i + 1) % 3 === 0,
}));

const treeOption = [
  {
    title: '北京市',
    value: 'beijing',
    options: [
      {
        title: '北京市',
        value: 'beijing',
        options: [
          { title: '东城区', value: 'dongcheng' },
          { title: '西城区', value: 'xicheng' },
          { title: '朝阳区', value: 'chaoyang' },
          { title: '丰台区', value: 'fengtai' },
          { title: '石景山区', value: 'shijingshan' },
          { title: '海淀区', value: 'haidian' },
          { title: '门头沟区', value: 'mentougou' },
          { title: '房山区', value: 'fangshan' },
          { title: '通州区', value: 'tongzhou' },
          { title: '顺义区', value: 'shunyi' },
        ],
      },
    ],
  },
  {
    title: '天津市',
    value: 'tianjin',
    options: [
      {
        title: '天津市',
        value: 'tianjin',
        options: [
          { title: '和平区', value: 'heping' },
          { title: '河东区', value: 'hedong' },
          { title: '河西区', value: 'hexi' },
        ],
      },
    ],
  },
  {
    title: '河北省',
    value: 'hebei',
    options: [
      {
        title: '石家庄市',
        value: 'shijiazhuang',
        options: [
          { title: '长安区', value: 'changan' },
          { title: '桥西区', value: 'qiaoxi' },
          { title: '新华区', value: 'xinhua' },
          { title: '井陉矿区', value: 'jingjingkuang' },
          { title: '裕华区', value: 'yuhua' },
          { title: '藁城区', value: 'gaocheng' },
        ],
      },
      {
        title: '唐山市',
        value: 'tangshan',
        options: [
          { title: '曹妃甸区', value: 'caofeidian' },
          { title: '丰南区', value: 'fengnan' },
          { title: '丰润区', value: 'fengrun' },
          { title: '古冶区', value: 'guye' },
          { title: '开平区', value: 'kaiping' },
          { title: '乐亭区', value: 'laoting' },
        ],
      },
    ],
  },
];

// const treeValue1 = ['tianjin', 'tianjin', 'heping'];
// const treeValue2 = ['tianjin', 'tianjin', ['hedong', 'hexi']];
const treeValue1 = [];
const treeValue2 = [];

Page({
  data: {
    tab: 0,
    optionsS: numberArr,
    selectedS: 'option_2',
    optionsM: numberArr,
    selectedM: ['option_1', 'option_3'],
    optionsD: disabledArr,
    selectedD: 'option_1',
    treeOption,
    treeValue1,
    treeValue2,
  },
  singleSelected(e) {
    this.setData({
      selectedS: e.detail,
    });
  },
  multiSelected(e) {
    this.setData({
      selectedM: e.detail,
    });
  },
  tree1Selected(e) {
    this.setData({
      treeValue1: e.detail,
    });
  },
  tree2Selected(e) {
    this.setData({
      treeValue2: e.detail,
    });
  },
  switchTab(e) {
    this.setData({
      tab: e.currentTarget.dataset.tab,
    });
  },
});
