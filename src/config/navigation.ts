// 导航分类真相源：key 必须与 content/<locale>/ 的子目录名、content.ts 的
// GROUP_TITLES/GROUP_ORDER 以及 src/locales/en.json 的 nav 分类键完全一致。
export interface NavigationItem {
  /** 翻译键：en.json 的 nav.<key> 与顶级 <key>.overviewTitle / overviewDescription */
  key: string;
  /** URL 路径，必须能解析到 content 下真实存在的分类目录 */
  path: `/${string}`;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", isContentType: true },
  { key: "codes", path: "/codes", isContentType: true },
  { key: "characters", path: "/characters", isContentType: true },
  { key: "mechanics", path: "/mechanics", isContentType: true },
  { key: "progression", path: "/progression", isContentType: true },
  { key: "controls", path: "/controls", isContentType: true },
  { key: "news", path: "/news", isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
