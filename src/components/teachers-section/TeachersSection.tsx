import { useTranslation } from "react-i18next";
import "./TeachersSection.scss";

export const TeachersSection = () => {
  const { t } = useTranslation();
  const teachers = [
    {
      name: "Shri Chennakeshava Kulal",
      role: "Drawing Teacher",
      image: "https://picsum.photoss/160/160?random=1",
    },
    {
      name: "Shri Mahesh Kulal Kadeswalya",
      role: "Dance Teacher",
      image:
        "https://i.ibb.co/0yW5Qf75/Screenshot-2025-10-17-at-4-36-23-PM.png",
    },
    {
      name: "Smt Sowmya S Kulal",
      role: "Bhajan Teacher",
      image: "https://picsum.photos/s160/160?random=3",
    },
  ];

  return (
    <div className="teachers-section">
      <div className="section-header">
        {t("home.teacherSection.header")}
        <span className="highlight">
          {t("home.teacherSection.headerHighlight")}
        </span>
        {t("home.teacherSection.header1")}
      </div>
      <div className="section-description">
        {t("home.teacherSection.description")}
      </div>

      <div className="teachers-list-container">
        {teachers.map((teacher, index) => (
          <div key={index} className="teacher-info">
            <div className="teacher-image-container">
              <img
                src={teacher.image}
                alt={teacher.name}
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'><circle cx='80' cy='50' r='30' fill='%23ccc'/><path d='M40,130 C40,100 120,100 120,130 Z' fill='%23ccc'/></svg>";
                }}
                className="teacher-image"
              />
            </div>
            <div className="teacher-name">
              {teacher.name}
              <div className="teacher-role">{teacher.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
