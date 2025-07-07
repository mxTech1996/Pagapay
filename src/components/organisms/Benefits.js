'use client';

import { motion } from 'framer-motion';
import {
  FaCreditCard,
  FaLock,
  FaHandHoldingUsd,
  FaGlobe,
} from 'react-icons/fa';

const features = [
  {
    icon: <FaCreditCard size={40} />,
    title: 'Accept All Payment Methods',
    description: 'Credit, debit, food vouchers, contactless, and more.',
  },
  {
    icon: <FaLock size={40} />,
    title: 'Secure Transactions',
    description:
      'We follow industry-leading security standards to protect your payments.',
  },
  {
    icon: <FaHandHoldingUsd size={40} />,
    title: 'Offer Installment Plans',
    description:
      'Flexible payment options from 3 to 24 months with partner banks.',
  },
  {
    icon: <FaGlobe size={40} />,
    title: 'Sell Any Where You Are',
    description:
      'Use payment links to receive money remotely, from any location.',
  },
];

export default function BenefitsSection() {
  return (
    <section id='know-us' className='py-16 bg-white px-6 text-center'>
      <div className='max-w-5xl mx-auto'>
        <h2 className='text-3xl font-bold mb-2'>
          Choose to Grow Your Business
        </h2>
        <p className='text-gray-600 mb-12'>
          We help businesses across industries accelerate their growth with
          smart payment solutions.
        </p>

        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className='flex flex-col items-center border rounded-lg p-6 shadow-sm'
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
