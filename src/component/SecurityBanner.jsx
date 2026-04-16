import { PhoneOff } from "lucide-react";

const SecurityBanner = () => {
  return (
    <div className="wf-security-banner">
      <div className="wf-security-icon">
        <PhoneOff size={20} />
      </div>

      <div className="wf-security-text">
        <h4>We will not call you</h4>
        <p>
          If someone calls claiming to be from Wells Fargo, hang up immediately.
        </p>
      </div>
    </div>
  );
};

export default SecurityBanner;
