import type { NextApiRequest, NextApiResponse } from "next";

const { PEACH_ENTITY_ID, PEACH_ACCESS_TOKEN, NEXT_PUBLIC_BASE_URL } = process.env;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed" });

  try {
    const { total } = req.body as { total: number };

    if (typeof total !== "number" || Number.isNaN(total)) {
      return res.status(400).json({ message: "Invalid or missing total" });
    }
    if (!PEACH_ENTITY_ID || !PEACH_ACCESS_TOKEN || !NEXT_PUBLIC_BASE_URL) {
      return res.status(500).json({ message: "Missing Peach env vars" });
    }

    const body = new URLSearchParams({
      entityId: PEACH_ENTITY_ID,
      amount: total.toFixed(2),
      currency: "ZAR",
      paymentType: "DB",
      // Peach will redirect here with ?id=<resourceId>
      shopperResultUrl: `${NEXT_PUBLIC_BASE_URL}/payment-result`,
    });

    const response = await fetch("https://sandbox.oppwa.com/v1/checkouts", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${PEACH_ACCESS_TOKEN}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body,
    });

    const data = await response.json();

    if (!response.ok) {
      // Surface Peach error payload for easier debugging
      return res.status(response.status).json(data);
    }

    // Returns { id: "<checkoutId>", ... }
    return res.status(200).json(data);
  } catch (error) {
    console.error("Peach Payment error:", error);
    return res.status(500).json({ error: "Failed to initiate payment" });
  }
}
