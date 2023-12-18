import Image from 'next/image'
import styles from './styles/css/page.module.css'


import MainContent from './components/MainContent';
import Footer from './components/Footer';

const Home: React.FC = () => {
  return (
    <div className="wrapper">
      <MainContent />
      <Footer />
    </div>
  );
};

export default Home;
