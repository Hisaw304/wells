import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // reusable handler
  const goToLogin = () => {
    navigate("/login");
    setOpen(false); // close mobile menu
  };

  const goHome = () => {
    navigate("/");
    setOpen(false);
  };

  return (
    <nav className="navbar">
      {/* TOP BAR */}
      <div className="navbar-top">
        <div className="navbar-container">
          {/* LOGO → HOME */}
          <div className="logo" onClick={goHome}>
            WELLS FARGO
          </div>

          {/* Desktop Links */}
          <div className="nav-links">
            <span onClick={goToLogin}>ATMs/Locations</span>
            <span onClick={goToLogin}>Help</span>
            <span onClick={goToLogin}>Español</span>

            <button className="sign-btn" onClick={goToLogin}>
              Sign On
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="menu-btn" onClick={() => setOpen(!open)}>
            {open ? (
              <X size={24} color="white" />
            ) : (
              <Menu size={24} color="white" />
            )}
          </div>
        </div>
      </div>

      {/* SECOND NAV */}
      <div className="nav-secondary">
        <div className="nav-secondary-inner">
          <span onClick={goToLogin}>Personal</span>
          <span onClick={goToLogin}>Investing & Wealth Management</span>
          <span onClick={goToLogin}>Business</span>
          <span onClick={goToLogin}>Commercial Banking</span>
          <span onClick={goToLogin}>Corporate & Investment Banking</span>
          <span onClick={goToLogin}>About Wells Fargo</span>
        </div>
      </div>

      {/* SUB NAV */}
      <div className="nav-sub">
        <div className="nav-sub-inner">
          <span onClick={goToLogin}>Checking</span>
          <span onClick={goToLogin}>Savings & CDs</span>
          <span onClick={goToLogin}>Credit Cards</span>
          <span onClick={goToLogin}>Home Loans</span>
          <span onClick={goToLogin}>Personal Loans</span>
          <span onClick={goToLogin}>Auto Loans</span>
          <span onClick={goToLogin}>Premier</span>
          <span onClick={goToLogin}>Education & Tools</span>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <span onClick={goToLogin}>Personal</span>
        <span onClick={goToLogin}>Investing & Wealth</span>
        <span onClick={goToLogin}>Business</span>
        <span onClick={goToLogin}>Commercial Banking</span>
        <span onClick={goToLogin}>Corporate</span>
        <span onClick={goToLogin}>About</span>

        <hr />

        <span onClick={goToLogin}>Checking</span>
        <span onClick={goToLogin}>Savings & CDs</span>
        <span onClick={goToLogin}>Credit Cards</span>
        <span onClick={goToLogin}>Home Loans</span>

        <button className="sign-btn" onClick={goToLogin}>
          Sign On
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
