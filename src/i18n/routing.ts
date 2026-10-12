import { defineRouting } from "next-intl/routing";

// 唯一真相源：新增/移除语言只改这里，并同步 request.ts、language-switcher.tsx
// 与 src/locales/*.json 文件集合（四处必须完全一致）。
export const locales = ["en", "ja", "es", "pt"] as const;

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  localePrefix: "always",
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
