"use client";

import Link from "next/link";
import {
  FaArrowLeft,
  FaArrowRight,
  FaShieldHalved,
  FaChartLine,
  FaStore,
} from "react-icons/fa6";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";

const pillars = [
  {
    id: "checkout",
    icon: FaStore,
    badge: "Omnichannel checkout",
    title: "Collect payments wherever your business sells",
    description:
      "Activate payment links, QR collections, and in-person terminals from one control panel. Keep the same brand experience across web, stores, and chat sales.",
    highlights: [
      "Customizable payment links",
      "Dynamic QR for physical stores",
      "Terminals connected to real-time reports",
    ],
  },
  {
    id: "risk",
    icon: FaShieldHalved,
    badge: "Risk intelligence",
    title: "Protect conversion without blocking good sales",
    description:
      "Fraud engine with rules by ticket size, channel, and historical behavior. Detect suspicious patterns and reduce chargebacks while keeping approvals high.",
    highlights: [
      "Rules by amount, BIN, and origin",
      "Alerts for out-of-pattern transactions",
      "Risk optimization recommendations",
    ],
  },
  {
    id: "operations",
    icon: FaChartLine,
    badge: "Centralized operations",
    title: "Make decisions with clear daily data",
    description:
      "Reconcile automatically, export daily closeouts, and monitor revenue by payment method. Finance and operations teams work from one source of truth.",
    highlights: [
      "Dashboard by branch and channel",
      "Automated closeouts and reconciliation",
      "Accounting-ready reports",
    ],
  },
];

const journey = [
  {
    title: "Initial assessment",
    text: "We map your current payment flow and detect friction in approvals, abandonment, and reconciliation.",
  },
  {
    title: "Guided implementation",
    text: "We configure checkout, risk rules, and integrations so you can start collecting quickly and securely.",
  },
  {
    title: "Continuous optimization",
    text: "We analyze performance and propose weekly improvements to increase conversion and profitability.",
  },
];

export default function SolutionsPage() {
  const { language } = useLanguage();
  const t = solutionsPageContent[language];
  const pillars = pillarsByLanguage[language];
  const journey = journeyByLanguage[language];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--fin-bg)] text-[var(--fin-ink)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="hero-orb hero-orb--one" />
        <div className="hero-orb hero-orb--two" />
      </div>

      <section className="relative mx-auto w-full max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white/90 transition hover:border-white hover:text-white"
          >
            <FaArrowLeft />
            {t.backHome}
          </Link>
          <div className="flex flex-wrap items-center gap-3">
            <LanguageSwitcher />
            <Link
              href="/pricing"
              className="inline-flex items-center rounded-full border border-[var(--fin-line)] px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white/50"
            >
              {t.viewPricing}
            </Link>
            <Link
              href="/more-information"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--fin-accent)] px-5 py-2.5 text-sm font-bold text-[#02222a] transition hover:brightness-110"
            >
              {t.scheduleConsultation}
              <FaArrowRight />
            </Link>
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-[var(--fin-line)] bg-[linear-gradient(150deg,#0b1f3a,#0f3658)] p-7 md:p-10">
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--fin-accent)]">
            {t.sectionLabel}
          </p>
          <h1 className="mt-2 max-w-4xl text-3xl font-black text-white md:text-5xl">
            {t.title}
          </h1>
          <p className="mt-4 max-w-3xl text-[var(--fin-muted)] md:text-lg">
            {t.description}
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article
                  id={pillar.id}
                  key={pillar.id}
                  className="rounded-2xl border border-white/15 bg-black/20 p-5"
                >
                  <div className="inline-flex rounded-xl bg-[#163a67] p-2 text-[var(--fin-accent)]">
                    <Icon />
                  </div>
                  <p className="mt-3 text-xs uppercase tracking-[0.14em] text-[var(--fin-muted)]">
                    {pillar.badge}
                  </p>
                  <h2 className="mt-2 text-2xl font-black text-white">
                    {pillar.title}
                  </h2>
                  <p className="mt-3 text-sm text-[var(--fin-muted)]">
                    {pillar.description}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-[var(--fin-muted-strong)]">
                    {pillar.highlights.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 pb-20 md:px-8">
        <div className="rounded-3xl border border-[var(--fin-line)] bg-[linear-gradient(160deg,#071327,#0b2344)] p-7 md:p-10">
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--fin-muted)]">
            {t.howWeWork}
          </p>
          <h2 className="mt-2 text-3xl font-black text-white md:text-4xl">
            {t.implementationTitle}
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {journey.map((step, index) => (
              <article
                key={step.title}
                className="rounded-2xl border border-white/10 bg-black/20 p-5"
              >
                <p className="text-sm font-black text-[var(--fin-accent)]">
                  0{index + 1}
                </p>
                <h3 className="mt-1 text-xl font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--fin-muted)]">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 pb-24 md:px-8">
        <div className="rounded-3xl border border-[var(--fin-line)] bg-[linear-gradient(140deg,#132f57,#0f5d61)] p-8 md:p-12">
          <h2 className="text-3xl font-black text-white md:text-5xl">
            {t.finalTitle}
          </h2>
          <p className="mt-4 max-w-2xl text-[var(--fin-muted-strong)]">
            {t.finalDescription}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/more-information"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-black text-[#0a2d4e] transition hover:bg-[#e9f8fa]"
            >
              {t.finalButton}
              <FaArrowRight />
            </Link>
            <Link
              href="mailto:contacto@pagapay.mx"
              className="inline-flex rounded-full border border-white/35 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
            >
              contacto@pagapay.mx
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

const solutionsPageContent = {
  en: {
    backHome: "Back to home",
    viewPricing: "View pricing",
    scheduleConsultation: "Schedule a consultation",
    sectionLabel: "Pagapay solutions",
    title:
      "A complete payments ecosystem to accelerate sales and streamline operations",
    description:
      "It is not just about collecting payments. It is about collecting better: with less friction, lower risk, and more visibility for business decisions.",
    howWeWork: "How we work",
    implementationTitle: "Implementation focused on results from week one",
    finalTitle: "Ready to activate the right solution for your business?",
    finalDescription:
      "We help you define the right plan by industry, volume, and channel. Get a tailored proposal with implementation timelines and pricing structure.",
    finalButton: "I want a proposal",
  },
  es: {
    backHome: "Volver al inicio",
    viewPricing: "Ver comisiones",
    scheduleConsultation: "Agendar asesoria",
    sectionLabel: "Soluciones Pagapay",
    title:
      "Un ecosistema de pagos completo para acelerar ventas y ordenar operaciones",
    description:
      "No se trata solo de cobrar. Se trata de cobrar mejor: con menos friccion, menor riesgo y mayor visibilidad para tomar decisiones de negocio.",
    howWeWork: "Como trabajamos",
    implementationTitle:
      "Implementacion enfocada en resultados desde la primera semana",
    finalTitle: "Listo para activar la solucion correcta para tu negocio?",
    finalDescription:
      "Te ayudamos a definir el plan correcto por industria, volumen y canales. Recibe una propuesta con tiempos de implementacion y estructura de comisiones.",
    finalButton: "Quiero una propuesta",
  },
};

const pillarsByLanguage = {
  en: pillars,
  es: [
    {
      id: "checkout",
      icon: FaStore,
      badge: "Checkout omnicanal",
      title: "Cobra donde vende tu negocio",
      description:
        "Activa links de pago, cobro con QR y terminal fisica desde un solo panel. Mantienes la misma experiencia de marca en web, tienda y ventas por chat.",
      highlights: [
        "Links de pago personalizables",
        "QR dinamico para tiendas fisicas",
        "Terminales conectadas a reportes en tiempo real",
      ],
    },
    {
      id: "risk",
      icon: FaShieldHalved,
      badge: "Inteligencia de riesgo",
      title: "Protege conversion sin bloquear buenas ventas",
      description:
        "Motor antifraude con reglas por monto, canal y comportamiento historico. Detecta patrones sospechosos y reduce contracargos.",
      highlights: [
        "Reglas por monto, BIN y origen",
        "Alertas para operaciones fuera de patron",
        "Recomendaciones de optimizacion por riesgo",
      ],
    },
    {
      id: "operations",
      icon: FaChartLine,
      badge: "Operacion centralizada",
      title: "Toma decisiones con datos claros cada dia",
      description:
        "Concilia automaticamente, exporta cortes diarios y monitorea ingresos por metodo de pago.",
      highlights: [
        "Dashboard por sucursal y canal",
        "Cierres y conciliacion automatica",
        "Reportes listos para contabilidad",
      ],
    },
  ],
};

const journeyByLanguage = {
  en: journey,
  es: [
    {
      title: "Diagnostico inicial",
      text: "Mapeamos tu flujo actual de cobro y detectamos fricciones en aprobacion, abandono y conciliacion.",
    },
    {
      title: "Implementacion guiada",
      text: "Configuramos checkout, reglas de riesgo e integraciones para que empieces a cobrar rapido y seguro.",
    },
    {
      title: "Optimizacion continua",
      text: "Analizamos performance y proponemos mejoras semanales para aumentar conversion y rentabilidad.",
    },
  ],
};
