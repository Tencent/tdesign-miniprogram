<template>
  <view class="chat-example">
    <!-- 附件消息 -->
    <view class="chat-example-block">
      <TChatMessage
        :content="pic1.content"
        :role="pic1.role"
        :chat-content-props="chatContentProps"
      />
    </view>
    <view class="chat-example-block">
      <TChatMessage
        :content="pic2.content"
        :role="pic2.role"
        :chat-content-props="chatContentProps"
      />
    </view>
    <view class="chat-example-block">
      <TChatMessage
        :content="pic3.content"
        :role="pic3.role"
        placement="right"
        :chat-content-props="chatContentProps"
      />
    </view>
    <view class="chat-example-block">
      <TChatMessage
        :content="fileMessage.content"
        :role="fileMessage.role"
        :chat-content-props="chatContentProps"
      />
    </view>
    <view class="chat-example-block">
      <TChatMessage
        :content="fileMessage.content"
        :role="fileMessage.role"
        placement="right"
        :chat-content-props="chatContentProps"
      />
    </view>
    <!-- 思考过程消息 -->
    <view class="chat-example-block">
      <TChatMessage
        :content="aiMessage.content"
        :role="aiMessage.role"
        :status="aiMessage.status"
        variant="text"
      >
        <template #actionbar>
          <TChatActionbar />
        </template>
      </TChatMessage>
    </view>
  </view>
</template>

<script>
import TChatMessage from 'tdesign-uniapp-chat/chat-message/chat-message.vue';
import TChatActionbar from 'tdesign-uniapp-chat/chat-actionbar/chat-actionbar.vue';


export default {
  components: {
    TChatMessage,
    TChatActionbar,
  },
  data() {
    return {
      aiMessage: {
        role: 'assistant',
        status: 'complete',
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
                width: 1920,
                // 图片实际宽度
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
                width: 1920,
                // 图片实际宽度
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
                width: 1920,
                // 为了更好的适配不同尺寸图片建议传入宽高，不传也有兜底尺寸
                height: 1080, // 为了更好的适配不同尺寸图片建议传入宽高，不传也有兜底尺寸
              },
              {
                fileType: 'image',
                name: 'avatar2.jpg',
                size: 234234,
                url: 'https://tdesign.gtimg.com/demo/demo-image-1.png',
                width: 1920,
                // 图片实际宽度
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
                fileType: 'doc',
                name: 'word-file.doc',
                url: 'https://example.com/word-file.doc',
                size: 222859,
                status: 'success',
              },
              {
                fileType: 'excel',
                name: 'excel-file.xlsx',
                url: 'https://example.com/excel-file.xlsx',
                size: 222859,
                status: 'success',
              },
              {
                fileType: 'pdf',
                name: 'pdf-file.pdf',
                url: 'https://example.com/pdf-file.pdf',
                size: 222859,
                status: 'success',
              },
              {
                fileType: 'ppt',
                name: 'ppt-file.pptx',
                url: 'https://example.com/ppt-file.pptx',
                size: 222859,
                status: 'success',
              },
              {
                fileType: 'video',
                name: 'video-file.mp4',
                url: 'https://example.com/video-file.mp4',
                size: 222859,
                status: 'success',
              },
              {
                fileType: 'file',
                name: 'file',
                url: 'https://example.com/audio-file.mp3',
                size: 222859,
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

      chatContentProps: [],
    };
  },
  created() {},
  methods: {},
};
</script>
<style>
.chat-example {
    display: flex;
    flex-direction: column;
    gap: 32rpx;
}

.chat-example-block {
    background-color: var(--td-bg-color-container);
    padding: 32rpx 32rpx 0 32rpx;
}

</style>
