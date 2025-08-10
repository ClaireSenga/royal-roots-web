import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import WigCard from "../components/WigCard";
import heroBanner from "../public/images/HeroBanner.png";

const Home = () => {
  const wigs = [
    { id: 1, name: '10" Bob Wig', price: 1100, image: "/images/10-BobWig.webp" },
    { id: 2, name: '12" Bob Wig', price: 1300, image: "/images/12-BobWig.webp" },
    { id: 3, name: '16" Burmese Curl Bundles', price: 800, image: "/images/16-BurmeseCurlWig.webp" },
  ];

  return (
    <>
      <Head>
        <title>Royal Roots Hair Boutique</title>
        <meta name="description" content="Luxury Wigs for Every Queen" />
      </Head>

      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative w-full overflow-hidden mb-12 md:mb-16">
          <Image
            src={heroBanner}
            alt="Royal Roots Hair Boutique banner"
            width={1920}
            height={400}
            priority
            className="w-full h-[400px] object-cover block"
          />

        {/* Center overlay */}
          <div className="absolute inset-0 z-10 px-4 hero-center">
            <div className="absolute inset-0 -z-10 bg-black/30" />
            <h1 className="hero-heading text-white font-bold drop-shadow-lg text-4xl md:text-5xl lg:text-6xl">
              Strand By Strand Excellence
            </h1>
            <Link href="/shop">
              <button className="btn btn-primary mt-6">SHOP NOW</button>
            </Link>
          </div>
        </section>

        {/* Wigs grid */}
        <section className="wig-grid-section w-full px-4 sm:px-6 lg:px-8 pb-12">
          <div className="mx-auto max-w-screen-xl">
            {/* 1 col mobile, 2 col tablet, 3 col desktop */}
            <div className="wig-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {wigs.map((wig) => (
                <WigCard key={wig.id} wig={wig} />
              ))}
            </div>

            <div className="text-center mt-12 view-all-btn-container">
              <Link href="/shop">
                <button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition duration-200">
                  View All Wigs
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
