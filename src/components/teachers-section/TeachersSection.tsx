import { ActivitiesCard } from "../activities-card/ActivitiesCard";
import "./TeachersSection.scss";

export const TeachersSection = () => {
  return (
    <div className="teachers-section">
      <div className="section-header">
        Taught by <span className="highlight">Hearts</span> That Give Freely
      </div>
      <div className="section-description">
        Our dedicated teachers are here to guide you every step of the way. With
        a wealth of experience and a passion for teaching, they are committed to
        helping you achieve your goals. Whether you're a beginner or looking to
        refine your skills, our teachers provide personalized attention and
        support to ensure your success.
      </div>
      <div className="teachers-list-container">
        <div className="teacher-info">
          <div className="teacher-image-container">
            <img
              src="https://picsum.photos/160/160?random=2"
              alt="Teacher"
              className="teacher-image"
            />
          </div>
          <div className="teacher-name">
            Mahesh Kulal Kadeswalya
            <div className="teacher-role">Dance Teacher</div>
          </div>
        </div>
        <div className="teacher-info">
          <div className="teacher-image-container">
            <img
              src="https://picsum.photos/160/160?random=2"
              alt="Teacher"
              className="teacher-image"
            />
          </div>
          <div className="teacher-name">
            Mahesh Kulal Kadeswalya
            <div className="teacher-role">Dance Teacher</div>
          </div>
        </div>
        <div className="teacher-info">
          <div className="teacher-image-container">
            <img
              src="https://picsum.photos/160/160?random=2"
              alt="Teacher"
              className="teacher-image"
            />
          </div>
          <div className="teacher-name">
            Mahesh Kulal Kadeswalya
            <div className="teacher-role">Dance Teacher</div>
          </div>
        </div>
        <div className="teacher-info">
          <div className="teacher-image-container">
            <img
              src="https://picsum.photos/160/160?random=2"
              alt="Teacher"
              className="teacher-image"
            />
          </div>
          <div className="teacher-name">
            Mahesh Kulal Kadeswalya
            <div className="teacher-role">Dance Teacher</div>
          </div>
        </div>
      </div>
    </div>
  );
};
