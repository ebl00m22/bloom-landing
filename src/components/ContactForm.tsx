"use client";

import { useState, type FormEvent } from "react";
import { CheckIcon } from "./Icons";

export default function ContactForm({ variant = "default" }: { variant?: "default" | "dark" }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const isDark = variant === "dark";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    // Fire Google Ads conversion event
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "conversion", {
        send_to: "AW-XXXXXXX/CONVERSION_LABEL",
        event_callback: () => console.log("Conversion tracked"),
      });
    }

    // Push to dataLayer for GTM
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: "form_submission",
        formType: "contact_form",
        formData: {
          name: data.get("name"),
          company: data.get("company"),
        },
      });
    }

    await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.get("name"),
        email: data.get("email"),
        company: data.get("company"),
        source: "contact_form",
        extra: { role: data.get("role"), message: data.get("message") },
      }),
    });

    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 text-center">
        <div className="w-16 h-16 bg-bloom-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckIcon className="w-8 h-8 text-bloom-green" />
        </div>
        <h3 className="text-2xl font-bold text-bloom-green mb-2">
          We&apos;ll Be in Touch!
        </h3>
        <p className="text-gray-600">
          Thanks for reaching out. One of our strategists will contact you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-2xl p-8 md:p-10 space-y-5 ${isDark ? "bg-transparent" : "bg-white shadow-2xl"}`}
    >
      <div className="text-center mb-2">
        <p className={`text-sm font-semibold tracking-widest uppercase ${isDark ? "text-[#e17339]" : "text-bloom-orange"}`}>
          Book a Free Strategy Call
        </p>
        <h3 className={`text-xl md:text-2xl font-bold mt-1 ${isDark ? "text-white" : "text-bloom-green"}`}>
          Let&apos;s Talk
        </h3>
      </div>

      <div>
        <label htmlFor="name" className={`block text-sm font-medium mb-1 ${isDark ? "text-white/70" : "text-gray-700"}`}>
          Full Name *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Jane Smith"
          className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 ${
            isDark
              ? "bg-white/10 border-white/20 text-white placeholder:text-white/40"
              : "border-gray-300 text-gray-900 placeholder-gray-400"
          }`}
        />
      </div>

      <div>
        <label htmlFor="email" className={`block text-sm font-medium mb-1 ${isDark ? "text-white/70" : "text-gray-700"}`}>
          Work Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="jane@company.com"
          className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 ${
            isDark
              ? "bg-white/10 border-white/20 text-white placeholder:text-white/40"
              : "border-gray-300 text-gray-900 placeholder-gray-400"
          }`}
        />
      </div>

      <div>
        <label htmlFor="company" className={`block text-sm font-medium mb-1 ${isDark ? "text-white/70" : "text-gray-700"}`}>
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          placeholder="Acme Inc."
          className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 ${
            isDark
              ? "bg-white/10 border-white/20 text-white placeholder:text-white/40"
              : "border-gray-300 text-gray-900 placeholder-gray-400"
          }`}
        />
      </div>

      <div>
        <label htmlFor="role" className={`block text-sm font-medium mb-1 ${isDark ? "text-white/70" : "text-gray-700"}`}>
          Your Role *
        </label>
        <select
          id="role"
          name="role"
          required
          defaultValue=""
          className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 ${
            isDark
              ? "bg-[#0c0a14] border-white/20 text-white"
              : "border-gray-300 text-gray-900 bg-white"
          }`}
        >
          <option value="" disabled>Select your role...</option>
          <option>C-Suite / Founder</option>
          <option>VP / Director</option>
          <option>Manager</option>
          <option>Marketing / Comms Team</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className={`block text-sm font-medium mb-1 ${isDark ? "text-white/70" : "text-gray-700"}`}>
          What are you hoping to achieve?
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Tell us about your business and what you're hoping to achieve."
          className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 resize-none ${
            isDark
              ? "bg-white/10 border-white/20 text-white placeholder:text-white/40"
              : "border-gray-300 text-gray-900 placeholder-gray-400"
          }`}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 px-6 bg-bloom-orange hover:bg-bloom-orange/90 text-white font-bold rounded-lg text-lg tracking-wide uppercase transition-all duration-200 disabled:opacity-60 cursor-pointer shadow-lg shadow-bloom-orange/25 hover:shadow-xl hover:shadow-bloom-orange/30 hover:-translate-y-0.5"
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </span>
        ) : (
          "Send Message"
        )}
      </button>

      <p className={`text-xs text-center ${isDark ? "text-white/35" : "text-gray-400"}`}>
        No pressure. We will get back to you within one business day.
      </p>
    </form>
  );
}
