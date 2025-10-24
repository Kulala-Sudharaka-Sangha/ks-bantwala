import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faClockFour,
  faExpand,
  faTimes,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./EventCard.scss";

interface EventCardProps {
  image: any;
  date: string;
  time: string;
  location: string;
  title: string;
}

const EventCard = (props: { event: EventCardProps }) => {
  const { image, date, time, location, title } = props.event;
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="event-card">
        <div className="img-wrapper">
          <img src={image} alt="" />
        </div>
        <div className="date-sticker">
          <div className="date">{date.split(" ")[0]}</div>
          <div className="month">{date.split(" ")[1]}</div>
        </div>
        <div className="enlarge-icon" onClick={() => setShowModal(true)}>
          <FontAwesomeIcon icon={faExpand} className="enlarge-icon" />
        </div>
        <div className="event-card-content">
          <div className="event-title">{title}</div>
          <div className="event-date">
            <span className="location-icon">
              <FontAwesomeIcon icon={faCalendarDays} className="card-icon" />
            </span>
            <span className="date-text">{date}</span>
          </div>
          <div className="event-time">
            <span className="location-icon">
              <FontAwesomeIcon icon={faClockFour} className="card-icon" />
            </span>
            <span className="time-text">{time}</span>
          </div>
          <div className="event-location">
            <span className="location-icon">
              <FontAwesomeIcon icon={faLocationDot} className="card-icon" />
            </span>
            <span className="location-text">{location}</span>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="invitation-modal">
          <div className="modal-content">
            <div className="invitation-image">
              <img src={image} alt="Invitation" />
            </div>
            <div className="close-icon" onClick={() => setShowModal(false)}>
              <FontAwesomeIcon icon={faTimes} className="close-icon" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EventCard;
