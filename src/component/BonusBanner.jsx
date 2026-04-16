import bg from "/bonus-bg.jpg";

const BonusBanner = () => {
  return (
    <section className="bonus-banner">
      <div className="bonus-image">
        <img src={bg} alt="bonus" />
      </div>

      {/* CONTENT */}
      <div className="bonus-content">
        <h2>Earn 40,000 bonus points</h2>
        <p>on qualifying purchases. Terms apply.</p>
        <button className="bonus-btn">Learn more</button>
      </div>
    </section>
  );
};

export default BonusBanner;
