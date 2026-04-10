import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import type { Language } from "@/i18n/translations";

interface LanguageContextType {
  lang: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "pt",
  toggleLanguage: () => {},
  setLanguage: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem("lang");
      return saved === "en" ? "en" : "pt";
    } catch {
      return "pt";
    }
  });

  const setLanguage = useCallback((newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem("lang", newLang);
    } catch {}
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage(lang === "pt" ? "en" : "pt");
  }, [lang, setLanguage]);

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
