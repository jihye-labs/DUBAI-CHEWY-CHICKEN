"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductList from "@/components/ProductList";
import CartDrawer from "@/components/CartDrawer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <CartDrawer />
      <Hero />
      <ProductList />

      {/* Footer */}
      <footer className="py-12 border-t border-neutral-100 mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center text-neutral-400 text-sm">
          <p>© 2026 Doo-jjon-ku. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
