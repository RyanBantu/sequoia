import Head from "next/head";
import Image from "next/image";

const ExportImport = () => {
  return (
    <div className="services_main_container">
      <Head>
        <title>Export Import Service</title>
        <meta name="description" content="Learn more about our export import service." />
      </Head>
      <div className="servicer_cont" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h2>Export Import Service</h2>
        <p>
        With 3+ years of success exporting premium tiles to the U.S., we've now expanded into agricultural and food commodities, delivering the same high standards globally.
        </p>
      </div>
      <div className="services__we__offer">
        <div className="service">
          <Image
            className="img"
            src="/img/project-image-4.jpg"
            alt="Export and Import"
            width={1000}
            height={750}
            quality={100}
          />
          <div className="service__content">
            <h2>Export Import</h2>
            <p>
              Our product range includes grains, pulses, spices, fresh produce, processed foods, and oil seeds - 
              all sourced directly from certified farms and processors. With proven expertise in international trade, 
              rigorous quality controls, seamless supply chain management, and a customer-centric approach, we provide 
              tailor-made solutions to meet specific market requirements. We're actively seeking partnerships with importers, 
              wholesalers, and distributors globally.
            </p>
            <a href="/contactus">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExportImport;
