"use client";
import ProductCard from "./ProductCard";

const PRODUCTS = [
    {
        id: 1,
        name: "Pistachio Kadaif Cookie",
        description: "진한 피스타치오 스프레드와 바삭한 카다이프가 듬뿍 들어간 시그니처 쫀득 쿠키",
        price: 5800,
        image: "/images/pistachio-cookie.png",
        tag: "Signature"
    },
    {
        id: 2,
        name: "Choco Hazelnut Cookie",
        description: "고급 다크 초콜릿과 구운 헤이즐넛으로 완성한 깊고 진한 버터 풍미",
        price: 5500,
        image: "/images/pistachio-cookie.png", // Using same for demo
        tag: "Bestseller"
    },
    {
        id: 3,
        name: "Dubai Chewy Chicken",
        description: "바삭한 치킨과 쫀득한 도우, 피스타치오의 혁명적인 미식 경험",
        price: 12900,
        image: "/images/dubai-chicken.png",
        tag: "Exclusive"
    }
];

export default function ProductList() {
    return (
        <section className="py-32 max-w-7xl mx-auto px-6 overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                <div className="space-y-4">
                    <div className="w-12 h-1 bg-black"></div>
                    <h2 className="text-5xl font-black tracking-tighter uppercase leading-none">
                        The Seasonal <br />
                        <span className="text-neutral-200 italic font-serif">Curations</span>
                    </h2>
                    <p className="text-neutral-400 font-bold text-xs uppercase tracking-[0.2em]">매일 오전 11시, 가장 신선한 쫀득함이 배송됩니다.</p>
                </div>
                <button className="text-[10px] font-black uppercase tracking-[0.2em] border-b-2 border-black pb-2 hover:text-neutral-400 hover:border-neutral-200 transition-all w-fit">
                    Explore All Drops
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
                {PRODUCTS.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </section>
    );
}

