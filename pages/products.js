import Head from "next/head";

export default function Products() {
  const organic = [
    "Organic Turmeric", "Organic Ginger", "Organic Spices", "Organic Tea & Coffee",
    "Organic Herbal Products", "Organic Pulses & Grains", "Organic Oil Seeds"
  ];
  const conventional = [
    "Premium Spices & Condiments", "Tea & Coffee", "Rice (Basmati & Non-Basmati)",
    "Fresh & Processed Fruits", "Dehydrated Vegetables", "Gherkins",
    "Herbal & Medicinal Plants", "Agro Commodities"
  ];

  return (
      <div className="export-page">
        <Head>
          <meta name="description" content="Sequoia Enterprises product portfolio - Organic and Conventional Food Products for export." />
          <title>Products | Sequoia Enterprises</title>
        </Head>

        <section className="page-hero">
          <div className="container">
            <h1>Our Product Portfolio</h1>
            <p>Organic & Conventional Food Products from India</p>
          </div>
        </section>

        <section className="section section--white">
          <div className="container">
            <h2 className="section__title">Organic Products</h2>
            <ul className="product-list">
              {organic.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section section--blue">
          <div className="container">
            <h2 className="section__title section__title--light">Conventional Food Products</h2>
            <ul className="product-list product-list--light">
              {conventional.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>
  );
}
