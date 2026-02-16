import React from "react";
import Image from "next/image";

const Testomonials = () => {
  return (
    <div className="testomonials">
      <div className="testomonials__header">
        <div className="red__box"></div>
        <h1>Testimonials</h1>
        <hr />
      </div>
      <div className="all__testomonials">
        <div className="testomonial">
          <div className="user__data">
            <img src="/img/personImg.jpg" alt="Profile Picture" />
            <div>
              <h2>Rajesh Sharma</h2>
              <p>Director, Horizon Developers</p>
            </div>
          </div>
          <span>
            <span className="large__font">"</span> Working with Sequoiaie for our tile requirements has been a game-changer. Their direct-from-manufacturer model saved us 15% on costs without compromising quality. The ability to customize sizes for our commercial project was invaluable, and delivery was right on schedule. <span className="large__font">"</span>
          </span>
        </div>
        <div className="testomonial">
          <div className="user__data">
            <img src="/img/personImg.jpg" alt="Profile Picture" />
            <div>
              <h2>Vikram Singh</h2>
              <p>Project Manager, Elite Constructions</p>
            </div>
          </div>
          <span>
            <span className="large__font">"</span> Sequoiaie delivered tiles for our 120-unit apartment complex on time and below budget. Their massive production capacity ensured we never faced delays, and the quality was consistent across all deliveries. Their team was professional and responsive throughout the project. <span className="large__font">"</span>
          </span>
        </div>
        <div className="testomonial">
          <div className="user__data">
            <img src="/img/personImg.jpg" alt="Profile Picture" />
            <div>
              <h2>Ananya Reddy</h2>
              <p>Import Manager, Global Foods Inc.</p>
            </div>
          </div>
          <span>
            <span className="large__font">"</span> We've been importing spices and pulses from Sequoiaie for over a year now. Their agricultural products consistently meet our quality standards, and their documentation is always meticulous. The direct sourcing from certified farms gives us confidence in the products we receive. <span className="large__font">"</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Testomonials;