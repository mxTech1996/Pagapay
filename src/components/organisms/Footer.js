"use client";
import { footerData } from "@/data";
import { Footer as FooterComponent } from "ecommerce-mxtech";

const Footer = () => {
  return (
    <div className="border-t border-[var(--fin-line)] bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-10">
        <FooterComponent
          backgroundColor="transparent"
          legal={footerData}
          onRedirect={(path) => {
            window.open(path, "_blank");
          }}
          visaImage={null}
        />
      </div>
    </div>
  );
};

export default Footer;
