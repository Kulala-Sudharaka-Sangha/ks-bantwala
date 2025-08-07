import "./SocialActivities.scss";
import Lottie from "lottie-react";
import bloodDonar from "../../assets/lottie/blood-donar.json";
import education from "../../assets/lottie/education.json";
import help from "../../assets/lottie/help.json";

export const SocialActivities = () => {
  return (
    <div className="social-section">
      <div className="section-header">
        Engaging in Meaningful{" "}
        <span className="highlight">Social Activities</span>
      </div>
      <div className="social-activities-description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
        itaque laudantium architecto aperiam quos molestias aliquam soluta eum
        minus. Quibusdam sint sunt iste libero voluptatum nobis adipisci earum,
        dolore officiis? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Ipsa est nesciunt quo officia quos.
      </div>
      <div className="social-activities-list">
        <div className="social-activity-card">
          <div className="activity-image">
            <Lottie
              animationData={education}
              loop={true}
              className="activity-lottie"
            />
          </div>
          <div className="activity-details">
            <h3>Vidhya Nidhi</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa est
              nesciunt quo officia quos. Illo dolorum voluptate, libero velit
              fugit magnam provident id fugiat, tempore labore maxime! Tenetur,
              laboriosam molestias? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ipsa est nesciunt quo officia quos. Illo dolorum
              voluptate, libero velit fugit magnam provident id fugiat, tempore
              labore maxime
            </p>
          </div>
        </div>
        <div className="social-activity-card">
          <div className="activity-image">
            <Lottie
              animationData={bloodDonar}
              loop={true}
              className="activity-lottie"
            />
          </div>
          <div className="activity-details">
            <h3>Donate Blood</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa est
              nesciunt quo officia quos. Illo dolorum voluptate, libero velit
              fugit magnam provident id fugiat, tempore labore maxime! Tenetur,
              laboriosam molestias? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ipsa est nesciunt quo officia quos. Illo dolorum
              voluptate, libero velit fugit magnam provident id fugiat, tempore
              labore maxime
            </p>
          </div>
        </div>
        <div className="social-activity-card">
          <div className="activity-image">
            <Lottie
              animationData={help}
              loop={true}
              className="activity-lottie"
            />
          </div>
          <div className="activity-details">
            <h3>Shrama Dhana</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa est
              nesciunt quo officia quos. Illo dolorum voluptate, libero velit
              fugit magnam provident id fugiat, tempore labore maxime! Tenetur,
              laboriosam molestias? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ipsa est nesciunt quo officia quos. Illo dolorum
              voluptate, libero velit fugit magnam provident id fugiat, tempore
              labore maxime
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
