import { useTranslation } from "react-i18next";
import "./DonationSection.scss";
import Lottie from "lottie-react";
import education from "../../assets/lottie/education.json";
import help from "../../assets/lottie/help.json";
import { RoutesList } from "../../utils/master-menu";
import useNavigation from "../../hooks/useNavigation";
import { PaymentCause } from "../../utils/payment";

export const DonationSection = () => {
  const navigation = useNavigation();

  const handleDonationClick = (causeOfPayment: string) => {
    localStorage.setItem("paymentCause", causeOfPayment);
    navigation.handleNavigation(RoutesList.PAYMENT);
  };

  const { t } = useTranslation();
  return (
    <div className="donation-section">
      <div className="section-header">
        <span className="highlight">
          {" "}
          {t("home.donationSection.headerHighlight")}
        </span>
        {t("home.donationSection.header")}
      </div>
      <div className="section-description">
        {t("home.donationSection.description")}
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
            <button
              className="btn donate-button"
              onClick={() => handleDonationClick(PaymentCause.EducationFund)}
            >
              Donate Now
            </button>
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
            <h3>Building Fund</h3>
            <p>
              The Kulal Bhavana is a dream that represents our community’s
              unity, pride, and progress. It will be a center for our cultural,
              social, and developmental activities. To make this vision a
              reality, we humbly seek your generous support and contribution.
              Every donation, big or small, will help build a lasting symbol of
              our togetherness. Let us unite to create a proud legacy for the
              future generations of the Kulal community.
            </p>
            <button
              className="btn donate-button"
              onClick={() => handleDonationClick(PaymentCause.BuildingFund)}
            >
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
