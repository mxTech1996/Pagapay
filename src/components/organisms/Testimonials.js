'use client';

import { useState } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: 'Laura Mendez, E commerce Store Owner',
    location: 'Mexico City',
    experience: 'Over 1 year with our solution',
    rating: 5,
    comment:
      "We've been using this payment platform for over a year, and the experience has been flawless. Transactions are fast, and the dashboard is very intuitive",
    image: '/path-to-gabriela.jpg',
  },
  {
    name: 'Miguel Torres, Restaurant Owner',
    location: 'Puebla, Mexico',
    experience: '6 months using our service',
    rating: 5,
    comment:
      'Excellent customer service and easy-to-use payment terminals. They helped me scale my business operations quickly and securely.',
    image: '/path-to-michael.jpg',
  },
  {
    name: 'Jose Hernandez, Retail Business Owner',
    location: 'Monterrey, Mexico',
    experience: '2 years of partnership',
    rating: 5,
    comment:
      'Their technology and support are unmatched. We’ve improved our customer payment experience significantly since switching to their platform.',
    image: '/path-to-sophie.jpg',
  },
];

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);

  const handleNext = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const testimonial = testimonials[index];

  return (
    <section id='testimonials' className='bg-white px-6 py-16'>
      <div className='max-w-3xl mx-auto text-center'>
        <h2 className='text-2xl font-bold mb-6'>Success Stories</h2>
        <div className='border rounded-lg p-6 relative'>
          <button
            onClick={handlePrev}
            className='absolute left-4 top-1/2 transform -translate-y-1/2'
          >
            <FaChevronLeft />
          </button>
          <AnimatePresence mode='wait'>
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
            >
              <div className='flex flex-col items-center'>
                {/* <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className='w-24 h-24 rounded-full object-cover mb-4 shadow-md'
                /> */}
                <h3 className='text-lg font-semibold'>{testimonial.name}</h3>
                <p className='text-gray-600 mt-2 mb-4'>{testimonial.comment}</p>
                <div className='flex justify-center mb-2'>
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <FaStar key={i} className='text-yellow-400' />
                  ))}
                </div>
                <p className='text-sm text-gray-500'>{testimonial.location}</p>
                <p className='text-sm text-gray-500'>
                  {testimonial.experience}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={handleNext}
            className='absolute right-4 top-1/2 transform -translate-y-1/2'
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
