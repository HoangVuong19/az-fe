import { createI18n } from "vue-i18n";
import { messages, defaultLocale, locales } from "@/locales";

export const i18n = createI18n({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: defaultLocale,
  messages,
  availableLocales: locales,
});
