import { useState, useEffect } from "react";
import { useAuth } from "../component/AuthContext";
import { useNavigate } from "react-router-dom";

const AuthModal = () => {
  const { showModal, setShowModal, currentUser } = useAuth();
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (showModal) setCode("");
  }, [showModal]);

  if (!showModal || !currentUser) return null;

  const handleVerify = () => {
    if (code.trim() === currentUser.code) {
      localStorage.setItem("isLoggedIn", "true");
      setShowModal(false);
      navigate("/dashboard");
    } else {
      alert("Invalid code ❌");
    }
  };

  return (
    <div className="auth-modal">
      <div className="auth-modal-box">
        {/* CLOSE BUTTON */}
        <button
          className="auth-modal-close"
          onClick={() => setShowModal(false)}
        >
          ✕
        </button>

        <h3 className="auth-modal-title">Verify your identity</h3>

        <p className="auth-modal-subtext">
          Enter the 6-digit code sent to your device
        </p>

        <input
          className="auth-modal-input"
          type="text"
          maxLength="6"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="••••••"
        />

        <button className="auth-modal-btn" onClick={handleVerify}>
          Verify
        </button>

        <p className="auth-modal-note">
          Do not share this code with anyone. Our employees will never ask for
          it.
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
