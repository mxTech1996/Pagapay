"use client";

import { motion } from "framer-motion";
import { FaChartBar, FaUniversity, FaRegHandshake } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

export default function EnterpriseSolutionsSection() {
  const { language } = useLanguage();
  const t = enterpriseContent[language];

  return (
    <section className="mx-auto w-full max-w-7xl px-5 pb-16 md:px-8">
      <div className="rounded-3xl border border-[var(--fin-line)] bg-[linear-gradient(155deg,#0c2542,#0f3c52)] p-7 text-center text-white md:p-10">
        <h2 className="mb-4 text-3xl font-black">{t.title}</h2>
        <p className="mb-12 text-[var(--fin-muted)]">{t.description}</p>

        <div className="grid gap-8 md:grid-cols-3">
          {t.features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center rounded-2xl border border-white/10 bg-black/20 p-6 shadow-md"
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
  <FaChartBar key="chart" size={40} />,
  <FaUniversity key="bank" size={40} />,
  <FaRegHandshake key="deal" size={40} />,
];

const enterpriseContent = {
  en: {
    title: "Comprehensive Payment Solutions for Large Businesses",
    description:
      "Empower your enterprise with scalable, reliable, and fully customized payment services.",
    features: [
      {
        icon: featureIcons[0],
        title: "Advanced Reporting & Dashboards",
        description:
          "Monitor your business performance and make smarter decisions with real-time insights.",
      },
      {
        icon: featureIcons[1],
        title: "Multi-Account Settlements",
        description:
          "Next business day settlements to one or multiple bank accounts of your choice.",
      },
      {
        icon: featureIcons[2],
        title: "Tailored Fee Structures",
        description:
          "Custom pricing based on your business model, volume, and billing cycle.",
      },
    ],
  },
  es: {
    title: "Soluciones integrales de pago para grandes empresas",
    description:
      "Potencia tu empresa con servicios de pago escalables, confiables y totalmente personalizados.",
    features: [
      {
        icon: featureIcons[0],
        title: "Reportes y dashboards avanzados",
        description:
          "Monitorea el rendimiento de tu negocio y toma mejores decisiones con información en tiempo real.",
      },
      {
        icon: featureIcons[1],
        title: "Liquidaciones multi-cuenta",
        description:
          "Liquidaciones al siguiente día hábil a una o múltiples cuentas bancarias.",
      },
      {
        icon: featureIcons[2],
        title: "Estructuras de comisión a la medida",
        description:
          "Precios personalizados según tu modelo de negocio, volumen y ciclo de facturación.",
      },
    ],
  },
};
