import Head from "next/head";
import Image from "next/image";

const Tiles = () => {
  return (
    <div className="services_main_container">
      <Head>
        <title>Tiles Service</title>
        <meta name="description" content="Learn more about our tiles service." />
      </Head>
      <div className="servicer_cont" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h2>Tiles Service</h2>
        <p>
          After years of success in international tile exports, we now bring the same quality-first approach 
          to the domestic market through our project-based tile sales model—serving builders, developers, 
          and contractors who need reliable tile solutions.
        </p>
      </div>
      <div className="services__we__offer">
        <div className="service">
          <Image
            className="img"
            src="/img/project-image-6.jpg"
            alt="Beautiful tiles"
            width={1000}
            height={750}
            quality={100}
          />
          <div className="service__content">
          <h2>Direct from Manufacturer Solutions</h2>
          <p>
              We eliminate all middlemen and unnecessary overheads. With access to 15 manufacturing units 
              each producing up to 500,000 sq. ft. daily, we offer below-market pricing without compromising 
              on quality. From standard to custom tile sizes and designs, we can fulfill any requirement for 
              residential, commercial, or infrastructure projects with guaranteed on-time delivery.
            </p>
            <a href="/contactus">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tiles;
