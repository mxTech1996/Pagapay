"use client";

import { FaShoppingCart } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

const terminalOptions = [
  {
    id: 2000,
    name: "Mom V240",
    image: "/images/product1_1.png",
    features: {
      MagneticStripe: true,
      ChipCard: true,
      Contactless: true,
      RequiresPhone: false,
      Screen: "No Screen",
      Camera: "No",
      MobileNetworks: "Supported",
      Display: "None",
      Weight: "24.9g",
      Dimensions: "60 x 39 x 14.2 mm",
      ChargingPort: "Micro USB",
      Shipping: "Free",
      Available: true,
    },
  },
  {
    id: 2001,
    name: "QPOS Mini",
    image: "/images/product2_2.png",
    features: {
      MagneticStripe: true,
      ChipCard: true,
      Contactless: true,
      RequiresPhone: true,
      Screen: "Monochrome (128x40)",
      Camera: "No",
      MobileNetworks: "Supported",
      Display: "Monochrome Display",
      Weight: "80g",
      Dimensions: "99 x 59 x 15 mm",
      ChargingPort: "Micro USB",
      Shipping: "Free",

      Available: true,
    },
  },
  {
    id: 2002,
    name: "Android Terminal",
    image: "/images/product3_3.png",
    features: {
      MagneticStripe: true,
      ChipCard: true,
      Contactless: true,
      RequiresPhone: true,
      Screen: "Monochrome (128x40)",
      Camera: "No",
      MobileNetworks: "Supported",
      Display: "Monochrome Display",
      Weight: "80g",
      Dimensions: "99 x 59 x 15 mm",
      ChargingPort: "Micro USB",
      Shipping: "Free",
      Available: true,
    },
  },
];

export default function ProductsComparison() {
  const { language } = useLanguage();
  const t = productsContent[language];

  return (
    <section className="mx-auto w-full max-w-7xl px-5 pb-16 md:px-8">
      <div className="corp-surface p-7 md:p-10">
        <h2 className="mb-8 text-center text-2xl font-black text-[var(--fin-ink)]">
          {t.title}
        </h2>
        <div className="grid md:grid-cols-2 gap-6  ">
          {terminalOptions.map((terminal, index) => (
            <div
              key={index}
              className="corp-card flex flex-col items-center p-6 text-center"
            >
              <img
                src={terminal.image}
                alt={terminal.name}
                className="h-24 mb-4"
              />
              <h3 className="mb-4 text-xl font-semibold text-[var(--fin-ink)]">
                {terminal.name}
              </h3>
              <ul className="mb-6 space-y-2 text-sm text-[var(--fin-muted)]">
                <li>
                  {t.magneticStripe}:{" "}
                  {terminal.features.MagneticStripe ? t.yes : t.no}
                </li>
                <li>
                  {t.chipCard}: {terminal.features.ChipCard ? t.yes : t.no}
                </li>
                <li>
                  {t.contactlessNfc}:{" "}
                  {terminal.features.Contactless ? t.yes : t.no}
                </li>

                <li>
                  {t.networks}: {terminal.features.MobileNetworks}
                </li>

                <li>
                  {t.commission}: {terminal.features.Fee || t.custom}
                </li>
              </ul>
              <button
                onClick={() => (window.location.href = "/more-information")}
                className="corp-btn-primary flex items-center gap-2 px-5 py-2.5 text-sm font-bold transition hover:brightness-110"
              >
                {t.moreInfo}
                <FaShoppingCart />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const productsContent = {
  en: {
    title: "Choose the Best Terminal for Your Business",
    magneticStripe: "Magnetic Stripe",
    chipCard: "Chip Card",
    contactlessNfc: "Contactless / NFC",
    networks: "Networks",
    commission: "Commission",
    custom: "Custom",
    moreInfo: "More Info",
    yes: "Yes",
    no: "No",
  },
  es: {
    title: "Elige la mejor terminal para tu negocio",
    magneticStripe: "Banda magnética",
    chipCard: "Tarjeta con chip",
    contactlessNfc: "Contactless / NFC",
    networks: "Redes",
    commission: "Comisión",
    custom: "Personalizada",
    moreInfo: "Más información",
    yes: "Sí",
    no: "No",
  },
};
