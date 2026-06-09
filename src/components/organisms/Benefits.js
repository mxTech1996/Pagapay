"use client";

import { motion } from "framer-motion";
import {
  FaCreditCard,
  FaLock,
  FaHandHoldingUsd,
  FaGlobe,
} from "react-icons/fa";

const features = [
  {
    icon: <FaCreditCard size={40} />,
    title: "Accept All Payment Methods",
    description: "Credit, debit, food vouchers, contactless, and more.",
  },
  {
    icon: <FaLock size={40} />,
    title: "Secure Transactions",
    description:
      "We follow industry-leading security standards to protect your payments.",
  },
  {
    icon: <FaHandHoldingUsd size={40} />,
    title: "Offer Installment Plans",
    description:
      "Flexible payment options from 3 to 24 months with partner banks.",
  },
  {
    icon: <FaGlobe size={40} />,
    title: "Sell from Anywhere",
    description:
      "Use payment links to receive money remotely, from any location.",
  },
];

export default function BenefitsSection() {
  return (
    <section
      id="know-us"
      className="mx-auto w-full max-w-7xl px-5 pb-16 md:px-8"
    >
      <div className="rounded-3xl border border-[var(--fin-line)] bg-[linear-gradient(160deg,#0a1f3a,#0d2f55)] p-7 text-center md:p-10">
        <h2 className="mb-2 text-3xl font-black text-white">
          Choose to Grow Your Business
        </h2>
        <p className="mb-12 text-[var(--fin-muted)]">
          We help businesses across industries accelerate their growth with
          smart payment solutions.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center rounded-2xl border border-white/10 bg-black/20 p-6 shadow-sm"
            >
              <div className="mb-4 text-[var(--fin-accent)]">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">
                {feature.title}
              </h3>
              <p className="text-sm text-[var(--fin-muted)]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
