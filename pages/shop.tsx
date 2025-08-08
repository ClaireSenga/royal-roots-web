import Head from "next/head";
import WigCard from "../components/WigCard";
import wigs from "../data/wigs";

const Shop = () => {
  return (
    <>
      <Head>
        <title>Shop All Wigs | Royal Roots</title>
        <meta name="description" content="Browse all Royal Roots wigs" />
      </Head>

      <main className="min-h-screen bg-gray-50 px-4 py-12 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          🛍️ Shop All Wigs
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {wigs.map((wig) => (
            <WigCard key={wig.id} wig={wig} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Shop;
