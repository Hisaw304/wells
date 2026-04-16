import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useAuth } from "../component/AuthContext";
import { useNavigate } from "react-router-dom";

const DashboardNavbar = ({ onRestrictedClick }) => {
  const [open, setOpen] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const links = ["Transfer", "Send", "Deposit", "Payments"];

  return (
    <>
      <div className="wf-nav">
        <h2>WELLS FARGO</h2>

        {/* DESKTOP */}
        <div className="wf-nav-links">
          {links.map((link) => (
            <button key={link} onClick={onRestrictedClick}>
              {link}
            </button>
          ))}
          <button className="logout" onClick={handleLogout}>
            Sign Out
          </button>
        </div>

        {/* HAMBURGER */}
        <div className="wf-hamburger" onClick={() => setOpen(true)}>
          <Menu />
        </div>
      </div>

      {/* OVERLAY */}
      <div
        className={`wf-overlay ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
      />

      {/* SLIDE MENU */}
      <div className={`wf-slide-menu ${open ? "open" : ""}`}>
        <div className="wf-slide-header">
          <h3>Menu</h3>
          <X onClick={() => setOpen(false)} />
        </div>

        {links.map((link) => (
          <button key={link} onClick={onRestrictedClick}>
            {link}
          </button>
        ))}

        <button className="logout" onClick={handleLogout}>
          Sign Out
        </button>
      </div>
    </>
  );
};

export default DashboardNavbar;
