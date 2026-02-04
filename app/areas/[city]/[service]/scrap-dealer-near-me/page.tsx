export default function Page({ params }: { params: { city: string } }) {
  const city =
    params.city.charAt(0).toUpperCase() + params.city.slice(1);

  return (
    <main className="min-h-screen bg-emerald-50 py-16">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Scrap Dealer Near Me in {city}
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Trusted plastic & metal scrap buyers in {city} with best price,
            fast pickup and eco-friendly recycling services.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-sm border border-emerald-100 p-10">

          <p className="text-gray-700 mb-8">
            Agar aap <strong>scrap dealer near me</strong>,
            <strong> scrap yard near me</strong> ya
            <strong> scrap buyer in {city}</strong> search kar rahe hain,
            hum factories, warehouses aur industrial units se
            plastic aur metal scrap ka direct pickup karte hain.
          </p>

          <h2 className="text-2xl font-semibold mb-3">
            Plastic & PP Raffia Scrap Buyer in {city}
          </h2>
          <p className="text-gray-700 mb-6">
            Hum <strong>plastic scrap buyer in {city}</strong>,
            <strong> PP raffia buyer</strong>, PP, HDPE, LDPE
            aur industrial plastic scrap bulk quantity me
            best market rate par purchase karte hain.
          </p>

          <h2 className="text-2xl font-semibold mb-3">
            Metal Scrap Near Me – Metal Rate Today
          </h2>
          <p className="text-gray-700 mb-4">
            <strong>Metal scrap near me</strong> ke liye hum iron,
            copper, aluminium aur brass scrap kharidte hain.
            <strong> Aaj ke metal ke rate</strong> daily market ke
            according update hote hain.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              `Iron scrap buyer in ${city}`,
              `Copper scrap buyer in ${city}`,
              `Aluminium scrap buyer in ${city}`,
              `Factory scrap pickup service`,
            ].map((i, k) => (
              <div
                key={k}
                className="bg-emerald-50 border border-emerald-100 rounded-xl px-5 py-3"
              >
                {i}
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-semibold mb-4">
            Why Choose Us?
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
            <li>✔ Best scrap price in {city}</li>
            <li>✔ Fast & reliable pickup</li>
            <li>✔ Industrial & factory scrap specialist</li>
            <li>✔ Trusted eco-friendly recycling</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center bg-emerald-600 text-white rounded-2xl py-6">
          Call now for <strong>scrap pickup in {city}</strong> & today’s best metal rates
        </div>

      </div>
    </main>
  );
}
