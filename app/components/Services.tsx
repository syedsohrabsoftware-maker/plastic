import Image from "next/image";

export default function Services() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Plastic Scrap Services by AK Plastic Recycling
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            We specialize in buying and recycling all types of plastic scrap
            from households, factories and industrial units with transparent
            pricing and fast pickup.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Household */}
          <div className="rounded-3xl bg-[#F9FFFB] border p-8 hover:shadow-lg transition">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#0F766E]/10 flex items-center justify-center text-[#0F766E] font-semibold">
                H
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                For Household Plastic Scrap
              </h3>
            </div>

            <ul className="space-y-3 text-sm text-gray-600 leading-relaxed">
              <li>✔ Plastic bottles, containers & packaging waste</li>
              <li>✔ Old plastic drums, buckets & storage items</li>
              <li>✔ Doorstep pickup at your convenience</li>
              <li>✔ Accurate digital weighing & instant payment</li>
              <li>✔ Eco-friendly recycling process</li>
            </ul>

            {/* Optional image */}
            <div className="mt-8">
              <Image
                src="/images/household-plastic.jpg"
                alt="Household Plastic Scrap Collection"
                width={400}
                height={260}
                className="rounded-xl"
              />
            </div>
          </div>

          {/* Business */}
          <div className="rounded-3xl bg-[#F4FAFF] border p-8 hover:shadow-lg transition">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB] font-semibold">
                B
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                For Industrial & Business Plastic Scrap
              </h3>
            </div>

            <ul className="space-y-3 text-sm text-gray-600 leading-relaxed">
              <li>✔ Injection moulding & blow moulding scrap</li>
              <li>✔ Factory plastic waste & rejected material</li>
              <li>✔ Bulk pickup with proper documentation</li>
              <li>✔ Long-term recycling partnerships available</li>
              <li>✔ Compliance-friendly & responsible recycling</li>
            </ul>

            {/* Optional image */}
            <div className="mt-8">
              <Image
                src="/images/industrial-plastic.jpg"
                alt="Industrial Plastic Scrap Recycling"
                width={400}
                height={260}
                className="rounded-xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
