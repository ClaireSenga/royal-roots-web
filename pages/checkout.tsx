// pages/checkout.tsx
import Head from "next/head";
import { useEffect, useState, FormEvent } from "react";
import { useCart } from "../context/CartContext";

// Minimal type for Peach Payments widget on window
type PeachWpwl = {
  remove?: () => void;
  options?: Record<string, unknown>;
};

declare global {
  interface Window {
    wpwl?: PeachWpwl;
  }
}

type CheckoutInitRes = { id?: string };

const CheckoutPage = () => {
  const { cart } = useCart();
  const [loading, setLoading] = useState(false);
  const [checkoutId, setCheckoutId] = useState<string | null>(null);

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  useEffect(() => {
    if (typeof window !== "undefined" && window.wpwl?.remove) {
      try {
        window.wpwl.remove();
      } catch {
        // ignore
      }
    }
  }, []);

  const handleCheckout = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (cart.length === 0) return;

    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ total }),
      });

      const data: CheckoutInitRes = await res.json();

      if (data.id) {
        setCheckoutId(data.id);

        const script = document.createElement("script");
        script.src = `https://sandbox.oppwa.com/v1/paymentWidgets.js?checkoutId=${data.id}`;
        script.async = true;
        script.onload = () => {
          if (window.wpwl) {
            window.wpwl.options = { style: "plain" };
          }
        };
        document.body.appendChild(script);
      } else {
        // eslint-disable-next-line no-console
        console.error("No checkout id returned from /api/checkout:", data);
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("Checkout error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Checkout | Royal Roots</title>
        <meta name="description" content="Complete your order with Royal Roots" />
      </Head>

      <main className="min-h-screen px-6 py-12 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">💳 Checkout</h1>

        {cart.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        ) : (
          <>
            <div className="bg-gray-100 p-4 rounded mb-6">
              <h3 className="font-semibold mb-2">🛍️ Order Summary</h3>
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between mb-1">
                  <span>{item.name}</span>
                  <span>R{item.price}</span>
                </div>
              ))}
              <div className="border-t pt-2 font-bold text-right">Total: R{total}</div>
            </div>

            {!checkoutId ? (
              <form onSubmit={handleCheckout} className="space-y-4">
                <input name="name" placeholder="Your Full Name" required className="w-full border rounded-lg p-3" />
                <input name="email" type="email" placeholder="Your Email" required className="w-full border rounded-lg p-3" />
                <input name="address" placeholder="Delivery Address" required className="w-full border rounded-lg p-3" />

                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
                  disabled={loading}
                >
                  {loading ? "Preparing payment..." : "Pay with Card ��"}
                </button>
              </form>
            ) : (
              <>
                <form
                  action="/payment-result"
                  className="paymentWidgets mt-6"
                  data-brands="VISA MASTER"
                />
                <p className="text-sm text-gray-600 mt-2">
                  Secure payment powered by Peach Payments (sandbox).
                </p>
              </>
            )}
          </>
        )}
      </main>
    </>
  );
};

export default CheckoutPage;
