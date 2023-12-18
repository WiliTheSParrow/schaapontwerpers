import MediaElements from "./MediaElements";

const Footer: React.FC = () => {
  return (
    <footer className="wrapper--footer">
      <p>©2023, All right reserved.</p>
      <div className="footer--menu">
        <ul>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Cookies Settings</li>
        </ul>
      </div>
      <div className="footer--media">
        <MediaElements />
      </div>
    </footer>
  );
};

export default Footer;
