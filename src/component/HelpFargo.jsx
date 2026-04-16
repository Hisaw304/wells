import img from "../assets/fargo.jpg";

const HelpFargo = () => {
  return (
    <section className="help-section">
      <div className="help-container">
        {/* TEXT FIRST (important for mobile) */}
        <div className="help-content">
          <h2>Need help? Ask Fargo®</h2>
          <p>
            Fargo gives you valuable insights like a summary of your spending by
            category, retailer and across accounts. Find it only in the Wells
            Fargo Mobile® app.
          </p>

          {/* STORE BUTTONS */}
          <div className="store-buttons">
            <img src="/appstore.avif" alt="App Store" />
            <img src="/GooglePlay_Badge.avif" alt="Google Play" />
          </div>

          <span className="help-note">*Screen image is simulated</span>
        </div>

        {/* IMAGE */}
        <div className="help-image">
          <img src={img} alt="Fargo app" />
        </div>
      </div>
    </section>
  );
};

export default HelpFargo;
