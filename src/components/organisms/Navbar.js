"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";

export default function StickyNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full border-b border-[var(--fin-line)] bg-white/95 backdrop-blur-md transition-shadow ${
        scrolled ? "shadow-[0_10px_24px_rgba(15,31,57,0.12)]" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="flex items-center space-x-1">
            <img src="/images/logo.png" alt="Pagapay" className="h-16" />
            {/* <span className='text-sm text-gray-500'>Pagapay</span> */}
          </div>
        </Link>

        {/* Links */}
        <div className="hidden items-center space-x-6 md:flex">
          <Link
            href="/"
            className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--fin-muted-strong)] hover:text-[var(--fin-ink)]"
          >
            Home
          </Link>
          <Link
            href="/solutions"
            className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--fin-muted-strong)] hover:text-[var(--fin-ink)]"
          >
            Solutions
          </Link>
          <Link
            href="/pricing"
            className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--fin-muted-strong)] hover:text-[var(--fin-ink)]"
          >
            Pricing
          </Link>
          <Link
            href="/more-information"
            className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--fin-muted-strong)] hover:text-[var(--fin-ink)]"
          >
            Contact
          </Link>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <LanguageSwitcher className="hidden md:inline-flex" />
          <Link
            href="/my-cart"
            className="text-[var(--fin-muted-strong)] hover:text-[var(--fin-ink)]"
            aria-label="Go to cart"
          >
            <FaShoppingCart />
          </Link>
          <button
            //open link "/more-informatio"
            onClick={() => (window.location.href = "/more-information")}
            className="corp-btn-accent px-4 py-2 text-sm font-semibold transition hover:brightness-110"
          >
            {language === "es" ? "Contacto" : "Contact Us"}
          </button>
        </div>
      </div>
    </nav>
  );
}
