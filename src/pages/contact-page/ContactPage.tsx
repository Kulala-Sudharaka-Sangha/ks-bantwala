import "./ContactPage.scss";
import '@fortawesome/fontawesome-free/css/all.min.css';

const ContactPage = () => {
  return (
    <div className="contact-page-wrapper">
      <div className="contact-page">
        <div className="form-section">
          <h2>Contact With Us</h2>
          <p>If you have any questions please feel free to contact with us.</p>
          <form>
            <div className="form-row">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
            </div>
            <div className="form-row">
              <input type="text" placeholder="Phone" />
              <input type="text" placeholder="Subject" />
            </div>
            <textarea placeholder="Your Message" />
            <button type="submit" className="btn-primary">Send</button>
            <div className="newsletter">
              <label>
                <input type="checkbox" />
                Do you want to subscribe our Newsletter ?
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
            <h4>+91 9480675351</h4>
            <p>kulalasevadalabantwala@gmail.com</p>
          </div>
        </div>

        <div className="info-card">
          <i className="fas fa-map-marker-alt"></i>
          <div>
            <h4>Kulala Samudaya Bhavana</h4>
            <p>Posalli, B C Road</p>
          </div>
        </div>

        <div className="info-card">
          <i className="fas fa-clock"></i>
          <div>
            <h4>Mon – Sun: 8am – 4pm</h4>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
