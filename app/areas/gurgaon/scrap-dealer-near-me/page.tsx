export default function Page() {
  return (
    <main className="min-h-screen bg-emerald-50 py-16">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Scrap Dealer Near Me in Gurgaon
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Trusted plastic & metal scrap buyers in Gurugram offering best price,
            fast pickup and eco-friendly recycling services.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-emerald-100 p-10">

          <p className="text-gray-700 mb-8">
            Agar aap <strong>scrap dealer near me</strong>, <strong>scrap buyer in Gurgaon</strong>
            ya <strong>scrap yard near me</strong> search kar rahe hain, to hum
            industrial scrap pickup ke liye trusted choice hain. Factories,
            warehouses aur commercial units se direct pickup available hai.
          </p>

          <h2 className="text-2xl font-semibold mb-3">
            Plastic Scrap Buyer in Gurgaon
          </h2>
          <p className="text-gray-700 mb-6">
            Hum <strong>plastic scrap buyer in Gurgaon</strong>, <strong>PP raffia buyer</strong>,
            <strong> PP scrap buyer</strong>, HDPE, LDPE aur industrial plastic scrap
            bulk quantity me best rate par purchase karte hain.
          </p>

          <h2 className="text-2xl font-semibold mb-3">
            Metal Scrap Buyer in Gurgaon – Metal Rate Today
          </h2>
          <p className="text-gray-700 mb-4">
            <strong>Metal scrap near me</strong> ke liye hum iron, copper, aluminium,
            brass jaise sabhi metals buy karte hain. <strong>Aaj ke metal ke rate</strong>
            daily market ke according hote hain.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              "Iron scrap buyer in Gurgaon",
              "Copper scrap buyer in Gurgaon",
              "Aluminium scrap buyer in Gurgaon",
              "Bulk industrial scrap buyer",
            ].map((i, k) => (
              <div key={k} className="bg-emerald-50 border border-emerald-100 rounded-xl px-5 py-3">
                {i}
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-semibold mb-4">
            Why Choose Us?
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
            <li>✔ Best scrap price in Gurgaon</li>
            <li>✔ Fast & reliable pickup</li>
            <li>✔ Factory & bulk scrap specialist</li>
            <li>✔ Trusted & eco-friendly recycling</li>
          </ul>
        </div>

        <div className="mt-14 text-center bg-emerald-600 text-white rounded-2xl py-6">
          Call now for <strong>scrap pickup in Gurgaon</strong> & today’s best scrap rates
        </div>

      </div>
    </main>
  );
}
