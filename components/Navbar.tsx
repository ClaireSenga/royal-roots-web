import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-gray-300 shadow-sm sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/Royal%20Roots%20Logo.png"
            alt="Royal Roots Logo"
            width={50}
            height={50}
            className="rounded-[38px]"
            priority
          />
        </Link>

        {/* Links (flex + gap + space-x) */}
        <div className="nav-links flex items-center gap-8 space-x-8 text-black font-medium">
          <Link href="/" className="no-underline hover:text-gray-700">Home</Link>
          <Link href="/shop" className="no-underline hover:text-gray-700">Shop</Link>
          <Link href="/contact" className="no-underline hover:text-gray-700">Contact</Link>
          <Link href="/cart" className="no-underline hover:text-gray-700">View Cart</Link>
        </div>

      </div>
    </nav>
  );
}
