"use client";

import { useEffect, useState, useRef } from "react";
import { X } from "lucide-react";

export default function LeadPopup() {
  const [open, setOpen] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const hasOpened = useRef(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    if (hasOpened.current) return;
    hasOpened.current = true;

    timerRef.current = setTimeout(() => {
      setOpen(true);
    }, 2000); // 🔥 2 SECOND GUARANTEED

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = encodeURIComponent(
      `Hello, I want a quote for plastic scrap.\n
Name: ${name}
Phone: ${phone}
Scrap Type: ${type}`
    );

    window.open(
      `https://wa.me/919813124320?text=${message}`,
      "_blank"
    );

    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center">
      {/* BACKDROP */}
      <div
        onClick={() => setOpen(false)}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
      />

      {/* MODAL */}
      <div className="relative w-[92%] max-w-md bg-white rounded-2xl shadow-xl p-8">
        {/* CLOSE */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 w-9 h-9 rounded-full border
          flex items-center justify-center hover:bg-gray-100"
        >
          <X size={18} />
        </button>

        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Get Best Price for Plastic Scrap ♻️
        </h3>
        <p className="text-gray-600 mb-6">
          Connect instantly with us on WhatsApp.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className="w-full border rounded-lg px-4 py-3"
          />

          <input
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone Number"
            className="w-full border rounded-lg px-4 py-3"
          />

          <select
            required
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full border rounded-lg px-4 py-3"
          >
            <option value="">Select Scrap Type</option>
            <option>Industrial Plastic Scrap</option>
            <option>Factory Plastic Scrap</option>
            <option>Bulk Plastic Scrap</option>
          </select>

          <button
            type="submit"
            className="w-full py-3 rounded-full bg-emerald-600 text-white font-medium hover:bg-emerald-700"
          >
            Get Quote on WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}
