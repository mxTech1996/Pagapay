import CartSectionComponent from "@/components/organisms/CartSection";
import Footer from "@/components/organisms/Footer";
import Navbar from "@/components/organisms/Navbar";

export default function MyCart() {
  return (
    <main className="min-h-screen bg-[var(--fin-bg)] text-[var(--fin-ink)]">
      <Navbar />
      <div className="pt-24">
        <CartSectionComponent />
      </div>
      <Footer />
    </main>
  );
}
