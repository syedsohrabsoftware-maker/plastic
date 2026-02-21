"use client";

import { useState } from "react";
import Link from "next/link";
import { FileText, CalendarDays, ArrowRight } from "lucide-react";

/* ===============================
   BLOG DATA (ADVANCED)
================================ */

const blogs = [
  {
    slug: "plastic-scrap-recycling-benefits",
    title: "Benefits of Plastic Scrap Recycling for Industries",
    date: "March 2025",
    category: "Plastic Recycling",
    excerpt:
      "Plastic scrap recycling helps industries reduce waste, save costs, and follow eco-friendly practices.",
  },
  {
    slug: "how-to-sell-plastic-scrap",
    title: "How to Sell Plastic Scrap at Best Price",
    date: "March 2025",
    category: "Plastic Recycling",
    excerpt:
      "Learn how to sell plastic scrap at the best price with fast pickup and trusted recyclers.",
  },
  {
    slug: "industrial-scrap-management",
    title: "Industrial Scrap Management: A Complete Guide",
    date: "February 2025",
    category: "Industrial Scrap",
    excerpt:
      "A complete guide to industrial scrap management and eco-friendly waste disposal.",
  },
  {
    slug: "metal-scrap-recycling-process",
    title: "Metal Scrap Recycling Process Explained",
    date: "January 2025",
    category: "Metal Scrap",
    excerpt:
      "Understand how metal scrap recycling works and why it is important for industries.",
  },
  {
    slug: "scrap-dealer-near-me-guide",
    title: "How to Choose the Best Scrap Dealer Near You",
    date: "January 2025",
    category: "Scrap Business",
    excerpt:
      "Key factors to consider while choosing a trusted scrap dealer near you.",
  },
  {
    slug: "recycling-laws-india",
    title: "Recycling Laws in India Every Industry Must Know",
    date: "December 2024",
    category: "Recycling Laws",
    excerpt:
      "Overview of recycling laws and compliance requirements in India.",
  },
];

/* ===============================
   BLOG PAGE
================================ */

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const categories = ["All", ...new Set(blogs.map((b) => b.category))];

  const filteredBlogs =
    activeCategory === "All"
      ? blogs
      : blogs.filter((b) => b.category === activeCategory);

  const visibleBlogs = showAll ? filteredBlogs : filteredBlogs.slice(0, 4);

  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="bg-gradient-to-r from-emerald-300 to-emerald-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 mb-4
            px-4 py-1 rounded-full bg-white/20 text-sm font-semibold">
            <FileText size={14} /> Our Blog
          </span>

          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            Recycling & Scrap Industry Insights
          </h1>

          <p className="max-w-3xl mx-auto text-lg opacity-90">
            Latest blogs on plastic recycling, metal scrap, industrial waste
            and scrap business trends.
          </p>
        </div>
      </section>

      {/* FILTER */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-3 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setShowAll(false);
              }}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition
                ${
                  activeCategory === cat
                    ? "bg-emerald-600 text-white"
                    : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* BLOG LIST */}
      <section className="py-20 bg-gradient-to-b from-white to-[#ECFEF7]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-10 transition-all duration-700">
            {visibleBlogs.map((blog) => (
              <article
                key={blog.slug}
                className="bg-white rounded-2xl p-7 shadow
                hover:shadow-xl transition-all border border-emerald-100"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-sm text-emerald-600">
                    <CalendarDays size={16} />
                    {blog.date}
                  </div>

                  <span className="text-xs font-semibold
                    bg-emerald-100 text-emerald-700
                    px-3 py-1 rounded-full">
                    {blog.category}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  {blog.title}
                </h2>

                <p className="text-gray-600 mb-6">
                  {blog.excerpt}
                </p>

                <Link
                  href={`/blog/${blog.slug}`}
                  className="inline-flex items-center gap-2
                  text-emerald-700 font-semibold hover:gap-3 transition-all"
                >
                  Read Full Article <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>

          {/* SEE MORE */}
          {filteredBlogs.length > 4 && (
            <div className="text-center mt-14">
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center gap-2
                px-8 py-3 rounded-full
                bg-emerald-600 text-white font-semibold
                hover:bg-emerald-700 transition"
              >
                {showAll ? "Show Less" : "See More Articles"}
                <ArrowRight size={16} />
              </button>
            </div>
          )}

        </div>
      </section>

    </main>
  );
}