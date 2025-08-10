// components/ContactForm.tsx
import { useRef, useState } from "react";
import { sendEmail } from "../utils/emailService";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<"" | "success" | "error">("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);
    setStatus("");

    try {
      await sendEmail(formRef.current);
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow space-y-4"
    >
      <h2 className="text-2xl font-bold text-center text-gray-800">📩 Contact Us</h2>

      <input
        type="text"
        name="user_name"
        placeholder="Your Name"
        required
        className="w-full border border-gray-300 rounded px-4 py-2"
        aria-label="Your Name"
      />

      <input
        type="email"
        name="user_email"
        placeholder="Your Email"
        required
        className="w-full border border-gray-300 rounded px-4 py-2"
        aria-label="Your Email"
      />

      <textarea
        name="message"
        placeholder="Your Message"
        required
        rows={4}
        className="w-full border border-gray-300 rounded px-4 py-2"
        aria-label="Your Message"
      />

      <button
        type="submit"
        className="global-btn w-full justify-center"
        disabled={isSending}
        aria-busy={isSending}
      >
        {isSending ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="text-green-600 text-center">Message sent successfully!</p>
      )}
      {status === "error" && (
        <p className="text-red-600 text-center">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
