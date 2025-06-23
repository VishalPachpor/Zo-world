import type { NextApiRequest, NextApiResponse } from "next";

const GOOGLE_SCRIPT_URL =
  process.env.GOOGLE_SCRIPT_URL ||
  "https://script.google.com/macros/s/AKfycbzjEE3UT2lu-EEPlXKgHko2nqaoifVZhGiMDVpnvVO-saTTO0hzoLm5gKpIpg2FgRo/exec";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "test@example.com" }),
    });

    const text = await response.text();
    const status = response.status;

    res.status(200).json({
      status,
      response: text,
      url: GOOGLE_SCRIPT_URL,
      success: response.ok,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
      url: GOOGLE_SCRIPT_URL,
    });
  }
}
