"use client";

import { dataSite } from "@/data";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const { language } = useLanguage();
  const t = heroContent[language];

  return (
    <section className="relative w-full overflow-hidden border-b border-[var(--fin-line)] bg-[#f7fbff]">
      <div className="grid min-h-[620px] w-full md:min-h-[calc(100vh-226px)] md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 flex flex-col justify-center px-5 py-14 md:ml-auto md:w-full md:max-w-[640px] md:px-8 md:py-12 md:pr-12 xl:py-16"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--fin-accent)]">
            {t.weAre}
          </p>
          <h1 className="max-w-xl text-4xl font-black leading-[1.08] text-[var(--fin-ink)] md:text-4xl xl:text-5xl">
            {t.subtitle}
          </h1>
          <p className="mt-4 text-xl font-bold text-[var(--fin-primary)]">
            <span className="font-bold text-[var(--fin-primary)]">Pagapay</span>
          </p>
          <p className="mt-5 max-w-xl text-base leading-7 text-[var(--fin-muted)]">
            {t.description}
          </p>
          <button
            onClick={() =>
              document.getElementById("inicio")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
            className="corp-btn-primary mt-7 w-fit px-6 py-3 text-sm font-bold transition hover:brightness-110"
          >
            {t.explore}
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative min-h-[420px] overflow-hidden md:min-h-full"
        >
          <img
            src={heroPaymentImage}
            alt="Contactless payment terminal"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#f7fbff] via-transparent to-transparent md:bg-gradient-to-r md:from-[#f7fbff] md:via-[#f7fbff]/20 md:to-transparent" />
          <div className="absolute inset-y-0 left-0 hidden w-36 bg-gradient-to-r from-[#f7fbff] to-transparent md:block" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,31,57,0.08),rgba(31,78,216,0.02))]" />
        </motion.div>
      </div>
    </section>
  );
}

const heroPaymentImage = "/images/contactless.png";

const heroContent = {
  en: {
    weAre: "We are",
    subtitle: dataSite.subtitle,
    description: dataSite.description,
    explore: "Explore",
  },
  es: {
    weAre: "Somos",
    subtitle:
      "Somos una empresa que ofrece soluciones de pago, tanto de ecommerce como de tarjeta presente.",
    description:
      "Nuestro equipo ofrece procesamiento de pagos rápido, seguro y sin fricción para negocios de todos los tamaños. Desde flujos de pago en línea hasta transacciones en punto de venta.",
    explore: "Explorar",
  },
};
