"use client";

import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import ContactForm from "@/components/ContactForm";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";

export default function MoreInformation() {
  const { language } = useLanguage();
  const t =
    language === "es"
      ? {
          backHome: "Volver al inicio",
          label: "Contacto comercial",
          title: "Disenemos tu operacion de pagos",
          description:
            "Comparte tu modelo de negocio, volumen transaccional y canales. Nuestro equipo te enviara una propuesta personalizada y hoja de ruta de implementacion.",
          contactEmail: "Correo de contacto",
          responseTime: "Tiempo de respuesta: menos de 24 horas habiles",
        }
      : {
          backHome: "Back to Home",
          label: "Sales Contact",
          title: "Let's design your payment operation",
          description:
            "Share your business model, transaction volume, and channels. Our team will send a tailored proposal and implementation roadmap.",
          contactEmail: "Contact email",
          responseTime: "Response time: under 24 business hours",
        };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--fin-bg)] text-[var(--fin-ink)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="hero-orb hero-orb--one" />
        <div className="hero-orb hero-orb--two" />
      </div>

      <section className="relative mx-auto w-full max-w-4xl px-5 py-12 md:px-8 md:py-20">
        <div className="flex items-center justify-between gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white/90 transition hover:border-white hover:text-white"
          >
            <FaArrowLeft />
            {t.backHome}
          </Link>
          <LanguageSwitcher />
        </div>

        <div className="mt-6 rounded-3xl border border-[var(--fin-line)] bg-[linear-gradient(150deg,#0b1f3a,#0f3658)] p-7 md:p-10">
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--fin-accent)]">
            {t.label}
          </p>
          <h1 className="mt-2 text-3xl font-black text-white md:text-5xl">
            {t.title}
          </h1>
          <p className="mt-4 max-w-2xl text-[var(--fin-muted)] md:text-lg">
            {t.description}
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5 text-sm text-[var(--fin-muted-strong)]">
            <p>{t.contactEmail}: customer@pagapay.mx</p>
            <p className="mt-2">{t.responseTime}</p>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}
