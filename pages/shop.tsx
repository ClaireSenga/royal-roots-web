// pages/shop.tsx
import Head from "next/head";
import Link from "next/link";
import WigCard from "../components/WigCard";
import wigs from "../data/wigs";

const Shop = () => {
  return (
    <>
      <Head>
        <title>Shop All Wigs | Royal Roots</title>
        <meta name="description" content="Browse all Royal Roots wigs" />
      </Head>

      <main className="min-h-screen bg-white">
        <section className="wig-grid-section w-full px-4 sm:px-6 lg:px-8 pb-12">
          <div className="mx-auto max-w-screen-xl">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
              🛍️ Shop All Wigs
            </h1>

            <div className="wig-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {wigs.map((wig) => (
                <WigCard key={wig.id} wig={wig} />
              ))}
            </div>

            {/* This links to the same page; you can remove or link to a filter */}
            <div className="text-center mt-12 view-all-btn-container">
              <Link href="/shop">
                <button className="global-btn">View All Wigs</button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Shop;
