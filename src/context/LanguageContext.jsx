import { createContext, useContext } from "react";
import { useLocation } from "react-router-dom";
import { translations } from "../utils/translations";

export const SUPPORTED_LANGS = ["en", "es"];
export const DEFAULT_LANG = "en";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const { pathname } = useLocation();
  const segment = pathname.split("/")[1];
  const language = SUPPORTED_LANGS.includes(segment) ? segment : DEFAULT_LANG;

  const t = (path) => {
    const keys = path.split(".");
    let current = translations[language];

    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        let fallback = translations[DEFAULT_LANG];
        for (const fallbackKey of keys) {
          if (fallback && fallback[fallbackKey] !== undefined) {
            fallback = fallback[fallbackKey];
          } else {
            return path;
          }
        }
        return fallback;
      }
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
