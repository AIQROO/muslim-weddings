import { useEffect } from "react";
import { useLanguage, SUPPORTED_LANGS, DEFAULT_LANG } from "../context/LanguageContext";

const BASE = "https://muslimweddingsmexico.com";

const PAGE_PATHS = {
  home: "",
  services: "/services",
  process: "/process",
  contact: "/contact",
};

const setAttr = (selector, attr, value) => {
  const el = document.querySelector(selector);
  if (el) el.setAttribute(attr, value);
};

export function useSeo(pageKey) {
  const { language, t } = useLanguage();
  const path = PAGE_PATHS[pageKey] ?? "";
  const canonical = `${BASE}/${language}${path}`;
  const title = t(`seo.${pageKey}.title`);
  const description = t(`seo.${pageKey}.description`);

  useEffect(() => {
    document.title = title;
    document.documentElement.lang = language;

    setAttr('meta[name="description"]', "content", description);
    setAttr('link[rel="canonical"]', "href", canonical);
    setAttr('meta[property="og:url"]', "content", canonical);
    setAttr('meta[property="og:title"]', "content", title);
    setAttr('meta[property="og:description"]', "content", description);
    setAttr(
      'meta[property="og:locale"]',
      "content",
      language === "es" ? "es_MX" : "en_US"
    );
    setAttr('meta[name="twitter:url"]', "content", canonical);
    setAttr('meta[name="twitter:title"]', "content", title);
    setAttr('meta[name="twitter:description"]', "content", description);

    document
      .querySelectorAll('link[rel="alternate"][hreflang]')
      .forEach((el) => el.remove());

    const head = document.head;
    SUPPORTED_LANGS.forEach((lang) => {
      const link = document.createElement("link");
      link.rel = "alternate";
      link.setAttribute("hreflang", lang);
      link.href = `${BASE}/${lang}${path}`;
      head.appendChild(link);
    });
    const xDefault = document.createElement("link");
    xDefault.rel = "alternate";
    xDefault.setAttribute("hreflang", "x-default");
    xDefault.href = `${BASE}/${DEFAULT_LANG}${path}`;
    head.appendChild(xDefault);
  }, [language, title, description, canonical]);
}
