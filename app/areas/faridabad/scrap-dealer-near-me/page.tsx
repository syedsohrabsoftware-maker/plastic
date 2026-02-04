export default function Page() {
  return (
    <main className="min-h-screen bg-emerald-50 py-16">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Scrap Dealer Near Me in Faridabad
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Leading plastic & metal scrap buyers in Faridabad with fast pickup,
            best market price and certified recycling process.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-emerald-100 p-10">

          <p className="text-gray-700 mb-8">
            Agar aap <strong>scrap dealer in Faridabad</strong>,
            <strong> scrap yard near me</strong> ya
            <strong> scrap buyer near me</strong> search kar rahe hain,
            hum industrial aur factory scrap ke liye reliable partner hain.
          </p>

          <h2 className="text-2xl font-semibold mb-3">
            Plastic Scrap Buyer in Faridabad
          </h2>
          <p className="text-gray-700 mb-6">
            Hum <strong>plastic scrap buyer in Faridabad</strong>,
            <strong> PP scrap buyer</strong>, <strong>PP raffia buyer</strong>
            aur plastic recycling services provide karte hain.
          </p>

          <h2 className="text-2xl font-semibold mb-3">
            Metal Scrap Buyer in Faridabad – Metal Rate Today
          </h2>
          <p className="text-gray-700 mb-4">
            <strong>Metal scrap near me</strong> ke liye hum iron, copper,
            aluminium aur brass scrap best market price par kharidte hain.
            <strong> Aaj ke metal ke rate</strong> real-time follow kiye jaate hain.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              "Iron scrap buyer in Faridabad",
              "Copper scrap buyer Faridabad",
              "Aluminium scrap buyer Faridabad",
              "Factory scrap pickup service",
            ].map((i, k) => (
              <div key={k} className="bg-emerald-50 border border-emerald-100 rounded-xl px-5 py-3">
                {i}
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-semibold mb-4">
            Why Choose Our Scrap Services?
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
            <li>✔ Best scrap rates in Faridabad</li>
            <li>✔ Fast industrial pickup</li>
            <li>✔ Trusted plastic recycling company</li>
            <li>✔ Transparent weighing & payment</li>
          </ul>
        </div>

        <div className="mt-14 text-center bg-emerald-600 text-white rounded-2xl py-6">
          Call now for <strong>scrap pickup in Faridabad</strong> & best metal rates today
        </div>

      </div>
    </main>
  );
}
