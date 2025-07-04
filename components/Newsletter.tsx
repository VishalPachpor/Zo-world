"use client";
import { useState } from "react";
import React from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("");
    setLoading(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("Thank you for subscribing!");
        setEmail("");
      } else {
        setStatus("There was an error. Please try again.");
      }
    } catch (error) {
      console.error("Newsletter submission error:", error);
      setStatus("There was an error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-[#07050A] py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        {/* Newsletter Card */}
        <div className="w-full rounded-3xl bg-gradient-to-br from-[#07050A] via-[#735496] to-[#07050A] p-12 md:p-16">
          <div className="max-w-[800px] mx-auto text-center">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              SUBSCRIBE FOR THE LATEST ZO INNOVATIONS
            </h2>

            {/* Subtext */}
            <p className="text-gray-200 text-base md:text-lg mb-8">
              Join the ZO community and stay updated on AI x Crypto innovations.
              Let&apos;s build the future together.
            </p>

            {/* Email Form */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col md:flex-row gap-4 max-w-[600px] mx-auto"
            >
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="flex-1 px-6 py-3 rounded-full bg-[#07050A]/80 border border-[#735496] text-white placeholder-gray-400 focus:outline-none focus:border-[#735496] transition-colors"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
              />
              <button
                type="submit"
                className="px-8 py-3 rounded-full bg-[#735496] text-white font-semibold hover:bg-[#8B68B1] transition-colors whitespace-nowrap disabled:opacity-60"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Subscribe Now"}
              </button>
            </form>
            {status && (
              <div className="mt-4 text-green-400 text-sm">{status}</div>
            )}

            {/* Privacy Note */}
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="w-5 h-5 rounded-full border border-[#735496] flex items-center justify-center">
                <span className="text-gray-300 text-xs">i</span>
              </div>
              <p className="text-gray-300 text-sm">
                Your email is safe with us no spam, just valuable updates!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
