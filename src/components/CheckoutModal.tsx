"use client";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { X, CheckCircle2, Loader2, CreditCard, MapPin, User, Sparkles } from "lucide-react";

export default function CheckoutModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const { items, totalPrice, clearCart } = useCart();
    const [step, setStep] = useState<"info" | "payment" | "success">("info");
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({ name: "", address: "", email: "" });

    if (!isOpen) return null;

    const handleInfoSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStep("payment");
    };

    const handlePayment = async () => {
        setLoading(true);
        // Simulate local order processing
        try {
            const order = {
                id: `ORDER-${Date.now()}`,
                items,
                total: totalPrice + 3000,
                customer: formData,
                timestamp: new Date().toISOString()
            };

            // Save to localStorage
            const orders = JSON.parse(localStorage.getItem("doojjonku_orders") || "[]");
            localStorage.setItem("doojjonku_orders", JSON.stringify([...orders, order]));

            await new Promise(resolve => setTimeout(resolve, 2000));
            setStep("success");
            clearCart();
        } catch (error) {
            alert("주문 처리 중 오류가 발생했습니다.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-6">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-md animate-in fade-in duration-500" onClick={onClose} />

            <div className="relative w-full max-w-xl bg-white rounded-[3rem] shadow-2xl overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-10 duration-500">
                <button
                    onClick={onClose}
                    className="absolute top-8 right-8 p-3 hover:bg-neutral-50 rounded-full transition-all z-10 hover:rotate-90"
                >
                    <X size={20} strokeWidth={1.5} />
                </button>

                <div className="p-12">
                    {step === "info" && (
                        <div className="space-y-10">
                            <div>
                                <h2 className="text-4xl font-black tracking-tight uppercase leading-tight">
                                    Shipping <br />
                                    <span className="text-neutral-200 italic font-serif -ml-1">Details</span>
                                </h2>
                                <p className="text-neutral-400 text-sm mt-3 font-medium">배송을 위한 정보를 입력해 주세요.</p>
                            </div>

                            <form onSubmit={handleInfoSubmit} className="space-y-4">
                                <div className="space-y-4">
                                    <div className="relative group">
                                        <User className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-300 group-focus-within:text-black transition-colors" size={18} />
                                        <input
                                            required
                                            type="text"
                                            placeholder="이름"
                                            className="w-full bg-neutral-50 border border-transparent rounded-[1.5rem] py-5 pl-14 pr-6 text-sm focus:bg-white focus:border-black/10 focus:ring-4 focus:ring-black/5 transition-all outline-none font-medium"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="relative group">
                                        <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-300 group-focus-within:text-black transition-colors" size={18} />
                                        <input
                                            required
                                            type="text"
                                            placeholder="배송 주소"
                                            className="w-full bg-neutral-50 border border-transparent rounded-[1.5rem] py-5 pl-14 pr-6 text-sm focus:bg-white focus:border-black/10 focus:ring-4 focus:ring-black/5 transition-all outline-none font-medium"
                                            value={formData.address}
                                            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <button type="submit" className="w-full btn-primary py-5 mt-6">
                                    Continue to Payment
                                </button>
                            </form>
                        </div>
                    )}

                    {step === "payment" && (
                        <div className="space-y-10">
                            <div>
                                <h2 className="text-4xl font-black tracking-tight uppercase leading-tight">
                                    Final <br />
                                    <span className="text-neutral-200 italic font-serif -ml-1">Summary</span>
                                </h2>
                                <p className="text-neutral-400 text-sm mt-3 font-medium">최종 결제 금액을 확인해 주세요.</p>
                            </div>

                            <div className="bg-neutral-50 rounded-[2rem] p-8 space-y-4 border border-black/5">
                                <div className="flex justify-between text-[10px] font-black text-neutral-400 uppercase tracking-[0.2em]">
                                    <span>Subtotal</span>
                                    <span className="text-neutral-900">₩{totalPrice.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-[10px] font-black text-neutral-400 uppercase tracking-[0.2em]">
                                    <span>Global Shipping</span>
                                    <span className="text-neutral-900">₩3,000</span>
                                </div>
                                <div className="h-px bg-neutral-200/50 my-2"></div>
                                <div className="flex justify-between items-end">
                                    <span className="text-xs font-black uppercase tracking-widest">Total Amount</span>
                                    <span className="text-4xl font-black tracking-tighter">₩{(totalPrice + 3000).toLocaleString()}</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-5 p-5 glass-card rounded-[1.5rem] border-black/5">
                                <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center text-white shadow-xl shadow-black/20">
                                    <CreditCard size={24} />
                                </div>
                                <div>
                                    <p className="text-sm font-black uppercase tracking-widest">Local Fast Pay</p>
                                    <p className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest mt-0.5">Secure Transaction</p>
                                </div>
                            </div>

                            <button
                                onClick={handlePayment}
                                disabled={loading}
                                className="w-full btn-primary py-6 flex items-center justify-center gap-3 relative"
                            >
                                {loading ? (
                                    <Loader2 className="animate-spin" size={20} strokeWidth={3} />
                                ) : (
                                    <>
                                        Approve & Pay ₩{(totalPrice + 3000).toLocaleString()}
                                    </>
                                )}
                            </button>
                        </div>
                    )}

                    {step === "success" && (
                        <div className="py-20 flex flex-col items-center text-center space-y-8 animate-in fade-in zoom-in duration-700">
                            <div className="relative">
                                <div className="absolute inset-0 bg-black blur-2xl opacity-20 animate-pulse"></div>
                                <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center text-white relative z-10 animate-float">
                                    <CheckCircle2 size={48} strokeWidth={1.5} />
                                </div>
                                <div className="absolute -top-2 -right-2 w-10 h-10 bg-pistachio rounded-full flex items-center justify-center text-white z-20 shadow-lg animate-bounce">
                                    <Sparkles size={18} />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <h2 className="text-4xl font-black tracking-tight uppercase leading-tight">
                                    Order <br />
                                    <span className="text-neutral-200 italic font-serif -ml-1">Confirmed</span>
                                </h2>
                                <p className="text-neutral-400 text-sm font-medium">당신의 쫀득한 순간이 곧 시작됩니다.</p>
                            </div>

                            <div className="w-full max-w-xs space-y-4 pt-6">
                                <p className="text-[10px] text-neutral-400 max-w-xs uppercase leading-loose font-black tracking-[0.2em]">
                                    Preparing your Dubai Chewy Cookies with maximum love and texture.
                                </p>
                                <button
                                    onClick={onClose}
                                    className="w-full py-5 rounded-2xl border-2 border-black text-[10px] font-black uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all active:scale-95"
                                >
                                    Continue Exploring
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

