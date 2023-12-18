import Sidebar from "./Sidebar";
import ContactBox from "./ContactBox";

const MainContent: React.FC = () => {
  return (
    <main className="wrapper--main-content">
      <div className="column">
        <Sidebar />
      </div>
      <div className="column">
        <ContactBox />
      </div>
    </main>
  );
};

export default MainContent;
