"use client";

import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";

const plans = [
  {
    title: "Starter",
    fee: "3.4% + VAT",
    description: "Ideal for growing businesses with early-stage volume.",
    features: ["Payment links", "Basic dashboard", "Email support"],
  },
  {
    title: "Growth",
    fee: "2.9% + VAT",
    description: "For teams with omnichannel operations and scaling needs.",
    features: [
      "Link + QR + terminal",
      "Fraud prevention rules",
      "Advanced reconciliation",
    ],
  },
  {
    title: "Enterprise",
    fee: "Custom pricing",
    description: "For high volume, multiple branches, and dedicated SLA needs.",
    features: ["Tailored integration", "Dedicated manager", "Priority SLA"],
  },
];

export default function PricingPage() {
  const { language } = useLanguage();
  const t = pricingContent[language];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--fin-bg)] text-[var(--fin-ink)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="hero-orb hero-orb--one" />
        <div className="hero-orb hero-orb--two" />
      </div>

      <section className="relative mx-auto w-full max-w-6xl px-5 py-12 md:px-8 md:py-16">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white/90 transition hover:border-white hover:text-white"
          >
            <FaArrowLeft />
            {t.backHome}
          </Link>
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <Link
              href="/more-information"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--fin-accent)] px-5 py-2.5 text-sm font-bold text-[#02222a] transition hover:brightness-110"
            >
              {t.talkToSales}
              <FaArrowRight />
            </Link>
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-[var(--fin-line)] bg-[linear-gradient(150deg,#0b1f3a,#0f3658)] p-7 md:p-10">
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--fin-accent)]">
            {t.label}
          </p>
          <h1 className="mt-2 text-3xl font-black text-white md:text-5xl">
            {t.title}
          </h1>
          <p className="mt-4 max-w-3xl text-[var(--fin-muted)] md:text-lg">
            {t.description}
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {plansByLanguage[language].map((plan) => (
              <article
                key={plan.title}
                className="rounded-2xl border border-white/15 bg-black/20 p-5"
              >
                <p className="text-sm uppercase tracking-[0.14em] text-[var(--fin-muted)]">
                  {plan.title}
                </p>
                <p className="mt-2 text-2xl font-black text-white">
                  {plan.fee}
                </p>
                <p className="mt-2 text-sm text-[var(--fin-muted)]">
                  {plan.description}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-[var(--fin-muted-strong)]">
                  {plan.features.map((feature) => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/more-information"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-black text-[#0a2d4e] transition hover:bg-[#e9f8fa]"
            >
              {t.requestProposal}
              <FaArrowRight />
            </Link>
            <Link
              href="mailto:customer@pagapay.mx"
              className="inline-flex rounded-full border border-white/35 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
            >
              customer@pagapay.mx
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

const pricingContent = {
  en: {
    backHome: "Back to home",
    talkToSales: "Talk to sales",
    label: "Pricing",
    title: "Plans designed for every stage of your business",
    description:
      "Choose a clear pricing structure and scale when your volume grows. No hidden fees.",
    requestProposal: "Request proposal",
  },
  es: {
    backHome: "Volver al inicio",
    talkToSales: "Hablar con ventas",
    label: "Comisiones",
    title: "Planes pensados para cada etapa de tu negocio",
    description:
      "Elige una estructura de comisiones clara y escala cuando tu volumen lo necesite. Sin cargos escondidos.",
    requestProposal: "Solicitar propuesta",
  },
};

const plansByLanguage = {
  en: plans,
  es: [
    {
      title: "Starter",
      fee: "3.4% + IVA",
      description: "Ideal para comercios en crecimiento con volumen inicial.",
      features: ["Cobros por link", "Dashboard básico", "Soporte por correo"],
    },
    {
      title: "Growth",
      fee: "2.9% + IVA",
      description:
        "Para equipos con operación omnicanal y necesidad de escalar.",
      features: [
        "Link + QR + terminal",
        "Reglas antifraude",
        "Conciliación avanzada",
      ],
    },
    {
      title: "Enterprise",
      fee: "Tarifa personalizada",
      description: "Para alto volumen, múltiples sucursales y SLA dedicado.",
      features: ["Integración a medida", "Manager dedicado", "SLA prioritario"],
    },
  ],
};
