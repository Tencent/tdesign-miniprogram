Page({
  data: {
    navbarHeight: 60,

    visibleBasePopup: false,
    visibleBase: false,

    visibleNoMaskPopup: false,
    visibleNoMask: false,

    visibleDialogPopup: false,
    visibleDialog: false,

    visibleDialog1Popup: false,
    visibleDialog1: false,

    visibleContentPopup: false,
    visibleContent: false,
  },

  async onLoad() {
    this.createSelectorQuery()
      .select('.custom-navbar')
      .boundingClientRect((rect) => {
        this.setData({ navbarHeight: rect.height });
      })
      .exec();
  },

  handleBaseClick() {
    this.setData({ visibleBasePopup: true });
    setTimeout(() => {
      this.setData({ visibleBase: true });
    }, 300);
  },
  handleBaseClose() {
    this.setData({ visibleBasePopup: false });
    setTimeout(() => {
      this.setData({ visibleBase: false });
    }, 300);
  },

  handleNoMaskClick() {
    this.setData({ visibleNoMaskPopup: true });
    setTimeout(() => {
      this.setData({ visibleNoMask: true });
    }, 300);
  },
  handleNoMaskClose() {
    this.setData({ visibleNoMaskPopup: false });
    setTimeout(() => {
      this.setData({ visibleNoMask: false });
    }, 300);
  },

  handleDialogClick() {
    this.setData({ visibleDialogPopup: true });
    setTimeout(() => {
      this.setData({ visibleDialog: true });
    }, 300);
  },
  handleDialogClose() {
    this.setData({ visibleDialogPopup: false });
    setTimeout(() => {
      this.setData({ visibleDialog: false });
    }, 300);
  },

  handleDialog1Click() {
    this.setData({ visibleDialog1Popup: true });
    setTimeout(() => {
      this.setData({ visibleDialog1: true });
    }, 300);
  },
  handleDialog1Close() {
    this.setData({ visibleDialog1Popup: false });
    setTimeout(() => {
      this.setData({ visibleDialog1: false });
    }, 300);
  },

  handleContentClick() {
    this.setData({ visibleContentPopup: true });
    setTimeout(() => {
      this.setData({ visibleContent: true });
    }, 300);
  },
  handleContentClose() {
    this.setData({ visibleContentPopup: false });
    setTimeout(() => {
      this.setData({ visibleContent: false });
    }, 300);
  },
});
