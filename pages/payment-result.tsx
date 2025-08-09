import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

type Status = "loading" | "success" | "failed";

type PeachStatusResponse = {
  result?: {
    code?: string;
    description?: string;
  };
};

const PaymentResult = () => {
  const router = useRouter();
  const { id } = router.query;
  const [status, setStatus] = useState<Status>("loading");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (!router.isReady) return;
    if (!id || typeof id !== "string") return;

    const checkStatus = async (): Promise<void> => {
      try {
        const res = await fetch(`/api/payment-status?id=${encodeURIComponent(id)}`);
        const data: PeachStatusResponse = await res.json();

        const code = data?.result?.code;
        const desc = data?.result?.description;

        if (code && code.startsWith("000.")) {
          setStatus("success");
          setMsg(desc || "Payment successful!");
        } else {
          setStatus("failed");
          setMsg(desc || "Payment failed.");
        }
      } catch {
        setStatus("failed");
        setMsg("Could not verify payment.");
      }
    };

    checkStatus();
  }, [router.isReady, id]);

  return (
    <>
      <Head>
        <title>Payment Result | Royal Roots</title>
      </Head>
      <main className="min-h-screen px-6 py-12 max-w-md mx-auto text-center">
        {status === "loading" && <p>Checking your payment…</p>}

        {status === "success" && (
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">🎉 Payment Successful</h1>
            <p className="text-green-700">{msg}</p>
            <Link href="/" className="inline-block bg-black text-white px-6 py-3 rounded-lg">
              Back to Home
            </Link>
          </div>
        )}

        {status === "failed" && (
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">❌ Payment Failed</h1>
            <p className="text-red-600">{msg}</p>
            <Link href="/checkout" className="inline-block bg-black text-white px-6 py-3 rounded-lg">
              Try Again
            </Link>
          </div>
        )}
      </main>
    </>
  );
};

export default PaymentResult;
