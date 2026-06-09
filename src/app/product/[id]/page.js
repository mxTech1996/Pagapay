"use client";
import { ProductDetail } from "ecommerce-mxtech";
import { useRouter } from "next/navigation";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";

export default function Product({ params }) {
  const router = useRouter();
  return (
    <main className="min-h-screen bg-[var(--fin-bg)] text-[var(--fin-ink)]">
      <Navbar />
      <div className="container w-full mx-auto mt-24 mb-16 px-4">
        <div className="corp-surface p-5 md:p-8">
          <ProductDetail
            classNameBack="text-[var(--fin-muted-strong)]"
            onClickBack={() => router.push("/#products")}
            variant="horizontal"
            classNameButtonDefault="corp-btn-accent"
            id={params.id}
          />
        </div>
      </div>
      <Footer />
    </main>
  );
}
