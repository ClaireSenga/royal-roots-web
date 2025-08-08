import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") return res.status(405).json({ message: "Method not allowed" });

  try {
    const { id } = req.query;
    if (!id || typeof id !== "string") return res.status(400).json({ message: "Missing id" });

    const entityId = process.env.PEACH_ENTITY_ID!;
    const accessToken = process.env.PEACH_ACCESS_TOKEN!;

    const url = `https://sandbox.oppwa.com/v1/checkouts/${id}/payment?entityId=${entityId}`;

    const response = await fetch(url, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    const data = await response.json();
    if (!response.ok) return res.status(response.status).json(data);

    return res.status(200).json(data); // contains result.code + description
  } catch (error) {
    console.error("Status error:", error);
    return res.status(500).json({ error: "Failed to fetch payment status" });
  }
}
