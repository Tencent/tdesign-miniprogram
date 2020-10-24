Page({
  data: {
    heroOptions: [
      { index: 0, name: '伊泽瑞尔' },
      { index: 1, name: '卢锡安' },
      { index: 2, name: '薇恩' },
      { index: 3, name: '厄斐琉斯' },
      { index: 4, name: '塞娜' },
      { index: 5, name: '维鲁斯' },
      { index: 6, name: '格雷福斯' },
      { index: 7, name: '金克斯' },
    ],
    gameOptions: [
      { index: 0, name: '英雄联盟' },
      { index: 1, name: 'DOTA2' },
      { index: 2, name: '王者荣耀' },
      { index: 3, name: '和平精英' },
      { index: 4, name: '阴阳师' },
      { index: 5, name: '梦幻西游' },
      { index: 6, name: '大话西游' },
      { index: 7, name: '一刀999' },
    ],
    evaluationOptions: [
      { index: 0, name: '3A大作' },
      { index: 1, name: '精品游戏' },
      { index: 2, name: 'MOBA' },
      { index: 3, name: '换皮游戏' },
      { index: 4, name: '氪金游戏' },
      { index: 5, name: '辣鸡游戏' },
      { index: 6, name: '卡牌游戏' },
      { index: 7, name: '回合制游戏' },
    ],
    roleOptions: ['战士', '法师', '射手', '刺客', '坦克', '辅助'],
    multiHeroOptions: [
      ['01', '02', '03', '04', '05'],
      ['11', '12', '13', '14', '15'],
      ['21', '22', '23', '24', '25'],
      ['31', '32', '33', '34', '35'],
      ['41', '42', '43', '44', '45'],
      ['51', '52', '53', '54', '55'],
      ['61', '62', '63', '64', '65'],
    ],
    roleIndex: 0,
  },
  onPicker1Confirm(event) {
    const { index, value } = event.detail;
    console.log(`picker tap confirm! index: ${index}, value: ${value}`);
  },
  onPicker1Cancel() {
    console.log('picker tap cancel!');
  },
  onPicker1Change(event) {
    const { index, value } = event.detail;
    console.log(`picker change! index: ${index}, value: ${value}`);
  },
  onColumn1Change(event) {
    const { index, value } = event.detail;
    console.log(`picker column change! index: ${index}, value: ${value}`);
  },
  onPicker2Confirm(event) {
    const { index, value } = event.detail;
    console.log(`picker tap confirm! index: ${index}, value: ${value}`);
  },
  onPicker2Cancel() {
    console.log('picker tap cancel!');
  },
  onPicker2Change(event) {
    const { column, index, value } = event.detail;
    console.log(`picker change! column: ${column}, index: ${index}, value: ${value}`);
  },
  onRoleChange(event) {
    const { index } = event.detail;
    this.setData({ roleIndex: index });
  },
});
