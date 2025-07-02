'use client';

import { dataSite } from '@/data';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

export default function StickyNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 bg-white transition-shadow ${
        scrolled ? 'shadow-md' : ''
      }`}
    >
      <div className='max-w-7xl mx-auto flex items-center justify-between px-4 py-2'>
        {/* Logo */}
        <Link href='/' className='flex items-center'>
          <div className='flex items-center space-x-1'>
            <img src='/images/logo.png' alt='Pagapay' className='h-16' />
            {/* <span className='text-sm text-gray-500'>Pagapay</span> */}
          </div>
        </Link>

        {/* Links */}
        <div className='flex items-center space-x-6'>
          <button
            onClick={() => (window.location.href = '/#know-us')}
            className='text-sm font-semibold hover:text-blue-600'
          >
            Know Us
          </button>
          <button className='text-sm font-semibold hover:text-blue-600'>
            Comisiones
          </button>
          <button
            onClick={() => (window.location.href = '/#products')}
            className='text-sm font-semibold hover:text-blue-600'
          >
            Products
          </button>
          <button
            onClick={() => (window.location.href = '/#testimonials')}
            className='text-sm font-semibold hover:text-blue-600'
          >
            Testimonials
          </button>
        </div>

        {/* Actions */}
        <div className='flex items-center space-x-4'>
          <button
            //open link "/more-informatio"
            onClick={() => (window.location.href = '/more-information')}
            className='px-4 py-2 border border-[#1A2F50] text-[#1A2F50] rounded hover:bg-blue-50 transition'
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
}
