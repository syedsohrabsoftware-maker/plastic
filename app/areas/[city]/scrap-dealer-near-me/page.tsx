import Link from "next/link";

/* Internal Links */
<div className="mt-12">
  <h3 className="text-xl font-semibold mb-4 text-gray-900">
    Our Scrap Services in Nearby Areas
  </h3>

  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
    <li>
      <Link
        href="/areas/bhiwadi/scrap-dealer-near-me"
        className="text-emerald-700 hover:underline"
      >
        Scrap Dealer Near Me in Bhiwadi
      </Link>
    </li>

    <li>
      <Link
        href="/areas/gurgaon/scrap-dealer-near-me"
        className="text-emerald-700 hover:underline"
      >
        Scrap Dealer Near Me in Gurgaon
      </Link>
    </li>

    <li>
      <Link
        href="/areas/faridabad/scrap-dealer-near-me"
        className="text-emerald-700 hover:underline"
      >
        Scrap Dealer Near Me in Faridabad
      </Link>
    </li>

    <li>
      <Link
        href="/areas/alwar/scrap-dealer-near-me"
        className="text-emerald-700 hover:underline"
      >
        Scrap Dealer Near Me in Alwar
      </Link>
    </li>
  </ul>
</div>