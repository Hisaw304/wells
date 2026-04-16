import img1 from "../assets/g1.jpg";
import img2 from "../assets/g2.jpg";
import img3 from "../assets/g3.jpg";

const Guidance = () => {
  return (
    <section className="guidance-section">
      <div className="guidance-container">
        <h2 className="guidance-title">Financial guidance and support</h2>

        <div className="guidance-grid">
          {/* CARD 1 */}
          <div className="guidance-card">
            <img src={img1} alt="secure future" />
            <h3>Secure your next chapter</h3>
            <p>Protect what you've built as you look ahead</p>
            <span className="guidance-link">Unlock your options</span>
          </div>

          {/* CARD 2 */}
          <div className="guidance-card">
            <img src={img2} alt="dream plan" />
            <h3>Your dreams, your plan</h3>
            <p>
              Start crafting the foundation for the future you see yourself in
            </p>
            <span className="guidance-link">Get started</span>
          </div>

          {/* CARD 3 */}
          <div className="guidance-card">
            <img src={img3} alt="scam protection" />
            <h3>Your shield against scams</h3>
            <p>Spot the latest tactics scammers are using</p>
            <span className="guidance-link">Get the latest</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guidance;
