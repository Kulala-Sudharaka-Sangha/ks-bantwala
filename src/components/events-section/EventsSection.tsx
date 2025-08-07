import "./EventsSection.scss";
import krishnaEvent from "../../assets/krishna.jpeg";
import lakshmiEvent from "../../assets/lakshmi.jpeg";
import danceEvent from "../../assets/dance.jpeg";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faClockFour,
  faExpand,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";

const EventsPosterList = [lakshmiEvent, krishnaEvent, danceEvent];

export const EventsSection = () => {
  const [idx, _setIdx] = useState(2);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="events-section">
      <div className="section-header">
        Get Ready for Our Upcoming
        <span className="highlight"> Events & Celebrations</span>
      </div>
      <div className="section-description">
        Join us for a series of exciting events and celebrations that bring our
        community together. From cultural festivals to spiritual gatherings, we
        have something for everyone. Stay tuned for more details!
      </div>
      <div className="section-content">
        {/* <div className="scroll-controller left-scroll">
          <button>
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
        </div> */}
        <div className="events-cards-container">
          <div className="event-card">
            <div className="img-wrapper">
              <img src={EventsPosterList[idx]} alt="" />
            </div>
            <div className="date-sticker">
              <div className="date">011</div>
              <div className="month">JAN</div>
            </div>
            <div className="enlarge-icon" onClick={() => setShowModal(true)}>
              <FontAwesomeIcon icon={faExpand} className="enlarge-icon" />
            </div>
            <div className="event-card-content">
              <div className="event-title">Event Title</div>
              <div className="event-date">
                <span className="location-icon">
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    className="card-icon"
                  />
                </span>
                <span className="date-text">12 Jan 2025</span>
              </div>
              <div className="event-time">
                <span className="location-icon">
                  <FontAwesomeIcon icon={faClockFour} className="card-icon" />
                </span>
                <span className="time-text">10:00 AM - 5:00 PM</span>
              </div>
              <div className="event-location">
                <span className="location-icon">
                  <FontAwesomeIcon icon={faLocationDot} className="card-icon" />
                </span>
                <span className="location-text">Bantwala, Karnataka</span>
              </div>
            </div>
          </div>
          <div className="event-card">
            <div className="img-wrapper">
              <img src={EventsPosterList[idx]} alt="" />
            </div>
            <div className="date-sticker">
              <div className="date">012</div>
              <div className="month">JAN</div>
            </div>
            <div className="event-card-content">
              <div className="event-title">Event Title</div>
              <div className="event-date">
                <span className="location-icon">
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    className="card-icon"
                  />
                </span>
                <span className="date-text">12 Jan 2025</span>
              </div>
              <div className="event-time">
                <span className="location-icon">
                  <FontAwesomeIcon icon={faClockFour} className="card-icon" />
                </span>
                <span className="time-text">10:00 AM - 5:00 PM</span>
              </div>
              <div className="event-location">
                <span className="location-icon">
                  <FontAwesomeIcon icon={faLocationDot} className="card-icon" />
                </span>
                <span className="location-text">Bantwala, Karnataka</span>
              </div>
            </div>
          </div>
          <div className="event-card">
            <div className="img-wrapper">
              <img src={EventsPosterList[idx]} alt="" />
            </div>
            <div className="date-sticker">
              <div className="date">01</div>
              <div className="month">JAN</div>
            </div>
            <div className="event-card-content">
              <div className="event-title">Event Title</div>
              <div className="event-date">
                <span className="location-icon">
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    className="card-icon"
                  />
                </span>
                <span className="date-text">12 Jan 2025</span>
              </div>
              <div className="event-time">
                <span className="location-icon">
                  <FontAwesomeIcon icon={faClockFour} className="card-icon" />
                </span>
                <span className="time-text">10:00 AM - 5:00 PM</span>
              </div>
              <div className="event-location">
                <span className="location-icon">
                  <FontAwesomeIcon icon={faLocationDot} className="card-icon" />
                </span>
                <span className="location-text">Bantwala, Karnataka</span>
              </div>
            </div>
          </div>
          <div className="event-card">
            <div className="img-wrapper">
              <img src={EventsPosterList[idx]} alt="" />
            </div>
            <div className="date-sticker">
              <div className="date">01</div>
              <div className="month">JAN</div>
            </div>
            <div className="event-card-content">
              <div className="event-title">Event Title</div>
              <div className="event-date">
                <span className="location-icon">
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    className="card-icon"
                  />
                </span>
                <span className="date-text">12 Jan 2025</span>
              </div>
              <div className="event-time">
                <span className="location-icon">
                  <FontAwesomeIcon icon={faClockFour} className="card-icon" />
                </span>
                <span className="time-text">10:00 AM - 5:00 PM</span>
              </div>
              <div className="event-location">
                <span className="location-icon">
                  <FontAwesomeIcon icon={faLocationDot} className="card-icon" />
                </span>
                <span className="location-text">Bantwala, Karnataka</span>
              </div>
            </div>
          </div>
          <div className="event-card">
            <div className="img-wrapper">
              <img src={EventsPosterList[idx]} alt="" />
            </div>
            <div className="date-sticker">
              <div className="date">01</div>
              <div className="month">JAN</div>
            </div>
            <div className="event-card-content">
              <div className="event-title">Event Title</div>
              <div className="event-date">
                <span className="location-icon">
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    className="card-icon"
                  />
                </span>
                <span className="date-text">12 Jan 2025</span>
              </div>
              <div className="event-time">
                <span className="location-icon">
                  <FontAwesomeIcon icon={faClockFour} className="card-icon" />
                </span>
                <span className="time-text">10:00 AM - 5:00 PM</span>
              </div>
              <div className="event-location">
                <span className="location-icon">
                  <FontAwesomeIcon icon={faLocationDot} className="card-icon" />
                </span>
                <span className="location-text">Bantwala, Karnataka</span>
              </div>
            </div>
          </div>
          <div className="event-card">
            <div className="img-wrapper">
              <img src={EventsPosterList[idx]} alt="" />
            </div>
            <div className="date-sticker">
              <div className="date">01</div>
              <div className="month">JAN</div>
            </div>
            <div className="event-card-content">
              <div className="event-title">Event Title</div>
              <div className="event-date">
                <span className="location-icon">
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    className="card-icon"
                  />
                </span>
                <span className="date-text">12 Jan 2025</span>
              </div>
              <div className="event-time">
                <span className="location-icon">
                  <FontAwesomeIcon icon={faClockFour} className="card-icon" />
                </span>
                <span className="time-text">10:00 AM - 5:00 PM</span>
              </div>
              <div className="event-location">
                <span className="location-icon">
                  <FontAwesomeIcon icon={faLocationDot} className="card-icon" />
                </span>
                <span className="location-text">Bantwala, Karnataka</span>
              </div>
            </div>
          </div>
          <div className="event-card">
            <div className="img-wrapper">
              <img src={EventsPosterList[idx]} alt="" />
            </div>
            <div className="date-sticker">
              <div className="date">019</div>
              <div className="month">JAN</div>
            </div>
            <div className="event-card-content">
              <div className="event-title">Event Title</div>
              <div className="event-date">
                <span className="location-icon">
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    className="card-icon"
                  />
                </span>
                <span className="date-text">12 Jan 2025</span>
              </div>
              <div className="event-time">
                <span className="location-icon">
                  <FontAwesomeIcon icon={faClockFour} className="card-icon" />
                </span>
                <span className="time-text">10:00 AM - 5:00 PM</span>
              </div>
              <div className="event-location">
                <span className="location-icon">
                  <FontAwesomeIcon icon={faLocationDot} className="card-icon" />
                </span>
                <span className="location-text">Bantwala, Karnataka</span>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="scroll-controller right-scroll">
          <button>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div> */}
      </div>
      {showModal && (
        <div className="invitation-modal">
          <div className="modal-content">
            <div className="invitation-image">
              <img src={EventsPosterList[2]} alt="Invitation" />
            </div>
            <div className="close-icon" onClick={() => setShowModal(false)}>
              <FontAwesomeIcon icon={faTimes} className="close-icon" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
