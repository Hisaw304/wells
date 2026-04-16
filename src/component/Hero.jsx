import { useState, useEffect } from "react";
import { useAuth } from "../component/AuthContext";

const Hero = () => {
  const { login } = useAuth();

  const [identifier, setIdentifier] = useState("");
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

  // ✅ SUBMIT
  const handleSubmit = () => {
    login(identifier, password, saveUser);
  };

  return (
    <section className="hero">
      {/* LEFT */}
      <div className="hero-left">
        <div className="hero-login-card">
          <h2>Good evening</h2>
          <p>Sign on to manage your accounts.</p>

          {/* USERNAME / EMAIL */}
          <div className="hero-input-group">
            <input
              type={identifier.includes("@") ? "email" : "text"}
              placeholder="Username or email"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
            />
          </div>

          {/* PASSWORD */}
          <div className="hero-input-group">
            <div className="hero-password-row">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              />
              <span
                className="hero-show-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>
          </div>

          {/* CHECKBOX */}
          <label className="hero-checkbox-row">
            <input
              type="checkbox"
              checked={saveUser}
              onChange={() => setSaveUser(!saveUser)}
            />
            <span>Save username</span>
          </label>

          {/* BUTTON */}
          <button className="hero-signon-btn" onClick={handleSubmit}>
            Sign On
          </button>

          {/* LINKS */}
          <div className="hero-links">
            <span>Enroll</span>
            <span>Sign on with a passkey</span>
            <span>Forgot username or password?</span>
            <span>Privacy, Cookies, and Legal</span>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="hero-right">
        <div className="hero-bg-image"></div>

        <div className="hero-content">
          <h1>$325 checking bonus on us</h1>
          <p>
            New customers open an eligible checking account with qualifying
            direct deposits
          </p>

          <button className="cta-btn">Get started &gt;&gt;</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
