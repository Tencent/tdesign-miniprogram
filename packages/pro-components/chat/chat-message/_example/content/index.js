Component({
  data: {
    aiMessage: {
      role: 'assistant',
      content: [
        {
          type: 'thinking',
          data: {
            title: '已完成思考（耗时3秒）',
            text: '好的，我现在需要回答用户关于对比近3年当代偶像爱情剧并总结创作经验的问题\n查询网络信息中...\n根据网络搜索结果，成功案例包括《春色寄情人》《要久久爱》《你也有今天》等，但缺乏具体播放数据，需要结合行业报告总结共同特征。2022-2024年偶像爱情剧的创作经验主要集中在题材创新、现实元素融入、快节奏叙事等方面。结合行业报告和成功案例，总结出以下创作经验。',
          },
        },
        {
          type: 'text',
          data: '不，牛顿第一定律并不适用于所有参考系。它只适用于惯性参考系。',
        },
      ],
    },
    pic1: {
      role: 'user',
      content: [
        {
          type: 'attachment',
          data: [
            {
              fileType: 'image',
              name: 'avatar.jpg',
              size: 234234,
              url: 'https://tdesign.gtimg.com/demo/demo-image-1.png',
              width: 1920, // 图片实际宽度
              height: 1080, // 图片实际高度
            },
          ],
        },
        {
          type: 'text',
          data: '分析以下内容，总结一篇广告策划方案',
        },
      ],
    },
    pic3: {
      role: 'user',
      content: [
        {
          type: 'attachment',
          data: [
            {
              fileType: 'image',
              name: 'avatar.jpg',
              size: 234234,
              url: 'https://tdesign.gtimg.com/demo/demo-image-1.png',
              width: 1920, // 图片实际宽度
              height: 1080, // 图片实际高度
            },
          ],
        },
        {
          type: 'text',
          data: '分析以下',
        },
      ],
    },
    pic2: {
      role: 'user',
      content: [
        {
          type: 'attachment',
          data: [
            {
              fileType: 'image',
              name: 'avatar.jpg',
              size: 234234,
              url: 'https://tdesign.gtimg.com/demo/demo-image-1.png',
              width: 1920, // 为了更好的适配不同尺寸图片建议传入宽高，不传也有兜底尺寸
              height: 1080, // 为了更好的适配不同尺寸图片建议传入宽高，不传也有兜底尺寸
            },
            {
              fileType: 'image',
              name: 'avatar2.jpg',
              size: 234234,
              url: 'https://tdesign.gtimg.com/demo/demo-image-1.png',
              width: 1920, // 图片实际宽度
              height: 1080, // 图片实际高度
            },
          ],
        },
        {
          type: 'text',
          data: '分析以下内容，总结一篇广告策划方案',
        },
      ],
    },
    fileMessage: {
      role: 'user',
      content: [
        {
          type: 'attachment',
          data: [
            {
              fileType: 'image',
              name: 'sample-image.jpg',
              url: 'https://tdesign.gtimg.com/demo/demo-image-1.png',
              size: 1024,
              status: 'success',
              width: 1920, // 图片实际宽度
              height: 1080, // 图片实际高度
            },
            {
              fileType: 'pdf',
              name: 'document.pdf',
              url: 'https://example.com/document.pdf',
              size: 3072,
              status: 'success',
            },
            {
              fileType: 'doc',
              name: 'report.docx',
              url: 'https://example.com/report.docx',
              size: 1536,
              status: 'success',
            },
            {
              fileType: 'audio',
              name: 'audio.mp3',
              url: 'https://example.com/audio.mp3',
              size: 512,
              status: 'success',
            },
            {
              fileType: 'ppt',
              name: 'presentation.ppt',
              url: 'https://example.com/presentation.ppt',
              size: 512,
              status: 'success',
            },
            {
              fileType: 'xls',
              name: 'spreadsheet.xls',
              url: 'https://example.com/spreadsheet.xls',
              size: 512,
              status: 'success',
            },
          ],
        },
        {
          type: 'text',
          data: '不，牛顿第一定律并不适用于所有参考系。它只适用于惯性参考系。',
        },
      ],
    },
  },
});
