const ContactBox: React.FC = () => {
  return (
    <div className="wrapper--contact-box contact-box">
      <div className="contact-box--element">
        <div className="contact-box--img">
          <img src="./doggo.jpg" alt="doggo" />
          <div className="overlay"></div>
        </div>
      </div>
      <div className="contact-box--element">
        <h3>Wil je ook een passende strategie voor jou digitale missie?</h3>
        <p>Bel of mail Laurens, creatief directeur.</p>
        <p>030 27 69 167 / 06 412 75 222 </p>
        <p>laurens@schaapontwerpers.nl</p>
      </div>
    </div>
  );
};

export default ContactBox;
