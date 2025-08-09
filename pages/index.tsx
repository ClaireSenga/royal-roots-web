import Head from "next/head";
import WigCard from "../components/WigCard";
import Link from "next/link";
import Image from "next/image";
import heroBanner from "../public/images/HeroBanner.png"; // ✅ new

const Home = () => {
  // ... your wigs array ...

  return (
    <>
      <Head>
        <title>Royal Roots Hair Boutique</title>
        <meta name="description" content="Luxury Wigs for Every Queen" />
      </Head>

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative w-full overflow-hidden">
          <div className="relative h-72 md:h-[420px] lg:h-[520px]">
            <Image
              src={heroBanner}      // ✅ static import
              alt="Royal Roots Hair Boutique banner"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>

          {/* Overlay with text + button */}
          <div className="absolute inset-0 flex items-end">
            <div className="w-full px-6 py-10 md:px-12 md:py-12 bg-gradient-to-tr from-pink-700/80 via-pink-500/50 to-transparent">
              <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold drop-shadow-sm">
                Strand By Strand Excellence
              </h1>

              <Link
                href="/shop"
                className="inline-block mt-4 md:mt-6 bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-100 transition"
              >
                SHOP NOW
              </Link>
            </div>
          </div>
        </section>

        {/* Wigs Grid */}
        {/* ...unchanged... */}
      </main>
    </>
  );
};

export default Home;
