const IMAGE_URL = 'https://tdesign.gtimg.com/mobile/demos/upload6.png';

Component({
  data: {
    gridFiles: [
      {
        url: '',
        name: 'loading-file.txt',
        status: 'loading',
      },
      {
        url: '',
        name: 'loading-file2.txt',
        status: 'loading',
        percent: 68,
      },
      {
        url: '',
        name: 'failed-file.txt',
        status: 'reload',
      },
      {
        url: '',
        name: 'error-file.txt',
        status: 'failed',
      },
      {
        url: '',
        name: 'report.xlsx',
        size: 153600,
        status: 'done',
      },
      {
        url: '',
        name: 'document.pdf',
        size: 327680,
        status: 'done',
      },
      {
        url: '',
        name: 'presentation.pptx',
        size: 524288,
        status: 'done',
      },
      {
        url: '',
        name: 'article.docx',
        size: 262144,
        status: 'done',
      },
      {
        url: IMAGE_URL,
        name: 'image-loading.png',
        type: 'image',
        status: 'loading',
      },
      {
        url: IMAGE_URL,
        name: 'image-percent.png',
        type: 'image',
        status: 'loading',
        percent: 68,
      },
      {
        url: IMAGE_URL,
        name: 'image-reload.png',
        type: 'image',
        status: 'reload',
      },
      {
        url: IMAGE_URL,
        name: 'image-failed.png',
        type: 'image',
        status: 'failed',
      },
      {
        url: IMAGE_URL,
        name: 'image-done.png',
        type: 'image',
        status: 'done',
      },
    ],

    listFiles: [
      {
        url: '',
        name: 'Technical Design Document.pdf',
        size: 222208,
        status: 'loading',
        percent: 30,
      },
      {
        url: '',
        name: 'Technical Design Document.pdf',
        size: 222208,
        status: 'failed',
      },
      {
        url: IMAGE_URL,
        name: 'Design Mockup.png',
        type: 'image',
        size: 1048576,
        status: 'done',
      },
      {
        url: '',
        name: 'Product Demo.mp4',
        type: 'video',
        size: 5242880,
        status: 'done',
      },
      {
        url: '',
        name: 'Project Proposal.docx',
        size: 131072,
        status: 'done',
      },
      {
        url: '',
        name: 'Financial Report.xlsx',
        size: 262144,
        status: 'done',
      },
      {
        url: '',
        name: 'User Manual.pdf',
        size: 524288,
        status: 'done',
      },
      {
        url: '',
        name: 'Quarterly Review.pptx',
        size: 786432,
        status: 'done',
      },
    ],
  },
  methods: {
    handleAdd(e) {
      const { gridFiles } = this.data;
      const { files } = e.detail;

      // 方法1：选择完所有图片之后，统一上传，因此选择完就直接展示
      this.setData({
        gridFiles: [...gridFiles, ...files], // 此时设置了 gridFiles 之后才会展示选择的图片
      });

      // 方法2：每次选择图片都上传，展示每次上传图片的进度
      // files.forEach(file => this.uploadFile(file))
    },

    handleRemove(e) {
      const { index } = e.detail;
      const { gridFiles } = this.data;

      gridFiles.splice(index, 1);
      this.setData({
        gridFiles,
      });
    },

    handleListRemove(e) {
      const { index } = e.detail;
      const { listFiles } = this.data;

      listFiles.splice(index, 1);
      this.setData({
        listFiles,
      });
    },

    handleListDrop(e) {
      const { files } = e.detail;
      this.setData({
        listFiles: files,
      });
    },
  },
});
