"use client";

import { motion } from "framer-motion";
import { FaChartBar, FaUniversity, FaRegHandshake } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

export default function EnterpriseSolutionsSection() {
  const { language } = useLanguage();
  const t = enterpriseContent[language];

  return (
    <section className="mx-auto w-full max-w-7xl px-5 pb-16 md:px-8">
      <div className="border-y border-[var(--fin-line)] py-7 text-center md:py-10">
        <h2 className="mb-4 text-3xl font-black text-[var(--fin-ink)]">
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
