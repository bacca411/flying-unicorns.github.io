"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
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
        setStatus("✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send message. Try again later.");
      }
    } catch (err) {
      setStatus("❌ Something went wrong. Please try again.");
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-red-900 flex flex-col items-center justify-center p-8 text-white">
      <h1 className="text-5xl font-bold mb-6 drop-shadow-[0_0_10px_rgba(255,0,0,0.6)]">
        Contact Us
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-tr from-gray-900 to-red-800 p-8 rounded-2xl shadow-lg w-full max-w-md space-y-4"
      >
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
    </main>
  );
}

