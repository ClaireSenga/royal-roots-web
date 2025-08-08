import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/CartContext";

type Wig = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type Props = {
  wig: Wig;
};

const WigCard = ({ wig }: Props) => {
  const { addToCart } = useCart();

  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition bg-white">
      {/* Image and Name are clickable links to the product page */}
      <Link href={`/product/${wig.id}`}>
        <Image
          src={wig.image}
          alt={wig.name}
          width={400}
          height={400}
          className="w-full h-64 object-cover cursor-pointer"
        />
      </Link>

      <div className="p-4 space-y-2">
        <Link href={`/product/${wig.id}`}>
          <h3 className="text-xl font-semibold text-gray-800 hover:underline cursor-pointer">
            {wig.name}
          </h3>
        </Link>
        <p className="text-gray-600 text-base">R{wig.price}</p>
        <button
          onClick={() => {
            addToCart(wig);
            console.log("Added to cart:", wig); // ✅ still logs to console
          }}
          className="w-full mt-2 bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default WigCard;
