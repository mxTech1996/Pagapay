"use client";

import { dataSite } from "@/data";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const { language } = useLanguage();
  const t = heroContent[language];

  return (
    <section className="mx-auto w-full max-w-7xl px-5 pb-16 md:px-8">
      <div className="grid gap-10 rounded-3xl border border-[var(--fin-line)] bg-[linear-gradient(145deg,#10294b,#0a1f38)] p-7 md:grid-cols-2 md:p-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="rounded-3xl border border-white/10 bg-black/20 p-8 md:p-10">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--fin-accent)]">
              {t.weAre}
            </p>
            <h1 className="mb-4 text-3xl font-black leading-tight text-white md:text-5xl">
              {t.subtitle}
            </h1>
            <p className="text-lg text-[var(--fin-muted)]">
              <span className="font-bold text-[var(--fin-accent)]">
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
            className="mt-4 h-[300px] w-full max-w-[420px] rounded-2xl border border-white/10 object-cover"
          />

          <p className="mb-4 mt-6 max-w-md text-sm text-[var(--fin-muted)]">
            {t.description}
          </p>
          <button
            onClick={() => (window.location.href = "/more-information")}
            className="mt-2 rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
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
      "Soluciones de pago seguras y escalables para un checkout sin friccion",
    description:
      "Nuestro equipo ofrece procesamiento de pagos rapido, seguro y sin fricciones para negocios de todos los tamanos. Desde checkouts en linea hasta transacciones en punto de venta.",
    contactSales: "Contactar ventas",
  },
};
