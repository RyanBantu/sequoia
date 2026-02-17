import Head from "next/head";
import Link from "next/link";

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
        <meta name="description" content="Sequoia Enterprises products - Premium Turmeric Powder and organic & natural products. Start with one, perfect it, then grow with purpose." />
        <title>Products | Sequoia Enterprises</title>
      </Head>

      <section className="page-hero">
        <div className="container">
          <h1>Our Products</h1>
          <p>Starting with one. Perfecting it. Then growing with purpose.</p>
        </div>
      </section>

      {/* Main product: Turmeric + Philosophy */}
      <section className="section section--white">
        <div className="container-narrow">
          <div className="main-product">
            <h2 className="section__title main-product__label">Our flagship product</h2>
            <h3 className="main-product__name">Turmeric Powder</h3>
            <p className="section__lead">
              Known for its purity, health benefits, and global demand, turmeric represents our commitment to delivering products that reflect authenticity, quality, and trust. We carefully source premium-grade turmeric from trusted origins and ensure it meets international quality standards.
            </p>
            <Link href="/contact" className="btn btn--turmeric">Inquire for Turmeric</Link>
          </div>
        </div>
      </section>

      <section className="section section--blue">
        <div className="container-narrow">
          <h2 className="section__title section__title--light">Our Philosophy — From One to Many</h2>
          <p className="section__lead section__lead--light">
            At Sequoia Enterprises, we believe in building excellence with focus and purpose. Our core principle is to begin with one product, master its quality, and then expand thoughtfully into many — ensuring uncompromising standards at every stage.
          </p>
          <p className="section__lead section__lead--light">
            Following this philosophy, we are proud to begin our natural product export journey with Turmeric Powder, one of nature&apos;s most valuable and globally respected products.
          </p>
          <p className="section__lead section__lead--light">
            Starting with turmeric as our foundation, Sequoia Enterprises will gradually expand its portfolio to include a wider range of organic and natural products, while maintaining the same level of excellence, reliability, and quality.
          </p>
          <p className="section__lead section__lead--light philosophy-tagline">
            <strong>Our approach is simple — Start with one. Perfect it. Then grow with purpose.</strong>
          </p>
        </div>
      </section>

      {/* Rest of products - expanding portfolio */}
      <section className="section section--white">
        <div className="container">
          <h2 className="section__title">Expanding Portfolio</h2>
          <p className="section__lead" style={{ marginBottom: "1.5rem" }}>
            We will gradually add the following organic and conventional products while maintaining the same standards.
          </p>
          <div className="portfolio-grid">
            <div className="portfolio-block">
              <h3>Organic Products</h3>
              <ul className="product-list">
                {organic.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="portfolio-block">
              <h3>Conventional Food Products</h3>
              <ul className="product-list">
                {conventional.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
