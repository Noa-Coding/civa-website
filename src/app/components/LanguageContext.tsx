import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "zh" | "en";

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
}>({ lang: "zh", setLang: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("zh");
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}

export type BiStr = { zh: string; en: string };

export function tx(obj: BiStr, lang: Lang): string {
  return obj[lang];
}
