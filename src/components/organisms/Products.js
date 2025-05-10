'use client';

import { FaShoppingCart } from 'react-icons/fa';

const terminalOptions = [
  {
    id: 2000,
    name: 'Mom V240',
    image: '/images/product1.png',
    features: {
      MagneticStripe: true,
      ChipCard: true,
      Contactless: true,
      RequiresPhone: false,
      Screen: 'No Screen',
      Camera: 'No',
      MobileNetworks: 'Supported',
      Display: 'None',
      Weight: '24.9g',
      Dimensions: '60 x 39 x 14.2 mm',
      ChargingPort: 'Micro USB',
      Shipping: 'Free',
      Fee: '3.5% + VAT',
      Available: true,
    },
  },
  {
    id: 2001,
    name: 'QPOS Mini',
    image: '/images/product2.png',
    features: {
      MagneticStripe: true,
      ChipCard: true,
      Contactless: true,
      RequiresPhone: true,
      Screen: 'Monochrome (128x40)',
      Camera: 'No',
      MobileNetworks: 'Supported',
      Display: 'Monochrome Display',
      Weight: '80g',
      Dimensions: '99 x 59 x 15 mm',
      ChargingPort: 'Micro USB',
      Shipping: 'Free',
      Fee: '3.5% + VAT',
      Available: true,
    },
  },
];

export default function ProductsComparison() {
  return (
    <section className='bg-white px-6 py-16'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-2xl font-bold text-center mb-8'>
          Choose the Best Terminal for Your Business
        </h2>
        <div className='grid md:grid-cols-2 gap-6  '>
          {terminalOptions.map((terminal, index) => (
            <div
              key={index}
              className='border rounded-lg shadow-sm p-6 flex flex-col items-center text-center'
            >
              <img
                src={terminal.image}
                alt={terminal.name}
                className='h-24 mb-4'
              />
              <h3 className='text-xl font-semibold mb-4'>{terminal.name}</h3>
              <ul className='text-sm text-gray-600 space-y-2 mb-6'>
                <li>
                  Magnetic Stripe:{' '}
                  {terminal.features.MagneticStripe ? 'Yes' : 'No'}
                </li>
                <li>Chip Card: {terminal.features.ChipCard ? 'Yes' : 'No'}</li>
                <li>
                  Contactless / NFC:{' '}
                  {terminal.features.Contactless ? 'Yes' : 'No'}
                </li>

                <li>Networks: {terminal.features.MobileNetworks}</li>

                <li>Commission: {terminal.features.Fee}</li>
              </ul>
              {terminal.features.Available ? (
                <button className='bg-blue-600 text-white flex items-center gap-2 px-4 py-2 rounded hover:bg-blue-700'>
                  Buy Now <FaShoppingCart />
                </button>
              ) : (
                <button
                  disabled
                  className='bg-gray-300 text-gray-600 px-4 py-2 rounded cursor-not-allowed'
                >
                  Not Available
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
