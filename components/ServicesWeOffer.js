// import { Link } from "next/link";
import Image from "next/image";
import Link from "next/link";



const ServicesWeOffer = () => {
  return (
    <div className="services_main_container">
    <div className="servicer_cont" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

<h2>Services We Offer</h2>
<p>
          We provide specialized services in tiles and agricultural exports
          with a focus on quality, transparency, and client satisfaction.
        </p>
</div>
<div className="services__we__offer">
<div className="service">
<Image
  className="img"
  src="/img/servicesImage.jpg"
  alt="House with beautifull Vinyl floor"
  width={1000}
  height={750}
  quality={100}
/>

<div className="service__content">
  <h2 className="tiles_head">Tiles</h2>
  <p>
              From direct-from-manufacturer tile solutions for builders and developers to quality
              agricultural exports, we deliver exceptional value across all our business verticals
              with a commitment to integrity and excellence.
            </p>
  <a href="/services">Our services</a>
</div>
</div>
</div>
    </div>
      
  );
};

export default ServicesWeOffer;
