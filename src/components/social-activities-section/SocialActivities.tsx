import "./SocialActivities.scss";
import Lottie from "lottie-react";
import bloodDonar from "../../assets/lottie/blood-donar.json";
import education from "../../assets/lottie/education.json";
import help from "../../assets/lottie/help.json";
import { useTranslation } from "react-i18next";

export const SocialActivities = () => {
  const{ t } = useTranslation();
  return (
    <div className="social-section">
      <div className="section-header">
        {t("home.socialSection.header")}
        <span className="highlight">{t("home.socialSection.headerHighlight")}</span>
      </div>
      <div className="social-activities-description">
        {t("home.socialSection.description")}
      </div>
      <div className="social-activities-list">
        <div className="social-activity-card">
          <div className="activity-image">
            <Lottie
              animationData={education}
              loop={true}
              className="activity-lottie"
            />
          </div>
          <div className="activity-details">
            <h3>{t("home.socialSection.card1header")}</h3>
            <p>{t("home.socialSection.card1description")}</p>
          </div>
        </div>
        <div className="social-activity-card">
          <div className="activity-image">
            <Lottie
              animationData={bloodDonar}
              loop={true}
              className="activity-lottie"
            />
          </div>
          <div className="activity-details">
            <h3>{t("home.socialSection.card2header")}</h3>
            <p>{t("home.socialSection.card2description")}</p>
          </div>
        </div>
        <div className="social-activity-card">
          <div className="activity-image">
            <Lottie
              animationData={help}
              loop={true}
              className="activity-lottie"
            />
          </div>
          <div className="activity-details">
            <h3>{t("home.socialSection.card3header")}</h3>
            <p>{t("home.socialSection.card3description")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
