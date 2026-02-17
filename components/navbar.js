import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-export">
      <div className="nav-export__bar">
        <Link href="/" className="nav-export__logo">
          <Image
            src="/img/sequoia-logo.jpeg"
            alt="Sequoia Enterprises"
            width={180}
            height={40}
            priority
          />
        </Link>
        <nav className="nav-export__links">
          <Link href="/" className="nav-export__link">Home</Link>
          <Link href="/about" className="nav-export__link">About</Link>
          <Link href="/products" className="nav-export__link">Products</Link>
          <Link href="/contact" className="nav-export__link">Contact</Link>
          <Link href="/contact" className="nav-export__link nav-export__link--cta">Get a Quote</Link>
        </nav>
        <button
          type="button"
          className="nav-export__toggle"
          aria-label="Menu"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      {open && (
        <div className="nav-export__mobile">
          <Link href="/" className="nav-export__mobile-link" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" className="nav-export__mobile-link" onClick={() => setOpen(false)}>About</Link>
          <Link href="/products" className="nav-export__mobile-link" onClick={() => setOpen(false)}>Products</Link>
          <Link href="/contact" className="nav-export__mobile-link" onClick={() => setOpen(false)}>Contact</Link>
          <Link href="/contact" className="nav-export__mobile-link nav-export__mobile-link--cta" onClick={() => setOpen(false)}>Get a Quote</Link>
        </div>
      )}
    </header>
  );
}
