import Head from "next/head";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ submitted: false, submitting: false, error: false, msg: null });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setStatus({ ...status, msg: null });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus((s) => ({ ...s, submitting: true }));
    fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then(async (res) => {
        const data = await res.json().catch(() => ({}));
        const success = res.ok && data.success;
        if (success) setForm({ name: "", email: "", message: "" });
        setStatus({
          submitted: true,
          submitting: false,
          error: !success,
          msg: data.message || (success ? "Thank you. We will respond shortly." : "Something went wrong. Please try again."),
        });
      })
      .catch(() => {
        setStatus({
          submitted: true,
          submitting: false,
          error: true,
          msg: "Failed to send. Please try again or email ganesh@sequoiaie.com directly.",
        });
      });
  };

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
              <p>Hyderabad, India</p>
              <p><strong>Ganesh Chitta</strong><br />Proprietor</p>
              <p>
                <a href="mailto:ganesh@sequoiaie.com">ganesh@sequoiaie.com</a><br />
                <a href="tel:+918367736999">+91 83677 36999</a>
              </p>
            </div>
            <div className="contact-form-wrap">
              <h2>Send an inquiry</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <input type="text" name="name" value={form.name} placeholder="Name" onChange={handleChange} required />
                <input type="email" name="email" value={form.email} placeholder="Email" onChange={handleChange} required />
                <textarea name="message" value={form.message} placeholder="Message" onChange={handleChange} rows={5} required />
                <button type="submit" className="btn btn--primary" disabled={status.submitting}>
                  {status.submitting ? "Sending..." : status.submitted && !status.error ? "Sent" : "Submit"}
                </button>
              </form>
              {status.msg && (
                <p className={status.error ? "form-message form-message--error" : "form-message form-message--success"}>{status.msg}</p>
              )}
            </div>
          </div>
        </section>
      </div>
  );
}
