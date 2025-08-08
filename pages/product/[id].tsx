import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import { useCart } from "../../context/CartContext";

const wigs = [
  {
    id: 1,
    name: "Body Wave 20”",
    price: 1800,
    image: "/images/IMG_7125.JPG",
    description: "Premium 100% raw body wave wig, soft and long-lasting.",
  },
  {
    id: 2,
    name: "Straight 24”",
    price: 2200,
    image: "/images/IMG_7422.PNG",
    description: "Silky straight virgin hair, 24-inch luxury finish.",
  },
  {
    id: 3,
    name: "Curly Bob 12”",
    price: 1400,
    image: "/images/IMG_7442.PNG",
    description: "Short curly bob, bold and beautiful. Beginner friendly.",
  },
];

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { addToCart } = useCart();

  const wig = wigs.find((wig) => wig.id === Number(id));

  if (!wig) return <p className="text-center mt-12">Wig not found.</p>;

  return (
    <>
      <Head>
        <title>{wig.name} | Royal Roots</title>
      </Head>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Image
            src={wig.image}
            alt={wig.name}
            width={500}
            height={500}
            className="rounded-2xl object-cover w-full h-[400px]"
          />

          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-gray-800">{wig.name}</h1>
            <p className="text-xl text-gray-600">R{wig.price}</p>
            <p className="text-gray-500">{wig.description}</p>
            <button
              onClick={() => addToCart(wig)}
              className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductPage;
