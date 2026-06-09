"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSwitcher({ className = "" }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={`inline-flex items-center rounded-md border border-[var(--fin-line)] bg-white p-1 ${className}`}
      role="group"
      aria-label="Language switcher"
    >
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`rounded-sm px-3 py-1 text-xs font-bold transition ${
          language === "en"
            ? "bg-[var(--fin-primary)] text-white"
            : "text-[var(--fin-muted-strong)] hover:text-[var(--fin-ink)]"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage("es")}
        className={`rounded-sm px-3 py-1 text-xs font-bold transition ${
          language === "es"
            ? "bg-[var(--fin-primary)] text-white"
            : "text-[var(--fin-muted-strong)] hover:text-[var(--fin-ink)]"
        }`}
      >
        ES
      </button>
    </div>
  );
}
