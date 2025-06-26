import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import BrandLogo from "../../assets/react.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleDrawerMenu } from "../../store/slices/ui-controls";
import type { RootState } from "../../store/app-store";

const Header = () => {
  const dispatch = useDispatch();

  const isDrawerMenuOpen =
    useSelector<RootState>((state) => state.uiControls.isDrawerMenuOpen) ??
    false;

  return (
    <div className="header">
      <FontAwesomeIcon
        icon={faList}
        className="menu-icon"
        onClick={() => {
          dispatch(toggleDrawerMenu(!isDrawerMenuOpen));
        }}
      />
      {/* <div className="brand-logo">
        <img src={BrandLogo} alt="brand-logo" className="brand-logo-img" />
      </div> */}
      <div className="brand-name">ಬಂಟ್ವಾಳ ತಾಲೂಕು ಕುಲಾಲ ಸುಧಾರಕ ಸಂಘ(ರಿ.)</div>
    </div>
  );
};

export default Header;
