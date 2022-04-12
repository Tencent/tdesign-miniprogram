const emptyArr = new Array(20).fill(null);
const numberArr = [...emptyArr].map((_, i) => ({
  label: '选项名称',
  value: `option_${i + 1}`,
  disabled: i > 6,
}));

const disabledArr = [...emptyArr].map((_, i) => ({
  label: '选项名称',
  value: `option_${i + 1}`,
  disabled: (i + 1) % 3 === 0,
}));

const treeOption = [
  {
    label: '北京市',
    value: 'beijing',
    options: [
      {
        label: '北京市',
        value: 'beijing',
        options: [
          { label: '东城区', value: 'dongcheng' },
          { label: '西城区', value: 'xicheng' },
          { label: '朝阳区', value: 'chaoyang' },
          { label: '丰台区', value: 'fengtai' },
          { label: '石景山区', value: 'shijingshan' },
          { label: '海淀区', value: 'haidian' },
          { label: '门头沟区', value: 'mentougou' },
          { label: '房山区', value: 'fangshan' },
          { label: '通州区', value: 'tongzhou' },
          { label: '顺义区', value: 'shunyi' },
        ],
      },
    ],
  },
  {
    label: '天津市',
    value: 'tianjin',
    options: [
      {
        label: '天津市',
        value: 'tianjin',
        options: [
          { label: '和平区', value: 'heping' },
          { label: '河东区', value: 'hedong' },
          { label: '河西区', value: 'hexi' },
        ],
      },
    ],
  },
  {
    label: '河北省',
    value: 'hebei',
    options: [
      {
        label: '石家庄市',
        value: 'shijiazhuang',
        options: [
          { label: '长安区', value: 'changan' },
          { label: '桥西区', value: 'qiaoxi' },
          { label: '新华区', value: 'xinhua' },
          { label: '井陉矿区', value: 'jingjingkuang' },
          { label: '裕华区', value: 'yuhua' },
          { label: '藁城区', value: 'gaocheng' },
        ],
      },
      {
        label: '唐山市',
        value: 'tangshan',
        options: [
          { label: '曹妃甸区', value: 'caofeidian' },
          { label: '丰南区', value: 'fengnan' },
          { label: '丰润区', value: 'fengrun' },
          { label: '古冶区', value: 'guye' },
          { label: '开平区', value: 'kaiping' },
          { label: '乐亭区', value: 'laoting' },
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
