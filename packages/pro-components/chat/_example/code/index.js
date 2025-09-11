const mockData = {
  avatar: 'https://tdesign.gtimg.com/site/chat-avatar.png',
  message: {
    role: 'assistant',
    content: [
      {
        type: 'markdown',
        data: '下面是一个使用TDesign组件库实现的登录表单组件，以React版本为例：\n\n',
        strategy: 'merge',
        status: 'streaming',
      },
      {
        type: 'preview',
        status: 'complete',
        data: {
          id: 1755774250585,
          enName: 'tdesign-login-form.jsx',
          cnName: '生产完成',
          version: 'v1',
        },
      },
      {
        type: 'markdown',
        data: '```jsx\nimport { Form, Input, Button, Message } from \'tdesign-react\';\n\nconst LoginForm = () => {\n  const [loading, setLoading] = useState(false);\n\n  const onSubmit = async ({ validateResult }) => {\n    if (validateResult === true) {\n      setLoading(true);\n      try {\n        // 登录逻辑\n        Message.success(\'登录成功\');\n      } catch {\n        Message.error(\'登录失败\');\n      } finally {\n        setLoading(false);\n      }\n    }\n  };\n\n  return (\n    <Form onSubmit={onSubmit}>\n      <Form.FormItem name="username" label="用户名" rules={[{ required: true }]}>\n        <Input placeholder="请输入用户名" />\n      </Form.FormItem>\n\n      <Form.FormItem name="password" label="密码" rules={[{ required: true }]}>\n        <Input type="password" />\n      </Form.FormItem>\n\n      <Form.FormItem>\n        <Button theme="primary" type="submit" loading={loading} block>\n          登录\n        </Button>\n      </Form.FormItem>\n    </Form>\n  );\n};\n```\n\n',
        strategy: 'append',
        status: 'streaming',
      },
      {
        type: 'markdown',
        data: '这个版本都包含了：\n1. 用户名和密码输入框\n2. 必填验证\n3. 加载状态\n4. 基本的登录提交逻辑\n5. 消息提示功能',
        strategy: 'append',
        status: 'complete',
      },
    ],
  },
};

Component({
  data: {
    customActionBar: ['refresh', 'good', 'bad'],
    chatList: [
      {
        avatar: 'https://tdesign.gtimg.com/site/chat-avatar.png',
        message: {
          role: 'assistant',
          content: [
            {
              type: 'text',
              data: '欢迎使用TDesign Chatbot智能代码助手，请输入你的问题',
            },
          ],
        },
      },
    ],
    value: '使用tdesign组件库实现一个登录表单的例子', // 输入框的值
    loading: false, // 加载状态
    disabled: false, // 禁用状态
  },

  methods: {
    // 发送消息事件处理
    onSend(e) {
      const { value } = e.detail;
      if (!value || value.trim() === '') return;

      // 创建用户消息对象
      const userMessage = {
        avatar: 'https://tdesign.gtimg.com/site/avatar.jpg',
        message: {
          role: 'user',
          content: [
            {
              type: 'text',
              data: value.trim(),
            },
          ],
        },
      };

      // 将用户消息插入到chatList的开头（因为reverse为true，所以用unshift）
      this.setData({
        chatList: [userMessage, ...this.data.chatList],
        value: '', // 清空输入框
      });

      // 模拟助手回复（可选）
      this.simulateAssistantReply(value.trim());
    },

    // 停止事件处理
    onStop() {
      console.log('停止发送');
    },

    // 聚焦事件处理
    onFocus() {
      console.log('输入框聚焦');
    },

    // 模拟助手回复
    simulateAssistantReply() {
      this.setData({ loading: true });

      // 模拟延迟回复
      setTimeout(() => {
        const assistantMessage = mockData;

        this.setData({
          chatList: [assistantMessage, ...this.data.chatList],
          loading: false,
        });
      }, 1000);
    },
  },
});
