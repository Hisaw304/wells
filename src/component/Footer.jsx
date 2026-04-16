import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      {/* TOP LINKS */}
      <div className="footer-links">
        <span>Privacy, Cookies, Security & Legal</span>
        <span>Do Not Sell or Share My Personal Information</span>
        <span>Notice of Data Collection</span>
        <span>General Terms of Use</span>
        <span>Online Access Agreement</span>
        <span>Report Fraud</span>
        <span>About Wells Fargo</span>
        <span>Careers</span>
        <span>Inclusion and Accessibility</span>
        <span>Sitemap</span>
      </div>

      {/* SOCIAL ICONS */}
      <div className="footer-social">
        <FaFacebookF />
        <FaLinkedinIn />
        <FaInstagram />
        <FaPinterestP />
        <FaYoutube />
        <FaXTwitter />
      </div>

      {/* BOX */}
      <div className="footer-box">
        <h4>Investment and Insurance Products are:</h4>
        <ul>
          <li>Not Insured by the FDIC or Any Federal Government Agency</li>
          <li>
            Not a Deposit or Other Obligation of, or Guaranteed by, the Bank or
            Any Bank Affiliate
          </li>
          <li>
            Subject to Investment Risks, Including Possible Loss of the
            Principal Amount Invested
          </li>
        </ul>
      </div>

      {/* PARAGRAPHS */}
      <div className="footer-text">
        <p>
          Investment products and services are offered through Wells Fargo
          Advisors...
        </p>

        <p>
          1. Availability may be affected by your mobile carrier’s coverage
          area...
        </p>

        <p>
          Android, Google Play, Chrome, Pixel and other marks are trademarks of
          Google LLC.
        </p>

        <p>Apple, the Apple logo, Apple Pay, Apple Watch, Face ID...</p>

        <p>Deposit products offered by Wells Fargo Bank, N.A. Member FDIC.</p>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <span>🏠 Equal Housing Lender</span>

        <p>PM-09192027-5314505</p>
        <p>DT2-09192027-12-8840298-1.1</p>

        <p>© 1999 - 2026 Wells Fargo. NMLSR ID 399801</p>
      </div>
    </footer>
  );
};

export default Footer;
