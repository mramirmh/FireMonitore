// import { someMethod } from 'my-dep';
import NAvBar from '../HopmePage-component/NavBar';
import TopMain from '../HopmePage-component/TopMain';
import MovieCard from '../HopmePage-component/MovieCard';
import PropertiesMain from '../HopmePage-component/PropertiesMain';
import DescriptionsMain from '../HopmePage-component/DescriptionsMain';
import PriceCard from '../HopmePage-component/PriceCard';
import Footer from '../HopmePage-component/Footer';
import Modal from '../MainModal/Modal';

function HomePage() {
  return (
    <div className="  flex h-fit flex-col justify-center  bg-bg-dark-color py-9">
      <NAvBar />
      <TopMain />
      {/* <PropertiesMain /> */}
      <MovieCard />
      <DescriptionsMain />
      <PriceCard />
      <Footer />
    </div>
  );
}

export default HomePage;
