'use client';

import { dataSite } from '@/data';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'In-Store Payments',
    description: 'Contactless payment terminals for face-to-face transactions',
    image: dataSite.services[0].image,
  },
  {
    title: 'Remote Payments',
    description: 'Payment links and digital tools to get paid from anywhere',
    image: dataSite.services[1].image,
  },
  {
    title: 'Management & Reporting',
    description:
      'Track sales, manage transactions, and access detailed reports',
    image: dataSite.services[2].image,
  },
];

export default function Solutions() {
  return (
    <section className='py-16 bg-white px-6 text-center'>
      <div className='max-w-5xl mx-auto'>
        <h2 className='text-3xl font-bold mb-2'>
          Boost Your Business with Smart Payment Solutions
        </h2>
        <p className='text-gray-600 mb-12'>
          Explore our secure, flexible, and scalable payment tools built for
          modern businesses
        </p>

        <div className='grid gap-8 md:grid-cols-3'>
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className='border rounded-lg p-4 shadow-sm'
            >
              <img
                src={service.image}
                alt={service.title}
                className='h-48 mx-auto object-contain mb-4'
              />
              <h3 className='font-semibold text-lg mb-2'>{service.title}</h3>
              <p className='text-sm text-gray-600'>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
