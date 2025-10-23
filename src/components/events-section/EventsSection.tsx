import "./EventsSection.scss";
import krishnaEvent from "../../assets/krishna.jpeg";
import lakshmiEvent from "../../assets/lakshmi.jpeg";
import danceEvent from "../../assets/dance.jpeg";
import prathibhe from "../../assets/prathibhe.jpeg";

import { useTranslation } from "react-i18next";
import EventCard from "../event-card/EventCard";

const EventsList = [
  {
    image: prathibhe,
    date: "26 Oct 2025",
    time: "09:00 AM - 06:00 PM",
    location: "Bantwala, Karnataka",
    title: "ಪ್ರತಿಭಾ ಪುರಸ್ಕಾರ, ವಿದ್ಯಾರ್ಥಿ ವೇತನ ವಿತರಣೆ.",
  },
  {
    image: danceEvent,
    date: "24 Aug 2025",
    time: "01:00 PM - 06:00 PM",
    location: "Bantwala, Karnataka",
    title: "Cultural Dance Evening",
  },
  {
    image: krishnaEvent,
    date: "24 Aug 2025",
    time: "08:00 AM - 06:00 PM",
    location: "Bantwala, Karnataka",
    title: "Krishna Janmashtami",
  },
  {
    image: lakshmiEvent,
    date: "08 Aug 2025",
    time: "04:00 PM - 08:00 PM",
    location: "Bantwala, Karnataka",
    title: "Lakshmi Festival",
  },
];

export const EventsSection = () => {
  const { t } = useTranslation();

  return (
    <div className="events-section">
      <div className="section-header">
        {t("home.eventSection.header")}
        <span className="highlight">
          {t("home.eventSection.headerHighlight")}
        </span>
      </div>
      <div className="section-description">
        {t("home.eventSection.description")}
      </div>
      <div className="section-content">
        {/* <div className="scroll-controller left-scroll">
          <button>
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
        </div> */}
        <div className="events-cards-container">
          {EventsList.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
        {/* <div className="scroll-controller right-scroll">
          <button>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div> */}
      </div>
    </div>
  );
};
