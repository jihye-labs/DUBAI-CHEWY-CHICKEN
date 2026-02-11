"use client";
import { useCart } from "@/context/CartContext";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import CheckoutModal from "./CheckoutModal";

export default function CartDrawer() {
    const { items, removeItem, addItem, isCartOpen, setIsCartOpen, totalPrice } = useCart();
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

    if (!isCartOpen) return null;

    return (
        <>
            <div className="fixed inset-0 z-[100] overflow-hidden">
                <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsCartOpen(false)} />

                <div className="absolute inset-y-0 right-0 max-w-full flex">
                    <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
                        <div className="px-6 py-8 flex items-center justify-between border-b border-neutral-100">
                            <div className="flex items-center gap-3">
                                <ShoppingBag size={20} strokeWidth={1.5} />
                                <h2 className="text-xl font-bold tracking-tight uppercase">Your Selection</h2>
                            </div>
                            <button
                                onClick={() => setIsCartOpen(false)}
                                className="p-2 hover:bg-neutral-50 rounded-full transition-colors"
                            >
                                <X size={24} strokeWidth={1.5} />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto px-6 py-6">
                            {items.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                                    <p className="text-neutral-400 font-medium tracking-tight">당신의 장바구니가 비어있습니다.</p>
                                    <button
                                        onClick={() => setIsCartOpen(false)}
                                        className="text-sm font-bold border-b border-black pb-0.5"
                                    >
                                        쿠키 보러가기
                                    </button>
                                </div>
                            ) : (
                                <div className="space-y-8">
                                    {items.map((item) => (
                                        <div key={item.id} className="flex gap-6">
                                            <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-neutral-50 flex-shrink-0">
                                                <Image src={item.image} alt={item.name} fill className="object-cover" />
                                            </div>
                                            <div className="flex-1 flex flex-col">
                                                <div className="flex justify-between">
                                                    <h3 className="text-sm font-bold uppercase tracking-tight leading-tight">{item.name}</h3>
                                                    <p className="text-sm font-bold ml-4">₩{(item.price * item.quantity).toLocaleString()}</p>
                                                </div>
                                                <div className="flex items-center justify-between mt-auto">
                                                    <div className="flex items-center border border-neutral-100 rounded-full px-2 py-1">
                                                        <button onClick={() => removeItem(item.id)} className="p-1 hover:text-neutral-400"><Minus size={14} /></button>
                                                        <span className="text-xs font-bold w-6 text-center">{item.quantity}</span>
                                                        <button onClick={() => addItem(item)} className="p-1 hover:text-neutral-400"><Plus size={14} /></button>
                                                    </div>
                                                    <button onClick={() => removeItem(item.id)} className="text-[10px] font-bold text-neutral-400 hover:text-black uppercase tracking-tighter">Remove</button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {items.length > 0 && (
                            <div className="px-6 py-8 border-t border-neutral-100 bg-neutral-50/50 space-y-4">
                                <div className="flex justify-between items-end">
                                    <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Subtotal</span>
                                    <span className="text-2xl font-black">₩{totalPrice.toLocaleString()}</span>
                                </div>
                                <p className="text-[10px] text-neutral-400 font-medium">배송비는 결제 단계에서 계산됩니다.</p>
                                <button
                                    onClick={() => setIsCheckoutOpen(true)}
                                    className="w-full btn-primary mt-4 py-4 text-xs font-black uppercase tracking-[0.2em]"
                                >
                                    Proceed to Checkout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <CheckoutModal isOpen={isCheckoutOpen} onClose={() => setIsCheckoutOpen(false)} />
        </>
    );
}
