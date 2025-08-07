import "./ActivitiesCard.scss";

export const ActivitiesCard = () => {
  return (
    <div className="activity-card">
      <div className="activity-info">
        <div className="activity-title">The Chaitanya Dance Group</div>
        <div className="tag-line">Awakening the Spirit Through Dance</div>
        <div className="header-image header-image-small">
          <img src="https://picsum.photos/160/160?random=2" alt="" />
        </div>
        <div className="activity-description">
          Join us for an evening of captivating performances.
        </div>
      </div>
      <div className="header-image">
        <img src="https://picsum.photos/160/160?random=2" alt="" />
      </div>
    </div>
  );
};
