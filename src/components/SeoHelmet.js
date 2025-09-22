import { Helmet } from "react-helmet";

const SeoHelmet = ({ title, description, keywords, url, image, schemaData }) => {
  const defaultKeywords = "Enwus, makina mühendislik, talaşlı imalat, kaynaklı imalat, CNC, AR-GE, savunma sanayi, hidrolik pnömatik, mekanik tesisat, sac kesim, montaj hizmetleri";
  const defaultImage = image ?? "https://www.enwus.com/static/media/logo-kucuk-beyaz.60bd22569041796544bb.webp";

  // Default Organization Schema (mevcut sisteminiz)
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.enwus.com/#organization",
    name: title ?? "Enwus Makina Mühendislik",
    url: url,
    logo: "https://www.enwus.com/static/media/logo-kucuk-beyaz.60bd22569041796544bb.webp",
    description: description,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ostim OSB, 1271. Sk. No:12, 06374 Yenimahalle",
      addressLocality: "Ankara",
      addressCountry: "TR"
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+90-506-878-5766",
      contactType: "customer service",
      availableLanguage: ["Turkish", "English"]
    },
    sameAs: ["https://www.linkedin.com/company/enwus-makina-muhendislik"]
  };

  // Eğer özel schema yoksa default kullan, varsa özel schema kullan
  const finalSchema = schemaData || defaultSchema;

  return (
    <Helmet>
      {/* HTML attributes */}
      <html lang="tr" />
      
      {/* Temel Meta Etiketleri */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords ?? defaultKeywords} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
      <meta charSet="utf-8" />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={defaultImage} />
      <meta property="og:site_name" content="Enwus Makina Mühendislik" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={defaultImage} />
      <meta name="twitter:site" content="@enwus" />
      
      {/* Structured Data - Dinamik Schema */}
      <script type="application/ld+json">
        {JSON.stringify(finalSchema)}
      </script>
    </Helmet>
  );
};

export default SeoHelmet;