import { useState, useEffect } from "react";
import { useAuth } from "../component/AuthContext";
import { useNavigate } from "react-router-dom";
import bg from "../assets/Winter2025_Evening.avif";

const Login = () => {
  const { login } = useAuth(); // ✅ use global auth
  // const navigate = useNavigate();

  const [identifier, setIdentifier] = useState(""); // username OR email
  const [password, setPassword] = useState("");
  const [saveUser, setSaveUser] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // ✅ Load saved username/email
  useEffect(() => {
    const saved = localStorage.getItem("username");
    if (saved) {
      setIdentifier(saved);
      setSaveUser(true);
    }
  }, []);

  // ✅ HANDLE LOGIN
  const handleLogin = () => {
    const success = login(identifier, password, saveUser);
  };

  return (
    <div className="login-page" style={{ backgroundImage: `url(${bg})` }}>
      <div className="login-container">
        <div className="login-form">
          <h2>Good evening</h2>

          {/* USERNAME / EMAIL */}
          <input
            type={identifier.includes("@") ? "email" : "text"}
            placeholder="Username or email"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
          />

          {/* PASSWORD */}
          <div className="password-row">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            />

            <button
              type="button"
              className="show-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {/* SAVE USER */}
          <label className="checkbox">
            <input
              type="checkbox"
              checked={saveUser}
              onChange={() => setSaveUser(!saveUser)}
            />
            <span>Save username</span>
          </label>

          <p className="helper-text">
            To help keep your account secure, save your username only on devices
            that aren't used by other people.
          </p>

          {/* BUTTONS */}
          <div className="btn-group">
            <button className="login-btn" onClick={handleLogin}>
              Sign on
            </button>

            <button className="passkey-btn">🔐 Or use passkey</button>
          </div>

          <p className="passkey-note">
            Don't have one? Create a passkey after signing on and skip the
            password next time.
          </p>
        </div>

        {/* ================= LEGAL ================= */}
        <div className="legal-section">
          <div className="legal-card">
            {/* TOP BOX WITH BORDER */}
            <div className="legal-top">
              <h4>Investment and Insurance Products are:</h4>
              <ul>
                <li>
                  Not Insured by the FDIC or Any Federal Government Agency
                </li>
                <li>
                  Not a Deposit or Other Obligation of, or Guaranteed by the
                  Bank or Any Bank Affiliate
                </li>
                <li>
                  Subject to Investment Risks, Including Possible Loss of the
                  Principal Amount Invested
                </li>
              </ul>
            </div>

            {/* BOTTOM TEXT */}
            <div className="legal-bottom">
              <p>
                Deposit products offered by Wells Fargo Bank, N.A. Member FDIC.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
