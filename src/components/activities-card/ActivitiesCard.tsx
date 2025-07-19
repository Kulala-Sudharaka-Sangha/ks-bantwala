import "./ActivitiesCard.scss";

export const ActivitiesCard = () => {
  return (
    <div className="activity-card">
      <div className="header-image">
        <img src="https://loremflickr.com/160/160/person?lock=10" alt="" />
      </div>
      <div className="activity-info">
        <div className="date">
          <span>22 Aug 2020</span>
        </div>
        <div className="activity-title">We have announced our new product</div>
        <div className="activity-description">
          We have announced our new product, We have announced our new product,
          We have announced our new product, We have announced our new product,
        </div>
      </div>
    </div>
  );
};
