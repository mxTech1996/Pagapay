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

export default function Home() {
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
              <p className="text-sm text-white/70">Payment ecosystem</p>
              <p className="text-xl font-black tracking-wide text-white">
                PAGAPAY
              </p>
            </div>
          </Link>

          <div className="flex items-center gap-3">
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

      <section
        id="inicio"
        className="relative mx-auto grid w-full max-w-7xl gap-10 px-5 pb-16 pt-14 md:grid-cols-2 md:px-8 md:pt-20"
      >
        <div className="reveal-up flex flex-col justify-center">
          <p className="mb-4 w-max rounded-full border border-[var(--fin-line)] bg-white/5 px-4 py-1.5 text-sm text-[var(--fin-muted)]">
            Payment infrastructure built for speed
          </p>
          <h1 className="text-4xl font-black leading-tight text-white md:text-6xl">
            The new rhythm
            <span className="block text-[var(--fin-accent)]">
              for your digital payments
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
              Request a demo
              <FaArrowRight />
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center rounded-full border border-[var(--fin-line)] px-6 py-3 text-sm font-semibold text-white/90 transition hover:border-white/40 hover:text-white"
            >
              View solutions
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
              Real-time dashboard
            </p>
            <h2 className="mt-2 text-2xl font-black text-white">
              Today&apos;s processed volume
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
                Transparent fees
              </p>
              <p className="mt-1 text-2xl font-black text-white">
                From 2.9% + VAT
              </p>
              <Link
                href="/pricing"
                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[var(--fin-accent)] transition hover:text-white"
              >
                View plans and pricing
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
            We accept
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
              Solutions
            </p>
            <h2 className="mt-2 text-3xl font-black text-white md:text-4xl">
              A payment stack designed to scale
            </h2>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {solutions.map((solution) => (
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
                Explore
                <FaArrowRight />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section
        id="implementacion"
        className="mx-auto w-full max-w-7xl px-5 pb-20 md:px-8"
      >
        <div className="rounded-3xl border border-[var(--fin-line)] bg-[linear-gradient(160deg,#071327,#0b2344)] p-7 md:p-10">
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--fin-muted)]">
            Implementation
          </p>
          <h2 className="mt-2 text-3xl font-black text-white md:text-4xl">
            Launch your operation in 3 steps
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

      <section
        id="contacto"
        className="mx-auto w-full max-w-7xl px-5 pb-24 md:px-8"
      >
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
              Talk to a specialist
              <FaArrowRight />
            </Link>
            <Link
              href="mailto:contacto@pagapay.mx"
              className="inline-flex rounded-full border border-white/35 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
            >
              contacto@pagapay.mx
            </Link>
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

const brands = [
  { src: "/images/visa.png", alt: "Visa" },
  { src: "/images/mastercard.png", alt: "Mastercard" },
  { src: "/images/amex.png", alt: "American Express" },
  { src: "/images/apple.png", alt: "Apple Pay" },
  { src: "/images/sodexo.png", alt: "Sodexo" },
  { src: "/images/sivale.png", alt: "Si Vale" },
];

const solutions = [
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
];

const steps = [
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
];
