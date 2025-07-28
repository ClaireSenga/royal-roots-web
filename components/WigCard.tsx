import Image from "next/image";
import { useCart } from "../context/CartContext"; // 🛒 Import cart

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
  const { addToCart } = useCart(); // use cart function

  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition bg-white">
      <Image
        src={wig.image}
        alt={wig.name}
        width={400}
        height={400}
        className="w-full h-64 object-cover"
      />
      <div className="p-4 space-y-2">
        <h3 className="text-xl font-semibold text-gray-800">{wig.name}</h3>
        <p className="text-gray-600 text-base">R{wig.price}</p>
        <button
          onClick={() => {
            addToCart(wig);
            console.log("Added to cart:", wig); // ✅ test log
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
