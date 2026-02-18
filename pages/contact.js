import Head from "next/head";

export default function Contact() {
  return (
    <div className="export-page">
      <Head>
        <meta name="description" content="Contact Sequoia Enterprises for export inquiries - Hyderabad, India." />
        <title>Contact Us | Sequoia Enterprises</title>
      </Head>

      <section className="page-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch for quotes and partnerships</p>
        </div>
      </section>

      <section className="section section--white">
        <div className="container contact-layout">
          <div className="contact-info">
            <h2>Sequoia Enterprises</h2>
            <p>
              <strong>Address:</strong><br />
              #305, Dwaraka Apartment, Thakur Mansion Lane,<br />
              Somajiguda, Hyderabad, India - 500082
            </p>
            <p>
              <strong>Ganesh Chitta</strong><br />
              Proprietor
            </p>
            <p>
              <a href="mailto:ganesh@sequoiaie.com">ganesh@sequoiaie.com</a><br />
              <a href="tel:+918367736999">+91 83677 36999</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
