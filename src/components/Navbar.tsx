"use client";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
    const { totalItems, setIsCartOpen } = useCart();

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-neutral-100">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tighter hover:opacity-70 transition-opacity">
                    DOO-JJON-KU
                </Link>

                <div className="flex items-center gap-8">
                    <Link href="/shop" className="text-sm font-medium hover:text-neutral-500">SHOP</Link>
                    <Link href="/about" className="text-sm font-medium hover:text-neutral-500">STORY</Link>
                    <button
                        onClick={() => setIsCartOpen(true)}
                        className="relative p-2 hover:bg-neutral-50 rounded-full transition-colors"
                    >
                        <ShoppingBag size={22} strokeWidth={1.5} />
                        {totalItems > 0 && (
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-black rounded-full shadow-[0_0_0_2px_rgba(255,255,255,1)]"></span>
                        )}
                    </button>
                </div>
            </div>
        </nav>
    );
}
