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
    badge: "Checkout",
    title: "Collect payments wherever your business sells",
    description:
      "Activate payment links, QR collections, and in-person terminals from one control panel. Keep the same brand experience across web, stores, and chat sales.",
    highlights: [
      "Customizable payment links",
      "Unified web, QR, and in-store checkout",
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
      "Adaptive authentication flows",
      "Risk optimization recommendations",
    ],
  },
  {
    id: "operations",
    icon: FaChartLine,
    badge: "Operations",
    title: "Make decisions with clear daily data",
    description:
      "Reconcile automatically, export daily closeouts, and monitor revenue by payment method. Finance and operations teams work from one source of truth.",
    highlights: [
      "Dashboard by branch and channel",
      "Automated settlement reports",
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
  const localizedPillars = pillarsByLanguage[language];
  const localizedJourney = journeyByLanguage[language];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--fin-bg)] text-[var(--fin-ink)]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0))]" />

      <section className="relative mx-auto w-full max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            className="corp-btn-secondary inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold transition hover:border-[var(--fin-primary)]"
          >
            <FaArrowLeft />
            {t.backHome}
          </Link>
          <div className="flex flex-wrap items-center gap-3">
            <LanguageSwitcher />
            <Link
              href="/pricing"
              className="corp-btn-secondary inline-flex items-center px-5 py-2.5 text-sm font-semibold transition hover:border-[var(--fin-primary)]"
            >
              {t.viewPricing}
            </Link>
            <Link
              href="/more-information"
              className="corp-btn-accent inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold transition hover:brightness-110"
            >
              {t.scheduleConsultation}
              <FaArrowRight />
            </Link>
          </div>
        </div>

        <div className="corp-surface mt-8 p-7 md:p-10">
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--fin-accent)]">
            {t.sectionLabel}
          </p>
          <h1 className="mt-2 max-w-4xl text-3xl font-black text-[var(--fin-ink)] md:text-5xl">
            {t.title}
          </h1>
          <p className="mt-4 max-w-3xl text-[var(--fin-muted)] md:text-lg">
            {t.description}
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {localizedPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article
                  id={pillar.id}
                  key={pillar.id}
                  className="corp-card p-5"
                >
                  <div className="inline-flex border border-[var(--fin-line)] bg-[var(--corp-surface-2)] p-2 text-[var(--fin-accent)]">
                    <Icon />
                  </div>
                  <p className="mt-3 text-xs uppercase tracking-[0.14em] text-[var(--fin-muted)]">
                    {pillar.badge}
                  </p>
                  <h2 className="mt-2 text-2xl font-black text-[var(--fin-ink)]">
                    {pillar.title}
                  </h2>
                  <p className="mt-3 text-sm text-[var(--fin-muted)]">
                    {pillar.description}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-[var(--fin-muted-strong)]">
                    {pillar.highlights.map((item) => (
                      <li key={item}>- {item}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 pb-20 md:px-8">
        <div className="corp-surface p-7 md:p-10">
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--fin-muted)]">
            {t.howWeWork}
          </p>
          <h2 className="mt-2 text-3xl font-black text-[var(--fin-ink)] md:text-4xl">
            {t.implementationTitle}
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {localizedJourney.map((step, index) => (
              <article key={step.title} className="corp-card p-5">
                <p className="text-sm font-black text-[var(--fin-accent)]">
                  0{index + 1}
                </p>
                <h3 className="mt-1 text-xl font-bold text-[var(--fin-ink)]">
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
        <div className="corp-surface p-8 md:p-12">
          <h2 className="text-3xl font-black text-[var(--fin-ink)] md:text-5xl">
            {t.finalTitle}
          </h2>
          <p className="mt-4 max-w-2xl text-[var(--fin-muted-strong)]">
            {t.finalDescription}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/more-information"
              className="corp-btn-accent inline-flex items-center gap-2 px-6 py-3 text-sm font-black transition hover:brightness-110"
            >
              {t.finalButton}
              <FaArrowRight />
            </Link>
            <Link
              href="mailto:customer@pagapay.mx"
              className="corp-btn-secondary inline-flex px-6 py-3 text-sm font-semibold transition hover:border-[var(--fin-primary)]"
            >
              customer@pagapay.mx
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
    scheduleConsultation: "Agendar asesoría",
    sectionLabel: "Soluciones Pagapay",
    title:
      "Un ecosistema de pagos completo para acelerar ventas y ordenar operaciones",
    description:
      "No se trata solo de cobrar. Se trata de cobrar mejor: con menos fricción, menor riesgo y mayor visibilidad para tomar decisiones de negocio.",
    howWeWork: "Cómo trabajamos",
    implementationTitle:
      "Implementación enfocada en resultados desde la primera semana",
    finalTitle: "¿Listo para activar la solución correcta para tu negocio?",
    finalDescription:
      "Te ayudamos a definir el plan correcto por industria, volumen y canales. Recibe una propuesta con tiempos de implementación y estructura de comisiones.",
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
        "Activa links de pago, cobro con QR y terminal física desde un solo panel. Mantienes la misma experiencia de marca en web, tienda y ventas por chat.",
      highlights: [
        "Links de pago personalizables",
        "Checkout unificado para web, QR y tienda",
        "Terminales conectadas a reportes en tiempo real",
      ],
    },
    {
      id: "risk",
      icon: FaShieldHalved,
      badge: "Inteligencia de riesgo",
      title: "Protege conversión sin bloquear buenas ventas",
      description:
        "Motor antifraude con reglas por monto, canal y comportamiento histórico. Detecta patrones sospechosos y reduce contracargos sin perder aprobación.",
      highlights: [
        "Reglas por monto, BIN y origen",
        "Flujos de autenticación adaptativa",
        "Recomendaciones para optimización de riesgo",
      ],
    },
    {
      id: "operations",
      icon: FaChartLine,
      badge: "Operaciones",
      title: "Toma decisiones con datos claros cada día",
      description:
        "Conciliación automática, exportaciones de cierres diarios y monitoreo de ingresos por método de pago. Finanzas y operaciones trabajan con una sola fuente de verdad.",
      highlights: [
        "Dashboard por sucursal y canal",
        "Reportes automáticos de dispersión y liquidación",
        "Informes listos para contabilidad",
      ],
    },
  ],
};

const journeyByLanguage = {
  en: journey,
  es: [
    {
      title: "Diagnóstico inicial",
      text: "Mapeamos tu flujo actual de cobro y detectamos fricciones en aprobaciones, abandono y conciliación.",
    },
    {
      title: "Implementación guiada",
      text: "Configuramos checkout, reglas de riesgo e integraciones para que empieces a cobrar rápido y seguro.",
    },
    {
      title: "Optimización continua",
      text: "Analizamos desempeño y proponemos mejoras semanales para elevar conversión y rentabilidad.",
    },
  ],
};
