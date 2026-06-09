"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSwitcher({ className = "" }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={`inline-flex items-center rounded-full border border-white/20 bg-black/20 p-1 ${className}`}
      role="group"
      aria-label="Language switcher"
    >
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`rounded-full px-3 py-1 text-xs font-bold transition ${
          language === "en"
            ? "bg-white text-[#0a2d4e]"
            : "text-white/80 hover:text-white"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage("es")}
        className={`rounded-full px-3 py-1 text-xs font-bold transition ${
          language === "es"
            ? "bg-white text-[#0a2d4e]"
            : "text-white/80 hover:text-white"
        }`}
      >
        ES
      </button>
    </div>
  );
}
