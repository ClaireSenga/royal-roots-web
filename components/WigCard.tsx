// components/WigCard.tsx
import Image from "next/image";
import { useCart } from "../context/CartContext";

export type Wig = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export default function WigCard({ wig }: { wig: Wig }) {
  const { addToCart } = useCart();

  return (
    <div
      className="
        group bg-white rounded-3xl border border-gray-200 shadow-sm
        hover:shadow-md transition-shadow
        w-full max-w-[360px] mx-auto
        flex flex-col h-full
      "
    >
      {/* Image (uniform aspect so all cards match) */}
      <div className="relative w-full aspect-[3/4] overflow-hidden rounded-t-3xl">
        <Image
          src={wig.image}
          alt={wig.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          sizes="(min-width:1024px) 320px, (min-width:640px) 45vw, 90vw"
          priority={false}
        />
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
          {wig.name}
        </h3>
        <p className="text-gray-700 mt-1 font-medium">R{wig.price}</p>

        {/* Add to Cart button */}
        <div className="flex justify-center">
          <button
            onClick={() => addToCart(wig)}
            aria-label={`Add ${wig.name} to cart`}
            className="
              wig-card-button
              mt-4 inline-flex items-center justify-center
              bg-[#F554B7] text-white font-semibold
              hover:opacity-90 transition
            "
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
