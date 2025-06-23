import type { NextApiRequest, NextApiResponse } from "next";

const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email } = req.method === "POST" ? req.body : req.query;
  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }
  if (!GOOGLE_SCRIPT_URL) {
    return res.status(500).json({ error: "Google Script URL not configured" });
  }
  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const text = await response.text();
    res.status(200).json({ result: text });
  } catch (error) {
    console.error("Newsletter API error:", error);
    res.status(500).json({ error: "Failed to submit email" });
  }
}
