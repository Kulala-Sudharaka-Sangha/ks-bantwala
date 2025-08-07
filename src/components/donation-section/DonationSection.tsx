import "./DonationSection.scss";

export const DonationSection = () => {
  return (
    <div className="donation-section">
      <div className="section-header">
        <span className="highlight">Donate </span>
        to These Worthy Causes
      </div>
      <div className="section-description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
        itaque laudantium architecto aperiam quos molestias aliquam soluta eum
        minus. Quibusdam sint sunt iste libero voluptatum nobis adipisci earum,
        dolore officiis? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Ipsa est nesciunt quo officia quos.
      </div>
      <div className="supporters-list">
        <div className="donation-card-container">
          <div className="donation-card">
            <div className="card-image">
              <img
                src="https://picsum.photos/160/160?random=2"
                alt="Donation Cause"
              />
            </div>
            <div className="card-content">
              <h3>Cause Name</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <button className="donate-button">Donate Now</button>
            </div>
          </div>
          <div className="donation-card">
            <div className="card-image">
              <img
                src="https://picsum.photos/160/160?random=2"
                alt="Donation Cause"
              />
            </div>
            <div className="card-content">
              <h3>Cause Name</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <button className="donate-button">Donate Now</button>
            </div>
          </div>
          <div className="donation-card">
            <div className="card-image">
              <img
                src="https://picsum.photos/160/160?random=2"
                alt="Donation Cause"
              />
            </div>
            <div className="card-content">
              <h3>Cause Name</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <button className="donate-button">Donate Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
