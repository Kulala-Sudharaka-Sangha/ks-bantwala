import "./AddSection.scss";

export const AddSection = () => {
  return (
    <div className="add-section">
      <div className="section-header">
        In Appreciation of Our <span className="highlight">Supporters</span>
      </div>

      <div className="supporters-list-container">
        <div className="add-item">
          <img
            src="https://picsum.photos/160/160?random=2"
            alt="Supporter 1"
            className="supporter-image"
          />
        </div>
        <div className="add-item">
          <img
            src="https://picsum.photos/160/160?random=2"
            alt="Supporter 1"
            className="supporter-image"
          />
        </div>
        <div className="add-item">
          <img
            src="https://picsum.photos/160/160?random=2"
            alt="Supporter 2"
            className="supporter-image"
          />
        </div>
      </div>
    </div>
  );
};
