"use client";

import { useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Laura Mendez, E commerce Store Owner",
    location: "Mexico City",
    experience: "3 months using our service",
    rating: 5,
    comment:
      "We've been using this payment platform for over a year, and the experience has been flawless. Transactions are fast, and the dashboard is very intuitive",
    image: "/path-to-gabriela.jpg",
  },
  {
    name: "Miguel Torres, Restaurant Owner",
    location: "Puebla, Mexico",
    experience: "6 months using our service",
    rating: 5,
    comment:
      "Excellent customer service and easy-to-use payment terminals. They helped me scale my business operations quickly and securely.",
    image: "/path-to-michael.jpg",
  },
  {
    name: "Jose Hernandez, Retail Business Owner",
    location: "Monterrey, Mexico",
    experience: "4 months using our service",
    rating: 5,
    comment:
      "Their technology and support are unmatched. We’ve improved our customer payment experience significantly since switching to their platform.",
    image: "/path-to-sophie.jpg",
  },
];

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);

  const handleNext = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const testimonial = testimonials[index];

  return (
    <section
      id="testimonials"
      className="mx-auto w-full max-w-7xl px-5 pb-16 md:px-8"
    >
      <div className="mx-auto max-w-3xl rounded-3xl border border-[var(--fin-line)] bg-[linear-gradient(150deg,#0b1d37,#0f3557)] p-7 text-center md:p-10">
        <h2 className="mb-6 text-3xl font-black text-white">Success Stories</h2>
        <div className="relative rounded-2xl border border-white/10 bg-black/20 p-6">
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2"
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
                <h3 className="text-lg font-semibold text-white">
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
            className="absolute right-4 top-1/2 transform -translate-y-1/2"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
