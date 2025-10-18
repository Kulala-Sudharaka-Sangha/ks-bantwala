import "./ContactPage.scss";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useTranslation } from "react-i18next";

const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <div className="contact-page-wrapper">
      <div className="contact-page">
        <div className="form-section">
          <h2>{t("contact.title")}</h2>
          <p>{t("contact.subtitle")}</p>
          <form>
            <div className="form-row">
              <input type="text" placeholder={t("contact.namePlaceholder")} />
              <input type="email" placeholder={t("contact.emailPlaceholder")} />
            </div>
            <div className="form-row">
              <input type="text" placeholder={t("contact.phonePlaceholder")} />
              <input type="text" placeholder={t("contact.subjectPlaceholder")} />
            </div>
            <textarea placeholder={t("contact.messagePlaceholder")} />
            <button type="submit" className="btn-primary">
              {t("contact.sendButton")}
            </button>
            <div className="newsletter">
              <label>
                <input type="checkbox" />
                {t("contact.newsletterText")}
              </label>
            </div>
          </form>
        </div>

        <div className="map-section">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2177.097604783998!2d75.0322995009231!3d12.88535196256288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4a65c6f34287b%3A0x3c044b70375e9dc4!2sKulala%20Samudaya%20Bhavana%2C%20Posalli%2C%20B%20C%20Road!5e0!3m2!1sen!2sin!4v1752649586596!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="contact-info-cards">
        <div className="info-card">
          <i className="fas fa-phone-alt"></i>
          <div>
            <h4>{t("contact.phoneNumber")}</h4>
            <p>{t("contact.email")}</p>
          </div>
        </div>

        <div className="info-card">
          <i className="fas fa-map-marker-alt"></i>
          <div>
            <h4>{t("contact.addressTitle")}</h4>
            <p>{t("contact.addressDetails")}</p>
          </div>
        </div>

        <div className="info-card">
          <i className="fas fa-clock"></i>
          <div>
            <h4>{t("contact.timingTitle")}</h4>
            <p>{t("contact.timingDetails")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
