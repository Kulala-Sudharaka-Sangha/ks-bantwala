import "./EventsSection.scss";
import krishnaEvent from "../../assets/krishna.jpeg";
import lakshmiEvent from "../../assets/lakshmi.jpeg";
import danceEvent from "../../assets/dance.jpeg";
import { useEffect, useState } from "react";

const EventsPosterList = [lakshmiEvent, krishnaEvent, danceEvent];

export const EventsSection = () => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIdx((prev) => (prev + 1) % EventsPosterList.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="events-section">
      <div className="section-header">
        Get Ready for Our Upcoming{" "}
        <span className="highlight">Events & Activities</span>
      </div>
      <div className="events-poster-container">
        <img src={EventsPosterList[idx]} alt="" />
      </div>
    </div>
  );
};
