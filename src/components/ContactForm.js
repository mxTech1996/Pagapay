"use client";

import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  company: "",
  phone: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

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
        setFeedback(data?.error || "Could not send your message.");
        return;
      }

      setStatus("success");
      setFeedback(
        "Message sent successfully. Our team will contact you shortly.",
      );
      setForm(initialState);
    } catch {
      setStatus("error");
      setFeedback("Connection error. Please try again in a moment.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 grid gap-4 md:grid-cols-2">
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Full name"
        required
        className="rounded-xl border border-white/20 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-[var(--fin-muted)] focus:border-white/40 focus:outline-none"
      />
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Contact email"
        required
        className="rounded-xl border border-white/20 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-[var(--fin-muted)] focus:border-white/40 focus:outline-none"
      />
      <input
        type="text"
        name="company"
        value={form.company}
        onChange={handleChange}
        placeholder="Company"
        className="rounded-xl border border-white/20 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-[var(--fin-muted)] focus:border-white/40 focus:outline-none"
      />
      <input
        type="tel"
        name="phone"
        value={form.phone}
        onChange={handleChange}
        placeholder="Contact phone"
        required
        className="rounded-xl border border-white/20 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-[var(--fin-muted)] focus:border-white/40 focus:outline-none"
      />
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Tell us about your business needs"
        rows={5}
        required
        className="md:col-span-2 rounded-xl border border-white/20 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-[var(--fin-muted)] focus:border-white/40 focus:outline-none"
      />

      <div className="md:col-span-2 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-black text-[#0a2d4e] transition hover:bg-[#e9f8fa] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>

        <p className="text-sm text-[var(--fin-muted)]">
          Contact email: customer@pagapay.mx
        </p>

        <p className="text-sm text-[var(--fin-muted-strong)]">{feedback}</p>
      </div>
    </form>
  );
}
