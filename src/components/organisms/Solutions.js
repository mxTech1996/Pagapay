"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Solutions() {
  const { language } = useLanguage();
  const t = solutionsContent[language];

  return (
    <section className="mx-auto w-full max-w-7xl px-5 pb-16 md:px-8">
      <div className="border-y border-[var(--fin-line)] py-7 text-center md:py-10">
        <h2 className="mb-2 text-3xl font-black text-[var(--fin-ink)]">
          {t.title}
        </h2>
        <p className="mb-12 text-[var(--fin-muted)]">{t.description}</p>

        <div className="mt-8 divide-y divide-[var(--fin-line)] border-y border-[var(--fin-line)] text-left">
          {t.services.map((service, index) => (
            <motion.article
              key={index}
              whileHover={{ backgroundColor: "rgba(249,251,255,1)" }}
              className="grid items-center gap-5 p-5 md:grid-cols-[220px_1fr]"
            >
              <img
                src={service.image}
                alt={service.title}
                className="mx-auto h-28 object-contain md:h-32"
              />
              <div>
                <h3 className="mb-2 text-lg font-semibold text-[var(--fin-ink)]">
                  {service.title}
                </h3>
                <p className="text-sm text-[var(--fin-muted)]">
                  {service.description}
                </p>
              </div>
            </motion.article>
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
        title: "Pagos en línea",
        description:
          "Integra fácilmente nuestra pasarela de pagos en tu sitio web o app.",
      },
      {
        ...baseServices[2],
        title: "eCommerce y dashboard",
        description:
          "Gestiona transacciones, reembolsos y reportes con un panel intuitivo.",
      },
    ],
  },
};
