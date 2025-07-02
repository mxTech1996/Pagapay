'use client';

import { motion } from 'framer-motion';
import {
  FaHeadset,
  FaCreditCard,
  FaMapMarkerAlt,
  FaWifi,
} from 'react-icons/fa';

const businessFeatures = [
  {
    icon: <FaHeadset size={40} />,
    title: '24/7 Dedicated Support',
    description:
      'Get expert assistance at every step with resources and guidance on how to maximize our solutions.',
  },
  {
    icon: <FaCreditCard size={40} />,
    title: 'Payment Terminals for Any Business',
    description:
      'Choose from multiple terminal models designed for businesses of all sizes and industries.',
  },
  {
    icon: <FaMapMarkerAlt size={40} />,
    title: 'Nationwide Coverage',
    description:
      'Over a decade of experience supporting businesses across Mexico, including hotels, travel agencies, and more.',
  },
  {
    icon: <FaWifi size={40} />,
    title: 'WiFi & Mobile Data Connectivity',
    description:
      'Stay connected anywhere with terminals that include SIM cards for uninterrupted transactions.',
  },
];

export default function FeaturesSection() {
  return (
    <section className='bg-white py-16 px-6 text-center'>
      <div className='max-w-5xl mx-auto'>
        <h2 className='text-3xl font-bold mb-4'>
          Empowering Businesses Like Yours to Grow
        </h2>
        <p className='text-gray-500 mb-12'>
          We help companies expand with reliable payment solutions and
          nationwide support.
        </p>

        <div className='grid gap-8 md:grid-cols-2'>
          {businessFeatures.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className='border rounded-lg p-6 shadow-sm flex flex-col items-center'
            >
              <div className='mb-4 text-[#1A2F50]'>{feature.icon}</div>
              <h3 className='font-semibold text-lg mb-2'>{feature.title}</h3>
              <p className='text-sm text-gray-600'>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
