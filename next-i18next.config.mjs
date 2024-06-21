import path from "path";

export const i18n = {
    defaultLocale: "en",
    locales: ["en", "zh"],
};

export const localePath = typeof window === "undefined" ? path.resolve("./locales") : "/locales";
