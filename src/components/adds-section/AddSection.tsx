import { useTranslation } from "react-i18next";
import "./AddSection.scss";

export const AddSection = () => {
  const { t } = useTranslation();
  return (
    <div className="add-section">
      <div className="section-header">
        {t("home.addSection.header")}
        <span className="highlight">{t("home.addSection.headerHighlight")}</span>
      </div>
      <div className="section-description">
        {t("home.addSection.description")}
      </div>
      <div className="supporters-list"></div>
    </div>
  );
};
