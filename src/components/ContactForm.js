"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

const initialState = {
  name: "",
  email: "",
  company: "",
  phone: "",
  message: "",
};

export default function ContactForm() {
  const router = useRouter();
  const { language } = useLanguage();
  const t = formContent[language];
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus("error");
        setFeedback(data?.error || t.submitError);
        return;
      }

      setStatus("success");
      setFeedback(t.submitSuccess);
      setShowSuccessDialog(true);
      setForm(initialState);
    } catch {
      setStatus("error");
      setFeedback(t.connectionError);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mt-8 grid gap-4 md:grid-cols-2">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder={t.fullName}
          required
          className="rounded-md border border-[var(--fin-line)] bg-white px-4 py-3 text-sm text-[var(--fin-ink)] placeholder:text-[var(--fin-muted)] focus:border-[var(--fin-primary)] focus:outline-none"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder={t.contactEmail}
          required
          className="rounded-md border border-[var(--fin-line)] bg-white px-4 py-3 text-sm text-[var(--fin-ink)] placeholder:text-[var(--fin-muted)] focus:border-[var(--fin-primary)] focus:outline-none"
        />
        <input
          type="text"
          name="company"
          value={form.company}
          onChange={handleChange}
          placeholder={t.company}
          className="rounded-md border border-[var(--fin-line)] bg-white px-4 py-3 text-sm text-[var(--fin-ink)] placeholder:text-[var(--fin-muted)] focus:border-[var(--fin-primary)] focus:outline-none"
        />
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder={t.contactPhone}
          required
          className="rounded-md border border-[var(--fin-line)] bg-white px-4 py-3 text-sm text-[var(--fin-ink)] placeholder:text-[var(--fin-muted)] focus:border-[var(--fin-primary)] focus:outline-none"
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder={t.messagePlaceholder}
          rows={5}
          required
          className="md:col-span-2 rounded-md border border-[var(--fin-line)] bg-white px-4 py-3 text-sm text-[var(--fin-ink)] placeholder:text-[var(--fin-muted)] focus:border-[var(--fin-primary)] focus:outline-none"
        />

        <div className="md:col-span-2 flex flex-wrap items-center gap-4">
          <button
            type="submit"
            disabled={status === "loading"}
            className="corp-btn-accent inline-flex items-center px-6 py-3 text-sm font-black transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "loading" ? t.sending : t.sendMessage}
          </button>

          <p className="text-sm text-[var(--fin-muted)]">
            {t.contactEmailLabel}: customer@pagapay.mx
          </p>

          <p className="text-sm text-[var(--fin-muted-strong)]">{feedback}</p>
        </div>
      </form>

      {showSuccessDialog ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 px-5 backdrop-blur-sm">
          <div className="corp-surface w-full max-w-md p-6 text-center shadow-[0_20px_60px_rgba(15,31,57,0.18)]">
            <h3 className="text-2xl font-black text-[var(--fin-ink)]">
              {t.modalTitle}
            </h3>
            <p className="mt-3 text-sm text-[var(--fin-muted-strong)]">
              {t.modalText}
            </p>
            <button
              type="button"
              onClick={() => {
                setShowSuccessDialog(false);
                router.push("/");
              }}
              className="corp-btn-accent mt-6 inline-flex items-center px-6 py-2.5 text-sm font-black transition hover:brightness-110"
            >
              {t.modalButton}
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

const formContent = {
  en: {
    fullName: "Full name",
    contactEmail: "Contact email",
    company: "Company",
    contactPhone: "Contact phone",
    messagePlaceholder: "Tell us about your business needs",
    sending: "Sending...",
    sendMessage: "Send message",
    contactEmailLabel: "Contact email",
    submitError: "Could not send your message.",
    submitSuccess: "Message sent successfully.",
    connectionError: "Connection error. Please try again in a moment.",
    modalTitle: "Message sent",
    modalText: "We will contact you shortly.",
    modalButton: "Got it",
  },
  es: {
    fullName: "Nombre completo",
    contactEmail: "Correo de contacto",
    company: "Empresa",
    contactPhone: "Teléfono de contacto",
    messagePlaceholder: "Cuéntanos sobre las necesidades de tu negocio",
    sending: "Enviando...",
    sendMessage: "Enviar mensaje",
    contactEmailLabel: "Correo de contacto",
    submitError: "No se pudo enviar tu mensaje.",
    submitSuccess: "Mensaje enviado correctamente.",
    connectionError: "Error de conexión. Inténtalo de nuevo en un momento.",
    modalTitle: "Mensaje enviado",
    modalText: "Nos pondremos en contacto contigo en breve.",
    modalButton: "Entendido",
  },
};
