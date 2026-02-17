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
            <Link href="/contact" className="btn btn--turmeric">Get a Quote</Link>
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

      <section className="section section--blue core-product">
        <div className="container">
          <h2 className="section__title section__title--light">Our Core Product</h2>
          <div className="core-product__wrap">
            <div className="core-product__image-wrap">
              <img
                src="/img/turmeric-core.jpeg"
                alt="Turmeric powder and root from Eastern Ghats - naturally grown and sourced"
                className="core-product__image"
                width={600}
                height={400}
              />
              <p className="core-product__caption">
                Naturally grown and sourced from the hills — Eastern Ghats
              </p>
            </div>
            <div className="product-grid product-grid--feature">
              <Link href="/products" className="product-card product-card--main">
                <span className="product-card__icon">Turmeric</span>
                <h3>Turmeric Powder</h3>
                <p className="product-card__desc">Premium-grade, internationally certified</p>
              </Link>
              <div className="product-card">
                <span className="product-card__icon">More</span>
                <h3>Expanding portfolio</h3>
                <p className="product-card__desc">Organic & natural products</p>
              </div>
            </div>
          </div>
          <div className="text-center" style={{ marginTop: "1.5rem" }}>
            <Link href="/products" className="btn btn--light">View all products</Link>
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
