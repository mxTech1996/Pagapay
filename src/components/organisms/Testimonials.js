"use client";

import { useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function TestimonialsCarousel() {
  const { language } = useLanguage();
  const t = testimonialsContent[language];
  const testimonials = t.testimonials;
  const [index, setIndex] = useState(0);

  const handleNext = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const testimonial = testimonials[index];

  return (
    <section className="mx-auto w-full max-w-7xl px-5 pb-16 md:px-8">
      <div className="mx-auto max-w-3xl border-y border-[var(--fin-line)] py-7 text-center md:py-10">
        <h2 className="mb-6 text-3xl font-black text-[var(--fin-ink)]">
          {t.title}
        </h2>
        <div className="relative border-y border-[var(--fin-line)] px-6 py-8">
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--fin-muted-strong)] hover:text-[var(--fin-ink)]"
          >
            <FaChevronLeft />
          </button>
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col items-center">
                {/* <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className='w-24 h-24 rounded-full object-cover mb-4 shadow-md'
                /> */}
                <h3 className="text-lg font-semibold text-[var(--fin-ink)]">
                  {testimonial.name}
                </h3>
                <p className="mb-4 mt-2 text-[var(--fin-muted)]">
                  {testimonial.comment}
                </p>
                <div className="flex justify-center mb-2">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-[var(--fin-muted)]">
                  {testimonial.location}
                </p>
                <p className="text-sm text-[var(--fin-muted)]">
                  {testimonial.experience}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--fin-muted-strong)] hover:text-[var(--fin-ink)]"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}

const testimonialsContent = {
  en: {
    title: "Success Stories",
    testimonials: [
      {
        name: "Laura Mendez, E-commerce Store Owner",
        location: "Mexico City",
        experience: "3 months using our service",
        rating: 5,
        comment:
          "We've been using this payment platform for over a year, and the experience has been flawless. Transactions are fast, and the dashboard is very intuitive",
      },
      {
        name: "Miguel Torres, Restaurant Owner",
        location: "Puebla, Mexico",
        experience: "6 months using our service",
        rating: 5,
        comment:
          "Excellent customer service and easy-to-use payment terminals. They helped me scale my business operations quickly and securely.",
      },
      {
        name: "Jose Hernandez, Retail Business Owner",
        location: "Monterrey, Mexico",
        experience: "4 months using our service",
        rating: 5,
        comment:
          "Their technology and support are unmatched. We've improved our customer payment experience significantly since switching to their platform.",
      },
    ],
  },
  es: {
    title: "Historias de éxito",
    testimonials: [
      {
        name: "Laura Mendez, Dueña de tienda e-commerce",
        location: "Ciudad de México",
        experience: "3 meses usando nuestro servicio",
        rating: 5,
        comment:
          "Llevamos más de un año usando esta plataforma de pagos y la experiencia ha sido excelente. Las transacciones son rápidas y el dashboard es muy intuitivo.",
      },
      {
        name: "Miguel Torres, Dueño de restaurante",
        location: "Puebla, México",
        experience: "6 meses usando nuestro servicio",
        rating: 5,
        comment:
          "Excelente servicio al cliente y terminales fáciles de usar. Nos ayudaron a escalar la operación de forma rápida y segura.",
      },
      {
        name: "Jose Hernandez, Dueño de negocio retail",
        location: "Monterrey, México",
        experience: "4 meses usando nuestro servicio",
        rating: 5,
        comment:
          "Su tecnología y soporte no tienen comparación. Mejoramos significativamente la experiencia de pago de nuestros clientes desde que cambiamos de plataforma.",
      },
    ],
  },
};
