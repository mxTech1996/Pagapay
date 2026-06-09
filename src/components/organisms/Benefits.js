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
      <div className="rounded-3xl border border-[var(--fin-line)] bg-[linear-gradient(160deg,#0a1f3a,#0d2f55)] p-7 text-center md:p-10">
        <h2 className="mb-2 text-3xl font-black text-white">{t.title}</h2>
        <p className="mb-12 text-[var(--fin-muted)]">{t.description}</p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {t.features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center rounded-2xl border border-white/10 bg-black/20 p-6 shadow-sm"
            >
              <div className="mb-4 text-[var(--fin-accent)]">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">
                {feature.title}
              </h3>
              <p className="text-sm text-[var(--fin-muted)]">
                {feature.description}
              </p>
            </motion.div>
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
