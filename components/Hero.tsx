import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Make sure the container has height + relative so fill works */}
      <div className="relative h-72 md:h-[420px] lg:h-[520px]">
        <Image
          src="/images/HeroBanner.png"   // ✅ correct path
          alt="Royal Roots Hair Boutique banner"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Overlay + CTA */}
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
  );
};

export default Hero;
