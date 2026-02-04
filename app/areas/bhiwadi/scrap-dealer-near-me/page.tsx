export default function Page() {
  return (
    <main className="min-h-screen bg-emerald-50 py-16">

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Scrap Dealer Near Me in Bhiwadi
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Trusted plastic and metal scrap buyers offering best prices, fast pickup
            and eco-friendly recycling solutions in Bhiwadi industrial area.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-sm border border-emerald-100 p-10">

          <section className="mb-10">
            <p className="text-gray-700 leading-relaxed">
              Agar aap <strong>scrap dealer near me</strong> ya
              <strong> scrap yard near me</strong> search kar rahe hain,
              to hum Bhiwadi ke trusted scrap buyers hain. Hum factories,
              warehouses aur industrial units se plastic aur metal scrap
              ka direct pickup karte hain with transparent pricing.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              PP Raffiya Buyer Near Me in Bhiwadi
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Hum certified <strong>PP Raffiya buyer near me in Bhiwadi</strong> hain.
              Saath hi hum <strong>P.P. plastic buyer near me</strong> bhi hain jo
              PP, HDPE, LDPE, raffiya bags aur industrial plastic scrap
              bulk quantity me purchase karte hain.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Metal Scrap Near Me – Metal Rate Today
            </h2>
            <p className="text-gray-700 mb-4">
              <strong>Metal scrap near me</strong> ke liye hum iron, steel,
              aluminium, copper aur brass scrap best market rate par kharidte hain.
              <strong> Aaj ke metal ke rate</strong> daily update hote hain.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Iron Scrap – metal rate today",
                "Copper Scrap – aaj ke metal ke rate",
                "Aluminium Scrap – metal rate today",
                "Brass Scrap – best market price",
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-emerald-100 bg-emerald-50 px-5 py-3 text-gray-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Why Choose Our Scrap Services?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Best price assurance",
                "Fast & reliable scrap pickup",
                "Eco-friendly recycling process",
                "Trusted & experienced team",
              ].map((point, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-xl border border-emerald-100 bg-white px-5 py-4"
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-600"></span>
                  <span className="text-gray-700">{point}</span>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <div className="inline-block rounded-2xl bg-emerald-600 px-10 py-5 text-white shadow-md">
            <p className="text-lg font-semibold">
              Need Scrap Pickup or Today’s Metal Rates?
            </p>
            <p className="text-emerald-100 mt-1">
              Call now for instant pickup & best price in Bhiwadi
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}
