import { useState, useEffect } from "react";
import { ActivitiesCard } from "../activities-card/ActivitiesCard";
import "./ActivitiesSection.scss";

const activitiesCount = 12; // total cards
const itemsPerPage = 3;
const totalPages = Math.ceil(activitiesCount / itemsPerPage);

export const ActivitiesSection = () => {
  const [page, setPage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="activities-section">
      <div className="section-header">
        <span className="highlight">Chaitanya Program </span> – Nurturing Talent
        Through Free Activities
      </div>
      <div className="activities-list-container">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${page * 100}%)`,
          }}
        >
          {Array.from({ length: totalPages }).map((_, pageIdx) => (
            <div key={pageIdx} className="carousel-page">
              {Array.from({ length: itemsPerPage }).map((_, itemIdx) => {
                const idx = pageIdx * itemsPerPage + itemIdx;
                if (idx >= activitiesCount) return null;
                return (
                  <div key={idx} style={{ flex: "1 0 0", width: "100%" }}>
                    <ActivitiesCard />
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      <div className="carousel-dots">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <span
            key={idx}
            className={`dot${page === idx ? " active" : ""}`}
            onClick={() => setPage(idx)}
          />
        ))}
      </div>
    </div>
  );
};
