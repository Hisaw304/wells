import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";

const PromoCards = () => {
  return (
    <section className="promo-section">
      <div className="promo-container">
        <div className="promo-card">
          <div className="promo-image">
            <img src={card1} alt="card" />
          </div>
          <div className="promo-content">
            <h3>Earn 60,000 bonus points</h3>
            <p>
              when you spend $4,000 in purchases in the first 3 months. Terms
              apply.
            </p>
            <span className="promo-link">Learn more</span>
          </div>
        </div>

        <div className="promo-card">
          <div className="promo-image">
            <img src={card2} alt="card" />
          </div>
          <div className="promo-content">
            <h3>New customer? Say hello to a $125 bonus</h3>
            <p>
              Open a Clear Access Banking account, great for students & more
            </p>
            <span className="promo-link">See offer details</span>
          </div>
        </div>

        <div className="promo-card">
          <div className="promo-image">
            <img src={card3} alt="card" />
          </div>
          <div className="promo-content">
            <h3>Open a savings account</h3>
            <p>Explore our savings accounts and find the right fit for you</p>
            <span className="promo-link">Get started</span>
          </div>
        </div>

        <div className="promo-card">
          <div className="promo-image">
            <img src={card4} alt="card" />
          </div>
          <div className="promo-content">
            <h3>Interest rates today</h3>
            <p>Stay updated with current rates</p>
            <span className="promo-link">Learn more</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoCards;
