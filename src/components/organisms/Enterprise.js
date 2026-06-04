"use client";

import { motion } from "framer-motion";
import { FaChartBar, FaUniversity, FaRegHandshake } from "react-icons/fa";

const enterpriseFeatures = [
  {
    icon: <FaChartBar size={40} />,
    title: "Advanced Reporting & Dashboards",
    description:
      "Monitor your business performance and make smarter decisions with real-time insights.",
  },
  {
    icon: <FaUniversity size={40} />,
    title: "Multi-Account Settlements",
    description:
      "Next business day settlements to one or multiple bank accounts of your choice.",
  },
  {
    icon: <FaRegHandshake size={40} />,
    title: "Tailored Fee Structures",
    description:
      "Custom pricing based on your business model, volume, and billing cycle.",
  },
];

export default function EnterpriseSolutionsSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 pb-16 md:px-8">
      <div className="rounded-3xl border border-[var(--fin-line)] bg-[linear-gradient(155deg,#0c2542,#0f3c52)] p-7 text-center text-white md:p-10">
        <h2 className="mb-4 text-3xl font-black">
          Comprehensive Payment Solutions for Large Businesses
        </h2>
        <p className="mb-12 text-[var(--fin-muted)]">
          Empower your enterprise with scalable, reliable, and fully customized
          payment services.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {enterpriseFeatures.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center rounded-2xl border border-white/10 bg-black/20 p-6 shadow-md"
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
