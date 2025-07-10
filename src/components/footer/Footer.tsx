import "./Footer.scss";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTools } from "@fortawesome/free-solid-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const [visible, setVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (footerRef.current) observer.observe(footerRef.current);

    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  return (
    <div className={`footer ${visible ? "animate" : ""}`} ref={footerRef}>
      <div className="footer-message">
        Made with <FontAwesomeIcon icon={faHeart} className="heart" /> and{" "}
        <FontAwesomeIcon icon={faTools} className="tools" />
        &nbsp;&nbsp;by Kulala sevadala
      </div>

      <div className="footer-text">
        All Rights Reserved <FontAwesomeIcon icon={faCopyright} /> Kulala
        sevadala
      </div>

      <div className="social-follow">
        <span className="follow-text">Follow Us On</span>
        <div className="social-icons">
          <a
            href="https://www.facebook.com/kulala_sevadala"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} title="Facebook" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} title="Twitter" />
          </a>
          <a
            href="https://www.instagram.com/kulala_sevadala?igsh=djY2aGd6eDk3bzlj"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} title="Instagram" />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faYoutube} title="YouTube" />
          </a>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} title="WhatsApp" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
