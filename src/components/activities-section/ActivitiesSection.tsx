import { ActivitiesCard } from "../activities-card/ActivitiesCard";
import "./ActivitiesSection.scss";

export const ActivitiesSection = () => {
  return (
    <div className="activities-section">
      <div className="section-header">Activities List</div>
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
