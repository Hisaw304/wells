import {
  CreditCard,
  PiggyBank,
  Home,
  Car,
  TrendingUp,
  Star,
  BookOpen,
  Wallet,
} from "lucide-react";

const MobileProducts = () => {
  return (
    <section className="mobile-products">
      <div className="mobile-products-container">
        <div className="mobile-grid">
          <div className="mobile-product-item">
            <Wallet color="#d71e28" />
            <span>Checking</span>
          </div>

          <div className="mobile-product-item">
            <PiggyBank color="#d71e28" />
            <span>Savings & CDs</span>
          </div>

          <div className="mobile-product-item">
            <CreditCard color="#d71e28" />
            <span>Credit Cards</span>
          </div>

          <div className="mobile-product-item">
            <Home color="#d71e28" />
            <span>Home Loans</span>
          </div>

          <div className="mobile-product-item">
            <CreditCard color="#d71e28" />
            <span>Personal Loans</span>
          </div>

          <div className="mobile-product-item">
            <Car color="#d71e28" />
            <span>Auto Loans</span>
          </div>

          <div className="mobile-product-item">
            <TrendingUp color="#d71e28" />
            <span>Investing</span>
          </div>

          <div className="mobile-product-item">
            <Star color="#d71e28" />
            <span>Premier</span>
          </div>

          <div className="mobile-product-item">
            <BookOpen color="#d71e28" />
            <span>Education & Tools</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileProducts;
