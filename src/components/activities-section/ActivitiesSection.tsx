import { useTranslation } from "react-i18next";
import { ActivitiesCard } from "../activities-card/ActivitiesCard";
import "./ActivitiesSection.scss";

export const ActivitiesSection = () => {
  const { t } = useTranslation();

  return (
    <div className="activities-section">
      <div className="section-header">{t("activitiesHeader")}</div>
      <div className="section-description">{t("activitiesDescription")}</div>
      <div className="activities-list-container">
        <ActivitiesCard />
        <ActivitiesCard />
        <ActivitiesCard />
        <ActivitiesCard />
        <ActivitiesCard />
        <ActivitiesCard />
      </div>
    </div>
  );
};
