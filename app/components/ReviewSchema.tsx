export default function ReviewSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "AK Plastic Recycling",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bhiwadi",
      "addressRegion": "Rajasthan",
      "addressCountry": "IN"
    },
    "telephone": "+91-9813124320",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "120"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
