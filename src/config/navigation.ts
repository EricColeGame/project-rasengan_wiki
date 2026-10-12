import type { LucideIcon } from "lucide-react";

export interface NavItem {
  key: string;
  path: string;
  icon: LucideIcon;
  isContentType: boolean;
}

// 新站内容体系尚未建立：导航先清空，待后续阶段重建。
export const NAVIGATION_CONFIG: NavItem[] = [];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
