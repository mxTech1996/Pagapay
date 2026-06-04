// components/PaymentMethods.tsx o dentro de tu page.tsx
"use client";
import Image from "next/image"; // Importa el componente Image de Next.js

const PaymentMethods = () => {
  const cardsTopRow = [
    { name: "Up Si Vale", src: "/images/sivale.png" }, // Up Si Vale
    { name: "American Express", src: "/images/amex.png" }, // American Express
    { name: "Carnet", src: "/images/carnet.png" }, // Carnet
    { name: "Visa", src: "/images/visa.png" }, // Visa
    { name: "Mastercard", src: "/images/mastercard.png" }, // Mastercard
    { name: "Sodexo", src: "/images/sodexo.png" }, // Sodexo
    { name: "RappiPay", src: "/images/rappi.png" }, // RappiPay
    { name: "Edenred", src: "/images/endered.png" }, // Edenred
  ];

  const cardsBottomRow = [
    { name: "Contacto", src: "/images/contacto.png" }, // Icono Contactless
    { name: "Apple Pay", src: "/images/apple.png" }, // Apple Pay
  ];

  return (
    <section className="mx-auto w-full max-w-7xl px-5 pb-16 md:px-8">
      <div className="flex flex-col items-center justify-center rounded-3xl border border-[var(--fin-line)] bg-[linear-gradient(160deg,#0d2748,#0a1d37)] px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-center text-3xl font-black text-white sm:text-4xl">
          Say Yes to Every Card
        </h2>
        <p className="mb-10 max-w-xl text-center text-lg text-[var(--fin-muted)]">
          Credit, debit, meal vouchers, contactless, and more
        </p>

        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {cardsTopRow.map((card) => (
            <div key={card.name} className="relative h-8 w-16">
              <Image
                src={card.src}
                alt={card.name}
                fill
                className="object-contain"
                quality={80}
              />
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-4 max-w-3xl mx-auto">
          {cardsBottomRow.map((card) => (
            <div key={card.name} className="relative h-8 w-16">
              <Image
                src={card.src}
                alt={card.name}
                fill
                className="object-contain"
                quality={80}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;
