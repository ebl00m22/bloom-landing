"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PasswordPage() {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (value.toLowerCase() === "pickle") {
      document.cookie = "site_auth=pickle; path=/; max-age=86400";
      router.push("/");
    } else {
      setError(true);
    }
  }

  return (
    <div className="min-h-screen bg-[#004845] flex items-center justify-center px-4">
      <div className="text-center">
        <img src="/images/bloom-social-logo.png" alt="Bloom Social" className="h-10 w-auto mx-auto mb-10 brightness-0 invert" />
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
          <input
            type="password"
            value={value}
            onChange={(e) => { setValue(e.target.value); setError(false); }}
            placeholder="Enter password"
            className="px-5 py-3 rounded-lg text-gray-900 text-sm w-64 focus:outline-none"
            autoFocus
          />
          {error && <p className="text-red-300 text-sm">Incorrect password</p>}
          <button
            type="submit"
            className="px-8 py-3 bg-white text-[#004845] font-bold rounded-lg text-sm hover:bg-gray-100 transition-colors"
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  );
}
