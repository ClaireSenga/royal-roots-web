import Head from "next/head";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact | Royal Roots</title>
        <meta name="description" content="Contact Royal Roots Hair Boutique" />
      </Head>

      <main className="min-h-screen px-4 py-12 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          ✨ Contact Royal Roots
        </h1>

        <p className="text-center text-gray-600 mb-6">
          Have a question? Need a custom wig? Send us a message!
        </p>

        <ContactForm /> {/* ✅ EmailJS-powered form lives here */}
      </main>
    </>
  );
};

export default Contact;
