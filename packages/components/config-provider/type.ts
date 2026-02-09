/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { ImageProps } from '../image/index';

export interface TdConfigProviderProps {
  /**
   * 全局配置
   */
  globalConfig?: {
    type: ObjectConstructor;
    value?: GlobalConfigProvider;
  };
  /**
   * 全局配置
   */
  themeVars?: {
    type: ObjectConstructor;
    value?: object;
  };
}

export interface GlobalConfigProvider {
  /**
   * 动作面板全局配置
   */
  actionSheet?: ActionSheetConfig;
  /**
   * 日历组件全局配置
   */
  calendar?: CalendarConfig;
  /**
   * 级联选择器全局配置
   */
  cascader?: CascaderConfig;
  /**
   * CSS 类名前缀
   * @default t
   */
  classPrefix?: string;
  /**
   * 时间选择器全局配置
   */
  dateTimePicker?: DateTimePickerConfig;
  /**
   * 下拉菜单全局配置
   */
  dropdownMenu?: DropdownMenuConfig;
  /**
   * 引导全局配置
   */
  guide?: GuideConfig;
  /**
   * 选择器全局配置
   */
  picker?: PickerConfig;
  /**
   * 下拉刷新全局配置
   */
  pullDownRefresh?: PullDownRefreshConfig;
  /**
   * 二维码全局配置
   */
  qrcode?: QRCodeConfig;
  /**
   * 评分全局配置
   */
  rate?: RateConfig;
  /**
   * 标签栏全局配置
   */
  tabBar?: TabBarConfig;
  /**
   * 上传组件全局配置
   */
  upload?: UploadConfig;
}

export interface ActionSheetConfig {
  /**
   * 语言配置，“取消” 按钮描述文本
   * @default ''
   */
  cancel?: string;
}

export interface CalendarConfig {
  /**
   * 语言配置，“确定” 按钮描述文本
   * @default ''
   */
  confirm?: string;
  /**
   * 语言配置，日期月面板标题描述文本。示例：“{year} / {month}”
   * @default ''
   */
  monthTitle?: string;
  /**
   * 月文本描述，默认值：['1 月', '2 月', '3 月', '4 月', '5 月', '6 月', '7 月', '8 月', '9 月', '10 月', '11 月', '12 月']
   */
  months?: string[];
  /**
   * 语言配置，组件标题“请选择日期”描述文本
   * @default ''
   */
  title?: string;
  /**
   * 星期文本描述，默认值：['日', '一', '二', '三', '四', '五', '六']
   */
  weekdays?: string[];
}

export interface CascaderConfig {
  /**
   * 语言配置，未选中时的提示文案“选择选项”描述文本
   * @default ''
   */
  placeholder?: string;
  /**
   * 语言配置，组件标题“选择地址”描述文本
   * @default ''
   */
  title?: string;
}

export interface DateTimePickerConfig {
  /**
   * 语言配置，“取消”按钮描述文本
   * @default ''
   */
  cancel?: string;
  /**
   * 语言配置，“确定”按钮描述文本
   * @default ''
   */
  confirm?: string;
  /**
   * 语言配置，“日” 描述文本
   * @default ''
   */
  dateLabel?: string;
  /**
   * 日期格式化规则
   * @default 'YYYY-MM-DD HH:mm:ss'
   */
  format?: string;
  /**
   * 语言配置，“时” 描述文本
   * @default ''
   */
  hourLabel?: string;
  /**
   * 语言配置，“分” 描述文本
   * @default ''
   */
  minuteLabel?: string;
  /**
   * 语言配置，“月” 描述文本
   * @default ''
   */
  monthLabel?: string;
  /**
   * 语言配置，“秒” 描述文本
   * @default ''
   */
  secondLabel?: string;
  /**
   * 语言配置，组件标题“选择时间”描述文本
   * @default ''
   */
  title?: string;
  /**
   * 语言配置，“年” 描述文本
   * @default ''
   */
  yearLabel?: string;
}

export interface DropdownMenuConfig {
  /**
   * 语言配置，“确定” 按钮描述文本
   * @default ''
   */
  confirm?: string;
  /**
   * 语言配置，“重置” 按钮描述文本
   * @default ''
   */
  reset?: string;
}

export interface GuideConfig {
  /**
   * 语言配置， “返回” 描述文本
   * @default ''
   */
  back?: string;
  /**
   * 语言配置， “完成” 描述文本
   * @default ''
   */
  finish?: string;
  /**
   * 语言配置， “下一步” 描述文本
   * @default ''
   */
  next?: string;
  /**
   * 语言配置， “跳过” 描述文本
   * @default ''
   */
  skip?: string;
}

export interface ImageConfig {
  /**
   * 图片加载失败显示的文本，中文默认为“图片无法显示”
   * @default ''
   */
  errorText?: string;
  /**
   * 图片加载中显示的文本，中文默认为“图片加载中”
   * @default ''
   */
  loadingText?: string;
  /**
   * 统一替换图片 `src` 地址，参数为组件的全部属性，返回值为新的图片地址
   */
  replaceImageSrc?: (params: ImageProps) => string;
}

export interface InputConfig {
  /**
   * 语言配置，“请输入”占位符描述文本
   * @default ''
   */
  placeholder?: string;
}

export interface PickerConfig {
  /**
   * 语言配置，“取消” 按钮描述文本
   * @default ''
   */
  cancel?: string;
  /**
   * 语言配置，“确认” 按钮描述文本
   * @default ''
   */
  confirm?: string;
}

export interface PullDownRefreshConfig {
  /**
   * 提示文本描述，默认值：['下拉刷新', '松手刷新', '正在刷新', '刷新完成']
   */
  loadingTexts?: string[];
}

export interface QRCodeConfig {
  /**
   * 语言配置，“二维码过期”描述文本
   * @default ''
   */
  expiredText?: string;
  /**
   * 语言配置，“点击刷新”描述文本
   * @default ''
   */
  refreshText?: string;
  /**
   * 语言配置，“已扫描”描述文本
   * @default ''
   */
  scannedText?: string;
}

export interface RateConfig {
  /**
   * 语言配置，“未评分”描述文本
   * @default ''
   */
  noValueText?: string;
  /**
   * 语言配置，评分值描述文本。示例：“{value} 分”
   * @default ''
   */
  valueText?: string;
}

export interface TabBarConfig {
  /**
   * 语言配置，“有n+条新的消息”描述文本。示例：“有 {value}+ 条消息”
   * @default ''
   */
  haveMoreNewsAriaLabel?: string;
  /**
   * 语言配置，“有n条新的消息”描述文本。示例：“有 {value} 条消息”
   * @default ''
   */
  haveNewsAriaLabel?: string;
  /**
   * 语言配置，“有很多消息”描述文本
   * @default ''
   */
  moreNewsAriaLabel?: string;
  /**
   * 语言配置，“有新的消息”描述文本
   * @default ''
   */
  newsAriaLabel?: string;
}

export interface UploadConfig {
  /**
   * 语言配置，上传进度相关。示例：{ uploadText: '上传中', waitingText: '待上传', 'failText': '上传失败', successText: '上传成功' }
   */
  progress?: UploadConfigProgress;
}

export interface UploadConfigProgress {
  /**
   * 语言配置，“上传失败”文本描述
   * @default ''
   */
  failText?: string;
  /**
   * 语言配置，“上传成功”文本描述
   * @default ''
   */
  successText?: string;
  /**
   * 语言配置，“上传中”文本描述
   * @default ''
   */
  uploadingText?: string;
  /**
   * 语言配置，“待上传”文本描述
   * @default ''
   */
  waitingText?: string;
}
