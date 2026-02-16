import Image from "next/image";

import Head from "next/head";
import { BsChevronRight } from "react-icons/bs";

const Services = () => {
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="We do Vinyl floor, contact us and we'll see what we can do for you."
        />
        <meta
          name="keywords"
          content="flooring company, flooring, floor, floor covering, lay out, house, renovation"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon_package/apple-touch-icon.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon_package/favicon-32x32.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon_package/favicon-16x16.ico"
        />
        <link rel="manifest" href="/favicon_package/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon_package/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <title>Services - Quality solutions for tiles and exports</title>
      </Head>

      <div className="services">
        <div className="services__header">
          <h1>Services we offer</h1>
          <p>
            We provide specialized services in tiles and agricultural exports
            with a commitment to quality, transparency, and client satisfaction across all our
            business verticals.
          </p>
        </div>
        <section className="services__example">
          <Image
            className="img"
            src="/img/vinyl-floor.jpg"
            alt="Dinning room with beatifull Vinyl Floor"
            width={1000}
            height={1800}
            quality={100}
          />

          <div className="services__example__info">
          <h1>Tiles</h1>
            <p>
              We offer direct from manufacturer tile solutions for builders and developers.
              With access to 15 manufacturing units each producing up to 500,000 sq. ft. daily,
              we provide below-market pricing without compromising on quality. From standard to
              custom tile sizes and designs, we can fulfill any requirement with guaranteed on-time delivery.
            </p>
            <a href="/contactus">
              Book Service <BsChevronRight className="book-service-arrow" />
            </a>
          </div>
        </section>

        <div className="services__description">
        <p>
            From direct-from-manufacturer tile solutions for builders to quality agricultural exports,
            we deliver exceptional value across all our business verticals with a commitment to
            integrity and excellence.
          </p>
          <p>
            Our transparent, client-first approach puts you in control of your project both
            creatively and financially. Whether you need premium tiles for your construction project
            or reliable agricultural export partners, our team works alongside clients to achieve
            the desired results to the highest standards.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
