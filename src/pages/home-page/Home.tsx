import "./Home.scss";
import BrandLogo from "../../assets/kulal-logo.png";
import useNavigation from "../../hooks/useNavigation";
import { RoutesList } from "../../utils/master-menu";
import { ActivitiesSection } from "../../components/activities-section/ActivitiesSection";
import { EventsSection } from "../../components/events-section/EventsSection";
import { SocialActivities } from "../../components/social-activities-section/SocialActivities";

const Home = () => {
  const navigation = useNavigation();

  return (
    <div className="home-page">
      <div className="home">
        <div className="page-information">
          <img src={BrandLogo} alt="brand-logo" className="brand-logo" />
          <div className="welcome-message">
            ನಮಸ್ತೇ ಕುಲಾಲ ಬಂಧುಗಳೆ! <span className="highlight">ಸ್ವಾಗತ</span>
          </div>
          <div className="info-title">ಬಂಟ್ವಾಳ ತಾಲೂಕು ಕುಲಾಲ ಸುಧಾರಕ ಸಂಘ(ರಿ.)</div>
          <p className="info-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
            itaque fugiat dolore quasi minus consequatur illum dolorum delectus
            iste corrupti impedit aspernatur, porro blanditiis dolores, ab
            molestias omnis accusantium ratione?
          </p>
          <button
            type="submit"
            className="btn"
            onClick={() => {
              navigation.handleNavigation(RoutesList.MEMBERSHIP_REGISTRATION);
            }}
          >
            ಬನ್ನಿ, ಜೊತೆಯಾಗಿ
          </button>
        </div>
      </div>
      <EventsSection />
      <ActivitiesSection />
      <SocialActivities />
    </div>
  );
};

export default Home;
