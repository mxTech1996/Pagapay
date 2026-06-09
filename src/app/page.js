"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import HeroSection from "@/components/organisms/Hero";
import Solutions from "@/components/organisms/Solutions";
import BenefitsSection from "@/components/organisms/Benefits";
import PaymentMethods from "@/components/Payments";
import EnterpriseSolutionsSection from "@/components/organisms/Enterprise";
import FeaturesSection from "@/components/organisms/Features";
import ProductsComparison from "@/components/organisms/Products";
import TestimonialsCarousel from "@/components/organisms/Testimonials";
import ContactForm from "@/components/ContactForm";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { language } = useLanguage();
  const t = homeContent[language];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--fin-bg)] text-[var(--fin-ink)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="hero-orb hero-orb--one" />
        <div className="hero-orb hero-orb--two" />
      </div>

      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#041126]/80 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative h-11 w-11 overflow-hidden rounded-xl ring-1 ring-white/20">
              <Image
                src="/images/logo.png"
                alt="Pagapay"
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
            <div>
              <p className="text-sm text-white/70">{t.paymentEcosystem}</p>
              <p className="text-xl font-black tracking-wide text-white">
                PAGAPAY
              </p>
            </div>
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
      </header>

      <section
        id="inicio"
        className="relative mx-auto grid w-full max-w-7xl gap-10 px-5 pb-16 pt-14 md:grid-cols-2 md:px-8 md:pt-20"
      >
        <div className="reveal-up flex flex-col justify-center">
          <p className="mb-4 w-max rounded-full border border-[var(--fin-line)] bg-white/5 px-4 py-1.5 text-sm text-[var(--fin-muted)]">
            {t.heroBadge}
          </p>
          <h1 className="text-4xl font-black leading-tight text-white md:text-6xl">
            {t.heroTitleLine1}
            <span className="block text-[var(--fin-accent)]">
              {t.heroTitleLine2}
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-[var(--fin-muted)] md:text-lg">
            {t.heroDescription}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/more-information"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--fin-primary)] px-6 py-3 text-sm font-bold text-white transition hover:brightness-110"
            >
              {t.requestDemo}
              <FaArrowRight />
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center rounded-full border border-[var(--fin-line)] px-6 py-3 text-sm font-semibold text-white/90 transition hover:border-white/40 hover:text-white"
            >
              {t.viewSolutions}
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-3 text-center sm:max-w-md">
            {statsByLanguage[language].map((item) => (
              <article
                key={item.label}
                className="rounded-2xl border border-[var(--fin-line)] bg-white/[0.03] px-4 py-3"
              >
                <p className="text-xl font-black text-white md:text-2xl">
                  {item.value}
                </p>
                <p className="text-xs text-[var(--fin-muted)] md:text-sm">
                  {item.label}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="reveal-up reveal-up-delay">
          <div className="relative mx-auto w-full max-w-xl rounded-3xl border border-[var(--fin-line)] bg-[linear-gradient(165deg,rgba(26,58,104,0.75),rgba(9,23,44,0.95))] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
            <p className="text-sm text-[var(--fin-muted)]">
              {t.dashboardLabel}
            </p>
            <h2 className="mt-2 text-2xl font-black text-white">
              {t.dashboardTitle}
            </h2>
            <p className="mt-1 text-4xl font-black text-[var(--fin-accent)]">
              $148,320
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {kpisByLanguage[language].map((kpi) => (
                <div
                  key={kpi.title}
                  className="rounded-2xl border border-white/10 bg-black/20 p-4"
                >
                  <p className="text-xs uppercase tracking-[0.14em] text-[var(--fin-muted)]">
                    {kpi.title}
                  </p>
                  <p className="mt-2 text-xl font-bold text-white">
                    {kpi.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-[var(--fin-muted)]">
                {t.transparentFees}
              </p>
              <p className="mt-1 text-2xl font-black text-white">
                {t.feesValue}
              </p>
              <Link
                href="/pricing"
                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[var(--fin-accent)] transition hover:text-white"
              >
                {t.viewPricing}
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="aceptamos"
        className="mx-auto w-full max-w-7xl px-5 pb-16 md:px-8"
      >
        <div className="rounded-3xl border border-[var(--fin-line)] bg-white/[0.03] p-6 md:p-10">
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--fin-muted)]">
            {t.weAccept}
          </p>
          <div className="mt-5 grid grid-cols-3 gap-4 sm:grid-cols-6">
            {brands.map((brand) => (
              <div
                key={brand.alt}
                className="flex h-20 items-center justify-center rounded-2xl border border-white/10 bg-[#0e2444] p-4"
              >
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={84}
                  height={34}
                  className="h-auto w-auto opacity-90"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="products"
        className="mx-auto w-full max-w-7xl px-5 pb-20 md:px-8"
      >
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--fin-muted)]">
              {t.solutionsLabel}
            </p>
            <h2 className="mt-2 text-3xl font-black text-white md:text-4xl">
              {t.solutionsTitle}
            </h2>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {solutionsByLanguage[language].map((solution) => (
            <article
              key={solution.title}
              className="group rounded-3xl border border-[var(--fin-line)] bg-[linear-gradient(160deg,#0b1e3b,#08162d)] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/30"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--fin-muted)]">
                {solution.tag}
              </p>
              <h3 className="mt-3 text-2xl font-black text-white">
                {solution.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--fin-muted)]">
                {solution.description}
              </p>
              <Link
                href={solution.href}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--fin-accent)] transition hover:text-white"
              >
                {t.explore}
                <FaArrowRight />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 pb-20 md:px-8">
        <div className="rounded-3xl border border-[var(--fin-line)] bg-[linear-gradient(150deg,#061833,#0f3650)] p-7 md:p-10">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--fin-accent)]">
                {hotelContentByLanguage[language].label}
              </p>
              <h2 className="mt-2 text-3xl font-black text-white md:text-5xl">
                {hotelContentByLanguage[language].title}
              </h2>
              <p className="mt-4 text-[var(--fin-muted)] md:text-lg">
                {hotelContentByLanguage[language].description}
              </p>
            </div>
            <Link
              href="/more-information"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-black text-[#0a2d4e] transition hover:bg-[#e9f8fa]"
            >
              {hotelContentByLanguage[language].cta}
              <FaArrowRight />
            </Link>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {hotelGalleryByLanguage[language].map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-2xl border border-white/10 bg-black/20"
              >
                <div className="relative h-52 w-full">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-black text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--fin-muted)]">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {hotelMetricsByLanguage[language].map((metric) => (
              <article
                key={metric.label}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center"
              >
                <p className="text-3xl font-black text-[var(--fin-accent)]">
                  {metric.value}
                </p>
                <p className="mt-1 text-sm text-[var(--fin-muted)]">
                  {metric.label}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {hotelOperationsByLanguage[language].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-black/20 p-6"
              >
                <p className="text-xs uppercase tracking-[0.16em] text-[var(--fin-accent)]">
                  {item.area}
                </p>
                <h3 className="mt-2 text-2xl font-black text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--fin-muted)]">
                  {item.description}
                </p>
                <ul className="mt-4 grid gap-2 text-sm text-[var(--fin-muted-strong)]">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="implementacion"
        className="mx-auto w-full max-w-7xl px-5 pb-20 md:px-8"
      >
        <div className="rounded-3xl border border-[var(--fin-line)] bg-[linear-gradient(160deg,#071327,#0b2344)] p-7 md:p-10">
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--fin-muted)]">
            {t.implementationLabel}
          </p>
          <h2 className="mt-2 text-3xl font-black text-white md:text-4xl">
            {t.implementationTitle}
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {stepsByLanguage[language].map((step, index) => (
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

      <HeroSection />
      <Solutions />
      <BenefitsSection />
      <PaymentMethods />
      <EnterpriseSolutionsSection />
      <FeaturesSection />
      <ProductsComparison />
      <TestimonialsCarousel />

      <section
        id="contacto"
        className="mx-auto w-full max-w-7xl px-5 pb-24 md:px-8"
      >
        <div className="rounded-3xl border border-[var(--fin-line)] bg-[linear-gradient(140deg,#132f57,#0f5d61)] p-8 md:p-12">
          <h2 className="text-3xl font-black text-white md:text-5xl">
            {t.finalCtaTitle}
          </h2>
          <p className="mt-4 max-w-2xl text-[var(--fin-muted-strong)]">
            {t.finalCtaDescription}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/more-information"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-black text-[#0a2d4e] transition hover:bg-[#e9f8fa]"
            >
              {t.talkToSpecialist}
              <FaArrowRight />
            </Link>
            <Link
              href="mailto:customer@pagapay.mx"
              className="inline-flex rounded-full border border-white/35 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
            >
              customer@pagapay.mx
            </Link>
          </div>

          <ContactForm />
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-[var(--fin-muted)]">
        {t.footerText}
      </footer>
    </main>
  );
}

const homeContent = {
  en: {
    paymentEcosystem: "Payment ecosystem",
    talkToSales: "Talk to Sales",
    heroBadge: "Payment infrastructure built for speed",
    heroTitleLine1: "The new rhythm",
    heroTitleLine2: "for your digital payments",
    heroDescription:
      "We unify payment links, terminals, reporting, and reconciliation in one platform. Less friction for your customers, more conversion for your business.",
    requestDemo: "Request a demo",
    viewSolutions: "View solutions",
    dashboardLabel: "Real-time dashboard",
    dashboardTitle: "Today\'s processed volume",
    transparentFees: "Transparent fees",
    feesValue: "From 2.9% + VAT",
    viewPricing: "View plans and pricing",
    weAccept: "We accept",
    solutionsLabel: "Solutions",
    solutionsTitle: "A payment stack designed to scale",
    explore: "Explore",
    implementationLabel: "Implementation",
    implementationTitle: "Launch your operation in 3 steps",
    finalCtaTitle: "Ready to sell more and collect better?",
    finalCtaDescription:
      "We migrate your operation without slowing sales. A specialist supports your onboarding, setup, and first transactions.",
    talkToSpecialist: "Talk to a specialist",
    footerText: "Pagapay · Digital payments for modern commerce",
  },
  es: {
    paymentEcosystem: "Ecosistema de pagos",
    talkToSales: "Hablar con ventas",
    heroBadge: "Infraestructura de pagos creada para velocidad",
    heroTitleLine1: "El nuevo ritmo",
    heroTitleLine2: "de tus cobros digitales",
    heroDescription:
      "Unificamos links de pago, terminales, reportes y conciliación en una sola plataforma. Menos fricción para tus clientes, más conversión para tu negocio.",
    requestDemo: "Solicitar demo",
    viewSolutions: "Ver soluciones",
    dashboardLabel: "Dashboard en tiempo real",
    dashboardTitle: "Volumen procesado hoy",
    transparentFees: "Comisiones transparentes",
    feesValue: "Desde 2.9% + IVA",
    viewPricing: "Ver planes y comisiones",
    weAccept: "Aceptamos",
    solutionsLabel: "Soluciones",
    solutionsTitle: "Un stack de pagos pensado para crecer",
    explore: "Explorar",
    implementationLabel: "Implementación",
    implementationTitle: "Activa tu operación en 3 pasos",
    finalCtaTitle: "¿Listo para vender más y cobrar mejor?",
    finalCtaDescription:
      "Migramos tu operación sin frenar ventas. Un asesor te acompaña en onboarding, configuración y primeros cobros.",
    talkToSpecialist: "Quiero hablar con un especialista",
    footerText: "Pagapay · Pagos digitales para comercio moderno",
  },
};

const statsByLanguage = {
  en: [
    { value: "+42%", label: "Conversion uplift" },
    { value: "24/7", label: "Active monitoring" },
    { value: "3 min", label: "Average approval time" },
  ],
  es: [
    { value: "+42%", label: "Aumento de conversión" },
    { value: "24/7", label: "Monitoreo activo" },
    { value: "3 min", label: "Tiempo promedio de aprobación" },
  ],
};

const kpisByLanguage = {
  en: [
    { title: "Approved payments", value: "1,294" },
    { title: "Average ticket", value: "$586 MXN" },
    { title: "Recovered attempts", value: "18%" },
    { title: "Today's settlements", value: "$98,410" },
  ],
  es: [
    { title: "Pagos aprobados", value: "1,294" },
    { title: "Ticket promedio", value: "$586 MXN" },
    { title: "Intentos recuperados", value: "18%" },
    { title: "Abonos de hoy", value: "$98,410" },
  ],
};

const brands = [
  { src: "/images/visa.png", alt: "Visa" },
  { src: "/images/mastercard.png", alt: "Mastercard" },
  { src: "/images/amex.png", alt: "American Express" },
  { src: "/images/apple.png", alt: "Apple Pay" },
  { src: "/images/sodexo.png", alt: "Sodexo" },
  { src: "/images/sivale.png", alt: "Si Vale" },
];

const solutionsByLanguage = {
  en: [
    {
      tag: "Omnichannel checkout",
      title: "Payment links, QR, and terminals",
      href: "/solutions#checkout",
      description:
        "Create payment links in seconds, process dynamic QR payments, and connect in-store terminals without changing providers.",
    },
    {
      tag: "Risk intelligence",
      title: "Adaptive fraud prevention",
      href: "/solutions#risk",
      description:
        "Behavior-based risk models, custom rules, and authentication layers to protect every transaction.",
    },
    {
      tag: "Centralized operations",
      title: "Automated reporting and reconciliation",
      href: "/solutions#operations",
      description:
        "Visualize sales by channel, export daily closeouts, and sync with your accounting team without manual workflows.",
    },
  ],
  es: [
    {
      tag: "Checkout omnicanal",
      title: "Cobro por link, QR y terminal",
      href: "/solutions#checkout",
      description:
        "Crea enlaces de pago en segundos, procesa QR dinámicos y conecta terminales para tienda física sin cambiar de proveedor.",
    },
    {
      tag: "Inteligencia de riesgo",
      title: "Prevención de fraude adaptable",
      href: "/solutions#risk",
      description:
        "Modelos de riesgo por comportamiento, reglas personalizadas y autenticación para proteger cada transacción.",
    },
    {
      tag: "Operación centralizada",
      title: "Reportes y conciliación automática",
      href: "/solutions#operations",
      description:
        "Visualiza ventas por canal, exporta cortes diarios y sincroniza con tu equipo contable sin procesos manuales.",
    },
  ],
};

const stepsByLanguage = {
  en: [
    {
      title: "Business discovery",
      text: "We map your current payment flow and define the ideal architecture for eCommerce, retail, or services.",
    },
    {
      title: "Guided integration",
      text: "We configure your API or hosted checkout, activate fraud rules, and connect the most relevant payment methods.",
    },
    {
      title: "Continuous scale",
      text: "We monitor performance, optimize approval rates, and propose improvements to increase revenue month after month.",
    },
  ],
  es: [
    {
      title: "Descubrimiento del negocio",
      text: "Mapeamos tu flujo actual de cobro y definimos la arquitectura ideal para eCommerce, retail o servicios.",
    },
    {
      title: "Integración guiada",
      text: "Configuramos API o checkout hosted, activamos reglas antifraude y conectamos métodos de pago relevantes.",
    },
    {
      title: "Escalamiento continuo",
      text: "Monitoreamos performance, optimizamos aprobación y proponemos mejoras para elevar ingresos mes a mes.",
    },
  ],
};

const hotelContentByLanguage = {
  en: {
    label: "Hospitality section",
    title: "Specialists in Hotel Operations and Management",
    description:
      "From reservation to checkout, we centralize payments, reconciliation, and operational control for city hotels, resorts, and multi-property chains.",
    cta: "Request a hospitality strategy",
  },
  es: {
    label: "Sección hotelera",
    title: "Especialistas en operación y gestión hotelera",
    description:
      "Desde la reservación hasta el checkout, centralizamos pagos, conciliación y control operativo para hoteles urbanos, resorts y cadenas.",
    cta: "Solicitar estrategia para hotelería",
  },
};

const hotelGalleryByLanguage = {
  en: [
    {
      src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=80",
      title: "Connected Lobby and Front Desk",
      text: "Automate pre-authorizations, no-show charges, and counter payments with full shift-level traceability.",
    },
    {
      src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1400&q=80",
      title: "Premium Guest Experience",
      text: "Unify charges for upgrades, experiences, and room service under one reservation profile.",
    },
    {
      src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1400&q=80",
      title: "Operations and Finance Hub",
      text: "Reconcile revenue by channel, monitor incidents, and generate daily closings by property.",
    },
  ],
  es: [
    {
      src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=80",
      title: "Lobby y recepción conectados",
      text: "Automatiza preautorizaciones, cargos por no show y cobros en mostrador con trazabilidad por turno.",
    },
    {
      src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1400&q=80",
      title: "Experiencia premium para huéspedes",
      text: "Unifica cargos por upgrades, experiencias y room service en un solo perfil de reservación.",
    },
    {
      src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1400&q=80",
      title: "Centro de operaciones y finanzas",
      text: "Concilia ingresos por canal, monitorea incidencias y genera cierres diarios por propiedad.",
    },
  ],
};

const hotelMetricsByLanguage = {
  en: [
    { value: "-38%", label: "Less front desk operational load" },
    { value: "+27%", label: "Growth in ancillary revenue" },
    { value: "99.95%", label: "Platform availability" },
    { value: "24/7", label: "Hospitality-specialized support" },
  ],
  es: [
    { value: "-38%", label: "Menor carga operativa en recepción" },
    { value: "+27%", label: "Crecimiento en ingresos complementarios" },
    { value: "99.95%", label: "Disponibilidad de plataforma" },
    { value: "24/7", label: "Soporte especializado en hotelería" },
  ],
};

const hotelOperationsByLanguage = {
  en: [
    {
      area: "Daily operations",
      title: "End-to-End Management for Each Property",
      description:
        "Control lodging, events, and F&B charges in one view with reporting by area, shift, and responsible user.",
      points: [
        "Express checkout with secure card tokenization",
        "Alert panel for declines, chargebacks, and adjustments",
        "Dedicated flows for agencies, corporate accounts, and large groups",
      ],
    },
    {
      area: "Leadership and finance",
      title: "Reconciliation, Audit, and Operational Governance",
      description:
        "Standardize revenue processes across independent hotels or chains with approval controls and full audit logs.",
      points: [
        "Automated reconciliation with PMS and ERP systems",
        "Multi-currency cash closing with digital signature",
        "Occupancy, ADR, and RevPAR KPIs linked to payments",
      ],
    },
  ],
  es: [
    {
      area: "Operación diaria",
      title: "Gestión end-to-end por propiedad",
      description:
        "Controla cargos de hospedaje, eventos y alimentos en una sola vista con reportes por área, turno y responsable.",
      points: [
        "Checkout express con tokenización segura de tarjetas",
        "Panel de alertas para rechazos, contracargos y ajustes",
        "Flujos para agencias, cuentas corporativas y grupos grandes",
      ],
    },
    {
      area: "Dirección y finanzas",
      title: "Conciliación, auditoría y gobierno operativo",
      description:
        "Estandariza procesos de ingresos en hoteles independientes o cadenas con controles de aprobación y trazabilidad completa.",
      points: [
        "Conciliación automatizada con PMS y ERP",
        "Cierre de caja multimoneda con firma digital",
        "KPIs de ocupación, ADR y RevPAR vinculados a pagos",
      ],
    },
  ],
};
