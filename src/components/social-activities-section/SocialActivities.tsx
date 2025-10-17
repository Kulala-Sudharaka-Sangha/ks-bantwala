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
            <h3>Vidhya Nidhi</h3>
            <p>
              Education is the most powerful tool for shaping a brighter future.
              Through Vidhya Nidhi, we extend support to students in need,
              helping them continue their learning journey. Our aim is to remove
              financial barriers and open doors to new opportunities. Every
              contribution is an investment in knowledge, dreams, and the
              leaders of tomorrow. Together, we can empower minds and transform
              lives through education.
            </p>
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
            <h3>Donate Blood</h3>
            <p>
              A single blood donation can save multiple lives and bring hope to
              those in critical need. We organize regular blood donation drives
              to support hospitals and patients. Every drop counts — it’s a gift
              of life that costs nothing but means everything. By donating
              blood, you become a lifeline for someone in their toughest moment.
              Join us in this noble cause and help keep the spirit of humanity
              alive.
            </p>
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
            <h3>Shrama Dhana</h3>
            <p>
              Sharing is the heart of compassion, and Sharma Dhana embodies that
              spirit. We bring communities together to provide essentials, care,
              and comfort to those in need. Every act of giving is a step toward
              reducing hardship and spreading kindness. Through collective
              effort, we turn generosity into meaningful change. Join us in
              making giving not just an act, but a way of life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
