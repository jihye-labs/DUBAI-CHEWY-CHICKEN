"use client";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function Hero() {
    const { addItem } = useCart();

    return (
        <section className="relative pt-32 pb-20 overflow-hidden premium-gradient min-h-[90vh] flex items-center">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-pistachio/10 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-black/5 blur-[120px] rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
                <div className="space-y-10">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                        <span className="w-1.5 h-1.5 rounded-full bg-pistachio animate-pulse"></span>
                        Exclusive Drop
                    </div>

                    <div className="space-y-2 overflow-hidden">
                        <h1 className="text-6xl lg:text-9xl font-black tracking-tighter leading-[0.85] animate-text-reveal">
                            DUBAI <br />
                            <span className="text-neutral-200 italic font-serif -ml-1">CHEWY</span><br />
                            CHICKEN
                        </h1>
                    </div>

                    <p className="text-xl text-neutral-500 max-w-md font-medium leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                        쫀득한 식감의 혁명. <br />
                        <span className="text-black font-bold">두바이 초콜릿</span>과 <span className="text-black font-bold">바삭한 치킨</span>의 <br />
                        대담한 만남을 지금 바로 경험하세요.
                    </p>

                    <div className="flex items-center gap-6 animate-in fade-in slide-in-from-bottom-12 duration-1200 delay-500">
                        <button
                            onClick={() => addItem({
                                id: 3,
                                name: "두바이 쫀득 치킨 (Limited)",
                                price: 12900,
                                image: "/images/dubai-chicken.png"
                            })}
                            className="btn-primary"
                        >
                            ADD TO CART — ₩12,900
                        </button>
                    </div>
                </div>

                <div className="relative group perspective-1000">
                    <div className="absolute inset-0 bg-neutral-100/50 rounded-[3rem] rotate-3 transition-transform group-hover:rotate-1 duration-700 blur-[2px]"></div>
                    <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl transition-all group-hover:-translate-y-4 duration-700 animate-float">
                        <Image
                            src="/images/dubai-chicken.png"
                            alt="Dubai Chewy Chicken"
                            fill
                            className="object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    </div>

                    {/* Floating badge */}
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 glass-card rounded-full flex flex-col items-center justify-center text-center p-4 animate-float-delayed">
                        <span className="text-[10px] font-black uppercase tracking-widest leading-none">Limit</span>
                        <span className="text-3xl font-black italic">50</span>
                        <span className="text-[10px] font-black uppercase tracking-widest leading-none">Daily</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

