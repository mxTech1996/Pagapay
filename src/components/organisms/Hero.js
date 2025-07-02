'use client';

import { dataSite } from '@/data';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className='bg-[#1A2F50] text-white min-h-screen flex items-center justify-center px-6'>
      <div className='max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center'>
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className='relative'
        >
          <div className='rounded-full border border-gray-500 p-20 w-fit mx-auto relative'>
            <p className='text-[#F29F05] font-semibold text-lg mb-2'>We are</p>
            <h1 className='text-4xl font-bold leading-tight mb-4'>
              {dataSite.subtitle}
            </h1>
            <p className='text-lg'>
              <span className='text-[#F29F05] font-bold'>✔️ Pagapay</span>
            </p>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='flex flex-col items-start'
        >
          {/* image hero */}
          <img
            src={dataSite.image_hero}
            alt='Hero Image'
            className=' w-[400px] h-[400px] object-cover'
          />

          <p className='text-sm mb-4 max-w-md'>{dataSite.description}</p>
          <button className='mt-4 border-2 border-white text-white px-4 py-2 rounded hover:bg-blue-400 hover:text-white transition'>
            Contactar a ventas
          </button>
        </motion.div>
      </div>
    </section>
  );
}
