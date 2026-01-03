"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("✅ Message sent successfully! We will respond within 48 hours.");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send message. Please try again later.");
      }
    } catch (err) {
      setStatus("❌ Something went wrong. Please try again.");
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-red-900 flex flex-col items-center justify-center px-6 py-24 text-white">
      <h1 className="text-5xl font-bold mb-8 drop-shadow-[0_0_10px_rgba(255,0,0,0.6)]">
        Contact Us
      </h1>

      {/* Contact Card */}
      <div className="bg-gradient-to-tr from-gray-900 to-red-800 p-8 rounded-2xl shadow-lg w-full max-w-md">
        
        {/* Logo above the form */}
        <div className="flex flex-col items-center mb-6">
          <Image
            src="/logo.png"
            alt="Flying Unicorns Logo"
            width={120}
            height={120}
            className="drop-shadow-lg"
            priority
          />

          {/* 48-hour response statement */}
          <p className="mt-4 text-sm text-gray-200 text-center">
            We respond to all inquiries within{" "}
            <span className="font-semibold text-red-300">48 hours</span>.
          </p>

          {/* Commission work statement */}
          <p className="mt-2 text-sm text-gray-300 text-center italic">
            Flying Unicorns accepts commissioned printing requests if you have a pattern you want produced.
            Please contact us via email for more information.
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full p-3 rounded bg-black text-white placeholder-gray-400 border border-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full p-3 rounded bg-black text-white placeholder-gray-400 border border-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />

          <textarea
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full p-3 rounded bg-black text-white placeholder-gray-400 border border-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            rows={5}
            required
          />

          <button
            type="submit"
            className="w-full py-3 bg-red-700 hover:bg-red-600 rounded text-white font-semibold transition"
          >
            Send Message
          </button>

          {status && (
            <p className="text-center text-sm mt-2">{status}</p>
          )}
        </form>
      </div>

      {/* 
        ============================
        EMAIL CONFIGURATION NOTE
        ============================

        This contact form sends messages using the API route:
        /src/app/api/sendEmail/route.ts

        When Flying Unicorns is ready to use their own email account,
        the following environment variables will need to be updated
        in Vercel (or .env.local for local testing):

        EMAIL_USER=your-email@example.com
        EMAIL_PASS=your-app-password
        TO_EMAIL=destination-email@example.com

        No changes to THIS page are required when switching emails.
      */}
    </main>
  );
}
