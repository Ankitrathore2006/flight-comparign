import React from 'react';

const Plan = () => {
  return (
    <section className="section__container plan__container">
      <p className="subheader">TRAVEL SUPPORT</p>
      <h2 className="section__header">Plan your travel with confidence</h2>
      <p className="description">
        Find help with your bookings and travel plans, and see what to expect
        along your journey.
      </p>
      <div className="plan__grid">
        <div className="plan__content">
          <span className="number">01</span>
          <h4>Travel Requirements for Dubai</h4>
          <p>
            Stay informed and prepared for your trip to Dubai with essential
            travel requirements, ensuring a smooth and hassle-free experience in
            this vibrant and captivating city.
          </p>
          <span className="number">02</span>
          <h4>Multi-risk travel insurance</h4>
          <p>
            Comprehensive protection for your peace of mind, covering a range of
            potential travel risks and unexpected situations.
          </p>
          <span className="number">03</span>
          <h4>Travel Requirements by destinations</h4>
          <p>
            Stay informed and plan your trip with ease, as we provide up-to-date
            information on travel requirements specific to your desired
            destinations.
          </p>
        </div>
        <div className="plan__image">
          <img src="/images/plan-1.jpg" alt="plan" />
          <img src="/images/plan-2.jpg" alt="plan" />
          <img src="/images/plan-3.jpg" alt="plan" />
        </div>
      </div>
    </section>
  );
};

export default Plan; 