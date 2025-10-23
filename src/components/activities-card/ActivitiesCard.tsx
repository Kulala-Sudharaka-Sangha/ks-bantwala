import "./ActivitiesCard.scss";

interface ActivitiesCardInterface {
  title: string;
  tagLine: string;
  description: string;
  imageUrl: string;
}

export const ActivitiesCard = (props: {
  activity: ActivitiesCardInterface;
}) => {
  const { activity } = props;

  return (
    <div className="activity-card">
      <div className="activity-info">
        <div className="activity-title">{activity.title}</div>
        <div className="tag-line">{activity.tagLine}</div>
        <div className="header-image header-image-small">
          <img src={activity.imageUrl} alt="" />
        </div>
        <div className="activity-description">{activity.description}</div>
      </div>
      <div className="header-image">
        <img src={activity.imageUrl} alt="" />
      </div>
    </div>
  );
};
