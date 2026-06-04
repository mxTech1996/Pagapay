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

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--fin-bg)] text-[var(--fin-ink)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="hero-orb hero-orb--one" />
        <div className="hero-orb hero-orb--two" />
      </div>

      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#fff]/80 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative h-11 w-11 ring-white/20">
              <img
                src="/images/logo.png"
                alt="Pagapay"
                width={56}
                height={56}
                className="object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
            <div>
              <p className="text-sm text-black/70">Payments Ecosystem</p>
              <p className="text-xl font-black tracking-wide text-white">
                PAGAPAY
              </p>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/my-cart"
              className="hidden rounded-full border border-white/25 px-4 py-2 text-sm font-semibold text-black/90 transition hover:border-white hover:text-white md:inline-flex"
            >
              My Cart
            </Link>
            <Link
              href="/more-information"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--fin-accent)] px-5 py-2.5 text-sm font-bold text-[#02222a] transition hover:brightness-110"
            >
              Talk to Sales
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </header>

      <section className="relative mx-auto grid w-full max-w-7xl gap-10 px-5 pb-16 pt-14 md:grid-cols-2 md:px-8 md:pt-20">
        <div className="reveal-up flex flex-col justify-center">
          <p className="mb-4 w-max rounded-full border border-[var(--fin-line)] bg-white/5 px-4 py-1.5 text-sm text-[var(--fin-muted)]">
            Payment infrastructure built for speed
          </p>
          <h1 className="text-4xl font-black leading-tight text-white md:text-6xl">
            The new rhythm
            <span className="block text-[var(--fin-accent)]">
              for digital payments
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-[var(--fin-muted)] md:text-lg">
            We unify payment links, terminals, reporting, and reconciliation in
            one platform. Less friction for your customers, more conversion for
            your business.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/more-information"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--fin-primary)] px-6 py-3 text-sm font-bold text-white transition hover:brightness-110"
            >
              Request a Demo
              <FaArrowRight />
            </Link>
            <Link
              href="/product/1"
              className="inline-flex items-center rounded-full border border-[var(--fin-line)] px-6 py-3 text-sm font-semibold text-white/90 transition hover:border-white/40 hover:text-white"
            >
              View Solutions
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-3 text-center sm:max-w-md">
            {stats.map((item) => (
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
              Real-Time Dashboard
            </p>
            <h2 className="mt-2 text-2xl font-black text-white">
              Today&apos;s Processed Volume
            </h2>
            <p className="mt-1 text-4xl font-black text-[var(--fin-accent)]">
              $148,320
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {kpis.map((kpi) => (
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
                Transparent Fees
              </p>
              <p className="mt-1 text-2xl font-black text-white">
                From 2.9% + VAT
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 pb-20 md:px-8">
        <div className="rounded-3xl border border-[var(--fin-line)] bg-[linear-gradient(160deg,#071327,#0b2344)] p-7 md:p-10">
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--fin-muted)]">
            Implementation
          </p>
          <h2 className="mt-2 text-3xl font-black text-white md:text-4xl">
            Launch Your Operation in 3 Steps
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
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

      <section className="mx-auto w-full max-w-7xl px-5 pb-20 md:px-8">
        <div className="rounded-3xl border border-[var(--fin-line)] bg-[linear-gradient(150deg,#061833,#0f3650)] p-7 md:p-10">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--fin-accent)]">
                Hospitality Section
              </p>
              <h2 className="mt-2 text-3xl font-black text-white md:text-5xl">
                Specialists in Hotel Operations and Management
              </h2>
              <p className="mt-4 text-[var(--fin-muted)] md:text-lg">
                From reservation to checkout, we centralize payments,
                reconciliation, and operational control for city hotels,
                resorts, and multi-property chains. Your front desk, finance,
                and leadership teams work from one platform with real-time
                visibility.
              </p>
            </div>
            <Link
              href="/more-information"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-black text-[#0a2d4e] transition hover:bg-[#e9f8fa]"
            >
              Request a Hospitality Strategy
              <FaArrowRight />
            </Link>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {hotelGallery.map((item) => (
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
            {hotelMetrics.map((metric) => (
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
            {hotelOperations.map((item) => (
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

      <section className="mx-auto w-full max-w-7xl px-5 pb-24 md:px-8">
        <div className="rounded-3xl border border-[var(--fin-line)] bg-[linear-gradient(140deg,#132f57,#0f5d61)] p-8 md:p-12">
          <h2 className="text-3xl font-black text-white md:text-5xl">
            Ready to sell more and collect better?
          </h2>
          <p className="mt-4 max-w-2xl text-[var(--fin-muted-strong)]">
            We migrate your operation without slowing sales. A specialist
            supports your onboarding, setup, and first transactions.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/more-information"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-black text-[#0a2d4e] transition hover:bg-[#e9f8fa]"
            >
              Talk to a Specialist
              <FaArrowRight />
            </Link>
            <p className="inline-flex items-center rounded-full border border-white/35 px-6 py-3 text-sm font-semibold text-white">
              customer@pagapay.mx
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-[var(--fin-muted)]">
        Pagapay · Digital payments for modern commerce
      </footer>
    </main>
  );
}

const stats = [
  { value: "+42%", label: "Conversion uplift" },
  { value: "24/7", label: "Active monitoring" },
  { value: "3 min", label: "Average approval time" },
];

const kpis = [
  { title: "Approved payments", value: "1,294" },
  { title: "Average ticket", value: "$586 MXN" },
  { title: "Recovered attempts", value: "18%" },
  { title: "Today's settlements", value: "$98,410" },
];

const steps = [
  {
    title: "Business Discovery",
    text: "We map your current payment flow and define the ideal architecture for eCommerce, retail, or services.",
  },
  {
    title: "Guided Integration",
    text: "We configure your API or hosted checkout, activate fraud rules, and connect the most relevant payment methods.",
  },
  {
    title: "Continuous Scale",
    text: "We monitor performance, optimize approval rates, and propose improvements to increase revenue month after month.",
  },
];

const hotelGallery = [
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
];

const hotelMetrics = [
  { value: "-38%", label: "Less operational load at the front desk" },
  { value: "+27%", label: "Growth in ancillary revenue" },
  { value: "99.95%", label: "Platform availability" },
  { value: "24/7", label: "Hospitality-specialized support" },
];

const hotelOperations = [
  {
    area: "Daily Operations",
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
    area: "Leadership and Finance",
    title: "Reconciliation, Audit, and Operational Governance",
    description:
      "Standardize revenue processes across independent hotels or chains with approval controls and full audit logs.",
    points: [
      "Automated reconciliation with PMS and ERP systems",
      "Multi-currency cash closing with digital signature",
      "Occupancy, ADR, and RevPAR KPIs linked to payments",
    ],
  },
];
