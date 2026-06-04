"use client";

import { motion } from "framer-motion";
import {
  FaHeadset,
  FaCreditCard,
  FaMapMarkerAlt,
  FaWifi,
} from "react-icons/fa";

const businessFeatures = [
  {
    icon: <FaHeadset size={40} />,
    title: "24/7 Dedicated Support",
    description:
      "Get expert assistance at every step with resources and guidance on how to maximize our solutions.",
  },
  {
    icon: <FaCreditCard size={40} />,
    title: "Payment Terminals for Any Business",
    description:
      "Choose from multiple terminal models designed for businesses of all sizes and industries.",
  },
  {
    icon: <FaMapMarkerAlt size={40} />,
    title: "Nationwide Coverage",
    description:
      "Over a decade of experience supporting businesses across Mexico, including hotels, travel agencies, and more.",
  },
  {
    icon: <FaWifi size={40} />,
    title: "WiFi & Mobile Data Connectivity",
    description:
      "Stay connected anywhere with terminals that include SIM cards for uninterrupted transactions.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 pb-16 md:px-8">
      <div className="rounded-3xl border border-[var(--fin-line)] bg-[linear-gradient(150deg,#0b1f3a,#0d2f57)] p-7 text-center md:p-10">
        <h2 className="mb-4 text-3xl font-black text-white">
          Empowering Businesses Like Yours to Grow
        </h2>
        <p className="mb-12 text-[var(--fin-muted)]">
          We help companies expand with reliable payment solutions and
          nationwide support.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {businessFeatures.map((feature, index) => (
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
