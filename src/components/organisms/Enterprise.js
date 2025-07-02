'use client';

import { motion } from 'framer-motion';
import { FaChartBar, FaUniversity, FaRegHandshake } from 'react-icons/fa';

const enterpriseFeatures = [
  {
    icon: <FaChartBar size={40} />,
    title: 'Advanced Reporting & Dashboards',
    description:
      'Monitor your business performance and make smarter decisions with real-time insights.',
  },
  {
    icon: <FaUniversity size={40} />,
    title: 'Multi-Account Settlements',
    description:
      'Next business day settlements to one or multiple bank accounts of your choice.',
  },
  {
    icon: <FaRegHandshake size={40} />,
    title: 'Tailored Fee Structures',
    description:
      'Custom pricing based on your business model, volume, and billing cycle.',
  },
];

export default function EnterpriseSolutionsSection() {
  return (
    <section className='bg-[#1A2F50] text-white py-16 px-6 text-center'>
      <div className='max-w-5xl mx-auto'>
        <h2 className='text-3xl font-bold mb-4'>
          Comprehensive Payment Solutions for Large Businesses
        </h2>
        <p className='text-blue-200 mb-12'>
          Empower your enterprise with scalable, reliable, and fully customized
          payment services.
        </p>

        <div className='grid gap-8 md:grid-cols-3'>
          {enterpriseFeatures.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className='bg-white rounded-lg p-6 shadow-md flex flex-col items-center'
            >
              <div className='mb-4 text-[#F29F05]'>{feature.icon}</div>
              <h3 className='font-semibold text-lg mb-2 text-black'>
                {feature.title}
              </h3>
              <p className='text-sm text-black'>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
