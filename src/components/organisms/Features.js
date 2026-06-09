"use client";

import { motion } from "framer-motion";
import {
  FaHeadset,
  FaCreditCard,
  FaMapMarkerAlt,
  FaWifi,
} from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

export default function FeaturesSection() {
  const { language } = useLanguage();
  const t = featuresContent[language];

  return (
    <section className="mx-auto w-full max-w-7xl px-5 pb-16 md:px-8">
      <div className="rounded-3xl border border-[var(--fin-line)] bg-[linear-gradient(150deg,#0b1f3a,#0d2f57)] p-7 text-center md:p-10">
        <h2 className="mb-4 text-3xl font-black text-white">{t.title}</h2>
        <p className="mb-12 text-[var(--fin-muted)]">{t.description}</p>

        <div className="grid gap-8 md:grid-cols-2">
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
  <FaHeadset key="support" size={40} />,
  <FaCreditCard key="terminal" size={40} />,
  <FaMapMarkerAlt key="coverage" size={40} />,
  <FaWifi key="connectivity" size={40} />,
];

const featuresContent = {
  en: {
    title: "Empowering Businesses Like Yours to Grow",
    description:
      "We help companies expand with reliable payment solutions and nationwide support.",
    features: [
      {
        icon: featureIcons[0],
        title: "24/7 Dedicated Support",
        description:
          "Get expert assistance at every step with resources and guidance on how to maximize our solutions.",
      },
      {
        icon: featureIcons[1],
        title: "Payment Terminals for Any Business",
        description:
          "Choose from multiple terminal models designed for businesses of all sizes and industries.",
      },
      {
        icon: featureIcons[2],
        title: "Nationwide Coverage",
        description:
          "Over a decade of experience supporting businesses across Mexico, including hotels, travel agencies, and more.",
      },
      {
        icon: featureIcons[3],
        title: "WiFi & Mobile Data Connectivity",
        description:
          "Stay connected anywhere with terminals that include SIM cards for uninterrupted transactions.",
      },
    ],
  },
  es: {
    title: "Impulsamos empresas como la tuya para crecer",
    description:
      "Ayudamos a las empresas a expandirse con soluciones de pago confiables y soporte nacional.",
    features: [
      {
        icon: featureIcons[0],
        title: "Soporte dedicado 24/7",
        description:
          "Recibe asistencia experta en cada etapa para aprovechar al máximo nuestras soluciones.",
      },
      {
        icon: featureIcons[1],
        title: "Terminales para cualquier negocio",
        description:
          "Elige entre múltiples modelos de terminal para empresas de todos los tamaños e industrias.",
      },
      {
        icon: featureIcons[2],
        title: "Cobertura nacional",
        description:
          "Más de una década apoyando empresas en México, incluyendo hoteles, agencias y más.",
      },
      {
        icon: featureIcons[3],
        title: "Conectividad Wi-Fi y datos móviles",
        description:
          "Mantén conexión en cualquier lugar con terminales que incluyen SIM para transacciones continuas.",
      },
    ],
  },
};
