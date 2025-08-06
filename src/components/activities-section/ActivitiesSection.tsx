import { ActivitiesCard } from "../activities-card/ActivitiesCard";
import "./ActivitiesSection.scss";

export const ActivitiesSection = () => {
  return (
    <>
      <div className="activities-section">
        <div className="section-header">
          <span className="highlight">Chaitanya Program </span> – Nurturing
          Talent Through Free Activities
        </div>
        <div className="section-description">
          Chaitanya Program is a free initiative by KS Bantwala to nurture
          talent in our community. We organize various activities to help
          individuals develop their skills and showcase their talents.Chaitanya
          Program is a free initiative by KS Bantwala to nurture talent in our
          community. We organize various.
        </div>
        <div className="activities-list-container">
          <ActivitiesCard />
          <ActivitiesCard />
          <ActivitiesCard />
          <ActivitiesCard />
          <ActivitiesCard />
          <ActivitiesCard />
        </div>
      </div>
      <div className="activities-section">
        <div className="section-header">
          Taught by <span className="highlight">Hearts</span> That Give Freely
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
    </>
  );
};
