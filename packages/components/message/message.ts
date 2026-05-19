import { SuperComponent, wxComponent, ComponentsOptionsType } from '../common/src/index';
import config from '../common/config';
import { MessageType, MessageProps } from './message.interface';
import props from './props';
import { unitConvert } from '../common/utils';

// 展示动画持续时间
const SHOW_DURATION = 400;
const { prefix } = config;
const name = `${prefix}-message`;

@wxComponent()
export default class Message extends SuperComponent {
  options: ComponentsOptionsType = {
    multipleSlots: true,
  };

  // 组件的对外属性
  properties: MessageProps = { ...props } as unknown as MessageProps;

  // 组件的内部数据
  data = {
    prefix,
    classPrefix: name,
    messageList: [],
  };

  index = 0;

  instances = [];

  // 两条message之间的间距，单位px
  gap = 12;

  // Promise 队列，用于串行化 message 添加
  addMessageQueue: Promise<void> = Promise.resolve();

  observers = {
    visible(value) {
      if (value) {
        this.setMessage(this.properties, this.properties.theme);
      } else {
        this.setData({
          messageList: [],
        });
      }
    },
  };

  pageLifetimes = {
    show() {
      this.hideAll();
    },
  };

  lifetimes = {
    ready() {
      this.memoInitialData();
    },
  };

  /** 记录组件设置的项目 */
  memoInitialData() {
    this.initialData = {
      ...this.properties,
      ...this.data,
    };
  }

  /**
   * 设置消息信息
   * @param msg
   * @param theme
   */
  setMessage(msg: MessageProps, theme: MessageType = MessageType.info) {
    const id = msg.single ? name : `${name}_${this.index}`;
    if (!msg.single) {
      this.index += 1;
    }
    this.gap = unitConvert(msg.gap || this.gap);
    const msgObj = {
      ...msg,
      theme,
      id,
      gap: this.gap,
    };
    const instanceIndex = this.instances.findIndex((x) => x.id === id);
    if (instanceIndex < 0) {
      this.addMessage(msgObj);
    } else {
      // 更新消息
      const instance = this.instances[instanceIndex];
      const offsetHeight = msg.single ? 0 : this.getOffsetHeight(instanceIndex);
      instance.resetData(() => {
        instance.setData(msgObj, () => {
          instance.show(offsetHeight);
        });
        instance.onHide = () => {
          this.close(id);
        };
      });
    }
  }

  /**
   * 新增消息
   * @param msgObj
   */
  addMessage(msgObj: MessageProps) {
    this.addMessageQueue = this.addMessageQueue
      .then(
        () =>
          new Promise<void>((resolve) => {
            this.setData({ messageList: [...this.data.messageList, { id: msgObj.id }] }, () => {
              const offsetHeight = msgObj.single ? 0 : this.getOffsetHeight();
              this.showMessageItem(msgObj, msgObj.id, offsetHeight)
                .then((instance) => {
                  if (instance) this.instances.push(instance);
                  resolve();
                })
                .catch(() => resolve());
            });
          }),
      )
      .catch((error) => {
        console.error('addMessage error:', error);
        return Promise.resolve();
      });
  }

  /**
   * 获取消息显示top偏移距离
   * @param index
   * @returns
   */
  getOffsetHeight(index: number = -1) {
    let len = index;
    if (len === -1 || len > this.instances.length) {
      len = this.instances.length;
    }
    return this.instances.slice(0, len).reduce((offset, instance) => {
      // 跳过 single 消息（id 为 `${prefix}-message`）
      return instance.id === name ? offset : offset + instance.data.height + instance.data.gap;
    }, 0);
  }

  /**
   * 新增消息显示
   * @param options
   * @param id
   * @param offsetHeight
   * @returns
   */
  showMessageItem(options: MessageProps, id: string, offsetHeight: number) {
    return new Promise((resolve) => {
      const instance = this.selectComponent(`#${id}`);
      if (!instance) {
        console.error('未找到组件,请确认 selector && context 是否正确');
        return resolve(null);
      }

      instance.resetData(() => {
        instance.setData(options, () => {
          instance
            .show(offsetHeight)
            .then(() => resolve(instance))
            .catch(() => resolve(instance));
        });
        instance.onHide = () => this.close(id);
      });
    });
  }

  close(id) {
    setTimeout(() => {
      this.removeMsg(id);
    }, SHOW_DURATION);
    this.removeInstance(id);
  }

  /**
   * 移除指定消息，id为空则删除全部消息
   * @param id
   */
  hide(id?: string) {
    if (!id) {
      this.hideAll();
    }
    const instance = this.instances.find((x) => x.id === id);
    if (instance) {
      instance.hide();
    }
  }

  /**
   * 移除全部消息
   */
  hideAll() {
    // 消息移除后也会移除instance，下标不用增加，直至全部删除
    for (let i = 0; i < this.instances.length; ) {
      const instance = this.instances[i];
      instance.hide();
    }
  }

  /**
   * 移除message实例
   */
  removeInstance(id) {
    const index = this.instances.findIndex((x) => x.id === id);
    if (index < 0) return;
    const instance = this.instances[index];
    const isSingleMessage = instance.id === name;
    const removedHeight = isSingleMessage ? 0 : instance.data.height + instance.data.gap;

    this.instances.splice(index, 1);

    // 只有非 single 消息被移除时，才需要更新后续消息的位置
    if (removedHeight > 0) {
      for (let i = index; i < this.instances.length; i += 1) {
        const instance = this.instances[i];
        // 跳过 single 消息，single 消息始终在顶部
        if (instance.id !== name) {
          instance.setData({
            wrapTop: instance.data.wrapTop - removedHeight,
          });
        }
      }
    }
  }

  /**
   * 移除页面元素
   * @param id
   */
  removeMsg(id) {
    const msgIndex = this.data.messageList.findIndex((x) => x.id === id);
    if (msgIndex > -1) {
      this.data.messageList.splice(msgIndex, 1);
      this.setData({
        messageList: this.data.messageList,
      });
    }
  }

  handleClose() {
    this.triggerEvent('close-btn-click');
  }

  handleLinkClick() {
    this.triggerEvent('link-click');
  }

  handleDurationEnd() {
    this.triggerEvent('duration-end');
  }
}
