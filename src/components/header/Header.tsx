import "./Header.scss";
import BrandLogo from "../../assets/kulal-logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="brand-name">
        <img src={BrandLogo} alt="brand-logo" className="brand-logo" />
        ಬಂಟ್ವಾಳ ತಾಲೂಕು ಕುಲಾಲ ಸುಧಾರಕ ಸಂಘ(ರಿ.)
      </div>
    </div>
  );
};

export default Header;
