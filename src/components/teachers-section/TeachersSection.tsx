import "./TeachersSection.scss";

export const TeachersSection = () => {
  const teachers = [
    {
      name: "Shri Chennakeshava Kulal",
      role: "Drawing Teacher",
      image: "https://picsum.photos/160/160?random=1",
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
      image: "https://picsum.photos/160/160?random=3",
    },
  ];

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
        {teachers.map((teacher, index) => (
          <div key={index} className="teacher-info">
            <div className="teacher-image-container">
              <img
                src={teacher.image}
                alt={teacher.name}
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
