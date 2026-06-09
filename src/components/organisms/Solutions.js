"use client";

import { dataSite } from "@/data";
import { motion } from "framer-motion";

const services = [
  {
    title: "Contactless Payments",
    description:
      "Accept payments in-store with our secure contactless terminals",
    image: "/images/contactless.png",
  },
  {
    title: "Online Payments",
    description:
      "Easily integrate our payment gateway into your website or app",
    image: "/images/online.png",
  },
  {
    title: "eCommerce and Dashboard",
    description:
      "Manage your transactions, refunds, and reports with our intuitive dashboard",
    image: "/images/dashboard.png",
  },
];

export default function Solutions() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 pb-16 md:px-8">
      <div className="rounded-3xl border border-[var(--fin-line)] bg-[linear-gradient(160deg,#0d2546,#081b34)] p-7 text-center md:p-10">
        <h2 className="mb-2 text-3xl font-black text-white">
          Boost Your Business with Smart Payment Solutions
        </h2>
        <p className="mb-12 text-[var(--fin-muted)]">
          Explore our secure, flexible, and scalable payment tools built for
          modern businesses.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl border border-white/10 bg-black/20 p-5 shadow-sm"
            >
              <img
                src={service.image}
                alt={service.title}
                className="mx-auto mb-4 h-48 object-contain"
              />
              <h3 className="mb-2 text-lg font-semibold text-white">
                {service.title}
              </h3>
              <p className="text-sm text-[var(--fin-muted)]">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
