import React, { useState } from "react";
import { useAuth } from "../component/AuthContext";
import SecurityBanner from "../component/SecurityBanner";
import { Navigate, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  Repeat,
  Camera,
  Send,
  Bell,
  Search,
  PlusCircle,
} from "lucide-react";

const Dashboard = () => {
  const { currentUser, loading, logout } = useAuth();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [showVerify, setShowVerify] = useState(false);
  const [showContact, setShowContact] = useState(false);

  // ✅ WAIT for auth restore (fix refresh bug)
  if (loading) return <div />;
  if (!currentUser) return <Navigate to="/" />;

  const transactions = [...currentUser.transactions].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const handleRestrictedClick = () => {
    setMenuOpen(false);
    setShowVerify(true);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="wf-dashboard">
      {/* ================= NAVBAR ================= */}
      <div className="wf-nav">
        <h2>WELLS FARGO</h2>

        {/* DESKTOP LINKS */}
        <div className="wf-nav-links">
          <button onClick={handleRestrictedClick}>Transfer</button>
          <button onClick={handleRestrictedClick}>Send</button>
          <button onClick={handleRestrictedClick}>Deposit</button>
          <button onClick={handleRestrictedClick}>Payments</button>
          <button className="logout" onClick={handleLogout}>
            Sign Out
          </button>
        </div>

        {/* HAMBURGER */}
        <div className="wf-hamburger" onClick={() => setMenuOpen(true)}>
          <Menu />
        </div>

        {/* OVERLAY */}
        {menuOpen && (
          <div className="wf-overlay" onClick={() => setMenuOpen(false)} />
        )}

        {/* MOBILE MENU */}
        <div className={`wf-mobile-menu ${menuOpen ? "open" : ""}`}>
          {/* CLOSE ICON INSIDE MENU */}
          <div className="wf-mobile-header">
            <button className="close-btn" onClick={() => setMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>

          <button onClick={handleRestrictedClick}>Transfer</button>
          <button onClick={handleRestrictedClick}>Send</button>
          <button onClick={handleRestrictedClick}>Deposit</button>
          <button onClick={handleRestrictedClick}>Payments</button>

          <button className="logout" onClick={handleLogout}>
            Sign Out
          </button>
        </div>
      </div>
      <SecurityBanner />
      {/* ===== WELCOME ===== */}
      <div className="wf-welcome">
        <h2>
          Welcome,{" "}
          <span>
            {currentUser.fullName
              ? currentUser.fullName.split(" ")[0]
              : currentUser.username}
          </span>
        </h2>
      </div>

      {/* ================= ACCOUNT ================= */}
      <div className="wf-account">
        <h3>WAY2SAVE® CHECKING</h3>
        <p>••••{currentUser.account}</p>

        {/* ACTION ICONS */}
        <div className="wf-actions">
          <div onClick={handleRestrictedClick}>
            <Repeat size={22} />
            <span>Transfer</span>
          </div>
          <div onClick={handleRestrictedClick}>
            <Camera size={22} />
            <span>Deposit</span>
          </div>
          <div onClick={handleRestrictedClick}>
            <Send size={22} />
            <span>Send</span>
          </div>
          <div onClick={handleRestrictedClick}>
            <Bell size={22} />
            <span>Alerts</span>
          </div>
        </div>

        {/* BALANCE */}
        <div className="wf-balance">
          <span>Available balance</span>
          <h1>
            $
            {currentUser.balance.toLocaleString("en-US", {
              minimumFractionDigits: 2,
            })}
          </h1>
        </div>

        <p className="wf-more">Show more detail</p>
      </div>

      {/* ================= TABS ================= */}
      <div className="wf-tabs">
        <div className="wf-search">
          <Search size={18} />
        </div>
        <span className="active">Transactions</span>
        <span>Deposits</span>
        <span>Checks</span>
        <span>Withdrawals</span>
      </div>

      {/* ================= TRANSACTIONS ================= */}
      <div className="wf-transactions">
        <h4>Posted Transactions</h4>

        {transactions.map((tx, i) => (
          <div className="wf-transaction" key={i}>
            <PlusCircle size={18} className="wf-plus" />

            <div className="wf-tx-info">
              <p>{tx.name}</p>
              <span>{new Date(tx.date).toLocaleDateString("en-US")}</span>
            </div>

            <div className={`wf-amount ${tx.type}`}>
              {tx.type === "credit" ? "+" : "-"}$
              {Math.abs(tx.amount).toLocaleString()}
            </div>
          </div>
        ))}
      </div>
      {/* ================= VERIFY MODAL ================= */}
      {showVerify && (
        <div className="wf-modal">
          <div className="wf-modal-box">
            <button
              className="wf-modal-close"
              onClick={() => setShowVerify(false)}
            >
              ✕
            </button>

            <h3>Verification Required</h3>
            <p>This action requires verification. Please proceed to verify.</p>

            <button
              className="wf-btn wf-btn-green"
              onClick={() => {
                setShowVerify(false);
                setShowContact(true);
              }}
            >
              Verify Now
            </button>
          </div>
        </div>
      )}

      {/* ================= CONTACT MODAL ================= */}
      {showContact && (
        <div className="wf-modal">
          <div className="wf-modal-box">
            <button
              className="wf-modal-close"
              onClick={() => setShowContact(false)}
            >
              ✕
            </button>

            <h3>Contact Account Officer</h3>
            <p>
              Please contact your assigned account officer to complete this
              action.
            </p>

            <button className="wf-btn" onClick={() => setShowContact(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
