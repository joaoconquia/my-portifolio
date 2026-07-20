import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { Language, TRANSLATIONS } from "./translations";

interface LanguageContextType {
  language: Language;
  t: typeof TRANSLATIONS.en;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Try to load from localStorage, default to Portuguese 'pt' as user speaks Portuguese by default
  const [language, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem("preferred_lang");
    if (saved === "en" || saved === "pt") return saved;
    return "pt";
  });

  const toggleLanguage = () => {
    setLang((prev) => {
      const next = prev === "en" ? "pt" : "en";
      localStorage.setItem("preferred_lang", next);
      return next;
    });
  };

  const setLanguage = (lang: Language) => {
    setLang(lang);
    localStorage.setItem("preferred_lang", lang);
  };

  const t = TRANSLATIONS[language];

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
