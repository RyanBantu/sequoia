import Image from "next/image";
import React from "react";

const WhoAreWe = () => {
  return (
    <div id="who__are__we" className="who__are__we">
      <div className="who__are__we__header">
        <h1>Who are we?</h1>
        <hr />
      </div>
      <div className="who__are__we__content">
        <div className="logo">
          {/* <Image
            className="img"
            src="/img/whiteLogo.png"
            alt="White Logo"
            width={300}
            height={460}
            quality={100}
          /> */}
          <h2>Sequoiaie </h2>
        </div>
        <div className="who__are__we__info">
          <p>
            Sequoiaie is a diversified company with two core business verticals: direct-from-manufacturer 
            tile solutions and quality agricultural exports. 
            Founded with a commitment to integrity and excellence, we've built our reputation on 
            eliminating unnecessary costs, providing complete transparency, and putting clients in 
            control of their projects. Whether you're a builder seeking quality tiles or an 
            international buyer of agricultural products, our mission is to deliver exceptional 
            value through honest business practices and superior service.
          </p>
        </div>
      </div>
      <style jsx>{`
        .who__are__we {
          margin-bottom: 2rem;
          padding-bottom: 2rem;
        }
        .who__are__we__content {
          display: flex;
          gap: 2rem;
        }
        @media (max-width: 768px) {
          .who__are__we__content {
            flex-direction: column;
            gap: 1rem;
          }
          .logo {
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default WhoAreWe;
