import Head from "next/head";
import WigCard from "../components/WigCard";
import Link from "next/link";

const Home = () => {
  // Temporary dummy data
  const wigs = [
    {
      id: 1,
      name: "Body Wave 20”",
      price: 1800,
      image: "/images/IMG_7125.JPG",
    },
    {
      id: 2,
      name: "Straight 24”",
      price: 2200,
      image: "/images/IMG_7422.PNG",
    },
    {
      id: 3,
      name: "Curly Bob 12”",
      price: 1400,
      image: "/images/IMG_7442.PNG",
    },
  ];

  return (
    <>
      <Head>
        <title>Royal Roots Hair Boutique</title>
        <meta name="description" content="Luxury Wigs for Every Queen" />
      </Head>

      <main className="min-h-screen bg-white px-4 py-12 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          👑 Welcome to Royal Roots Hair Boutique
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          {wigs.map((wig) => (
            <WigCard key={wig.id} wig={wig} />
          ))}
        </div>

        {/* View All Wigs Button */}
        <div className="text-center">
          <Link href="/shop">
            <button className="mt-4 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition">
              View All Wigs
            </button>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Home;
