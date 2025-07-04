'use client';
import BenefitsSection from '@/components/organisms/Benefits';
import EnterpriseSolutionsSection from '@/components/organisms/Enterprise';
import FeaturesSection from '@/components/organisms/Features';
import Footer from '@/components/organisms/Footer';
import HeroSection from '@/components/organisms/Hero';
import Navbar from '@/components/organisms/Navbar';
import ProductsComparison from '@/components/organisms/Products';
import Solutions from '@/components/organisms/Solutions';
import TestimonialsCarousel from '@/components/organisms/Testimonials';
import PaymentMethods from '@/components/Payments';
import Link from 'next/link';
import { FaSquarePhone } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Solutions />
      <BenefitsSection />
      <PaymentMethods />
      <EnterpriseSolutionsSection />
      <FeaturesSection />
      <ProductsComparison />
      <TestimonialsCarousel />
      <div className='  w-full px-4 xl:px-0 bg-contact bg-cover bg-center'>
        <div className='h-full w-full bg-[#1A2F50] py-20'>
          <dic className='w-full h-full flex flex-col text-white items-center'>
            <Label>Our experts are here to help you.</Label>

            <h2 className='mt-10 mb-10 text-xl sm:text-2xl lg:text-4xl font-light text-left md:text-center'>
              We are here to help you with any questions you may have.
            </h2>

            <Label>Contact Us</Label>

            <div className='mt-4'>
              {contactData.map((item) => (
                <Link
                  href={item.href}
                  key={item.href}
                  target='_blank'
                  rel='nopener noreferrer'
                  className='text-white text-lg sm:text-xl lg:text-2xl flex items-center gap-3'
                >
                  <span className='text-[#F29F05] text-xl sm:text-2xl lg:text-3xl'>
                    {item.Icon}
                  </span>{' '}
                  {item.title}
                </Link>
              ))}
            </div>
          </dic>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export const contactData = [
  {
    href: 'tel:+5517067609',
    title: '+55 1706 7609',
    Icon: <FaSquarePhone />,
  },
  {
    href: 'mailto:info@capapay.mx',
    title: 'contacto@pagapay.mx',
    Icon: <IoMdMail />,
  },
];
const Label = ({ children, className, ...props }) => (
  <h4
    className={`font-urbanist font-bold text-base md:text-4xl w-max mb-5 ${className}`}
    {...props}
  >
    {children}
    <div className='h-[3px] bg-[#F29F05] w-11/12 rounded-sm mt-2' />
  </h4>
);
