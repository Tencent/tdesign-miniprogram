/** 组件清单映射：slug -> 导出组件名列表 */
export type ComponentMap = Record<string, string[]>;

/** 解析后的组件文档 */
export interface ComponentDoc {
  /** 文件名，如 button */
  slug: string;
  /** 英文名，如 Button */
  title: string;
  /** 中文名，如 按钮 */
  subtitle: string;
  /** 描述 */
  description: string;
  /** spline 分类 */
  spline: string;
  /** 组件名（如 Button / Layout） */
  component: string;
  /** 生成后的正文内容（不含 frontmatter） */
  body: string;
}

/** 插件配置项 */
export interface GenerateLlmsOptions {
  /** 组件清单映射，如 MOBILE_COMPONENT_MAP / CHAT_COMPONENT_MAP */
  componentMap?: ComponentMap;
  /** 组件根目录（相对 site root） */
  componentsDir?: string;
  /** llms.txt 索引标题 */
  siteTitle?: string;
  /** llms.txt 索引描述 */
  siteDescription?: string;
  /** demo 源码文件解析器：读取 _example/<demoName> 目录，返回代码块文本 */
  readDemoCode?: (componentDir: string, demoName: string) => string;
}
