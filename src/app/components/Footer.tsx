import MediaElements from "./MediaElements";

const Footer: React.FC = () => {
  return (
    <footer className="wrapper--footer">
      <div className="footer-element">©2023, All right reserved.</div>
      <div className="footer-element footer--menu">
        <ul>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Cookies Settings</li>
        </ul>
      </div>
      <div className="footer-element footer--media">
        <MediaElements />
      </div>
    </footer>
  );
};

export default Footer;
