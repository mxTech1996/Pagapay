// components/PaymentMethods.tsx o dentro de tu page.tsx
'use client';
import Image from 'next/image'; // Importa el componente Image de Next.js

const PaymentMethods = () => {
  const cardsTopRow = [
    { name: 'Visa', src: '/images/visa.png' }, // Visa
    { name: 'Mastercard', src: '/images/mastercard.png' }, // Mastercard
    { name: 'American Express', src: '/images/amex.png' }, // American Express
    { name: 'Carnet', src: '/images/carnet.png' }, // Carnet
    { name: 'Sodexo', src: '/images/sodexo.png' }, // Sodexo
    { name: 'Up Si Vale', src: '/images/sivale.png' }, // Up Si Vale
    { name: 'Edenred', src: '/images/endered.png' }, // Edenred
    { name: 'RappiPay', src: '/images/rappi.png' }, // RappiPay
  ];

  const cardsBottomRow = [
    { name: 'Contacto', src: '/images/contacto.png' }, // Icono Contactless
    { name: 'Apple Pay', src: '/images/apple.png' }, // Apple Pay
  ];

  return (
    <section className='bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center'>
      <h2 className='text-3xl sm:text-4xl font-semibold text-gray-800 text-center mb-4'>
        Dile sí a todas las tarjetas
      </h2>
      <p className='text-lg text-gray-600 text-center mb-10 max-w-xl'>
        Crédito, débito, vales de despensa, Contactless y más
      </p>

      <div className='flex flex-wrap justify-center gap-4 max-w-5xl mx-auto'>
        {cardsTopRow.map((card) => (
          <div key={card.name} className='relative w-28 h-16'>
            {' '}
            {/* Aumentamos un poco el ancho para mejor espaciado */}
            <Image
              src={card.src}
              className='bg-white'
              alt={card.name}
              layout='fill' // Le dice a la imagen que llene el div padre
              objectFit='contain' // Asegura que la imagen no se estire y mantenga su proporción
              quality={80}
            />
          </div>
        ))}
      </div>

      <div className='flex flex-wrap justify-center gap-4 mt-4 max-w-3xl mx-auto'>
        {cardsBottomRow.map((card) => (
          <div key={card.name} className='relative w-28 h-16'>
            {/* Aumentamos un poco el ancho para mejor espaciado */}
            <Image
              className='bg-white'
              src={card.src}
              alt={card.name}
              layout='fill' // Le dice a la imagen que llene el div padre
              objectFit='contain' // Asegura que la imagen no se estire y mantenga su proporción
              quality={80}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PaymentMethods;
