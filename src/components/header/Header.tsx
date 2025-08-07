import "./Header.scss";
// import BrandLogo from "../../assets/kulal-logo.png";
import SiteHeader from "../../assets/site-header.png";

const Header = () => {
  return (
    <div className="header">
      <img src={SiteHeader} alt="brand-logo" className="site-header-img" />
      {/* <div className="brand-name"> */}
      {/* <img src={BrandLogo} alt="brand-logo" className="brand-logo" /> */}
      {/* <img src={SiteHeader} alt="brand-logo" className="site-header-img" /> */}
      {/* ಬಂಟ್ವಾಳ ತಾಲೂಕು ಕುಲಾಲ ಸುಧಾರಕ ಸಂಘ(ರಿ.) */}
      {/* </div> */}
    </div>
  );
};

export default Header;
