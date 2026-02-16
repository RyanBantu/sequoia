import Head from "next/head";

export default function About() {
  return (
      <div className="export-page">
        <Head>
          <meta name="description" content="About Sequoia Enterprises - Leading Indian export company for organic and premium food products." />
          <title>About Us | Sequoia Enterprises</title>
        </Head>

        <section className="page-hero">
          <div className="container">
            <h1>About Us</h1>
            <p>Global Exporters of Organic & Premium Food Products</p>
          </div>
        </section>

        <section className="section section--white">
          <div className="container-narrow">
            <h2 className="section__title">Who We Are</h2>
            <p className="section__lead">
              Sequoia Enterprises is a leading Indian export company specializing in high-quality Organic and Conventional Food Products. With a strong commitment to purity, sustainability, and global standards, we connect Indian farmers and producers to international markets across Asia, Europe, Middle East, Australia, and North America.
            </p>
            <p>
              We believe in delivering not just products — but trust, consistency, and long-term partnerships.
            </p>
          </div>
        </section>

        <section className="section section--blue">
          <div className="container-narrow">
            <h2 className="section__title section__title--light">Our Vision</h2>
            <p className="section__lead section__lead--light">
              To become a globally trusted supplier of premium organic and food products.
            </p>
            <h2 className="section__title section__title--light" style={{ marginTop: "2rem" }}>Our Mission</h2>
            <p className="section__lead section__lead--light">
              To deliver safe, high-quality, and ethically sourced food products while building sustainable global trade relationships.
            </p>
          </div>
        </section>

        <section className="section section--white">
          <div className="container">
            <h2 className="section__title">Core Values</h2>
            <div className="values-grid">
              <div className="value-item">Integrity</div>
              <div className="value-item">Quality</div>
              <div className="value-item">Transparency</div>
              <div className="value-item">Sustainability</div>
              <div className="value-item">Customer Commitment</div>
            </div>
          </div>
        </section>

        <section className="section section--blue">
          <div className="container-narrow">
            <h2 className="section__title section__title--light">Sustainability Commitment</h2>
            <p className="section__lead section__lead--light">
              At Sequoia Enterprises, we promote sustainable farming practices, ethical sourcing, minimal chemical usage, eco-friendly packaging options, and long-term farmer partnerships. We believe quality food begins at the farm.
            </p>
          </div>
        </section>
      </div>
  );
}
