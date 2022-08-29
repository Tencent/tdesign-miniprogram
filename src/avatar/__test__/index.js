Component({
  data: {
    image: 'https://cdn-we-retail.ym.tencent.com/retail-ui/components-exp/avatar/avatar-v2/1.png',
    pics: [
      'https://cdn-we-retail.ym.tencent.com/retail-ui/components-exp/avatar/avatar-v2/1.png',
      'https://cdn-we-retail.ym.tencent.com/retail-ui/components-exp/avatar/avatar-v2/2.png',
      'https://cdn-we-retail.ym.tencent.com/retail-ui/components-exp/avatar/avatar-v2/3.png',
      'https://cdn-we-retail.ym.tencent.com/retail-ui/components-exp/avatar/avatar-v2/4.png',
      'https://cdn-we-retail.ym.tencent.com/retail-ui/components-exp/avatar/avatar-v2/5.png',
      'https://cdn-we-retail.ym.tencent.com/retail-ui/components-exp/avatar/avatar-v2/1.png',
    ],
    errorImage: 'https://cdn-we-retail.ym.tencent.com/retail-ui/components-exp/avatar/avatar',
    text: '',
  },

  methods: {
    onLoadError() {
      this.setData({
        text: 'image load error',
      });
    },
  },
});
