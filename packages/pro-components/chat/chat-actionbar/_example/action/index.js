import { Toast } from 'tdesign-miniprogram';

Page({
  data: {
    content: '这是一段可以被复制的内容，支持markdown格式。\n\n**粗体文本**\n*斜体文本*\n\n- 列表项1\n- 列表项2',
    items: [
      { value: 'refresh', name: 'refresh', checked: 'true' },
      { value: 'copy', name: 'copy', checked: 'true' },
      { value: 'good', name: 'good', checked: 'true' },
      { value: 'bad', name: 'bad', checked: 'true' },
      { value: 'share', name: 'share', checked: 'true' },
    ],
    customActionBar: ['refresh', 'copy', 'good', 'bad', 'share'],
  },

  handleAction(e) {
    const { name, active, data } = e.detail;
    console.log(e);

    let message = '';
    switch (name) {
      case 'copy':
        console.log(data);
        message = '复制成功';
        break;
      case 'good':
        message = active ? '点赞成功' : '取消点赞';
        break;
      case 'bad':
        message = active ? '点踩成功' : '取消点踩';
        break;
      case 'share':
        message = '分享功能';
        break;
      default:
        message = `执行了${name}操作`;
    }

    Toast({
      context: this,
      selector: '#t-toast',
      message,
      theme: 'success',
    });
  },

  checkboxChange(e) {
    const { items } = this.data;
    const values = e.detail.value;
    for (let i = 0, lenI = items.length; i < lenI; i += 1) {
      items[i].checked = false;

      for (let j = 0, lenJ = values.length; j < lenJ; j += 1) {
        if (items[i].value === values[j]) {
          items[i].checked = true;
          break;
        }
      }
    }

    this.setData({
      items,
      customActionBar: values,
    });
  },
});
