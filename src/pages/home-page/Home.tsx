import "./Home.scss";
import BrandLogo from "../../assets/kulal-logo.png";
import useNavigation from "../../hooks/useNavigation";
import { RoutesList } from "../../utils/master-menu";
import { ActivitiesSection } from "../../components/activities-section/ActivitiesSection";
import { EventsSection } from "../../components/events-section/EventsSection";
import { SocialActivities } from "../../components/social-activities-section/SocialActivities";
import { TeachersSection } from "../../components/teachers-section/TeachersSection";
import { AddSection } from "../../components/adds-section/AddSection";
import { DonationSection } from "../../components/donation-section/DonationSection";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
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
          <p className="info-description">{t("home.homeheader.description")}</p>
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
      <TeachersSection />
      <SocialActivities />
      <AddSection />
      <DonationSection />
    </div>
  );
};

export default Home;
