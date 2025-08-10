import { FaInstagram, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-16 py-6 text-center text-gray-700">
      <div className="flex justify-center gap-6 mb-3 text-xl">
        <Link href="https://www.instagram.com/royalrootshair" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </Link>
        <Link href="mailto:royalrootshair1@gmail.com">
          <FaEnvelope />
        </Link>
        <Link href="https://wa.me/27XXXXXXXXX" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </Link>
      </div>
      <p className="text-sm">&copy; {new Date().getFullYear()} Royal Roots Hair Boutique</p>
    </footer>
  );
};

export default Footer;
