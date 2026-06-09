"use client";

import { motion } from "framer-motion";
import {
  FaCreditCard,
  FaLock,
  FaHandHoldingUsd,
  FaGlobe,
} from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

export default function BenefitsSection() {
  const { language } = useLanguage();
  const t = benefitsContent[language];

  return (
    <section
      id="know-us"
      className="mx-auto w-full max-w-7xl px-5 pb-16 md:px-8"
    >
      <div className="border-y border-[var(--fin-line)] py-7 text-center md:py-10">
        <h2 className="mb-2 text-3xl font-black text-[var(--fin-ink)]">
          {t.title}
        </h2>
        <p className="mb-12 text-[var(--fin-muted)]">{t.description}</p>

        <div className="divide-y divide-[var(--fin-line)] border-y border-[var(--fin-line)] text-left">
          {t.features.map((feature, index) => (
            <motion.article
              key={index}
              whileHover={{ backgroundColor: "rgba(249,251,255,1)" }}
              className="grid items-center gap-4 p-6 md:grid-cols-[84px_1fr]"
            >
              <div className="text-[var(--fin-accent)]">{feature.icon}</div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-[var(--fin-ink)]">
                  {feature.title}
                </h3>
                <p className="text-sm text-[var(--fin-muted)]">
                  {feature.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

const featureIcons = [
  <FaCreditCard key="credit" size={40} />,
  <FaLock key="lock" size={40} />,
  <FaHandHoldingUsd key="installments" size={40} />,
  <FaGlobe key="globe" size={40} />,
];

const benefitsContent = {
  en: {
    title: "Choose to Grow Your Business",
    description:
      "We help businesses across industries accelerate their growth with smart payment solutions.",
    features: [
      {
        icon: featureIcons[0],
        title: "Accept All Payment Methods",
        description: "Credit, debit, food vouchers, contactless, and more.",
      },
      {
        icon: featureIcons[1],
        title: "Secure Transactions",
        description:
          "We follow industry-leading security standards to protect your payments.",
      },
      {
        icon: featureIcons[2],
        title: "Offer Installment Plans",
        description:
          "Flexible payment options from 3 to 24 months with partner banks.",
      },
      {
        icon: featureIcons[3],
        title: "Sell from Anywhere",
        description:
          "Use payment links to receive money remotely, from any location.",
      },
    ],
  },
  es: {
    title: "Elige crecer tu negocio",
    description:
      "Ayudamos a empresas de distintas industrias a acelerar su crecimiento con soluciones de pago inteligentes.",
    features: [
      {
        icon: featureIcons[0],
        title: "Acepta todos los métodos de pago",
        description: "Crédito, débito, vales, contactless y más.",
      },
      {
        icon: featureIcons[1],
        title: "Transacciones seguras",
        description:
          "Seguimos estándares de seguridad líderes en la industria para proteger tus pagos.",
      },
      {
        icon: featureIcons[2],
        title: "Ofrece pagos a meses",
        description:
          "Opciones de pago flexibles de 3 a 24 meses con bancos aliados.",
      },
      {
        icon: featureIcons[3],
        title: "Vende desde cualquier lugar",
        description:
          "Usa links de pago para recibir dinero de forma remota desde cualquier ubicación.",
      },
    ],
  },
};
