import Link from "next/link";
import { FileText, CalendarDays, ArrowRight } from "lucide-react";

/* ===============================
   BLOG DATA
================================ */

const blogs = [
  {
    slug: "plastic-scrap-recycling-benefits",
    title: "Benefits of Plastic Scrap Recycling for Industries",
    date: "March 2025",
    excerpt:
      "Plastic scrap recycling helps industries reduce waste, save costs, and follow eco-friendly practices.",
  },
  {
    slug: "how-to-sell-plastic-scrap",
    title: "How to Sell Plastic Scrap at Best Price",
    date: "March 2025",
    excerpt:
      "Learn how to sell plastic scrap at the best price with fast pickup and trusted recyclers.",
  },
  {
    slug: "industrial-scrap-management",
    title: "Industrial Scrap Management: A Complete Guide",
    date: "February 2025",
    excerpt:
      "A complete guide to industrial scrap management and eco-friendly waste disposal.",
  },
];

/* ===============================
   BLOG PAGE (DEFAULT EXPORT)
================================ */

export default function BlogPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="bg-gradient-to-r from-emerald-700 to-emerald-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 mb-4
            px-4 py-1 rounded-full bg-white/20 text-sm font-semibold">
            <FileText size={14} /> Our Blog
          </span>

          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            Recycling & Scrap Industry Insights
          </h1>

          <p className="max-w-3xl mx-auto text-lg opacity-90">
            Latest articles on plastic scrap recycling, industrial waste,
            and eco-friendly practices.
          </p>
        </div>
      </section>

      {/* BLOG LIST */}
      <section className="py-24 bg-gradient-to-b from-white to-[#ECFEF7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10">
            {blogs.map((blog) => (
              <article
                key={blog.slug}
                className="bg-white rounded-2xl p-7 shadow hover:shadow-xl transition"
              >
                <div className="flex items-center gap-2 text-sm text-emerald-600 mb-3">
                  <CalendarDays size={16} />
                  <span>{blog.date}</span>
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
        </div>
      </section>

    </main>
  );
}
