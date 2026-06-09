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
          title: "Diseñemos tu operación de pagos",
          description:
            "Comparte tu modelo de negocio, volumen transaccional y canales. Nuestro equipo te enviará una propuesta personalizada y hoja de ruta de implementación.",
          contactEmail: "Correo de contacto",
          responseTime: "Tiempo de respuesta: menos de 24 horas hábiles",
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
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0))]" />

      <section className="relative mx-auto w-full max-w-4xl px-5 py-12 md:px-8 md:py-20">
        <div className="flex items-center justify-between gap-3">
          <Link
            href="/"
            className="corp-btn-secondary inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold transition hover:border-[var(--fin-primary)]"
          >
            <FaArrowLeft />
            {t.backHome}
          </Link>
          <LanguageSwitcher />
        </div>

        <div className="corp-surface mt-6 p-7 md:p-10">
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--fin-accent)]">
            {t.label}
          </p>
          <h1 className="mt-2 text-3xl font-black text-[var(--fin-ink)] md:text-5xl">
            {t.title}
          </h1>
          <p className="mt-4 max-w-2xl text-[var(--fin-muted)] md:text-lg">
            {t.description}
          </p>

          <div className="mt-6 border-l-2 border-[var(--fin-primary)] bg-[var(--corp-surface-2)] p-5 text-sm text-[var(--fin-muted-strong)]">
            <p>{t.contactEmail}: customer@pagapay.mx</p>
            <p className="mt-2">{t.responseTime}</p>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}
