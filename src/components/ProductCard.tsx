"use client";
import Image from "next/image";
import { Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface ProductProps {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    tag?: string;
}

export default function ProductCard(product: ProductProps) {
    const { addItem } = useCart();
    const { id, name, description, price, image, tag } = product;

    return (
        <div className="group relative flex flex-col space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-neutral-50 shadow-sm transition-all duration-700 group-hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] group-hover:-translate-y-2">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-700" />

                {tag && (
                    <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full glass-card text-[10px] font-black uppercase tracking-[0.2em] text-neutral-900 border-black/5 z-10">
                        {tag}
                    </div>
                )}

                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        addItem(product);
                    }}
                    className="absolute bottom-6 right-6 w-14 h-14 bg-black text-white rounded-2xl flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:scale-110 active:scale-90 shadow-2xl z-10"
                >
                    <Plus size={24} strokeWidth={2.5} />
                </button>
            </div>

            <div className="space-y-2 px-2">
                <div className="flex justify-between items-start gap-4">
                    <h3 className="text-xl font-black tracking-tight leading-tight uppercase group-hover:text-black/70 transition-colors">
                        {name}
                    </h3>
                    <span className="text-xl font-black tabular-nums">₩{price.toLocaleString()}</span>
                </div>
                <p className="text-sm text-neutral-400 font-medium leading-relaxed line-clamp-2">
                    {description}
                </p>
            </div>
        </div>
    );
}
