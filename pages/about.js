import Head from "next/head";
import { FaLinkedin } from "react-icons/fa";

const FOUNDER_LINKEDIN = "https://www.linkedin.com/in/ganesh-chitta-64348664/";

export default function About() {
  return (
    <div className="export-page about-page">
      <Head>
        <meta name="description" content="About Sequoia Enterprises - Excellence rooted in trust, inspired by nature. Global export of premium tiles and organic products." />
        <title>About Us | Sequoia Enterprises</title>
      </Head>

      <section className="about-hero">
        <div className="about-hero__inner">
          <h1 className="about-hero__title">About Us</h1>
          <p className="about-hero__tagline">Excellence Rooted in Trust, Inspired by Nature</p>
        </div>
      </section>

      <section className="about-intro">
        <div className="about-intro__inner">
          <p className="about-intro__lead">
            Sequoia Enterprises stands as a symbol of global trust, reliability, and uncompromising quality. Having successfully established our presence in the United States through the export of premium &ldquo;TILES&rdquo;, we have earned the confidence of international partners by consistently delivering products that meet the highest global standards.
          </p>
          <p className="about-intro__p">
            Building on this strong foundation, Sequoia Enterprises is now expanding its legacy into the export of high-quality organic and natural products. Our mission is to bring nature&apos;s finest offerings to the world — pure, authentic, and responsibly sourced.
          </p>
          <p className="about-intro__p">
            Guided by precision, integrity, and refined quality standards, we carefully select our products from trusted sources. Every shipment reflects our unwavering commitment to excellence, sustainability, and customer satisfaction.
          </p>
          <p className="about-intro__p about-intro__close">
            At Sequoia Enterprises, we do not simply export products — we deliver trust, authenticity, and long-term value to our global partners.
          </p>
        </div>
      </section>

      <section className="about-mission">
        <div className="about-mission__inner">
          <div className="about-mission__card">
            <h2 className="about-mission__heading">Our Mission</h2>
            <p className="about-mission__text">
              To supply premium organic and natural products to international markets while upholding the highest standards of quality, integrity, and reliability.
            </p>
          </div>
          <div className="about-mission__card">
            <h2 className="about-mission__heading">Our Vision</h2>
            <p className="about-mission__text">
              To become a globally respected export brand recognized for excellence, consistency, and delivering nature&apos;s best products to customers worldwide.
            </p>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="about-values__inner">
          <h2 className="about-values__title">Our Core Values</h2>
          <div className="about-values__grid">
            <div className="about-value">
              <span className="about-value__num">01</span>
              <h3 className="about-value__title">Quality First</h3>
              <p className="about-value__text">We maintain strict quality standards to ensure every product meets international expectations.</p>
            </div>
            <div className="about-value">
              <span className="about-value__num">02</span>
              <h3 className="about-value__title">Trust & Integrity</h3>
              <p className="about-value__text">We build long-term partnerships through transparency, honesty, and ethical business practices.</p>
            </div>
            <div className="about-value">
              <span className="about-value__num">03</span>
              <h3 className="about-value__title">Global Excellence</h3>
              <p className="about-value__text">We operate with professionalism, precision, and efficiency to serve global markets.</p>
            </div>
            <div className="about-value">
              <span className="about-value__num">04</span>
              <h3 className="about-value__title">Customer Commitment</h3>
              <p className="about-value__text">We prioritize customer satisfaction and focus on creating lasting business relationships.</p>
            </div>
            <div className="about-value">
              <span className="about-value__num">05</span>
              <h3 className="about-value__title">Sustainability & Responsibility</h3>
              <p className="about-value__text">We promote natural, organic, and environmentally responsible products that support a healthier future.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-founder">
        <div className="about-founder__inner">
          <h2 className="about-founder__title">Our Founder</h2>
          <div className="about-founder__card">
            <p className="about-founder__name">Ganesh Chitta</p>
            <p className="about-founder__role">Founder, Sequoia Enterprises</p>
            <a
              href={FOUNDER_LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="about-founder__linkedin"
              aria-label="Ganesh Chitta on LinkedIn"
            >
              <FaLinkedin className="about-founder__linkedin-icon" />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
