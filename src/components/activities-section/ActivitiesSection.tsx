import { useTranslation } from "react-i18next";
import { ActivitiesCard } from "../activities-card/ActivitiesCard";
import "./ActivitiesSection.scss";
import Bhajan from "../../assets/activities-images/bhajan.png";
import Dance from "../../assets/activities-images/dance.png";
import Drawing from "../../assets/activities-images/drawing.png";
import Yakshagana from "../../assets/activities-images/yakshagana.png";

const ActivitiesList = [
  {
    title: "The Chaitanya Dance Group",
    tagLine: "Awakening the Spirit Through Dance",
    description: "Join us for an evening of captivating performances.",
    imageUrl: Dance,
  },
  {
    title: "Chaitanya Bhajana Mandali",
    tagLine: "Soulful Devotional Music",
    description: "Experience the divine through melodious bhajans.",
    imageUrl: Bhajan,
  },
  {
    title: "Chaitanya Drawing Class",
    tagLine: "Unleash Your Creativity",
    description: "Learn the fundamentals of drawing and sketching.",
    imageUrl: Drawing,
  },
  {
    title: "Chaitanya Yakshagana Class",
    tagLine: "Traditional Indian Theatre",
    description:
      "Explore the art of Yakshagana, a traditional Indian theatre form.",
    imageUrl: Yakshagana,
  },
];

export const ActivitiesSection = () => {
  const { t } = useTranslation();

  return (
    <div className="activities-section">
      <div className="section-header">{t("home.activitiesSection.header")}</div>
      <div className="section-description">
        {t("home.activitiesSection.description")}
      </div>
      <div className="activities-list-container">
        {ActivitiesList.map((activity, index) => (
          <ActivitiesCard key={index} activity={activity} />
        ))}
      </div>
    </div>
  );
};
