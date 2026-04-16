import img1 from "../assets/community1.jpg";
import img2 from "../assets/community2.jpg";

const Communities = () => {
  return (
    <section className="communities-section">
      <div className="communities-container">
        {/* HEADER */}
        <h2 className="communities-title">
          Serving our customers and communities
        </h2>

        <p className="communities-sub">
          It doesn't happen with one transaction, in one day on the job, or in
          one quarter. It's earned relationship by relationship.
        </p>

        {/* CARDS */}
        <div className="communities-grid">
          {/* CARD 1 */}
          <div className="communities-card">
            <img src={img1} alt="who we are" />
            <h3>Who we are</h3>
            <p>
              Wells Fargo helps strengthen communities through inclusion,
              economic empowerment, and sustainability.
            </p>
            <span className="communities-link">About Wells Fargo</span>
          </div>

          {/* CARD 2 */}
          <div className="communities-card">
            <img src={img2} alt="communities commitment" />
            <h3>Why we're committed to communities</h3>
            <p>
              We don't just serve our communities—we are our communities. We're
              committed to helping customers and neighborhoods across the
              country thrive.
            </p>
            <span className="communities-link">Wells Fargo Stories</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Communities;
