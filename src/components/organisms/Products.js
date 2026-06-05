"use client";

import { FaShoppingCart } from "react-icons/fa";

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
  return (
    <section className="mx-auto w-full max-w-7xl px-5 pb-16 md:px-8">
      <div className="rounded-3xl border border-[var(--fin-line)] bg-[linear-gradient(160deg,#0a1d36,#0d2a48)] p-7 md:p-10">
        <h2 className="mb-8 text-center text-2xl font-black text-white">
          Choose the Best Terminal for Your Business
        </h2>
        <div className="grid md:grid-cols-2 gap-6  ">
          {terminalOptions.map((terminal, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-2xl border border-white/10 bg-black/20 p-6 text-center shadow-sm"
            >
              <img
                src={terminal.image}
                alt={terminal.name}
                className="h-24 mb-4"
              />
              <h3 className="mb-4 text-xl font-semibold text-white">
                {terminal.name}
              </h3>
              <ul className="mb-6 space-y-2 text-sm text-[var(--fin-muted)]">
                <li>
                  Magnetic Stripe:{" "}
                  {terminal.features.MagneticStripe ? "Yes" : "No"}
                </li>
                <li>Chip Card: {terminal.features.ChipCard ? "Yes" : "No"}</li>
                <li>
                  Contactless / NFC:{" "}
                  {terminal.features.Contactless ? "Yes" : "No"}
                </li>

                <li>Networks: {terminal.features.MobileNetworks}</li>

                <li>Commission: {terminal.features.Fee}</li>
              </ul>
              {terminal.features.Available ? (
                <button
                  onClick={() => (window.location.href = "/more-information")}
                  className="flex items-center gap-2 rounded-full bg-[var(--fin-primary)] px-5 py-2.5 text-sm font-bold text-white transition hover:brightness-110"
                >
                  Buy Now <FaShoppingCart />
                </button>
              ) : (
                <button
                  disabled
                  className="cursor-not-allowed rounded-full bg-gray-400 px-4 py-2 text-gray-700"
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
