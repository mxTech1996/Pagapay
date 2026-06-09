"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Solutions() {
  const { language } = useLanguage();
  const t = solutionsContent[language];

  return (
    <section className="mx-auto w-full max-w-7xl px-5 pb-16 md:px-8">
      <div className="rounded-3xl border border-[var(--fin-line)] bg-[linear-gradient(160deg,#0d2546,#081b34)] p-7 text-center md:p-10">
        <h2 className="mb-2 text-3xl font-black text-white">{t.title}</h2>
        <p className="mb-12 text-[var(--fin-muted)]">{t.description}</p>

        <div className="grid gap-8 md:grid-cols-3">
          {t.services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl border border-white/10 bg-black/20 p-5 shadow-sm"
            >
              <img
                src={service.image}
                alt={service.title}
                className="mx-auto mb-4 h-48 object-contain"
              />
              <h3 className="mb-2 text-lg font-semibold text-white">
                {service.title}
              </h3>
              <p className="text-sm text-[var(--fin-muted)]">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const baseServices = [
  {
    key: "contactless",
    image: "/images/contactless.png",
  },
  {
    key: "online",
    image: "/images/online.png",
  },
  {
    key: "dashboard",
    image: "/images/dashboard.png",
  },
];

const solutionsContent = {
  en: {
    title: "Boost Your Business with Smart Payment Solutions",
    description:
      "Explore our secure, flexible, and scalable payment tools built for modern businesses.",
    services: [
      {
        ...baseServices[0],
        title: "Contactless Payments",
        description:
          "Accept payments in-store with our secure contactless terminals",
      },
      {
        ...baseServices[1],
        title: "Online Payments",
        description:
          "Easily integrate our payment gateway into your website or app",
      },
      {
        ...baseServices[2],
        title: "eCommerce and Dashboard",
        description:
          "Manage your transactions, refunds, and reports with our intuitive dashboard",
      },
    ],
  },
  es: {
    title: "Impulsa tu negocio con soluciones de pago inteligentes",
    description:
      "Explora herramientas de pago seguras, flexibles y escalables para negocios modernos.",
    services: [
      {
        ...baseServices[0],
        title: "Pagos sin contacto",
        description:
          "Acepta pagos en tienda con nuestras terminales contactless seguras",
      },
      {
        ...baseServices[1],
        title: "Pagos en linea",
        description:
          "Integra facilmente nuestra pasarela de pagos en tu sitio web o app",
      },
      {
        ...baseServices[2],
        title: "eCommerce y dashboard",
        description:
          "Gestiona transacciones, reembolsos y reportes con un panel intuitivo",
      },
    ],
  },
};
