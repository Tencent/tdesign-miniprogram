
Page({
  data: {
    leftDemoVisible: false,
    rightDemoVisible: false,
    topDemoVisible: false,
    bottomDemoVisible: false,
    iconDemoVisible: false,
    slotDemoVisible: false,
    currentDirection: 'left',
    baseSidebar: [{
      name: '菜单一',
    }, {
      name: '菜单二',
    }, {
      name: '菜单三',
    }, {
      name: '菜单四',
    }, {
      name: '菜单五',
    }, {
      name: '菜单六',
    },{
      name: '菜单七',
    }, {
      name: '菜单八',
    }],
    iconSidebar: [{
      name: '菜单一',
      icon: 'https://imgcache.qq.com/qcloud/tcloud_dtc/static/static_source_business/7bd23b57-07c1-493b-a482-de78f9874a4f.svg'
    }, {
      name: '菜单二',
      icon: 'https://imgcache.qq.com/qcloud/tcloud_dtc/static/static_source_business/7bd23b57-07c1-493b-a482-de78f9874a4f.svg'
    }, {
      name: '菜单三',
      icon: 'https://imgcache.qq.com/qcloud/tcloud_dtc/static/static_source_business/7bd23b57-07c1-493b-a482-de78f9874a4f.svg'
    }]
  },

  openLeftDrawer() {
    this.setData({
      leftDemoVisible: true
    })
  },
  openRightDrawer() {
    this.setData({
      rightDemoVisible: true
    })
  },
  openTopDrawer() {
    this.setData({
      topDemoVisible: true
    })
  },
  openBottomDrawer() {
    this.setData({
      bottomDemoVisible: true
    })
  },
  openDrawer2() {
    this.setData({
      iconDemoVisible: true
    })
  },
  openSlotDrawer() {
    this.setData({
      slotDemoVisible: true
    })
  },
  clickOverlay(e) {
    console.log('clickOverlay', e)
  }
});
