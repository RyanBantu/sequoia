import Image from "next/image";
import Link from "next/link";
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="footer-export">
      <div className="footer-export__content">
        <div className="footer-export__brand">
          <Link href="/" className="footer-export__logo">
            <Image src="/sequoia-logo.svg" alt="Sequoia" width={140} height={32} />
          </Link>
          <p className="footer-export__tagline">Global Exporters of Organic & Premium Food Products from India to the World.</p>
        </div>
        <div className="footer-export__links">
          <h3>Quick Links</h3>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/products">Products</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="footer-export__contact">
          <h3>Contact</h3>
          <p><HiOutlineLocationMarker /> Hyderabad, India</p>
          <p><HiOutlinePhone /> <a href="tel:+918367736999">+91 83677 36999</a></p>
          <p><HiOutlineMail /> <a href="mailto:ganesh@sequoiaie.com">ganesh@sequoiaie.com</a></p>
        </div>
      </div>
      <div className="footer-export__bottom">
        <p>&copy; {new Date().getFullYear()} Sequoia Enterprises. All rights reserved.</p>
      </div>
    </footer>
  );
}
