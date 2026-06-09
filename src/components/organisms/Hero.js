"use client";

import { dataSite } from "@/data";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const { language } = useLanguage();
  const t = heroContent[language];

  return (
    <section className="mx-auto w-full max-w-7xl px-5 pb-16 md:px-8">
      <div className="corp-surface grid gap-10 p-7 md:grid-cols-2 md:p-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="corp-card p-8 md:p-10">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--fin-accent)]">
              {t.weAre}
            </p>
            <h1 className="mb-4 text-3xl font-black leading-tight text-[var(--fin-ink)] md:text-5xl">
              {t.subtitle}
            </h1>
            <p className="text-lg text-[var(--fin-muted)]">
              <span className="font-bold text-[var(--fin-primary)]">
                Pagapay
              </span>
            </p>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-start"
        >
          {/* image hero */}
          <img
            src={dataSite.image_hero}
            alt="Hero Image"
            className="mt-4 h-[300px] w-full max-w-[420px] border border-[var(--fin-line)] object-cover"
          />

          <p className="mb-4 mt-6 max-w-md text-sm text-[var(--fin-muted)]">
            {t.description}
          </p>
          <button
            onClick={() => (window.location.href = "/more-information")}
            className="corp-btn-secondary mt-2 px-5 py-2.5 text-sm font-semibold transition hover:border-[var(--fin-primary)]"
          >
            {t.contactSales}
          </button>
        </motion.div>
      </div>
    </section>
  );
}

const heroContent = {
  en: {
    weAre: "We are",
    subtitle: dataSite.subtitle,
    description: dataSite.description,
    contactSales: "Contact Sales",
  },
  es: {
    weAre: "Somos",
    subtitle:
      "Soluciones de pago seguras y escalables para un checkout sin fricción",
    description:
      "Nuestro equipo ofrece procesamiento de pagos rápido, seguro y sin fricción para negocios de todos los tamaños. Desde checkouts en línea hasta transacciones en punto de venta.",
    contactSales: "Contactar ventas",
  },
};
