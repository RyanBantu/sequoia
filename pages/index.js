import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="export-page">
      <Head>
        <meta
          name="description"
          content="Sequoia Enterprises - Global Exporters of Organic & Premium Food Products from India to the World."
        />
        <meta
          name="keywords"
          content="organic food exporter India, spices export, basmati rice, tea coffee export, agro commodities"
        />
        <title>Sequoia Enterprises | Global Exporters of Organic & Premium Food Products</title>
      </Head>

      <section className="hero export-hero">
        <div className="hero__inner">
          <h1 className="hero__title">Exporting Nature&apos;s Best to the World</h1>
          <p className="hero__subtitle">
            Premium Organic & Conventional Food Products from India.
          </p>
          <div className="hero__cta">
            <Link href="/contact" className="btn btn--primary">Get a Quote</Link>
            <Link href="/products" className="btn btn--outline">Our Products</Link>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container-narrow">
          <h2 className="section__title">About Sequoia Enterprises</h2>
          <p className="section__lead">
            Sequoia Enterprises is a globally oriented export company specializing in organic and premium food products. We connect trusted Indian producers with international markets, delivering quality, consistency, and reliability.
          </p>
        </div>
      </section>

      <section className="section section--blue">
        <div className="container">
          <h2 className="section__title section__title--light">Our Core Products</h2>
          <div className="product-grid">
            <div className="product-card">
              <span className="product-card__icon">Organic</span>
              <h3>Organic Products</h3>
            </div>
            <div className="product-card">
              <span className="product-card__icon">Spices</span>
              <h3>Spices & Herbs</h3>
            </div>
            <div className="product-card">
              <span className="product-card__icon">Tea</span>
              <h3>Tea & Coffee</h3>
            </div>
            <div className="product-card">
              <span className="product-card__icon">Rice</span>
              <h3>Rice & Grains</h3>
            </div>
            <div className="product-card">
              <span className="product-card__icon">Nuts</span>
              <h3>Nuts & Dry Fruits</h3>
            </div>
            <div className="product-card">
              <span className="product-card__icon">Agro</span>
              <h3>Processed & Agro Products</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <h2 className="section__title">Why Choose Us</h2>
          <ul className="check-list">
            <li>Global Quality Standards</li>
            <li>Competitive Pricing</li>
            <li>Reliable Supply Chain</li>
            <li>Custom Packaging</li>
            <li>Ethical Sourcing</li>
            <li>Long-Term Partnership Focus</li>
          </ul>
        </div>
      </section>

      <section className="section section--blue">
        <div className="container-narrow text-center">
          <h2 className="section__title section__title--light">Global Presence</h2>
          <p className="section__lead section__lead--light">
            Serving Asia, Europe, Middle East & Oceania.
          </p>
          <Link href="/about" className="btn btn--light">Learn More About Us</Link>
        </div>
      </section>
    </div>
  );
}
