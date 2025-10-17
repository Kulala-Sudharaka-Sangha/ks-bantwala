import { useTranslation } from "react-i18next";
import "./DonationSection.scss";

export const DonationSection = () => {
  const { t } = useTranslation();
  return (
    <div className="donation-section">
      <div className="section-header">
       <span className="highlight"> {t("home.donationSection.headerHighlight")}</span>
       {t("home.donationSection.header")}
      </div>
      <div className="section-description">
        {t("home.donationSection.description")}
      </div>
      <div className="supporters-list"></div>
    </div>
  );
};
