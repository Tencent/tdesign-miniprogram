import { SuperComponent, wxComponent, ComponentsOptionsType } from '../common/src/index';
import config from '../common/config';
import { MessageType, MessageProps } from './message.interface';
import props from './props';
import { unitConvert } from '../common/utils';

// 展示动画持续时间
const SHOW_DURATION = 400;
const { prefix } = config;
const name = `${prefix}-message`;
let index = 0;
const instances = [];
let gap = 12; // 两条message之间的间距，单位px

@wxComponent()
export default class Message extends SuperComponent {
  options: ComponentsOptionsType = {
    styleIsolation: 'apply-shared',
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

  observers = {};

  ready() {
    this.memoInitialData();
  }

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
    let id = `${name}_${index}`;
    if (msg.single) {
      id = name;
    }
    gap = unitConvert(msg.gap || gap);
    const msgObj = {
      ...msg,
      theme,
      id,
      gap,
    };
    const instanceIndex = instances.findIndex((x) => x.id === id);
    if (instanceIndex < 0) {
      this.addMessage(msgObj);
    } else {
      // 更新消息
      const instance = instances[instanceIndex];
      const offsetHeight = this.getOffsetHeight(instanceIndex);
      instance.resetData(() => {
        instance.setData(msgObj, instance.show.bind(instance, offsetHeight));
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
    const list = [...this.data.messageList, { id: msgObj.id }];
    this.setData(
      {
        messageList: list,
      },
      () => {
        const offsetHeight = this.getOffsetHeight();
        const instance = this.showMessageItem(msgObj, msgObj.id, offsetHeight);
        if (instances) {
          instances.push(instance);
          index += 1;
        }
      },
    );
  }

  /**
   * 获取消息显示top偏移距离
   * @param index
   * @returns
   */
  getOffsetHeight(index: number = -1) {
    let offsetHeight = 0;
    let len = index;
    if (len === -1 || len > instances.length) {
      len = instances.length;
    }
    for (let i = 0; i < len; i += 1) {
      const instance = instances[i];
      offsetHeight += instance.data.height + instance.data.gap;
    }
    return offsetHeight;
  }

  /**
   * 新增消息显示
   * @param options
   * @param id
   * @param offsetHeight
   * @returns
   */
  showMessageItem(options: MessageProps, id: string, offsetHeight: number) {
    const instance = this.selectComponent(`#${id}`);
    if (instance) {
      instance.resetData(() => {
        instance.setData(options, instance.show.bind(instance, offsetHeight));
        instance.onHide = () => {
          this.close(id);
        };
      });

      return instance;
    }
    console.error('未找到组件,请确认 selector && context 是否正确');
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
    const instance = instances.find((x) => x.id === id);
    if (instance) {
      instance.hide();
    }
  }

  /**
   * 移除全部消息
   */
  hideAll() {
    // 消息移除后也会移除instance，下标不用增加，直至全部删除
    for (let i = 0; i < instances.length; ) {
      const instance = instances[i];
      instance.hide();
    }
  }

  /**
   * 移除message实例
   */
  removeInstance(id) {
    const index = instances.findIndex((x) => x.id === id);
    if (index < 0) return;
    const instance = instances[index];
    const removedHeight = instance.data.height;
    instances.splice(index, 1);
    for (let i = index; i < instances.length; i += 1) {
      const instance = instances[i];
      instance.setData({
        wrapTop: instance.data.wrapTop - removedHeight - instance.data.gap,
      });
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
}
